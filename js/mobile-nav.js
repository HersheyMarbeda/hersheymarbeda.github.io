// Mobile Navigation Menu Handler
(function() {
    const hamburgerToggle = document.querySelector('.hamburger-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (!hamburgerToggle || !mobileMenu) {
        return; // Exit if elements don't exist
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        const isActive = hamburgerToggle.classList.contains('active');
        
        hamburgerToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Update ARIA attributes for accessibility
        hamburgerToggle.setAttribute('aria-expanded', !isActive);
        mobileMenu.setAttribute('aria-hidden', isActive);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? '' : 'hidden';
    }

    // Close mobile menu
    function closeMobileMenu() {
        hamburgerToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        hamburgerToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Event listeners
    hamburgerToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Small delay to allow navigation to start
            setTimeout(closeMobileMenu, 150);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !hamburgerToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close menu on window resize (if switching to desktop view)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

})();