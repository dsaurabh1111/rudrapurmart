// Validation utilities

export function validateOrder(data) {
    const errors = [];

    // Customer name
    if (!data.customerName || data.customerName.trim().length < 2) {
        errors.push('Full name is required (minimum 2 characters)');
    }

    // Phone
    if (!data.customerPhone || !/^\d{10}$/.test(data.customerPhone)) {
        errors.push('Valid 10-digit phone number is required');
    }

    // Address
    if (!data.customerAddress || data.customerAddress.trim().length < 10) {
        errors.push('Delivery address is required (minimum 10 characters)');
    }

    // Items
    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
        errors.push('At least one item is required');
    }

    // Payment method
    if (!['cod', 'upi', 'card'].includes(data.paymentMethod)) {
        errors.push('Invalid payment method');
    }

    // Total validation
    const calculatedTotal = data.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    const deliveryFee = calculatedTotal >= 499 ? 0 : 40;
    const expectedTotal = calculatedTotal + deliveryFee;

    if (Math.abs(data.total - expectedTotal) > 1) {
        errors.push('Total amount mismatch');
    }

    return {
        valid: errors.length === 0,
        errors,
        calculatedTotal,
        deliveryFee,
        expectedTotal,
    };
}

export function generateOrderNumber() {
    const date = new Date();
    const prefix = 'FM';
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    return `${prefix}${year}${month}${day}${random}`;
}