document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('open') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Search Toggle
    const searchBtn = document.getElementById('searchBtn');
    const searchBar = document.getElementById('searchBar');
    
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    });
    
    // VIP Modal
    const vipModal = document.querySelector('.vip-modal');
    const closeVip = document.querySelector('.close-vip');
    const accountBtn = document.getElementById('accountBtn');
    
    accountBtn.addEventListener('click', function(e) {
        e.preventDefault();
        vipModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeVip.addEventListener('click', function() {
        vipModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === vipModal) {
            vipModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cart Sidebar
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.querySelector('.close-cart');
    
    cartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cartSidebar.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
    
    // Hero Slider
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dots .dot');
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    let currentHeroSlide = 0;
    
    function showHeroSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        currentHeroSlide = index;
    }
    
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showHeroSlide(index));
    });
    
    heroPrev.addEventListener('click', function() {
        let newIndex = currentHeroSlide - 1;
        if (newIndex < 0) newIndex = heroSlides.length - 1;
        showHeroSlide(newIndex);
    });
    
    heroNext.addEventListener('click', function() {
        let newIndex = currentHeroSlide + 1;
        if (newIndex >= heroSlides.length) newIndex = 0;
        showHeroSlide(newIndex);
    });
    
    // Auto-advance hero slider
    let heroInterval = setInterval(() => {
        let newIndex = currentHeroSlide + 1;
        if (newIndex >= heroSlides.length) newIndex = 0;
        showHeroSlide(newIndex);
    }, 7000);
    
    // Pause on hover
    const heroSlider = document.querySelector('.hero-slideshow');
    heroSlider.addEventListener('mouseenter', () => clearInterval(heroInterval));
    heroSlider.addEventListener('mouseleave', () => {
        heroInterval = setInterval(() => {
            let newIndex = currentHeroSlide + 1;
            if (newIndex >= heroSlides.length) newIndex = 0;
            showHeroSlide(newIndex);
        }, 7000);
    });
    
    // Product Data
    const products = [
        {
            id: 1,
            name: "Silk Evening Gown",
            description: "Hand-beaded with Swarovski crystals",
            price: 8950,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
            badge: "NEW"
        },
        {
            id: 2,
            name: "Signature Leather Tote",
            description: "Handcrafted Italian leather with gold hardware",
            price: 4200,
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            badge: "BESTSELLER"
        },
        {
            id: 3,
            name: "Cashmere Winter Coat",
            description: "100% Mongolian cashmere with fox fur trim",
            price: 12500,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
        },
        {
            id: 4,
            name: "Diamond Drop Earrings",
            description: "5 carat total weight, G color, VS clarity",
            price: 65000,
            image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1435&q=80",
            badge: "LIMITED"
        },
        {
            id: 5,
            name: "Bespoke Tailored Suit",
            description: "Super 150s wool with hand-stitched details",
            price: 12000,
            image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 6,
            name: "Alligator Leather Briefcase",
            description: "Handcrafted from premium alligator hide",
            price: 18500,
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            badge: "NEW"
        },
        {
            id: 7,
            name: "Pearl Necklace",
            description: "South Sea pearls with diamond clasp",
            price: 32000,
            image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 8,
            name: "Limited Edition Timepiece",
            description: "Tourbillon movement with platinum case",
            price: 285000,
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
            badge: "LIMITED"
        }
    ];
    
    // Initialize Products Slider
    const productsContainer = document.getElementById('productsContainer');
    const sliderDots = document.getElementById('sliderDots');
    const sliderPrev = document.querySelector('.slider-prev');
    const sliderNext = document.querySelector('.slider-next');
    let currentProductSlide = 0;
    const productsPerSlide = 4;
    const totalProductSlides = Math.ceil(products.length / productsPerSlide);
    
    // Create product cards
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">
                    <span class="price">$${product.price.toLocaleString()}</span>
                    <a href="#" class="btn" data-id="${product.id}">ADD TO CART</a>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
    
    // Create slider dots
    for (let i = 0; i < totalProductSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showProductSlide(i));
        sliderDots.appendChild(dot);
    }
    
    function showProductSlide(index) {
        const offset = -index * (100 / totalProductSlides);
        productsContainer.style.transform = `translateX(${offset}%)`;
        
        document.querySelectorAll('.slider-dots .slider-dot').forEach(dot => {
            dot.classList.remove('active');
        });
        
        sliderDots.children[index].classList.add('active');
        currentProductSlide = index;
    }
    
    sliderPrev.addEventListener('click', function() {
        let newIndex = currentProductSlide - 1;
        if (newIndex < 0) newIndex = totalProductSlides - 1;
        showProductSlide(newIndex);
    });
    
    sliderNext.addEventListener('click', function() {
        let newIndex = currentProductSlide + 1;
        if (newIndex >= totalProductSlides) newIndex = 0;
        showProductSlide(newIndex);
    });
    
    // Auto-advance product slider
    setInterval(() => {
        let newIndex = currentProductSlide + 1;
        if (newIndex >= totalProductSlides) newIndex = 0;
        showProductSlide(newIndex);
    }, 8000);
    
    // Testimonial Data
    const testimonials = [
        {
            text: "Wearing Éclat is like wearing a masterpiece. The craftsmanship is unparalleled, and I always receive compliments whenever I wear their pieces.",
            author: "ELEANOR VAN DER WOODSEN",
            role: "Socialite & Philanthropist"
        },
        {
            text: "As someone who appreciates fine watchmaking, the Éclat timepiece collection exceeds all expectations. The attention to detail is extraordinary.",
            author: "JAMES ROTHESMERE",
            role: "CEO, Rothesmere Holdings"
        },
        {
            text: "The Éclat atelier understands true luxury. Their couture pieces are investments that transcend seasons and trends.",
            author: "LADY VICTORIA CHAMBERLAIN",
            role: "Fashion Editor, Vogue"
        },
        {
            text: "My Éclat handbag has been with me for a decade and still looks impeccable. That's the mark of true quality craftsmanship.",
            author: "MARGUERITE DE LA ROCHE",
            role: "Art Collector"
        },
        {
            text: "The VIP shopping experience at Éclat is unmatched. They remember every detail and make you feel like the only client that matters.",
            author: "SERGEI PETROV",
            role: "Tech Entrepreneur"
        }
    ];
    
    // Initialize Testimonials Slider
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    const testimonialDots = document.getElementById('testimonialDots');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    let currentTestimonialSlide = 0;
    
    // Create testimonial slides
    testimonials.forEach((testimonial, index) => {
        const testimonialSlide = document.createElement('div');
        testimonialSlide.className = 'testimonial';
        testimonialSlide.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <p class="testimonial-author">${testimonial.author}</p>
            <p class="testimonial-role">${testimonial.role}</p>
        `;
        testimonialsContainer.appendChild(testimonialSlide);
    });
    
    // Create testimonial dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'testimonial-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showTestimonialSlide(index));
        testimonialDots.appendChild(dot);
    });
    
    function showTestimonialSlide(index) {
        const offset = -index * 100;
        testimonialsContainer.style.transform = `translateX(${offset}%)`;
        
        document.querySelectorAll('.testimonial-dots .testimonial-dot').forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonialDots.children[index].classList.add('active');
        currentTestimonialSlide = index;
    }
    
    testimonialPrev.addEventListener('click', function() {
        let newIndex = currentTestimonialSlide - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonialSlide(newIndex);
    });
    
    testimonialNext.addEventListener('click', function() {
        let newIndex = currentTestimonialSlide + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonialSlide(newIndex);
    });
    
    // Auto-advance testimonial slider
    setInterval(() => {
        let newIndex = currentTestimonialSlide + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonialSlide(newIndex);
    }, 10000);
    
    // Shopping Cart Functionality
    let cart = [];
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');
    
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') && e.target.hasAttribute('data-id')) {
            e.preventDefault();
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            // Check if product is already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCart();
            cartSidebar.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        
        // Remove item from cart
        if (e.target.classList.contains('cart-item-remove')) {
            e.preventDefault();
            const itemId = parseInt(e.target.getAttribute('data-id'));
            cart = cart.filter(item => item.id !== itemId);
            updateCart();
        }
    });
    
    function updateCart() {
        // Update cart items
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <p class="cart-item-price">$${item.price.toLocaleString()} x ${item.quantity}</p>
                        <a href="#" class="cart-item-remove" data-id="${item.id}">Remove</a>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        
        // Update cart total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toLocaleString()}`;
        
        // Update cart count
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = count;
    }
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const vipOptIn = this.querySelector('input[type="checkbox"]').checked;
        
        // Here you would typically send this data to your server
        console.log('Subscribed with:', email, 'VIP Opt-In:', vipOptIn);
        
        // Show success message
        alert('Thank you for subscribing to Éclat Couture. You will now receive our exclusive updates.');
        this.reset();
    });
    
    // VIP Form
    const vipForm = document.getElementById('vipForm');
    
    vipForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        
        // Here you would typically send this data to your server
        console.log('VIP Request:', { name, email, phone });
        
        // Show success message
        alert('Thank you for your interest in the Éclat VIP program. A personal shopper will contact you shortly.');
        this.reset();
        vipModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkScroll() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    
    // Initialize cart
    updateCart();
});