import { supabase } from './_lib/supabase.js';
import { corsHeaders, getCorsOrigin, handleCors } from './_shared/cors.js';

export async function handler(event, context) {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return handleCors(event);
    }

    const origin = getCorsOrigin(event);

    try {
        // Only GET allowed
        if (event.httpMethod !== 'GET') {
            return {
                statusCode: 405,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Method not allowed' }),
            };
        }

        // Get order number from path
        const pathParts = event.path.split('/');
        const orderNumber = pathParts[pathParts.length - 1];

        if (!orderNumber) {
            return {
                statusCode: 400,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Order number is required' }),
            };
        }

        // Get order from database
        const { data, error } = await supabase
            .from('orders')
            .select(`
                id,
                order_number,
                customer_name,
                customer_phone,
                customer_address,
                payment_method,
                payment_status,
                subtotal,
                delivery_fee,
                total,
                status,
                items,
                created_at,
                estimated_delivery,
                delivered_at
            `)
            .eq('order_number', orderNumber)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                return {
                    statusCode: 404,
                    headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                    body: JSON.stringify({ error: 'Order not found' }),
                };
            }
            console.error('Supabase query error:', error);
            return {
                statusCode: 500,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({
                    error: 'Failed to fetch order',
                    details: error.message,
                }),
            };
        }

        // Get status history
        const { data: history, error: historyError } = await supabase
            .from('order_status_history')
            .select('status, note, created_at')
            .eq('order_id', data.id)
            .order('created_at', { ascending: true });

        if (historyError) {
            console.warn('Failed to fetch history:', historyError);
        }

        return {
            statusCode: 200,
            headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
            body: JSON.stringify({
                success: true,
                order: {
                    ...data,
                    history: history || [],
                },
            }),
        };

    } catch (error) {
        console.error('Order fetch error:', error);
        return {
            statusCode: 500,
            headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
            body: JSON.stringify({
                error: 'Internal server error',
                details: error.message,
            }),
        };
    }
}