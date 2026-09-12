import { createClient } from '@supabase/supabase-js';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
}

function getSupabase(env) {
    return createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: { autoRefreshToken: false, persistSession: false },
    });
}

function validateOrder(data) {
    const errors = [];
    if (!data.customerName || data.customerName.trim().length < 2) errors.push('Full name required');
    if (!data.customerPhone || !/^\d{10}$/.test(data.customerPhone)) errors.push('Valid 10-digit phone required');
    if (!data.customerAddress || data.customerAddress.trim().length < 10) errors.push('Complete address required');
    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) errors.push('Items required');
    if (!['cod', 'upi', 'card'].includes(data.paymentMethod)) errors.push('Invalid payment method');

    const calculatedTotal = (data.items || []).reduce((sum, i) => sum + i.price * i.quantity, 0);
    const deliveryFee = calculatedTotal >= 499 ? 0 : 40;

    return { valid: errors.length === 0, errors, calculatedTotal, deliveryFee };
}

function generateOrderNumber() {
    const d = new Date();
    return `FM${d.getFullYear().toString().slice(-2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
}

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: corsHeaders });
        }

        // API Routes
        if (path === '/api/orders-create') {
            if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405);
            return handleOrderCreate(request, env);
        }

        if (path === '/api/orders-phone') {
            return handleOrdersPhone(request, env, url);
        }

        if (path.startsWith('/api/orders-get/')) {
            const orderNumber = path.replace('/api/orders-get/', '');
            return handleOrderGet(orderNumber, env);
        }

        // Serve static assets for all other routes
        return env.ASSETS.fetch(request);
    }
};

async function handleOrderCreate(request, env) {
    try {
        const body = await request.json();
        const validation = validateOrder(body);

        if (!validation.valid) {
            return jsonResponse({ error: 'Validation failed', details: validation.errors }, 400);
        }

        const supabase = getSupabase(env);
        const orderNumber = generateOrderNumber();
        const deliveryFee = validation.deliveryFee;
        const total = validation.calculatedTotal + deliveryFee;

        const items = body.items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image || '',
            lineTotal: item.price * item.quantity,
        }));

        const { data, error } = await supabase
            .from('orders')
            .insert({
                order_number: orderNumber,
                customer_name: body.customerName.trim(),
                customer_email: body.customerEmail || null,
                customer_phone: body.customerPhone.trim(),
                customer_address: body.customerAddress.trim(),
                customer_notes: body.customerNotes || null,
                payment_method: body.paymentMethod,
                payment_status: 'pending',
                subtotal: validation.calculatedTotal,
                delivery_fee: deliveryFee,
                discount: body.discount || 0,
                total: total,
                status: 'confirmed',
                items: items,
                estimated_delivery: new Date(Date.now() + 45 * 60 * 1000).toISOString(),
            })
            .select('id, order_number, status, estimated_delivery, created_at')
            .single();

        if (error) {
            return jsonResponse({ error: 'Failed to create order', details: error.message }, 500);
        }

        return jsonResponse({
            success: true,
            order: {
                id: data.id,
                orderNumber: data.order_number,
                status: data.status,
                estimatedDelivery: data.estimated_delivery,
                createdAt: data.created_at,
            },
        }, 201);

    } catch (error) {
        return jsonResponse({ error: 'Internal error', details: error.message }, 500);
    }
}

async function handleOrdersPhone(request, env, url) {
    try {
        let phone = '';
        if (request.method === 'POST') {
            const body = await request.json();
            phone = body.phone || '';
        } else {
            phone = url.searchParams.get('phone') || '';
        }

        if (!phone || !/^\d{10}$/.test(phone)) {
            return jsonResponse({ error: 'Valid phone required' }, 400);
        }

        const supabase = getSupabase(env);
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .eq('customer_phone', phone)
            .order('created_at', { ascending: false });

        if (error) return jsonResponse({ error: 'Failed', details: error.message }, 500);

        return jsonResponse({ success: true, orders: data || [] });

    } catch (error) {
        return jsonResponse({ error: 'Internal error', details: error.message }, 500);
    }
}

async function handleOrderGet(orderNumber, env) {
    try {
        const supabase = getSupabase(env);
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .eq('order_number', orderNumber)
            .single();

        if (error) return jsonResponse({ error: 'Order not found' }, 404);

        return jsonResponse({ success: true, order: data });

    } catch (error) {
        return jsonResponse({ error: 'Internal error', details: error.message }, 500);
    }
}