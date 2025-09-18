// script.js - Ghana Creators Network

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            // Toggle active class on hamburger for animation
            hamburgerMenu.classList.toggle('active');
            
            // Toggle active class on nav-links to show/hide menu
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-links li a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target)) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
        
        // Close menu on window resize (if switching to desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
        
        // Prevent menu from staying open on page refresh
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Add interactivity here if needed
