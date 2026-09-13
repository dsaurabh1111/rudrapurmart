// ============================================================
// BACKEND API CONFIGURATION - SINGLE DECLARATION
// ============================================================

const API_BASE_URL = '/api';

/* =========================================================
   RudraMart GROCERY STORE - COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PRODUCT DATA
    ===================================================== */

    const products = [
        { id: 1, name: "Fresh Red Apples (1 kg)", category: "Fruits", price: 160, oldPrice: 220, rating: 4.8, reviews: 124, image: "images/apple.png", description: "Crisp and naturally sweet apples.", badge: "Popular" },
        { id: 2, name: "Fresh Bananas (pack of 6)", category: "Fruits", price: 75, oldPrice: 90, rating: 4.7, reviews: 98, image: "images/bananas.png", description: "Naturally sweet ripe bananas.", badge: "Fresh" },
        { id: 3, name: "Fresh Oranges (200g)", category: "Fruits", price: 125, oldPrice: 190, rating: 4.6, reviews: 76, image: "images/oranges.png", description: "Juicy oranges packed with freshness.", badge: "Deal" },
        { id: 4, name: "Potato (1 kg)", category: "Vegetables", price: 30, oldPrice: 40, rating: 4.8, reviews: 67, image: "images/potato.png", description: "Fresh farm potatoes.", badge: "Fresh" },
        { id: 5, name: "Fresh Carrots (500 g)", category: "Vegetables", price: 40, oldPrice: 55, rating: 4.7, reviews: 88, image: "images/carrots.png", description: "Crunchy and naturally sweet carrots.", badge: "Deal" },
        { id: 6, name: "Green Spinach (Palak 150g-250g)", category: "Vegetables", price: 28, oldPrice: 45, rating: 4.5, reviews: 54, image: "images/green spinach.png", description: "Fresh leafy green spinach.", badge: "Fresh" },
        { id: 7, name: "Dairy farm Milk (Fresh milk everyday 1L)", category: "Dairy", price: 60, oldPrice: 76, rating: 4.9, reviews: 210, image: "images/milk.png", description: "Rich and creamy everyday milk.", badge: "Best Seller" },
        { id: 8, name: "Amul Masti Dahi Pouch (380 g)", category: "Dairy", price: 35, oldPrice: 36, rating: 4.6, reviews: 600, image: "images/amul dahi.png", description: "Creamy and fresh curd.", badge: "Popular" },
        { id: 9, name: "Farm Fresh Eggs (Pack of 10)", category: "Dairy", price: 95, oldPrice: 110, rating: 4.8, reviews: 143, image: "images/eggs.png", description: "Fresh quality eggs.", badge: "Fresh" },
        { id: 10, name: "English Oven Zero Maida Atta Bread | High Fiber (400 g)", category: "Bakery", price: 59, oldPrice: 65, rating: 4.7, reviews: 1200, image: "images/bread English.png", description: "Soft and healthy wheat bread.", badge: "Fresh" },
        { id: 11, name: "Super Fiber Bread | Zero Maida | No Added Sugar (250 g)", category: "Bakery", price: 69, oldPrice: 75, rating: 4.6, reviews: 700, image: "images/Zero maida bread.png", description: "Healthy zero maida bread.", badge: "New" },
        { id: 12, name: "Lay's India's Masala | Crunchy Potato Chips (143 g)", category: "Snacks", price: 69, oldPrice: 81, rating: 4.5, reviews: 132, image: "images/lay's masala.png", description: "Crispy and delicious snack.", badge: "Popular" },
        { id: 13, name: "Bingo | Tedhe Medhe | Masala Tadka (70 g)", category: "Snacks", price: 19, oldPrice: 20, rating: 4.4, reviews: 48, image: "images/tedhe medhe.png", description: "Perfect snack for movie nights.", badge: "Deal" },
        { id: 14, name: "Orange Juice", category: "Beverages", price: 110, oldPrice: 130, rating: 4.7, reviews: 82, image: "images/orange-juice.png", description: "Refreshing orange juice.", badge: "Fresh" },
        { id: 15, name: "Monster (350ml)", category: "Beverages", price: 125, oldPrice: 150, rating: 4.3, reviews: 31, image: "images/beverages.png", description: "Refreshing energy drink.", badge: "New" },
        { id: 16, name: "Fresh Tomatoes (500 g)", category: "Vegetables", price: 26, oldPrice: 45, rating: 4.8, reviews: 115, image: "images/tomato1.png", description: "Red, ripe and farm fresh tomatoes.", badge: "Popular" },
        { id: 17, name: "Mangoes", category: "Fruits", price: 100, oldPrice: 150, rating: 4.9, reviews: 175, image: "images/mangoes.png", description: "Sweet seasonal mangoes.", badge: "Best Seller" },
        { id: 18, name: "Butter Amul (100 g)", category: "Dairy", price: 66, oldPrice: 90, rating: 4.7, reviews: 73, image: "images/butter amul.png", description: "Creamy and delicious butter.", badge: "Popular" },
        { id: 19, name: "Haldiram's Takatak | Crunchy Snack (90 g)", category: "Snacks", price: 21, oldPrice: 26, rating: 4.3, reviews: 31, image: "images/Takatak.png", description: "Crunchy and tasty snack.", badge: "New" },
        { id: 20, name: "Thums Up | Cola Sparkling Soft Drink (2L)", category: "Beverages", price: 95, oldPrice: 100, rating: 4.3, reviews: 31, image: "images/thumbs up can.png", description: "Refreshing sparkling soft drink.", badge: "New" },
        { id: 21, name: "RedBull (250 ml)", category: "Beverages", price: 125, oldPrice: 130, rating: 4.3, reviews: 31, image: "images/redbull.png", description: "Refreshing energy drink.", badge: "New" },
        { id: 22, name: "Kurkure Namkeen Masala Munch | Crunchy (75 g)", category: "Snacks", price: 21, oldPrice: 25, rating: 4.3, reviews: 100, image: "images/kurkure.png", description: "Crunchy and spicy snack.", badge: "New" },
        { id: 23, name: "Pepsi (250ml)", category: "Beverages", price: 35, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/pepsi.png", description: "Refreshing cola drink.", badge: "New" },
        { id: 24, name: "Dairy Milk", category: "Dairy", price: 65, oldPrice: 75, rating: 4.3, reviews: 31, image: "images/dairy milk.png", description: "Delicious milk chocolate.", badge: "New" },
        { id: 25, name: "Fresh Broccoli", category: "Vegetables", price: 79, oldPrice: 99, rating: 4.8, reviews: 67, image: "images/Broccoli1.png", description: "Farm fresh green broccoli.", badge: "Fresh" },
        { id: 26, name: "Lay's American Cream & Onion | Potato Chips pack of 3(48 g-58 g)", category: "Snacks", price: 64, oldPrice: 70, rating: 4.8, reviews: 250, image: "images/lay's Onion.png", description: "Perfect snack for movie nights.", badge: "Fresh" },
        { id: 27, name: "Uncil Chipps Spicy Treat | Crunchy Potato Chips pack of 3 (48.1 g)", category: "Snacks", price: 64, oldPrice: 69, rating: 4.8, reviews: 200, image: "images/uncle chips.png", description: "Perfect crunchy snack.", badge: "Fresh" },
        { id: 28, name: "Kurkure Namkeen Green Chutney | Crunchy Snacks (68 g-78 g)", category: "Snacks", price: 25, oldPrice: 29, rating: 4.8, reviews: 500, image: "images/Kurkure Namkeen Green.png", description: "Tasty green chutney snack.", badge: "Fresh" },
        { id: 29, name: "Onion", category: "Vegetables", price: 46, oldPrice: 99, rating: 4.8, reviews: 67, image: "images/onion.png", description: "Fresh farm onions.", badge: "Fresh" },
        { id: 30, name: "Green Chilli", category: "Vegetables", price: 14, oldPrice: 99, rating: 4.8, reviews: 67, image: "images/chilli.png", description: "Fresh green chillies.", badge: "Fresh" },
        { id: 31, name: "Crax Curls Chatpata Masala Puff | Crispy (57 g)", category: "Snacks", price: 25, oldPrice: 29, rating: 4.8, reviews: 500, image: "images/crax curls.png", description: "Crispy and tasty snack.", badge: "Fresh" },
        { id: 32, name: "Good Day", category: "Snacks", price: 10, oldPrice: 99, rating: 4.8, reviews: 67, image: "images/good day.png", description: "Delicious crunchy biscuits.", badge: "Fresh" },
        { id: 33, name: "Maggi", category: "Snacks", price: 10, oldPrice: 99, rating: 4.8, reviews: 67, image: "images/maggi.png", description: "Quick and tasty noodles.", badge: "Fresh" },
        { id: 34, name: "Garlic", category: "Vegetables", price: 14, oldPrice: 99, rating: 4.8, reviews: 67, image: "images/garlic.png", description: "Fresh garlic.", badge: "Fresh" },
        { id: 35, name: "Coca Cola (250ml)", category: "Beverages", price: 20, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/coca cola.png", description: "Refreshing sparkling cola.", badge: "New" },
        { id: 36, name: "Appy Fizz Apple Soft Drink (250 ml)", category: "Beverages", price: 35, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/Appy-fizz 250ml.png", description: "Refreshing apple drink.", badge: "New" },
        { id: 37, name: "Maaza (1.75 L)", category: "Beverages", price: 79, oldPrice: 99, rating: 4.3, reviews: 31, image: "images/maaza.png", description: "Refreshing mango drink.", badge: "New" },
        { id: 38, name: "Grapes", category: "Fruits", price: 35, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/grapes.png", description: "Fresh and juicy grapes.", badge: "New" },
        { id: 39, name: "Pomegranate", category: "Fruits", price: 35, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/pomegranate.png", description: "Fresh pomegranate.", badge: "New" },
        { id: 40, name: "Guava", category: "Fruits", price: 35, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/guava.png", description: "Fresh and juicy guava.", badge: "New" },
        { id: 41, name: "HELL Energy Drink (250 ml)", category: "Beverages", price: 60, oldPrice: 75, rating: 4.3, reviews: 31, image: "images/hell-photoroom.png", description: "Refreshing energy drink.", badge: "New" },
        { id: 42, name: "HELL Energy Drink Pack Of 2 (250 ml x 250 ml)", category: "Beverages", price: 119, oldPrice: 150, rating: 4.3, reviews: 31, image: "images/hell combo.png", description: "Energy drink combo pack.", badge: "New" },
        { id: 43, name: "Appy Fizz Apple Soft Drink Pack Of 2 (250 ml x 250 ml)", category: "Beverages", price: 43, oldPrice: 49, rating: 4.3, reviews: 31, image: "images/Appy Fizz.png", description: "Refreshing apple drink combo.", badge: "New" },
        { id: 44, name: "Thums Up Soft Drink (750 ml)", category: "Beverages", price: 39, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/thumbs up.png", description: "Refreshing cola drink.", badge: "New" },
        { id: 45, name: "Sprite | Lemon-Lime Soft Drink (300 ml)", category: "Beverages", price: 46, oldPrice: 50, rating: 4.3, reviews: 31, image: "images/sprite.png", description: "Refreshing lemon-lime drink.", badge: "New" },
        { id: 46, name: "Bombay Banta Masala Cola Soda (250 ml)", category: "Beverages", price: 90, oldPrice: 99, rating: 4.3, reviews: 31, image: "images/bombay banta.png", description: "Refreshing masala soda.", badge: "New" },
        { id: 47, name: "Sprite | Lemon-Lime Sparkling Soft Drink (2L)", category: "Beverages", price: 90, oldPrice: 99, rating: 4.3, reviews: 31, image: "images/sprite2L.png", description: "Refreshing lemon-lime drink.", badge: "New" },
        { id: 48, name: "Coca-Cola Zero Sugar Can Soft Drink (750 ml)", category: "Beverages", price: 42, oldPrice: 46, rating: 4.3, reviews: 31, image: "images/cock.png", description: "Refreshing zero sugar cola.", badge: "New" },
        { id: 49, name: "Kiwi", category: "Fruits", price: 35, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/kiwi.png", description: "Fresh kiwi fruit.", badge: "New" },
        { id: 50, name: "Limca | Lime-Lemon Sparkling Soft Drink Pet Bottle (750 ml)", category: "Beverages", price: 39, oldPrice: 40, rating: 4.3, reviews: 31, image: "images/Limca.png", description: "Refreshing lemon-lime drink.", badge: "New" },
        { id: 51, name: "Bonn High Fiber Brown Bread (400 g)", category: "Bakery", price: 59, oldPrice: 62, rating: 4.6, reviews: 500, image: "images/brown bread.png", description: "High Fiber Brown Bread.", badge: "New" },
        { id: 52, name: "Bonn Atta Bread (400 g)", category: "Bakery", price: 58, oldPrice: 60, rating: 4.6, reviews: 1400, image: "images/brown bread.png", description: "Bonn Atta Bread.", badge: "New" },
        { id: 53, name: "Harvest Gold Zero Maida Protein Brand | No Palm Oil (300 g)", category: "Bakery", price: 61, oldPrice: 65, rating: 4.6, reviews: 900, image: "images/maida protein bread.png", description: "Zero maida protein bread.", badge: "New" },
        { id: 54, name: "Mother Dairy Tadka Chach (270 ml)", category: "Dairy", price: 10, oldPrice: 15, rating: 4.6, reviews: 100, image: "images/mother dairy.png", description: "Probiotic Tadka Chach.", badge: "New" },
        { id: 55, name: "Mother Dairy Mango Lassi (180 ml)", category: "Dairy", price: 20, oldPrice: 25, rating: 4.6, reviews: 600, image: "images/amul lassi.png", description: "Refreshing mango lassi.", badge: "New" },
        { id: 56, name: "Cadbury Dairy Milk Chocolate bar pack of 3 (20.2 g)", category: "Dairy", price: 57, oldPrice: 60, rating: 4.6, reviews: 600, image: "images/dairy milk10.png", description: "Cadbury Dairy Milk.", badge: "New" },
        { id: 57, name: "Cadbury Dairy Milk Silk Oreo Chocolate Bar (58.5 g)", category: "Dairy", price: 95, oldPrice: 100, rating: 4.6, reviews: 160, image: "images/cadbury dairy milk silk.png", description: "Cadbury Dairy Milk Silk Oreo.", badge: "New" },
        { id: 58, name: "Cadbury Dairy Milk Silk Chocolate Bar (55 g-60 g)", category: "Dairy", price: 94, oldPrice: 105, rating: 4.6, reviews: 160, image: "images/cadbery dairy milk silk old.png", description: "Cadbury Dairy Milk Silk.", badge: "New" },
        { id: 59, name: "Snickers Peanut Chocolate (50 g)", category: "Dairy", price: 39, oldPrice: 45, rating: 4.6, reviews: 160, image: "images/snikers.png", description: "Snickers peanut chocolate.", badge: "New" },
        { id: 60, name: "Ferrero Rocher Premium Chocolate (24 pcs)", category: "Dairy", price: 789, oldPrice: 879, rating: 4.6, reviews: 160, image: "images/ferrero rocher.png", description: "Ferrero Rocher Premium Chocolate.", badge: "New" },
        { id: 61, name: "Harvest Gold Zero Maida Protein Brand | No Palm Oil (300 g)", category: "Bakery", price: 61, oldPrice: 65, rating: 4.6, reviews: 900, image: "images/maida protein bread.png", description: "Zero maida protein bread.", badge: "New" },
        { id: 62, name: "Ferrero Rocher Premium Chocolate (24 pcs)", category: "Dairy", price: 789, oldPrice: 879, rating: 4.6, reviews: 160, image: "images/ferrero rocher.png", description: "Ferrero Rocher Premium Chocolate.", badge: "New" },
        { id: 63, name: "Amul Masti Spiced Buttermilk (200 ml)", category: "Dairy", price: 15, oldPrice: 25, rating: 4.6, reviews: 600, image: "images/amul masti spiced.png", description: "Amul Masti Spiced Buttermilk.", badge: "New" },
        { id: 64, name: "Amul Lassi (200 ml)", category: "Dairy", price: 20, oldPrice: 25, rating: 4.6, reviews: 600, image: "images/lassi200.png", description: "Refreshing Amul Lassi.", badge: "New" },
        { id: 65, name: "Amul Kool Elaichi Drink | Flavoured Milk Drink (180 ml)", category: "Dairy", price: 25, oldPrice: 45, rating: 4.6, reviews: 600, image: "images/amul cool.png", description: "Flavoured milk drink.", badge: "New" },
        { id: 66, name: "Smoodh Lassi (180 ml)", category: "Dairy", price: 18, oldPrice: 20, rating: 4.6, reviews: 600, image: "images/smoodh lassi.png", description: "Refreshing lassi drink.", badge: "New" }
    ];

    /* =====================================================
       STORAGE KEYS & FUNCTIONS
    ===================================================== */

    const STORAGE_KEYS = {
        cart: "RudraMart_cart",
        wishlist: "RudraMart_wishlist",
        orders: "RudraMart_orders",
        theme: "RudraMart_theme",
        preferences: "RudraMart_preferences"
    };

    function loadStorage(key, fallback) {
        try {
            const stored = localStorage.getItem(key);
            if (!stored) return fallback;
            const parsed = JSON.parse(stored);
            return parsed ?? fallback;
        } catch (error) {
            console.warn(`Could not read ${key} from LocalStorage.`, error);
            try { localStorage.removeItem(key); } catch (_) { }
            return fallback;
        }
    }

    function saveStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`Could not save ${key} to LocalStorage.`, error);
            return false;
        }
    }

    /* =====================================================
       STATE
    ===================================================== */

    const state = {
        cart: Array.isArray(loadStorage(STORAGE_KEYS.cart, [])) ? loadStorage(STORAGE_KEYS.cart, []) : [],
        wishlist: Array.isArray(loadStorage(STORAGE_KEYS.wishlist, [])) ? loadStorage(STORAGE_KEYS.wishlist, []) : [],
        orders: Array.isArray(loadStorage(STORAGE_KEYS.orders, [])) ? loadStorage(STORAGE_KEYS.orders, []) : [],
        filter: "All",
        search: "",
        sort: "default",
        visibleProducts: 8,
        theme: loadStorage(STORAGE_KEYS.theme, "light") === "dark" ? "dark" : "light"
    };

    /* =====================================================
       NORMALIZE OLD STORAGE
    ===================================================== */

    state.cart = state.cart
        .map(item => ({ id: Number(item.id), quantity: Math.max(1, Number(item.quantity) || 1) }))
        .filter(item => getProduct(item.id));

    state.wishlist = state.wishlist.map(Number).filter(id => getProduct(id));

    /* =====================================================
       DOM ELEMENTS
    ===================================================== */

    const elements = {
        productGrid: document.getElementById("productGrid"),
        popularProductsGrid: document.getElementById("popularProductsGrid"),
        popularPrev: document.getElementById("popularPrev"),
        popularNext: document.getElementById("popularNext"),
        noResults: document.getElementById("noResults"),
        searchSummary: document.getElementById("searchSummary"),
        loadMore: document.getElementById("loadMore"),
        clearFilters: document.getElementById("clearFilters"),
        sortProducts: document.getElementById("sortProducts"),
        desktopSearch: document.getElementById("desktopSearch"),
        desktopSearchBtn: document.getElementById("desktopSearchBtn"),
        mobileSearch: document.getElementById("mobileSearch"),
        mobileSearchBtn: document.getElementById("mobileSearchBtn"),
        filterButtons: document.getElementById("filterButtons"),
        categoryGrid: document.querySelector(".category-grid"),
        cartCount: document.getElementById("cartCount"),
        wishlistCount: document.getElementById("wishlistCount"),
        cartDrawer: document.getElementById("cartDrawer"),
        cartOverlay: document.getElementById("cartOverlay"),
        cartItems: document.getElementById("cartItems"),
        cartEmpty: document.getElementById("cartEmpty"),
        cartFooter: document.getElementById("cartFooter"),
        cartSubtotal: document.getElementById("cartSubtotal"),
        cartDelivery: document.getElementById("cartDelivery"),
        cartTotal: document.getElementById("cartTotal"),
        wishlistDrawer: document.getElementById("wishlistDrawer"),
        wishlistOverlay: document.getElementById("wishlistOverlay"),
        wishlistItems: document.getElementById("wishlistItems"),
        wishlistEmpty: document.getElementById("wishlistEmpty"),
        checkoutModal: document.getElementById("checkoutModal"),
        checkoutTotal: document.getElementById("checkoutTotal"),
        checkoutForm: document.getElementById("checkoutForm"),
        checkoutMessage: document.getElementById("checkoutMessage"),
        newsletterForm: document.getElementById("newsletterForm"),
        newsletterEmail: document.getElementById("newsletterEmail"),
        newsletterMessage: document.getElementById("newsletterMessage"),
        contactForm: document.getElementById("contactForm"),
        contactMessage: document.getElementById("contactMessage"),
        toast: document.getElementById("toast"),
        toastMessage: document.getElementById("toastMessage"),
        toastIcon: document.getElementById("toastIcon"),
        backToTop: document.getElementById("backToTop"),
        menuToggle: document.getElementById("menuToggle"),
        mobileMenu: document.getElementById("mobileMenu"),
        themeToggle: document.getElementById("themeToggle")
    };

    /* =====================================================
       ✅ FIX: Declare late-initialized variables here (hoisted)
    ===================================================== */
    let ordersDrawer = null;
    let ordersOverlay = null;
    let ordersItems = null;
    let ordersEmpty = null;

    let trackingModal = null;
    let trackingTimer = null;

    /* =====================================================
       HELPERS
    ===================================================== */

    function formatPrice(value) {
        return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number(value) || 0);
    }

    function escapeHtml(value) {
        return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
    }

    function getProduct(productId) {
        return products.find(product => product.id === Number(productId));
    }

    /* =====================================================
       PRODUCT FILTER / SEARCH / SORT
    ===================================================== */

    function getFilteredProducts() {
        let result = [...products];
        const searchTerm = state.search.trim().toLowerCase();
        if (searchTerm) {
            result = result.filter(product =>
                `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(searchTerm)
            );
        }
        if (state.filter !== "All") {
            result = result.filter(product => product.category === state.filter);
        }
        switch (state.sort) {
            case "price-low": result.sort((a, b) => a.price - b.price); break;
            case "price-high": result.sort((a, b) => b.price - a.price); break;
            case "rating": result.sort((a, b) => b.rating - a.rating); break;
            case "name": result.sort((a, b) => a.name.localeCompare(b.name)); break;
            default: break;
        }
        return result;
    }

    /* =====================================================
       RENDER PRODUCTS
    ===================================================== */

    function createProductCard(product) {
        const isWishlisted = state.wishlist.includes(product.id);
        const stars = "★".repeat(Math.max(0, Math.min(5, Math.round(product.rating))));
        return `
            <article class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <span class="product-badge">${escapeHtml(product.badge)}</span>
                    <button type="button" class="wishlist-btn ${isWishlisted ? "active" : ""}" data-action="wishlist" data-id="${product.id}" aria-label="Add ${escapeHtml(product.name)} to wishlist" aria-pressed="${isWishlisted}">
                        ${isWishlisted ? "♥" : "♡"}
                    </button>
                    <span class="product-emoji" aria-hidden="true">
                        ${product.image ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">` : ""}
                    </span>
                </div>
                <div class="product-info">
                    <span class="product-category">${escapeHtml(product.category)}</span>
                    <h3 class="product-name">${escapeHtml(product.name)}</h3>
                    <p class="product-description">${escapeHtml(product.description)}</p>
                    <div class="rating">
                        <span class="stars" aria-label="${product.rating} out of 5 stars">${stars}</span>
                        <span>${product.rating} (${product.reviews})</span>
                    </div>
                    <div class="product-bottom">
                        <div class="price">
                            <strong>${formatPrice(product.price)}</strong>
                            ${product.oldPrice > product.price ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}
                        </div>
                        <button type="button" class="add-cart-btn" data-action="add-cart" data-id="${product.id}" aria-label="Add ${escapeHtml(product.name)} to cart">+</button>
                    </div>
                </div>
            </article>
        `;
    }

    function renderProducts() {
        if (!elements.productGrid) return;
        const filtered = getFilteredProducts();
        const visible = filtered.slice(0, state.visibleProducts);
        elements.productGrid.innerHTML = visible.map(createProductCard).join("");
        const hasResults = filtered.length > 0;
        if (elements.noResults) elements.noResults.hidden = hasResults;
        elements.productGrid.hidden = !hasResults;
        if (elements.loadMore) {
            elements.loadMore.hidden = !hasResults || visible.length >= filtered.length;
        }
        updateSearchSummary(filtered.length);
    }

    function updateSearchSummary(count) {
        if (!elements.searchSummary) return;
        const parts = [];
        if (state.search) parts.push(`Search: "${state.search}"`);
        if (state.filter !== "All") parts.push(`Category: ${state.filter}`);
        elements.searchSummary.textContent = parts.length ? `${count} product${count === 1 ? "" : "s"} found • ${parts.join(" • ")}` : `${count} products available.`;
    }

    /* =====================================================
       POPULAR PRODUCTS
    ===================================================== */

    const popularProductIds = [12, 22, 35, 23, 14, 24, 26, 32, 33, 28];
    const popularCategoryMap = {
        12: "Snacks", 22: "Snacks", 35: "Cold Drinks", 23: "Cold Drinks",
        14: "Juices", 24: "Chocolates", 26: "Snacks", 32: "Biscuits",
        33: "Snacks", 28: "Snacks"
    };
    let popularFilter = "All";

    function getPopularProducts() {
        return popularProductIds.map(getProduct).filter(Boolean);
    }

    function getFilteredPopularProducts() {
        const all = getPopularProducts();
        if (popularFilter === "All") return all;
        return all.filter(product => popularCategoryMap[product.id] === popularFilter);
    }

    function createPopularProductCard(product) {
        const isWishlisted = state.wishlist.includes(product.id);
        const stars = "★".repeat(Math.round(product.rating));
        const discount = product.oldPrice > product.price ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
        const displayCategory = popularCategoryMap[product.id] || product.category;
        return `
            <article class="popular-product-card" data-product-id="${product.id}">
                <div class="popular-product-image">
                    ${discount > 0 ? `<span class="popular-discount-badge">${discount}% OFF</span>` : ""}
                    <button type="button" class="popular-wishlist-btn ${isWishlisted ? "active" : ""}" data-popular-action="wishlist" data-id="${product.id}" aria-label="Add ${escapeHtml(product.name)} to wishlist" aria-pressed="${isWishlisted}">
                        ${isWishlisted ? "♥" : "♡"}
                    </button>
                    <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
                </div>
                <div class="popular-product-info">
                    <span class="popular-product-category">${escapeHtml(displayCategory)}</span>
                    <h3 class="popular-product-name">${escapeHtml(product.name)}</h3>
                    <div class="popular-rating">
                        <span class="popular-stars">${stars}</span>
                        <span>${product.rating} (${product.reviews})</span>
                    </div>
                    <div class="popular-price-row">
                        <div class="popular-price">
                            <strong>${formatPrice(product.price)}</strong>
                            ${product.oldPrice > product.price ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}
                        </div>
                    </div>
                    <button type="button" class="popular-add-cart-btn" data-popular-action="add-cart" data-id="${product.id}"><span>+</span> Add to Cart</button>
                </div>
            </article>
        `;
    }

    function renderPopularProducts() {
        if (!elements.popularProductsGrid) return;
        elements.popularProductsGrid.innerHTML = getFilteredPopularProducts().map(createPopularProductCard).join("");
        updatePopularSliderButtons();
    }

    function updatePopularSliderButtons() {
        if (!elements.popularProductsGrid || !elements.popularPrev || !elements.popularNext) return;
        const grid = elements.popularProductsGrid;
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        elements.popularPrev.disabled = grid.scrollLeft <= 5;
        elements.popularNext.disabled = maxScroll <= 5 || grid.scrollLeft >= maxScroll - 5;
    }

    /* =====================================================
       CART
    ===================================================== */

    function addToCart(productId) {
        const product = getProduct(productId);
        if (!product) return;
        const id = Number(productId);
        const existing = state.cart.find(item => item.id === id);
        if (existing) existing.quantity += 1;
        else state.cart.push({ id, quantity: 1 });
        saveStorage(STORAGE_KEYS.cart, state.cart);
        updateCartUI();
        showToast(`${product.name} added to cart`, "✓");
    }

    function changeQuantity(productId, amount) {
        const id = Number(productId);
        const item = state.cart.find(cartItem => cartItem.id === id);
        if (!item) return;
        item.quantity += amount;
        if (item.quantity <= 0) {
            state.cart = state.cart.filter(cartItem => cartItem.id !== id);
        }
        saveStorage(STORAGE_KEYS.cart, state.cart);
        updateCartUI();
    }

    function removeFromCart(productId) {
        const id = Number(productId);
        state.cart = state.cart.filter(item => item.id !== id);
        saveStorage(STORAGE_KEYS.cart, state.cart);
        updateCartUI();
        showToast("Item removed from cart", "✓");
    }

    function getCartDetails() {
        return state.cart.map(item => {
            const product = getProduct(item.id);
            if (!product) return null;
            const quantity = Math.max(1, Number(item.quantity) || 1);
            return { ...product, quantity, lineTotal: product.price * quantity };
        }).filter(Boolean);
    }

    function getCartSubtotal() {
        return getCartDetails().reduce((total, item) => total + item.lineTotal, 0);
    }

    function getDeliveryFee(subtotal) {
        if (subtotal <= 0) return 0;
        return subtotal >= 499 ? 0 : 40;
    }

    function createCartItem(item) {
        return `
            <article class="cart-item" data-cart-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">
                </div>
                <div class="cart-item-details">
                    <h3>${escapeHtml(item.name)}</h3>
                    <small>${formatPrice(item.price)}</small>
                    <div class="cart-item-actions">
                        <button type="button" class="qty-btn" data-cart-action="decrease" data-id="${item.id}">−</button>
                        <strong>${item.quantity}</strong>
                        <button type="button" class="qty-btn" data-cart-action="increase" data-id="${item.id}">+</button>
                        <button type="button" class="remove-item" data-cart-action="remove" data-id="${item.id}">Remove</button>
                    </div>
                </div>
                <strong class="cart-item-total">${formatPrice(item.lineTotal)}</strong>
            </article>
        `;
    }

    function updateCartUI() {
        const details = getCartDetails();
        const itemCount = details.reduce((total, item) => total + item.quantity, 0);
        const subtotal = getCartSubtotal();
        const delivery = getDeliveryFee(subtotal);
        const total = subtotal + delivery;
        const isEmpty = details.length === 0;

        if (elements.cartCount) elements.cartCount.textContent = itemCount;
        if (elements.cartSubtotal) elements.cartSubtotal.textContent = formatPrice(subtotal);
        if (elements.cartDelivery) elements.cartDelivery.textContent = delivery === 0 && subtotal > 0 ? "FREE" : formatPrice(delivery);
        if (elements.cartTotal) elements.cartTotal.textContent = formatPrice(total);
        if (elements.checkoutTotal) elements.checkoutTotal.textContent = formatPrice(total);

        if (elements.cartEmpty) elements.cartEmpty.hidden = !isEmpty;
        if (elements.cartItems) {
            elements.cartItems.hidden = isEmpty;
            elements.cartItems.innerHTML = details.map(createCartItem).join("");
        }
        if (elements.cartFooter) elements.cartFooter.hidden = isEmpty;
    }

    // Cart event listeners
    if (elements.cartItems) {
        elements.cartItems.addEventListener("click", event => {
            const button = event.target.closest("[data-cart-action]");
            if (!button) return;
            const id = Number(button.dataset.id);
            const action = button.dataset.cartAction;
            if (action === "increase") changeQuantity(id, 1);
            else if (action === "decrease") changeQuantity(id, -1);
            else if (action === "remove") removeFromCart(id);
        });
    }

    /* =====================================================
       WISHLIST
    ===================================================== */

    function toggleWishlist(productId) {
        const id = Number(productId);
        const product = getProduct(id);
        if (!product) return;
        if (state.wishlist.includes(id)) {
            state.wishlist = state.wishlist.filter(itemId => itemId !== id);
            showToast(`${product.name} removed from wishlist`, "♡");
        } else {
            state.wishlist.push(id);
            showToast(`${product.name} saved to wishlist`, "♥");
        }
        saveStorage(STORAGE_KEYS.wishlist, state.wishlist);
        updateWishlistUI();
        renderProducts();
        renderPopularProducts();
    }

    function updateWishlistUI() {
        if (elements.wishlistCount) elements.wishlistCount.textContent = state.wishlist.length;
        if (!elements.wishlistItems || !elements.wishlistEmpty) return;
        const items = state.wishlist.map(getProduct).filter(Boolean);
        const isEmpty = items.length === 0;
        elements.wishlistEmpty.hidden = !isEmpty;
        elements.wishlistItems.hidden = isEmpty;
        elements.wishlistItems.innerHTML = items.map(product => `
            <article class="wishlist-item" data-wishlist-id="${product.id}">
                <div class="wishlist-item-image">
                    ${product.image ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">` : "♡"}
                </div>
                <div>
                    <h3>${escapeHtml(product.name)}</h3>
                    <small>${formatPrice(product.price)}</small>
                    <div class="cart-item-actions">
                        <button type="button" class="remove-item" data-wishlist-action="cart" data-id="${product.id}">Add to Cart</button>
                        <button type="button" class="remove-item" data-wishlist-action="remove" data-id="${product.id}">Remove</button>
                    </div>
                </div>
            </article>
        `).join("");
    }

    // Wishlist event listeners
    if (elements.productGrid) {
        elements.productGrid.addEventListener("click", event => {
            const button = event.target.closest("[data-action]");
            if (!button) return;
            const id = Number(button.dataset.id);
            const action = button.dataset.action;
            if (action === "add-cart") addToCart(id);
            else if (action === "wishlist") toggleWishlist(id);
        });
    }

    if (elements.wishlistItems) {
        elements.wishlistItems.addEventListener("click", event => {
            const button = event.target.closest("[data-wishlist-action]");
            if (!button) return;
            const id = Number(button.dataset.id);
            const action = button.dataset.wishlistAction;
            if (action === "cart") addToCart(id);
            else if (action === "remove") toggleWishlist(id);
        });
    }

    /* =====================================================
       DRAWERS & OVERLAYS
    ===================================================== */

    function restoreBodyScroll() {
        const cartOpen = elements.cartDrawer && elements.cartDrawer.classList.contains("open");
        const wishlistOpen = elements.wishlistDrawer && elements.wishlistDrawer.classList.contains("open");
        const ordersOpen = ordersDrawer && ordersDrawer.classList.contains("open");
        const checkoutOpen = elements.checkoutModal && !elements.checkoutModal.hidden;
        const trackingOpen = trackingModal && !trackingModal.hidden;
        if (!cartOpen && !wishlistOpen && !ordersOpen && !checkoutOpen && !trackingOpen) {
            document.body.style.overflow = "";
        }
    }

    function openCart() {
        closeWishlist();
        closeOrders();
        if (!elements.cartDrawer) return;
        elements.cartDrawer.classList.add("open");
        elements.cartDrawer.setAttribute("aria-hidden", "false");
        if (elements.cartOverlay) elements.cartOverlay.hidden = false;
        document.body.style.overflow = "hidden";
    }

    function closeCart() {
        if (!elements.cartDrawer) return;
        elements.cartDrawer.classList.remove("open");
        elements.cartDrawer.setAttribute("aria-hidden", "true");
        if (elements.cartOverlay) elements.cartOverlay.hidden = true;
        restoreBodyScroll();
    }

    function openWishlist() {
        closeCart();
        closeOrders();
        if (!elements.wishlistDrawer) return;
        elements.wishlistDrawer.classList.add("open");
        elements.wishlistDrawer.setAttribute("aria-hidden", "false");
        if (elements.wishlistOverlay) elements.wishlistOverlay.hidden = false;
        document.body.style.overflow = "hidden";
    }

    function closeWishlist() {
        if (!elements.wishlistDrawer) return;
        elements.wishlistDrawer.classList.remove("open");
        elements.wishlistDrawer.setAttribute("aria-hidden", "true");
        if (elements.wishlistOverlay) elements.wishlistOverlay.hidden = true;
        restoreBodyScroll();
    }

    if (elements.cartOverlay) elements.cartOverlay.addEventListener("click", closeCart);
    if (elements.wishlistOverlay) elements.wishlistOverlay.addEventListener("click", closeWishlist);

    const cartNavBtn = document.getElementById("cartNavBtn");
    const closeCartBtn = document.getElementById("closeCart");
    const wishlistNavBtn = document.getElementById("wishlistNavBtn");
    const closeWishlistBtn = document.getElementById("closeWishlist");

    if (cartNavBtn) cartNavBtn.addEventListener("click", openCart);
    if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
    if (wishlistNavBtn) wishlistNavBtn.addEventListener("click", openWishlist);
    if (closeWishlistBtn) closeWishlistBtn.addEventListener("click", closeWishlist);

    document.addEventListener("click", event => {
        if (event.target.closest("[data-close-cart]")) closeCart();
    });

    /* =====================================================
       CHECKOUT
    ===================================================== */

    function openCheckout() {
        const subtotal = getCartSubtotal();
        if (subtotal <= 0) {
            showToast("Your cart is empty", "!");
            return;
        }
        closeCart();
        if (!elements.checkoutModal) return;
        elements.checkoutModal.hidden = false;
        if (elements.checkoutTotal) {
            elements.checkoutTotal.textContent = formatPrice(subtotal + getDeliveryFee(subtotal));
        }
        if (elements.checkoutMessage) {
            elements.checkoutMessage.textContent = "";
            elements.checkoutMessage.className = "form-message";
        }
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            const input = document.getElementById("checkoutName");
            if (input) input.focus();
        }, 50);
    }

    function closeCheckout() {
        if (!elements.checkoutModal) return;
        elements.checkoutModal.hidden = true;
        if (elements.checkoutForm) elements.checkoutForm.reset();
        restoreBodyScroll();
    }

    function showCheckoutMessage(message, isError) {
        if (!elements.checkoutMessage) return;
        elements.checkoutMessage.textContent = message;
        elements.checkoutMessage.className = `form-message ${isError ? "error" : "success"}`;
    }

    const checkoutBtn = document.getElementById("checkoutBtn");
    const closeCheckoutBtn = document.getElementById("closeCheckout");
    if (checkoutBtn) checkoutBtn.addEventListener("click", openCheckout);
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckout);
    if (elements.checkoutModal) {
        elements.checkoutModal.addEventListener("click", event => {
            if (event.target === elements.checkoutModal) closeCheckout();
        });
    }

    /* =====================================================
       PLACE ORDER - BACKEND INTEGRATION
    ===================================================== */

    async function placeOrderViaBackend(orderData) {
        try {
            const response = await fetch(`${API_BASE_URL}/orders-create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Failed to place order');
            if (!result.success) throw new Error(result.error || 'Order creation failed');
            return result.order;
        } catch (error) {
            console.error('Backend API error:', error);
            throw error;
        }
    }

    if (elements.checkoutForm) {
        elements.checkoutForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const submitBtn = event.target.querySelector('.btn-primary');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Placing Order...';
            }

            try {
                const nameInput = document.getElementById("checkoutName");
                const phoneInput = document.getElementById("checkoutPhone");
                const addressInput = document.getElementById("checkoutAddress");
                const paymentInput = document.getElementById("paymentMethod");
                const emailInput = document.getElementById("checkoutEmail"); // may be null

                const name = nameInput?.value?.trim() || "";
                const phone = (phoneInput?.value || "").replace(/[^\d]/g, "").slice(0, 10);
                const address = addressInput?.value?.trim() || "";
                const email = emailInput?.value?.trim() || "";
                const paymentMethod = paymentInput?.value || "cod";

                const cartDetails = getCartDetails();

                if (!cartDetails.length) {
                    showCheckoutMessage("Your cart is empty.", true);
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Place Order'; }
                    return;
                }

                if (name.length < 2) {
                    showCheckoutMessage("Please enter your full name.", true);
                    nameInput?.focus();
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Place Order'; }
                    return;
                }

                if (!/^\d{10}$/.test(phone)) {
                    showCheckoutMessage("Please enter a valid 10-digit phone number.", true);
                    phoneInput?.focus();
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Place Order'; }
                    return;
                }

                if (address.length < 10) {
                    showCheckoutMessage("Please enter a complete delivery address.", true);
                    addressInput?.focus();
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Place Order'; }
                    return;
                }

                const subtotal = cartDetails.reduce((sum, item) => sum + item.lineTotal, 0);
                const delivery = getDeliveryFee(subtotal);
                const total = subtotal + delivery;

                const orderData = {
                    customerName: name,
                    customerEmail: email || '',
                    customerPhone: phone,
                    customerAddress: address,
                    customerNotes: '',
                    paymentMethod: paymentMethod,
                    items: cartDetails.map(item => ({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        image: item.image || ''
                    })),
                    subtotal: subtotal,
                    deliveryFee: delivery,
                    discount: 0,
                    total: total
                };

                showCheckoutMessage("Placing your order...", false);

                const order = await placeOrderViaBackend(orderData);

                state.cart = [];
                saveStorage(STORAGE_KEYS.cart, state.cart);
                updateCartUI();

                closeCheckout();
                showToast(`Order ${order.orderNumber} placed successfully! ✅`, '✅');

                setTimeout(() => {
                    showOrderTracking(order.orderNumber);
                }, 600);

                elements.checkoutForm.reset();

            } catch (error) {
                console.error('Order placement error:', error);
                showCheckoutMessage(error.message || 'Failed to place order. Please try again.', true);
                showToast('Order failed ❌', '❌');
            } finally {
                const submitBtn = document.querySelector('#checkoutForm .btn-primary');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Place Order';
                }
            }
        });
    }

    /* =====================================================
       MY ORDERS
    ===================================================== */

    // Assign DOM elements to the previously declared variables
    ordersDrawer = document.getElementById("ordersDrawer");
    ordersOverlay = document.getElementById("ordersOverlay");
    ordersItems = document.getElementById("ordersItems");
    ordersEmpty = document.getElementById("ordersEmpty");

    function createOrdersUIIfMissing() {
        if (ordersDrawer && ordersItems && ordersEmpty) return;
        ordersOverlay = document.createElement("div");
        ordersOverlay.id = "ordersOverlay";
        ordersOverlay.className = "overlay";
        ordersOverlay.hidden = true;

        ordersDrawer = document.createElement("aside");
        ordersDrawer.id = "ordersDrawer";
        ordersDrawer.className = "orders-drawer";
        ordersDrawer.setAttribute("aria-hidden", "true");

        ordersDrawer.innerHTML = `
            <div class="drawer-header">
                <div><span class="section-label">ORDER HISTORY</span><h2>My Orders</h2></div>
                <button type="button" class="close-btn" id="closeOrders" aria-label="Close orders">×</button>
            </div>
            <div class="orders-items" id="ordersItems"></div>
            <div class="orders-empty" id="ordersEmpty" hidden>
                <div>📦</div><h3>No orders yet</h3>
                <p>Your completed orders will appear here.</p>
                <button type="button" class="btn btn-primary" id="shopFromOrders">Start Shopping</button>
            </div>
        `;

        document.body.appendChild(ordersOverlay);
        document.body.appendChild(ordersDrawer);

        ordersItems = document.getElementById("ordersItems");
        ordersEmpty = document.getElementById("ordersEmpty");
    }

    createOrdersUIIfMissing();

    function getPaymentName(paymentMethod) {
        const names = { cod: "Cash on Delivery", upi: "UPI", card: "Credit / Debit Card" };
        return names[paymentMethod] || paymentMethod || "Cash on Delivery";
    }

    function formatOrderDate(date) {
        try {
            return new Date(date).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
        } catch (_) { return ""; }
    }

    function renderOrders() {
        if (!ordersItems || !ordersEmpty) return;
        if (!state.orders.length) {
            ordersItems.innerHTML = "";
            ordersItems.hidden = true;
            ordersEmpty.hidden = false;
            return;
        }
        ordersItems.hidden = false;
        ordersEmpty.hidden = true;
        ordersItems.innerHTML = state.orders.map(order => `
            <article class="order-card" data-order-id="${escapeHtml(order.id)}">
                <div class="order-card-header">
                    <div><span class="section-label">ORDER</span><h3>#${escapeHtml(order.id)}</h3></div>
                    <span class="order-status">${escapeHtml(order.status || "Confirmed")}</span>
                </div>
                <div class="order-date">${formatOrderDate(order.createdAt)}</div>
                <div class="order-products">
                    ${(order.items || []).map(item => `
                        <div class="order-product">
                            <div class="order-product-image">${item.image ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">` : "📦"}</div>
                            <div class="order-product-info"><strong>${escapeHtml(item.name)}</strong><small>${item.quantity} × ${formatPrice(item.price)}</small></div>
                            <strong>${formatPrice(item.lineTotal)}</strong>
                        </div>
                    `).join("")}
                </div>
                <div class="order-card-footer">
                    <div><small>Payment</small><strong>${escapeHtml(getPaymentName(order.paymentMethod))}</strong></div>
                    <div><small>Total</small><strong>${formatPrice(order.total)}</strong></div>
                </div>
                <div class="order-card-actions">
                    <button type="button" class="btn btn-primary" data-order-action="track" data-order-id="${escapeHtml(order.id)}">Track Order</button>
                </div>
            </article>
        `).join("");
    }

    async function openOrders() {
        closeCart();
        closeWishlist();

        if (!ordersDrawer) return;
        ordersDrawer.classList.add("open");
        ordersDrawer.setAttribute("aria-hidden", "false");
        if (ordersOverlay) ordersOverlay.hidden = false;
        document.body.style.overflow = "hidden";

        // Show loading
        if (ordersItems) {
            ordersItems.innerHTML = '<div style="padding: 40px; text-align: center; color: #647069; font-size: 0.9rem;">Loading your orders...</div>';
            ordersItems.hidden = false;
        }
        if (ordersEmpty) ordersEmpty.hidden = true;

        // Determine phone: prefer logged-in customer's phone, else ask
        let phone = currentCustomer?.phone || '';

        // If no phone from login, prompt user
        if (!phone) {
            phone = prompt('Please enter your 10-digit phone number to see your orders:');
            if (!phone) {
                if (ordersItems) ordersItems.innerHTML = '';
                if (ordersItems) ordersItems.hidden = true;
                if (ordersEmpty) ordersEmpty.hidden = false;
                return;
            }
        }

        // Clean phone (digits only)
        phone = phone.replace(/[^\d]/g, '').slice(0, 10);

        if (!/^\d{10}$/.test(phone)) {
            if (ordersItems) ordersItems.innerHTML = '';
            if (ordersItems) ordersItems.hidden = true;
            if (ordersEmpty) {
                ordersEmpty.hidden = false;
                const h3 = ordersEmpty.querySelector('h3');
                if (h3) h3.textContent = 'Invalid phone number';
            }
            return;
        }

        // Fetch from backend
        await fetchMyOrdersFromBackend(phone);
    }

    async function fetchMyOrdersFromBackend(phone) {
        try {
            const response = await fetch(`${API_BASE_URL}/orders-phone`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: phone })
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'Failed to fetch orders');
            }

            const orders = (result.orders || []).map(order => ({
                id: order.order_number,
                status: order.status,
                items: order.items || [],
                total: order.total,
                paymentMethod: order.payment_method,
                createdAt: order.created_at,
                estimatedDelivery: order.estimated_delivery,
            }));

            renderFetchedOrders(orders);

        } catch (error) {
            console.error('Fetch orders error:', error);
            if (ordersItems) {
                ordersItems.innerHTML = '<div style="padding: 40px; text-align: center; color: #ef4444; font-size: 0.9rem;">Could not load orders. Please try again.</div>';
            }
        }
    }

    function renderFetchedOrders(orders) {
        if (!ordersItems || !ordersEmpty) return;

        if (!orders.length) {
            ordersItems.innerHTML = '';
            ordersItems.hidden = true;
            ordersEmpty.hidden = false;
            const h3 = ordersEmpty.querySelector('h3');
            if (h3) h3.textContent = 'No orders yet';
            return;
        }

        ordersItems.hidden = false;
        ordersEmpty.hidden = true;

        ordersItems.innerHTML = orders.map(order => `
            <article class="order-card" data-order-id="${escapeHtml(order.id)}">
                <div class="order-card-header">
                    <div>
                        <span class="section-label">ORDER</span>
                        <h3>#${escapeHtml(order.id)}</h3>
                    </div>
                    <span class="order-status">${escapeHtml(order.status || "Confirmed")}</span>
                </div>
                <div class="order-date">${formatOrderDate(order.createdAt)}</div>
                <div class="order-products">
                    ${(order.items || []).map(item => `
                        <div class="order-product">
                            <div class="order-product-image">
                                ${item.image ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">` : "📦"}
                            </div>
                            <div class="order-product-info">
                                <strong>${escapeHtml(item.name)}</strong>
                                <small>${item.quantity} × ${formatPrice(item.price)}</small>
                            </div>
                            <strong>${formatPrice(item.lineTotal || item.price * item.quantity)}</strong>
                        </div>
                    `).join("")}
                </div>
                <div class="order-card-footer">
                    <div>
                        <small>Payment</small>
                        <strong>${escapeHtml(getPaymentName(order.paymentMethod))}</strong>
                    </div>
                    <div>
                        <small>Total</small>
                        <strong>${formatPrice(order.total)}</strong>
                    </div>
                </div>
                <div class="order-card-actions">
                    <button type="button" class="btn btn-primary" data-order-action="track" data-order-id="${escapeHtml(order.id)}">
                        Track Order
                    </button>
                </div>
            </article>
        `).join("");
    }
    function closeOrders() {
        if (!ordersDrawer) return;
        ordersDrawer.classList.remove("open");
        ordersDrawer.setAttribute("aria-hidden", "true");
        if (ordersOverlay) ordersOverlay.hidden = true;
        restoreBodyScroll();
    }

    const ordersNavBtn = document.getElementById("ordersNavBtn");
    if (ordersNavBtn) {
        ordersNavBtn.addEventListener("click", openOrders);
    } else {
        const navActions = document.querySelector(".nav-actions");
        if (navActions) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "icon-btn orders-nav-btn";
            button.id = "ordersNavBtn";
            button.setAttribute("aria-label", "My Orders");
            button.title = "My Orders";
            button.textContent = "📦";
            navActions.insertBefore(button, navActions.firstElementChild);
            button.addEventListener("click", openOrders);
        }
    }

    const closeOrdersBtn = document.getElementById("closeOrders");
    if (closeOrdersBtn) closeOrdersBtn.addEventListener("click", closeOrders);
    if (ordersOverlay) ordersOverlay.addEventListener("click", closeOrders);

    if (ordersItems) {
        ordersItems.addEventListener("click", event => {
            const button = event.target.closest("[data-order-action]");
            if (!button) return;
            const orderId = button.dataset.orderId;
            const action = button.dataset.orderAction;
            if (action === "track") {
                closeOrders();
                showOrderTracking(orderId);
            }
        });
    }

    const shopFromOrders = document.getElementById("shopFromOrders");
    if (shopFromOrders) {
        shopFromOrders.addEventListener("click", () => {
            closeOrders();
            const productsSection = document.getElementById("products");
            if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    /* =====================================================
       ORDER TRACKING
    ===================================================== */

    trackingModal = document.getElementById("orderTrackingModal");

    function createTrackingUIIfMissing() {
        if (trackingModal) return;
        trackingModal = document.createElement("div");
        trackingModal.id = "orderTrackingModal";
        trackingModal.className = "modal-overlay";
        trackingModal.hidden = true;
        trackingModal.innerHTML = `
            <div class="modal order-tracking-modal" role="dialog" aria-modal="true" aria-labelledby="trackingTitle">
                <div class="modal-header">
                    <div><span class="section-label">ORDER TRACKING</span><h2 id="trackingTitle">Track Your Order</h2></div>
                    <button type="button" class="close-btn" id="closeOrderTracking">×</button>
                </div>
                <div class="tracking-content">
                    <div class="tracking-order-number">Order <strong id="trackingOrderNumber">#FM00000000</strong></div>
                    <div class="tracking-eta"><span>Estimated delivery</span><strong id="trackingExpectedTime">--</strong></div>
                    <div class="tracking-countdown" id="trackingCountdown">30:00</div>
                    <div class="tracking-steps">
                        <div class="tracking-step active" data-tracking-step="confirmed"><span>✓</span><div><strong>Order Confirmed</strong><small>Your order has been received.</small></div></div>
                        <div class="tracking-step" data-tracking-step="preparing"><span>✓</span><div><strong>Preparing</strong><small>Your groceries are being prepared.</small></div></div>
                        <div class="tracking-step" data-tracking-step="out"><span>🚚</span><div><strong>Out for Delivery</strong><small>Your order is on the way.</small></div></div>
                        <div class="tracking-step" data-tracking-step="delivered"><span>✓</span><div><strong>Delivered</strong><small>Enjoy your fresh groceries!</small></div></div>
                    </div>
                    <button type="button" class="btn btn-primary full-width" id="continueShoppingAfterOrder">Continue Shopping</button>
                </div>
            </div>
        `;
        document.body.appendChild(trackingModal);
    }
    createTrackingUIIfMissing();

    function resetTrackingSteps(status = 'confirmed') {
        if (!trackingModal) return;
        const steps = trackingModal.querySelectorAll('.tracking-step');
        steps.forEach(step => step.classList.remove('active', 'completed'));
        const statusMap = {
            'confirmed': ['confirmed'],
            'preparing': ['confirmed', 'preparing'],
            'out_for_delivery': ['confirmed', 'preparing', 'out'],
            'delivered': ['confirmed', 'preparing', 'out', 'delivered'],
            'cancelled': ['confirmed']
        };
        const activeSteps = statusMap[status] || ['confirmed'];
        activeSteps.forEach(stepName => {
            const step = trackingModal.querySelector(`[data-tracking-step="${stepName}"]`);
            if (step) step.classList.add('active', 'completed');
        });
        if (status === 'cancelled') {
            const countdown = document.getElementById('trackingCountdown');
            if (countdown) countdown.textContent = '❌ Cancelled';
        }
    }

    function startDeliveryCountdown(totalSeconds, orderId) {
        clearInterval(trackingTimer);
        let remaining = Math.max(0, Number(totalSeconds) || 0);
        const countdown = document.getElementById('trackingCountdown');
        const order = window._trackingOrder;
        if (order?.status === 'delivered') {
            if (countdown) countdown.textContent = '✅ Delivered';
            return;
        }
        if (order?.status === 'cancelled') {
            if (countdown) countdown.textContent = '❌ Cancelled';
            return;
        }
        function update() {
            if (!countdown) return;
            if (remaining <= 0) {
                clearInterval(trackingTimer);
                countdown.textContent = '🚚 Out for Delivery';
                return;
            }
            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            countdown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            remaining -= 1;
        }
        update();
        trackingTimer = setInterval(update, 1000);
    }

    async function showOrderTracking(orderId) {
        try {
            const response = await fetch(`${API_BASE_URL}/orders-get/${orderId}`);
            const result = await response.json();
            if (!response.ok || !result.success) throw new Error(result.error || 'Order not found');
            const order = result.order;

            const orderNumberEl = document.getElementById('trackingOrderNumber');
            if (orderNumberEl) orderNumberEl.textContent = `#${order.order_number}`;

            const expectedTimeEl = document.getElementById('trackingExpectedTime');
            if (expectedTimeEl && order.estimated_delivery) {
                const date = new Date(order.estimated_delivery);
                expectedTimeEl.textContent = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            }

            resetTrackingSteps(order.status || 'confirmed');

            if (trackingModal) {
                trackingModal.hidden = false;
                document.body.style.overflow = 'hidden';
            }

            if (order.estimated_delivery) {
                const remainingSeconds = Math.max(0, Math.floor((new Date(order.estimated_delivery) - Date.now()) / 1000));
                startDeliveryCountdown(remainingSeconds, order.order_number);
            }

            window._trackingOrder = order;

            if (window._trackingInterval) clearInterval(window._trackingInterval);
            window._trackingInterval = setInterval(async () => {
                try {
                    const statusRes = await fetch(`${API_BASE_URL}/orders-get/${orderId}`);
                    const statusResult = await statusRes.json();
                    if (statusResult.success && statusResult.order) {
                        const currentOrder = statusResult.order;
                        if (currentOrder.status !== window._trackingOrder?.status) {
                            window._trackingOrder = currentOrder;
                            resetTrackingSteps(currentOrder.status);
                        }
                    }
                } catch (e) { console.warn('Status check failed:', e); }
            }, 30000);

        } catch (error) {
            console.error('Tracking fetch error:', error);
            showToast('Order not found', '❌');
        }
    }

    function closeTrackingModal() {
        clearInterval(trackingTimer);
        if (window._trackingInterval) {
            clearInterval(window._trackingInterval);
            window._trackingInterval = null;
        }
        if (trackingModal) trackingModal.hidden = true;
        restoreBodyScroll();
    }

    const closeOrderTracking = document.getElementById("closeOrderTracking");
    const continueShoppingAfterOrder = document.getElementById("continueShoppingAfterOrder");
    if (closeOrderTracking) closeOrderTracking.addEventListener("click", closeTrackingModal);
    if (continueShoppingAfterOrder) {
        continueShoppingAfterOrder.addEventListener("click", () => {
            closeTrackingModal();
            const productsSection = document.getElementById("products");
            if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
        });
    }
    if (trackingModal) {
        trackingModal.addEventListener("click", event => {
            if (event.target === trackingModal) closeTrackingModal();
        });
    }

    /* =====================================================
       FILTERS, SEARCH, SORT, LOAD MORE
    ===================================================== */

    function setFilter(category) {
        state.filter = category;
        state.visibleProducts = 8;
        document.querySelectorAll(".filter-btn").forEach(button => {
            button.classList.toggle("active", button.dataset.filter === category);
        });
        renderProducts();
    }

    if (elements.filterButtons) {
        elements.filterButtons.addEventListener("click", event => {
            const button = event.target.closest("[data-filter]");
            if (!button) return;
            setFilter(button.dataset.filter);
        });
    }

    if (elements.categoryGrid) {
        elements.categoryGrid.addEventListener("click", event => {
            const card = event.target.closest("[data-category]");
            if (!card) return;
            setFilter(card.dataset.category);
            const productsSection = document.getElementById("products");
            if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    function resetFilters() {
        state.filter = "All";
        state.search = "";
        state.sort = "default";
        state.visibleProducts = 8;
        if (elements.desktopSearch) elements.desktopSearch.value = "";
        if (elements.mobileSearch) elements.mobileSearch.value = "";
        if (elements.sortProducts) elements.sortProducts.value = "default";
        document.querySelectorAll(".filter-btn").forEach(button => {
            button.classList.toggle("active", button.dataset.filter === "All");
        });
        renderProducts();
    }

    if (elements.clearFilters) elements.clearFilters.addEventListener("click", resetFilters);
    const resetSearch = document.getElementById("resetSearch");
    if (resetSearch) resetSearch.addEventListener("click", resetFilters);

    function performSearch(value) {
        state.search = String(value || "").trim();
        state.visibleProducts = 8;
        if (elements.desktopSearch) elements.desktopSearch.value = state.search;
        if (elements.mobileSearch) elements.mobileSearch.value = state.search;
        renderProducts();
        const productsSection = document.getElementById("products");
        if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
    }

    if (elements.desktopSearchBtn) {
        elements.desktopSearchBtn.addEventListener("click", () => {
            performSearch(elements.desktopSearch ? elements.desktopSearch.value : "");
        });
    }
    if (elements.desktopSearch) {
        elements.desktopSearch.addEventListener("keydown", event => {
            if (event.key === "Enter") performSearch(elements.desktopSearch.value);
        });
    }
    if (elements.mobileSearchBtn) {
        elements.mobileSearchBtn.addEventListener("click", () => {
            performSearch(elements.mobileSearch ? elements.mobileSearch.value : "");
            closeMobileMenu();
        });
    }
    if (elements.mobileSearch) {
        elements.mobileSearch.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                performSearch(elements.mobileSearch.value);
                closeMobileMenu();
            }
        });
    }

    if (elements.sortProducts) {
        elements.sortProducts.addEventListener("change", event => {
            state.sort = event.target.value;
            state.visibleProducts = 8;
            renderProducts();
        });
    }

    if (elements.loadMore) {
        elements.loadMore.addEventListener("click", () => {
            state.visibleProducts += 4;
            renderProducts();
        });
    }

    /* =====================================================
       POPULAR FILTERS
    ===================================================== */

    document.addEventListener("click", event => {
        const filterButton = event.target.closest("[data-popular-filter]");
        if (!filterButton) return;
        popularFilter = filterButton.dataset.popularFilter;
        document.querySelectorAll(".popular-filter-btn").forEach(btn => {
            btn.classList.toggle("active", btn === filterButton);
        });
        renderPopularProducts();
    });

    if (elements.popularProductsGrid) {
        elements.popularProductsGrid.addEventListener("click", event => {
            const button = event.target.closest("[data-popular-action]");
            if (!button) return;
            const id = Number(button.dataset.id);
            const action = button.dataset.popularAction;
            if (action === "add-cart") addToCart(id);
            else if (action === "wishlist") toggleWishlist(id);
        });
    }

    if (elements.popularPrev) {
        elements.popularPrev.addEventListener("click", () => {
            if (elements.popularProductsGrid) {
                elements.popularProductsGrid.scrollBy({ left: -320, behavior: "smooth" });
            }
        });
    }
    if (elements.popularNext) {
        elements.popularNext.addEventListener("click", () => {
            if (elements.popularProductsGrid) {
                elements.popularProductsGrid.scrollBy({ left: 320, behavior: "smooth" });
            }
        });
    }
    if (elements.popularProductsGrid) {
        elements.popularProductsGrid.addEventListener("scroll", updatePopularSliderButtons, { passive: true });
    }
    window.addEventListener("resize", updatePopularSliderButtons);

    /* =====================================================
       CONTACT FORM
    ===================================================== */

    function setFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.querySelector(`[data-error-for="${fieldId}"]`);
        if (field) field.classList.add("invalid");
        if (error) error.textContent = message;
    }

    function clearFormErrors() {
        if (!elements.contactForm) return;
        elements.contactForm.querySelectorAll("input, textarea").forEach(field => field.classList.remove("invalid"));
        elements.contactForm.querySelectorAll(".error-message").forEach(err => err.textContent = "");
        if (elements.contactMessage) {
            elements.contactMessage.textContent = "";
            elements.contactMessage.className = "form-message";
        }
    }

    if (elements.contactForm) {
        elements.contactForm.addEventListener("submit", event => {
            event.preventDefault();
            clearFormErrors();
            const name = document.getElementById("name")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const message = document.getElementById("message")?.value.trim() || "";
            let valid = true;
            if (name.length < 2) { setFieldError("name", "Please enter your name."); valid = false; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError("email", "Please enter a valid email."); valid = false; }
            if (message.length < 10) { setFieldError("message", "Message must be at least 10 characters."); valid = false; }
            if (!valid) {
                if (elements.contactMessage) {
                    elements.contactMessage.textContent = "Please correct the highlighted fields.";
                    elements.contactMessage.className = "form-message error";
                }
                return;
            }
            if (elements.contactMessage) {
                elements.contactMessage.textContent = "Thank you! Your message has been received.";
                elements.contactMessage.className = "form-message success";
            }
            elements.contactForm.reset();
            showToast("Message submitted", "✓");
        });
        elements.contactForm.querySelectorAll("input, textarea").forEach(field => {
            field.addEventListener("input", () => {
                field.classList.remove("invalid");
                const error = document.querySelector(`[data-error-for="${field.id}"]`);
                if (error) error.textContent = "";
            });
        });
    }

    /* =====================================================
       NEWSLETTER
    ===================================================== */

    if (elements.newsletterForm) {
        elements.newsletterForm.addEventListener("submit", event => {
            event.preventDefault();
            const email = elements.newsletterEmail ? elements.newsletterEmail.value.trim() : "";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                if (elements.newsletterMessage) {
                    elements.newsletterMessage.textContent = "Please enter a valid email address.";
                    elements.newsletterMessage.className = "form-message error";
                }
                return;
            }
            if (elements.newsletterMessage) {
                elements.newsletterMessage.textContent = "Successfully subscribed!";
                elements.newsletterMessage.className = "form-message success";
            }
            saveStorage(STORAGE_KEYS.preferences, { newsletterSubscribed: true, email });
            elements.newsletterForm.reset();
            showToast("Subscribed successfully", "✓");
        });
    }

    /* =====================================================
       THEME
    ===================================================== */

    function applyTheme(theme) {
        const dark = theme === "dark";
        document.body.classList.toggle("dark-theme", dark);
        if (elements.themeToggle) {
            elements.themeToggle.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
        }
        state.theme = dark ? "dark" : "light";
        saveStorage(STORAGE_KEYS.theme, state.theme);
    }

    if (elements.themeToggle) {
        elements.themeToggle.addEventListener("click", () => {
            const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
            applyTheme(nextTheme);
        });
    }

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    function toggleMobileMenu() {
        if (!elements.mobileMenu) return;
        const isOpen = elements.mobileMenu.classList.toggle("open");
        if (elements.menuToggle) elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    }

    function closeMobileMenu() {
        if (!elements.mobileMenu) return;
        elements.mobileMenu.classList.remove("open");
        if (elements.menuToggle) elements.menuToggle.setAttribute("aria-expanded", "false");
    }

    if (elements.menuToggle) elements.menuToggle.addEventListener("click", toggleMobileMenu);
    document.querySelectorAll("[data-mobile-link]").forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.addEventListener("click", event => {
        const button = event.target.closest("[data-scroll]");
        if (!button) return;
        const targetId = button.dataset.scroll;
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    /* =====================================================
       BACK TO TOP
    ===================================================== */

    if (elements.backToTop) {
        window.addEventListener("scroll", () => {
            elements.backToTop.classList.toggle("show", window.scrollY > 500);
        }, { passive: true });
        elements.backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        closeCart();
        closeWishlist();
        closeOrders();
        if (elements.checkoutModal && !elements.checkoutModal.hidden) closeCheckout();
        if (trackingModal && !trackingModal.hidden) closeTrackingModal();
        closeMobileMenu();
    });

    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer;

    function showToast(message, icon = "✓") {
        if (!elements.toast || !elements.toastMessage || !elements.toastIcon) return;
        clearTimeout(toastTimer);
        elements.toastMessage.textContent = message;
        elements.toastIcon.textContent = icon;
        elements.toast.classList.add("show");
        toastTimer = setTimeout(() => {
            elements.toast.classList.remove("show");
        }, 2600);
    }

    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear = document.getElementById("currentYear");
    if (currentYear) currentYear.textContent = new Date().getFullYear();

    /* =====================================================
       SAVE NORMALIZED STORAGE
    ===================================================== */

    saveStorage(STORAGE_KEYS.cart, state.cart);
    saveStorage(STORAGE_KEYS.wishlist, state.wishlist);
    saveStorage(STORAGE_KEYS.orders, state.orders);

    /* =====================================================
       INITIALIZE
    ===================================================== */

    applyTheme(state.theme);
    renderProducts();
    renderPopularProducts();
    updateCartUI();
    updateWishlistUI();
    renderOrders();
    updatePopularSliderButtons();

    // ============================================================
// AUTH BRIDGE - Make required functions available to Supabase Auth
// ============================================================

window.RudraMartShowToast = showToast;
window.RudraMartCloseMobileMenu = closeMobileMenu;

    console.log("RudraMart loaded successfully.");
});

// ============================================================
// SUPABASE AUTHENTICATION
// ============================================================

const SUPABASE_URL = '	https://wmkzpblyjxedfrlarstm.supabase.co';

const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indta3pwYmx5anhlZGZybGFyc3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1NTMyNjgsImV4cCI6MjEwNDEyOTI2OH0.27riS3RhL-HY5d2ZDe3UqKhUmKWDe8u3uiujzL6Xa9E";

let supabaseClient = null;
let currentUser = null;
let currentCustomer = null;


// ============================================================
// INITIALIZE SUPABASE
// ============================================================

function initializeSupabase() {

    if (!window.supabase) {
        console.error("Supabase library not loaded.");
        return false;
    }

    try {

        supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_ANON_KEY
        );

        console.log("Supabase initialized successfully.");

        return true;

    } catch (error) {

        console.error("Supabase initialization failed:", error);

        return false;
    }
}


// ============================================================
// SHOW AUTH MESSAGE
// ============================================================

function showAuthMessage(elementId, message, type = "error") {

    const element = document.getElementById(elementId);

    if (!element) return;

    element.textContent = message;
    element.className = `form-message ${type}`;
}


// ============================================================
// SIGN UP
// ============================================================

async function signUp(email, password, name, phone) {

    if (!supabaseClient) {
        throw new Error("Authentication service is not available.");
    }

    const {
        data,
        error
    } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        throw error;
    }

    const user = data.user;

    if (!user) {
        throw new Error("Account creation failed.");
    }

    // Create customer profile
    const {
        error: customerError
    } = await supabaseClient
        .from("customers")
        .insert({
            auth_user_id: user.id,
            email: email,
            name: name,
            phone: phone
        });

    if (customerError) {
        console.error("Customer profile error:", customerError);

        // If profile insert fails, account was still created
        throw new Error(
            customerError.message ||
            "Account created but customer profile could not be saved."
        );
    }

    return {
        user: user,
        customer: {
            email: email,
            name: name,
            phone: phone
        }
    };
}


// ============================================================
// SIGN IN
// ============================================================

async function signIn(email, password) {

    if (!supabaseClient) {
        throw new Error("Authentication service is not available.");
    }

    const {
        data,
        error
    } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        throw error;
    }

    if (!data.user) {
        throw new Error("Login failed.");
    }

    currentUser = data.user;

    // Get customer information
    const {
        data: customer,
        error: customerError
    } = await supabaseClient
        .from("customers")
        .select("*")
        .eq("auth_user_id", data.user.id)
        .maybeSingle();

    if (customerError) {
        console.warn(
            "Could not load customer profile:",
            customerError
        );
    }

    currentCustomer = customer || {
        name: data.user.email?.split("@")[0] || "User",
        email: data.user.email || "",
        phone: ""
    };

    return {
        user: currentUser,
        customer: currentCustomer
    };
}


// ============================================================
// SIGN OUT
// ============================================================

async function signOut() {

    if (!supabaseClient) return;

    try {

        const {
            error
        } = await supabaseClient.auth.signOut();

        if (error) throw error;

        currentUser = null;
        currentCustomer = null;

        updateAuthUI();

        if (window.RudraMartShowToast) {
            window.RudraMartShowToast(
                "Logged out successfully",
                "👋"
            );
        }

    } catch (error) {

        console.error("Logout error:", error);

        if (window.RudraMartShowToast) {
            window.RudraMartShowToast(
                "Logout failed",
                "❌"
            );
        }
    }
}


// ============================================================
// LOAD CURRENT SESSION
// ============================================================

async function initAuth() {

    if (!supabaseClient) return;

    try {

        const {
            data,
            error
        } = await supabaseClient.auth.getSession();

        if (error) {
            console.error("Session error:", error);
            return;
        }

        const session = data?.session;

        if (session?.user) {

            currentUser = session.user;

            const {
                data: customer
            } = await supabaseClient
                .from("customers")
                .select("*")
                .eq("auth_user_id", session.user.id)
                .maybeSingle();

            currentCustomer = customer || {
                name: session.user.email?.split("@")[0] || "User",
                email: session.user.email || "",
                phone: ""
            };
        }

        updateAuthUI();

    } catch (error) {

        console.error(
            "Authentication initialization failed:",
            error
        );
    }
}


// ============================================================
// AUTH UI
// ============================================================

function updateAuthUI() {

    const loginBtn =
        document.getElementById("loginNavBtn");

    const userInfo =
        document.getElementById("userInfo");

    const userName =
        document.getElementById("userName");

    const mobileAuthLinks =
        document.getElementById("mobileAuthLinks");

    const mobileUserInfo =
        document.getElementById("mobileUserInfo");

    const mobileUserName =
        document.getElementById("mobileUserName");


    if (currentUser) {

        if (loginBtn) {
            loginBtn.style.display = "none";
        }

        if (userInfo) {

            userInfo.style.display = "flex";

            if (userName) {
                userName.textContent =
                    currentCustomer?.name ||
                    currentUser.email ||
                    "User";
            }
        }

        if (mobileAuthLinks) {
            mobileAuthLinks.style.display = "none";
        }

        if (mobileUserInfo) {

            mobileUserInfo.style.display = "block";

            if (mobileUserName) {
                mobileUserName.textContent =
                    currentCustomer?.name ||
                    currentUser.email ||
                    "User";
            }
        }

    } else {

        if (loginBtn) {
            loginBtn.style.display = "inline-flex";
        }

        if (userInfo) {
            userInfo.style.display = "none";
        }

        if (mobileAuthLinks) {
            mobileAuthLinks.style.display = "block";
        }

        if (mobileUserInfo) {
            mobileUserInfo.style.display = "none";
        }
    }
}


// ============================================================
// AUTH MODAL
// ============================================================

function openAuthModal(tab = "login") {

    const authModal =
        document.getElementById("authModal");

    if (!authModal) {
        console.error("authModal not found in HTML.");
        return;
    }

    authModal.hidden = false;

    document.body.style.overflow = "hidden";


    document.querySelectorAll(".auth-tab").forEach(tabButton => {

        tabButton.classList.toggle(
            "active",
            tabButton.dataset.authTab === tab
        );

    });


    const loginForm =
        document.getElementById("loginForm");

    const signupForm =
        document.getElementById("signupForm");

    if (loginForm) {
        loginForm.hidden = tab !== "login";
    }

    if (signupForm) {
        signupForm.hidden = tab !== "signup";
    }


    const title =
        document.getElementById("authModalTitle");

    if (title) {
        title.textContent =
            tab === "login" ? "Login" : "Create Account";
    }


    showAuthMessage(
        "loginMessage",
        "",
        ""
    );

    showAuthMessage(
        "signupMessage",
        "",
        ""
    );
}


// ============================================================
// CLOSE AUTH MODAL
// ============================================================

function closeAuthModalFn() {

    const authModal =
        document.getElementById("authModal");

    if (!authModal) return;

    authModal.hidden = true;

    document.body.style.overflow = "";
}


// ============================================================
// AUTH EVENT INITIALIZATION
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {

    // Initialize Supabase
    if (!initializeSupabase()) {
        return;
    }


    // ========================================================
    // LOGIN BUTTON
    // ========================================================

    document
        .getElementById("loginNavBtn")
        ?.addEventListener("click", () => {

            openAuthModal("login");

        });


    // ========================================================
    // MOBILE LOGIN
    // ========================================================

    document
        .getElementById("mobileLoginLink")
        ?.addEventListener("click", event => {

            event.preventDefault();

            openAuthModal("login");

            if (window.RudraMartCloseMobileMenu) {
                window.RudraMartCloseMobileMenu();
            }

        });


    // ========================================================
    // MOBILE SIGNUP
    // ========================================================

    document
        .getElementById("mobileSignupLink")
        ?.addEventListener("click", event => {

            event.preventDefault();

            openAuthModal("signup");

            if (window.RudraMartCloseMobileMenu) {
                window.RudraMartCloseMobileMenu();
            }

        });


    // ========================================================
    // MOBILE LOGOUT
    // ========================================================

    document
        .getElementById("mobileLogoutLink")
        ?.addEventListener("click", async event => {

            event.preventDefault();

            await signOut();

            if (window.RudraMartCloseMobileMenu) {
                window.RudraMartCloseMobileMenu();
            }

        });


    // ========================================================
    // CLOSE AUTH MODAL
    // ========================================================

    document
        .getElementById("closeAuthModal")
        ?.addEventListener(
            "click",
            closeAuthModalFn
        );


    const authModal =
        document.getElementById("authModal");

    if (authModal) {

        authModal.addEventListener("click", event => {

            if (event.target === authModal) {
                closeAuthModalFn();
            }

        });

    }


    // ========================================================
    // AUTH TABS
    // ========================================================

    document
        .querySelectorAll(".auth-tab")
        .forEach(tab => {

            tab.addEventListener("click", () => {

                openAuthModal(
                    tab.dataset.authTab
                );

            });

        });


    // ========================================================
    // LOGIN FORM
    // ========================================================

    document
        .getElementById("loginForm")
        ?.addEventListener("submit", async event => {

            event.preventDefault();

            const form = event.target;

            const email =
                document
                    .getElementById("loginEmail")
                    ?.value
                    .trim() || "";

            const password =
                document
                    .getElementById("loginPassword")
                    ?.value || "";

            const button =
                form.querySelector(".btn-primary");


            if (!email || !password) {

                showAuthMessage(
                    "loginMessage",
                    "Please enter email and password.",
                    "error"
                );

                return;
            }


            if (button) {

                button.disabled = true;

                button.textContent =
                    "Logging in...";

            }


            try {

                const result =
                    await signIn(
                        email,
                        password
                    );

                currentUser =
                    result.user;

                currentCustomer =
                    result.customer;


                updateAuthUI();

                closeAuthModalFn();


                if (window.RudraMartShowToast) {

                    window.RudraMartShowToast(
                        `Welcome ${currentCustomer?.name || "User"}!`,
                        "👋"
                    );

                }


                form.reset();


                showAuthMessage(
                    "loginMessage",
                    "",
                    ""
                );

            } catch (error) {

                console.error(
                    "Login error:",
                    error
                );

                showAuthMessage(
                    "loginMessage",
                    error.message ||
                    "Login failed. Please check your email and password.",
                    "error"
                );

            } finally {

                if (button) {

                    button.disabled = false;

                    button.textContent =
                        "Login";

                }

            }

        });


    // ========================================================
    // SIGNUP FORM
    // ========================================================

    document
        .getElementById("signupForm")
        ?.addEventListener("submit", async event => {

            event.preventDefault();

            const form = event.target;


            const name =
                document
                    .getElementById("signupName")
                    ?.value
                    .trim() || "";

            const email =
                document
                    .getElementById("signupEmail")
                    ?.value
                    .trim() || "";

            const phone =
                document
                    .getElementById("signupPhone")
                    ?.value
                    .trim() || "";

            const password =
                document
                    .getElementById("signupPassword")
                    ?.value || "";


            const button =
                form.querySelector(".btn-primary");


            // Validation

            if (name.length < 2) {

                showAuthMessage(
                    "signupMessage",
                    "Please enter your full name.",
                    "error"
                );

                return;
            }


            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

                showAuthMessage(
                    "signupMessage",
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            if (!/^\d{10}$/.test(phone)) {

                showAuthMessage(
                    "signupMessage",
                    "Please enter a valid 10-digit phone number.",
                    "error"
                );

                return;
            }


            if (password.length < 6) {

                showAuthMessage(
                    "signupMessage",
                    "Password must be at least 6 characters.",
                    "error"
                );

                return;
            }


            if (button) {

                button.disabled = true;

                button.textContent =
                    "Creating account...";

            }


            try {

                const result =
                    await signUp(
                        email,
                        password,
                        name,
                        phone
                    );


                currentUser =
                    result.user;

                currentCustomer =
                    result.customer;


                updateAuthUI();


                // Supabase email confirmation check
                const session =
                    (await supabaseClient.auth.getSession())
                        ?.data
                        ?.session;


                closeAuthModalFn();

                form.reset();


                if (!session) {

                    if (window.RudraMartShowToast) {

                        window.RudraMartShowToast(
                            "Account created! Please verify your email.",
                            "📧"
                        );

                    }

                } else {

                    if (window.RudraMartShowToast) {

                        window.RudraMartShowToast(
                            "Account created successfully! 🎉",
                            "🎉"
                        );

                    }

                }


            } catch (error) {

                console.error(
                    "Signup error:",
                    error
                );

                showAuthMessage(
                    "signupMessage",
                    error.message ||
                    "Signup failed. Email may already exist.",
                    "error"
                );

            } finally {

                if (button) {

                    button.disabled = false;

                    button.textContent =
                        "Create Account";

                }

            }

        });


    // ========================================================
    // DESKTOP LOGOUT
    // ========================================================

    document
        .getElementById("logoutBtn")
        ?.addEventListener(
            "click",
            signOut
        );


    // ========================================================
    // SUPABASE AUTH STATE LISTENER
    // ========================================================

    supabaseClient.auth.onAuthStateChange(
        async (event, session) => {

            console.log(
                "Auth state:",
                event
            );


            if (session?.user) {

                currentUser =
                    session.user;

                // Avoid unnecessary duplicate UI calls
                try {

                    const {
                        data: customer
                    } = await supabaseClient
                        .from("customers")
                        .select("*")
                        .eq(
                            "auth_user_id",
                            session.user.id
                        )
                        .maybeSingle();

                    currentCustomer =
                        customer || {
                            name:
                                session.user.email
                                    ?.split("@")[0] ||
                                "User",

                            email:
                                session.user.email ||
                                "",

                            phone: ""
                        };

                } catch (error) {

                    console.warn(
                        "Customer profile fetch failed:",
                        error
                    );

                }

            } else {

                currentUser = null;
                currentCustomer = null;

            }


            updateAuthUI();

        }
    );


    // ========================================================
    // LOAD EXISTING SESSION
    // ========================================================

    await initAuth();

});