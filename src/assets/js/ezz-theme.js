// ================================================
// EZZ THEME - Premium JavaScript Features
// Desktop-First Luxury Experience
// ================================================

import anime from 'animejs/lib/anime.es.js';

class EzzTheme {
    constructor() {
        this.init();
    }

    init() {
        this.initAnnouncementBanner();
        this.initStickyNav();
        this.initScrollEffects();
        this.initCategoryHover();
        this.initSearchFunctionality();
    }

    // ================================================
    // ANNOUNCEMENT BANNER
    // ================================================
    initAnnouncementBanner() {
        const announcementBanner = document.getElementById('announcementBanner');
        const closeBtn = document.getElementById('closeAnnouncement');
        
        if (closeBtn && announcementBanner) {
            // Show on load
            announcementBanner.classList.remove('hidden');

            closeBtn.addEventListener('click', () => {
                anime({
                    targets: announcementBanner,
                    height: 0,
                    opacity: 0,
                    duration: 300,
                    easing: 'easeOutQuad',
                    complete: () => {
                        announcementBanner.classList.add('hidden');
                    }
                });
            });
        }
    }

    // ================================================
    // STICKY NAVIGATION
    // ================================================
    initStickyNav() {
        const navbar = document.querySelector('.ezz-navbar');
        if (!navbar) return;

        let lastScroll = 0;
        let isSticky = false;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                if (!isSticky) {
                    navbar.style.transform = 'translateY(-100%)';
                    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.12)';
                    
                    requestAnimationFrame(() => {
                        navbar.style.transition = 'transform 0.3s ease';
                        navbar.style.transform = 'translateY(0)';
                    });
                    
                    isSticky = true;
                }
            } else {
                isSticky = false;
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.06)';
            }

            lastScroll = currentScroll;
        });
    }

    // ================================================
    // SCROLL EFFECTS
    // ================================================
    initScrollEffects() {
        // Fade in elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutQuad'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe products
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            observer.observe(card);
        });

        // Observe sections
        document.querySelectorAll('.ezz-circle-categories, .ezz-premium-products').forEach(section => {
            observer.observe(section);
        });
    }

    // ================================================
    // CATEGORY HOVER EFFECTS
    // ================================================
    initCategoryHover() {
        const categoryItems = document.querySelectorAll('.category-item');

        categoryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                anime({
                    targets: item.querySelector('.category-circle'),
                    scale: 1.1,
                    rotate: '5deg',
                    duration: 300,
                    easing: 'easeOutElastic(1, .6)'
                });
            });

            item.addEventListener('mouseleave', () => {
                anime({
                    targets: item.querySelector('.category-circle'),
                    scale: 1,
                    rotate: '0deg',
                    duration: 300,
                    easing: 'easeOutElastic(1, .6)'
                });
            });
        });
    }

    // ================================================
    // SEARCH FUNCTIONALITY
    // ================================================
    initSearchFunctionality() {
        // Enhanced search with Salla SDK
        salla.event.on('search::open', () => {
            const searchInput = document.querySelector('salla-search input');
            if (searchInput) {
                searchInput.focus();
            }
        });
    }

    // ================================================
    // PRODUCT CARD ANIMATIONS
    // ================================================
    animateProductCard(card) {
        anime({
            targets: card,
            scale: [0.95, 1],
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 400,
            easing: 'easeOutQuad'
        });
    }

    // ================================================
    // WISHLIST ANIMATION
    // ================================================
    animateWishlistButton(button) {
        anime({
            targets: button,
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            duration: 600,
            easing: 'easeOutElastic(1, .5)'
        });
    }

    // ================================================
    // CART ANIMATION
    // ================================================
    animateAddToCart(button) {
        const icon = button.querySelector('i');
        
        anime({
            targets: icon,
            translateY: [-10, 0],
            scale: [1.5, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutExpo'
        });
    }
}

// Initialize theme when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.ezzTheme = new EzzTheme();
});

// Export for use in other modules
export default EzzTheme;
