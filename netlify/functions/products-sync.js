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

        // Get all products
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('category', { ascending: true })
            .order('name', { ascending: true });

        if (error) {
            console.error('Supabase query error:', error);
            return {
                statusCode: 500,
                headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
                body: JSON.stringify({
                    error: 'Failed to fetch products',
                    details: error.message,
                }),
            };
        }

        return {
            statusCode: 200,
            headers: { ...corsHeaders, 'Access-Control-Allow-Origin': origin },
            body: JSON.stringify({
                success: true,
                products: data || [],
                count: data?.length || 0,
            }),
        };

    } catch (error) {
        console.error('Products fetch error:', error);
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