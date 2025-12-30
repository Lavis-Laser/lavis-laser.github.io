/**
 * LAVIS - MU-TH-UR 6000 Interface
 * Interactive effects and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for hero title
    initTypingEffect();

    // Smooth scroll for navigation links
    initSmoothScroll();

    // Intersection Observer for scroll animations
    initScrollAnimations();

    // Update system time
    updateSystemTime();
});

/**
 * Typing Effect
 */
function initTypingEffect() {
    const titleElement = document.getElementById('heroTitle');
    const text = 'LAVIS';
    let index = 0;

    // Wait for boot sequence to complete
    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                titleElement.textContent += text[index];
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 150);
    }, 1800);
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe spec panels
    document.querySelectorAll('.spec-panel').forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(panel);
    });

    // Observe status panels
    document.querySelectorAll('.status-panel').forEach((panel, index) => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(panel);
    });
}

// Add animate-in class styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

/**
 * Update System Time
 */
function updateSystemTime() {
    const updateElement = document.getElementById('lastUpdate');
    if (updateElement) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        updateElement.textContent = `${year}.${month}`;
    }
}

/**
 * Terminal cursor effect for footer
 */
function initTerminalCursor() {
    const cursor = document.querySelector('.footer-terminal .cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 500);
    }
}

// Navigation active state on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active style for nav links
const navStyle = document.createElement('style');
navStyle.textContent = `
  .nav-links a.active {
    border-color: var(--border-color);
    background: rgba(0, 255, 174, 0.1);
  }
`;
document.head.appendChild(navStyle);

// Console Easter egg
console.log('%c LAVIS SYSTEM ONLINE ', 'background: #00ffae; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Laser Archive & Visualizer Integrated System ', 'color: #00ffae; font-size: 12px;');
console.log('%c > ALL SYSTEMS OPERATIONAL ', 'color: #00ff00; font-size: 12px;');
