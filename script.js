// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const intensitySlider = document.getElementById('intensity');
const intensityValue = document.getElementById('intensityValue');
const demoContent = document.getElementById('demoContent');
const filterDemo = document.getElementById('filterDemo');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Filter Demo Functionality
let currentFilter = 'none';
let currentIntensity = 50;

// Filter configurations
const filterConfigs = {
    none: {
        background: 'transparent',
        filter: 'none'
    },
    warm: {
        background: 'linear-gradient(45deg, rgba(255, 165, 0, 0.2), rgba(255, 69, 0, 0.1))',
        filter: 'sepia(0.2) hue-rotate(15deg)'
    },
    cool: {
        background: 'linear-gradient(45deg, rgba(0, 191, 255, 0.2), rgba(138, 43, 226, 0.1))',
        filter: 'hue-rotate(180deg) saturate(1.2)'
    },
    vintage: {
        background: 'linear-gradient(45deg, rgba(139, 69, 19, 0.2), rgba(160, 82, 45, 0.1))',
        filter: 'sepia(0.4) contrast(1.1)'
    },
    night: {
        background: 'rgba(0, 0, 0, 0.3)',
        filter: 'invert(0.1) hue-rotate(180deg) brightness(0.8)'
    },
    'high-contrast': {
        background: 'transparent',
        filter: 'contrast(1.5) brightness(1.2) saturate(1.3)'
    }
};

// Apply filter to demo content
function applyFilter(filterType, intensity = 50) {
    const config = filterConfigs[filterType];
    if (!config) return;

    const intensityMultiplier = intensity / 100;
    
    // Apply background with intensity
    if (config.background !== 'transparent') {
        const rgbaMatch = config.background.match(/rgba?\([^)]+\)/g);
        if (rgbaMatch) {
            let adjustedBackground = config.background;
            rgbaMatch.forEach(rgba => {
                const adjustedRgba = rgba.replace(/[\d.]+\)$/, `${intensityMultiplier})`);
                adjustedBackground = adjustedBackground.replace(rgba, adjustedRgba);
            });
            filterDemo.style.background = adjustedBackground;
        } else {
            filterDemo.style.background = config.background;
        }
    } else {
        filterDemo.style.background = 'transparent';
    }

    // Apply filter with intensity
    if (config.filter !== 'none') {
        const filterParts = config.filter.split(' ');
        const adjustedFilters = filterParts.map(part => {
            if (part.includes('(') && part.includes(')')) {
                const value = parseFloat(part.match(/[\d.]+/)[0]);
                const adjustedValue = value * intensityMultiplier;
                return part.replace(/[\d.]+/, adjustedValue.toFixed(2));
            }
            return part;
        });
        filterDemo.style.filter = adjustedFilters.join(' ');
    } else {
        filterDemo.style.filter = 'none';
    }
}

// Filter button click handlers
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter type and apply
        const filterType = button.getAttribute('data-filter');
        currentFilter = filterType;
        applyFilter(filterType, currentIntensity);
    });
});

// Intensity slider handler
intensitySlider.addEventListener('input', (e) => {
    currentIntensity = parseInt(e.target.value);
    intensityValue.textContent = `${currentIntensity}%`;
    applyFilter(currentFilter, currentIntensity);
});

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .about-text, .about-visual, .contact-info, .contact-form');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (hero && scrolled < hero.offsetHeight) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate * 0.3}px)`;
        heroVisual.style.transform = `translateY(${rate * 0.1}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Trigger counter animation when about section is visible
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
});

// Add loading animation to page elements
document.addEventListener('DOMContentLoaded', () => {
    const loadingElements = document.querySelectorAll('.hero-content, .hero-visual, .section-header, .features-grid, .demo-container, .about-content, .contact-content');
    
    loadingElements.forEach((element, index) => {
        element.classList.add('loading');
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 100);
    });
});

// Keyboard navigation for filter buttons
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add hover effects to feature cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Add smooth reveal animation for sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(section);
    });
});


 
 // Initialize the page
 document.addEventListener('DOMContentLoaded', () => {
     // Set initial filter
     applyFilter('none', 50);
    
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading state to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.type !== 'submit') {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);
