import { supabase } from './_lib/supabase.js';
import { corsHeaders, getCorsOrigin, handleCors } from './_shared/cors.js';

export async function handler(event, context) {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return handleCors(event);
    }

    const origin = getCorsOrigin(event);

    try {
        // Only POST allowed
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Method not allowed' }),
            };
        }

        const body = JSON.parse(event.body);
        const phone = body.phone;

        if (!phone || !/^\d{10}$/.test(phone)) {
            return {
                statusCode: 400,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Valid 10-digit phone number is required' }),
            };
        }

        // Get orders by phone
        const { data, error } = await supabase
            .from('orders')
            .select(`
                id,
                order_number,
                customer_name,
                total,
                status,
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