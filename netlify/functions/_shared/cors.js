// ============================================================
// CORS configuration for RudraMart API
// ============================================================

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5500',
    'https://rudrapurmart.netlify.app',
    'https://rudramart.netlify.app',
    'https://rudrapurmart.in',
    'https://www.rudrapurmart.in',
];

export const corsHeaders = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Secret',
    'Access-Control-Max-Age': '86400',
};

// ✅ FIX: Netlify uses plain object headers (not Headers instance)
export function getCorsOrigin(event) {
    const headers = event.headers || {};
    const origin =
        headers.origin ||
        headers.Origin ||
        '';

    if (origin && allowedOrigins.includes(origin)) {
        return origin;
    }

    return '*';
}

// ✅ FIX: Return Netlify v1 format object (not Web Response)
export function handleCors(event) {
    const origin = getCorsOrigin(event);

    return {
        statusCode: 204,
        headers: {
            ...corsHeaders,
            'Access-Control-Allow-Origin': origin,
        },
        body: '',
    };
}