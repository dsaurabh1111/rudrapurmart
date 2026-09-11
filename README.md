# FreshMart Grocery Store

A modern, responsive online grocery store frontend built using:

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage

## Features

### UI / UX

- Modern grocery store design
- Fully responsive layout
- Mobile-friendly navigation
- Light / Dark theme
- Smooth scrolling
- Hover animations
- Toast notifications
- Responsive product cards
- Professional footer
- Accessible buttons
- Back-to-top button

## Products

- Multiple grocery products
- Fruits
- Vegetables
- Dairy
- Bakery
- Snacks
- Beverages
- Product search
- Category filtering
- Product sorting
- Load More products
- No-results state
- Product ratings
- Wishlist support
- Product discount display

## Popular Products

The website includes a dedicated popular-products section with categories such as:

- Snacks
- Cold Drinks
- Chocolates
- Biscuits
- Juices

## Shopping Cart

- Add products to cart
- Remove products
- Increase quantity
- Decrease quantity
- Automatic subtotal calculation
- Delivery fee calculation
- Free delivery above ₹499
- Automatic total calculation
- Cart persistence using LocalStorage

## Wishlist

- Add products to wishlist
- Remove products from wishlist
- Wishlist persistence
- Add wishlist products directly to cart

## Checkout

The current checkout system is frontend-only.

It includes:

- Customer name validation
- Phone number validation
- Delivery address validation
- Payment method selection
- Order total
- Order confirmation
- Order ID generation
- Estimated delivery time

### Payment Methods

The interface currently supports:

- Cash on Delivery
- UPI
- Credit / Debit Card

> Important: No real online payment is processed yet.

## My Orders

Customers can view their previous demo orders using the **My Orders** section.

Features include:

- Order ID
- Order date
- Ordered products
- Order total
- Payment method
- Order status
- Track Order

Orders are currently stored in the browser's LocalStorage.

## Order Tracking

The frontend includes a demo order-tracking system with:

- Confirmed
- Preparing
- Out for Delivery
- Delivered

The current tracking system is only a frontend demo.

For a production website, order status should be controlled from an admin/backend system.

## Contact Form

The contact form includes:

- Name validation
- Email validation
- Message validation
- Error messages
- Success message

The current form is frontend-only and does not send messages to a server.

## Newsletter

The newsletter form includes:

- Email validation
- Subscription confirmation
- LocalStorage preference

The current newsletter system is a frontend demo.

## LocalStorage

The application currently uses the following LocalStorage keys:

- `freshmart_cart`
- `freshmart_wishlist`
- `freshmart_orders`
- `freshmart_theme`
- `freshmart_preferences`

No passwords or sensitive authentication information are stored in LocalStorage.

## Run Locally

No server is required for the current frontend demo.

Simply open:

`index.html`

in a modern browser.

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

## Project Structure
rudrapurmart/
├── index.html          ✅
├── style.css           ✅
├── script.js           ✅ (updated)
├── netlify.toml        ⬜ (NEW - banayein)
└── netlify/
    └── functions/
        ├── _shared/
        │   └── cors.js       ⬜ (NEW)
        ├── lib/
        │   ├── supabase.js   ⬜ (NEW)
        │   └── validators.js ⬜ (NEW)
        └── api/
            ├── orders-create.js  ⬜ (NEW)
            ├── orders-get.js     ⬜ (NEW)
            ├── orders-phone.js   ⬜ (NEW)
            ├── orders-status.js  ⬜ (NEW)
            ├── products-sync.js  ⬜ (NEW)
            └── admin-orders.js   ⬜ (NEW)