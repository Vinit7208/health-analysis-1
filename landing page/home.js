/**
 * Health Mate - Home Page JavaScript
 * Clean and organized code for sidebar navigation and smooth transitions
 */

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.sidebar nav a');
const contentContainer = document.querySelector('main');
const referenceImage = document.querySelector('.reference-image');

// Configuration
const CONFIG = {
    transitionDuration: 600,
    easing: 'ease-in-out',
    mobileBreakpoint: 768
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeResponsiveBehavior();
    initializeSmoothScrolling();
    initializeImageLoading();
});

/**
 * Initialize sidebar navigation functionality
 */
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            updateActiveNavLink(link);
            
            // Handle navigation based on the clicked item
            const navText = link.textContent.trim();
            handleNavigation(navText);
        });
    });
}

/**
 * Update active navigation link
 */
function updateActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

/**
 * Handle navigation based on clicked item
 */
function handleNavigation(navText) {
    switch(navText) {
        case 'Home':
            scrollToTop();
            break;
        case 'Health Analysis':
            window.location.href = 'health analysis/analysis.html';
            break;
        case 'AI Recommendations':
            scrollToReference();
            break;
        case 'Profile Dashboard':
            scrollToReference();
            break;
        case 'Consult':
            scrollToReference();
            break;
        case 'About':
            scrollToReference();
            break;
        default:
            scrollToTop();
    }
}

/**
 * Scroll to top of page
 */
function scrollToTop() {
    if (contentContainer) {
        contentContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

/**
 * Scroll to reference image section
 */
function scrollToReference() {
    if (contentContainer) {
        const targetPosition = contentContainer.scrollHeight - contentContainer.clientHeight;
        
        contentContainer.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Initialize responsive behavior
 */
function initializeResponsiveBehavior() {
    handleResize();
    window.addEventListener('resize', handleResize);
}

/**
 * Handle window resize
 */
function handleResize() {
    const isMobile = window.innerWidth <= CONFIG.mobileBreakpoint;
    
    if (isMobile) {
        handleMobileLayout();
    } else {
        handleDesktopLayout();
    }
}

/**
 * Handle mobile layout
 */
function handleMobileLayout() {
    if (sidebar) {
        sidebar.style.position = 'relative';
        sidebar.style.width = '100%';
        sidebar.style.height = 'auto';
    }
    
    document.body.style.marginLeft = '0';
}

/**
 * Handle desktop layout
 */
function handleDesktopLayout() {
    if (sidebar) {
        sidebar.style.position = 'fixed';
        sidebar.style.width = '370px';
        sidebar.style.height = '100vh';
    }
    
    document.body.style.marginLeft = '370px';
}

/**
 * Initialize smooth scrolling
 */
function initializeSmoothScrolling() {
    // Ensure smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
}

/**
 * Initialize image loading with fade-in effect
 */
function initializeImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Handle cached images
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

/**
 * Utility function for debouncing
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Handle premium button click
 */
document.addEventListener('DOMContentLoaded', () => {
    const premiumButton = document.querySelector('.premium button');
    if (premiumButton) {
        premiumButton.addEventListener('click', () => {
            // Add your premium upgrade logic here
            console.log('Premium upgrade clicked');
        });
    }
});

/**
 * Handle sign in and get started buttons
 */
document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.querySelector('.signin');
    const getStartedBtn = document.querySelector('.getstarted');
    
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            // Add your sign in logic here
            console.log('Sign in clicked');
        });
    }
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            // Add your get started logic here
            console.log('Get started clicked');
        });
    }
});

/**
 * Handle Start Your Analysis button click
 */
document.addEventListener('DOMContentLoaded', () => {
    const startAnalysisButton = document.querySelector('.primary-btn');
    if (startAnalysisButton) {
        startAnalysisButton.addEventListener('click', () => {
            window.location.href = 'health analysis/analysis.html';
        });
    }
});

