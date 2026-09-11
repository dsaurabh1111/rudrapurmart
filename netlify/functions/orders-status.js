import { supabase } from './_lib/supabase.js';
import { corsHeaders, getCorsOrigin, handleCors } from './_shared/cors.js';

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'rudrapurmart-admin-2024';

export async function handler(event, context) {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return handleCors(event);
    }

    const origin = getCorsOrigin(event);

    try {
        // Only PUT allowed
        if (event.httpMethod !== 'PUT') {
            return {
                statusCode: 405,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Method not allowed' }),
            };
        }

        // Verify admin secret
        const authHeader = event.headers.authorization;
        if (authHeader !== `Bearer ${ADMIN_SECRET}`) {
            return {
                statusCode: 401,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Unauthorized' }),
            };
        }

        const body = JSON.parse(event.body);
        const { orderNumber, status, note } = body;

        if (!orderNumber || !status) {
            return {
                statusCode: 400,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Order number and status are required' }),
            };
        }

        // Valid statuses
        const validStatuses = ['confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'];
        if (!validStatuses.includes(status)) {
            return {
                statusCode: 400,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Invalid status' }),
            };
        }

        // Update order status
        const updateData = { status };
        if (status === 'delivered') {
            updateData.delivered_at = new Date().toISOString();
        }

        const { data, error } = await supabase
            .from('orders')
            .update(updateData)
            .eq('order_number', orderNumber)
            .select('id, order_number, status')
            .single();

        if (error) {
            console.error('Supabase update error:', error);
            return {
                statusCode: 500,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({
                    error: 'Failed to update order',
                    details: error.message,
                }),
            };
        }

        if (!data) {
            return {
                statusCode: 404,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({ error: 'Order not found' }),
            };
        }

        // Note: Status history is automatically created by trigger

        return {
            statusCode: 200,
            headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
            body: JSON.stringify({
                success: true,
                order: data,
            }),
        };

    } catch (error) {
        console.error('Status update error:', error);
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