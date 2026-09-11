import { supabase } from './_lib/supabase.js';
import { corsHeaders, getCorsOrigin, handleCors } from './_shared/cors.js';

export async function handler(event, context) {
    if (event.httpMethod === 'OPTIONS') {
        return handleCors(event);
    }

    const origin = getCorsOrigin(event);

    try {
        // Support both GET (query string) and POST
        let phone = '';

        if (event.httpMethod === 'POST') {
            try {
                const body = JSON.parse(event.body || '{}');
                phone = body.phone || '';
            } catch (e) {
                phone = '';
            }
        } else if (event.httpMethod === 'GET') {
            phone = event.queryStringParameters?.phone || '';
        }

        if (!phone || !/^\d{10}$/.test(phone)) {
            return {
                statusCode: 400,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Valid 10-digit phone number is required' }),
            };
        }

        // ✅ Include items so frontend can render them
        const { data, error } = await supabase
            .from('orders')
            .select(`
                id,
                order_number,
                customer_name,
                customer_phone,
                customer_address,
                payment_method,
                total,
                status,
                items,
                created_at,
                estimated_delivery
            `)
            .eq('customer_phone', phone)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Supabase query error:', error);
            return {
                statusCode: 500,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({
                    error: 'Failed to fetch orders',
                    details: error.message,
                }),
            };
        }

        return {
            statusCode: 200,
            headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
            body: JSON.stringify({
                success: true,
                orders: data || [],
            }),
        };

    } catch (error) {
        console.error('Orders fetch error:', error);
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