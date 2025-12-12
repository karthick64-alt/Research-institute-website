// About Page JavaScript

// Team Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const teamMembers = document.querySelectorAll('.team-member');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter team members
        const filter = button.getAttribute('data-filter');
        
        teamMembers.forEach(member => {
            if (filter === 'all' || member.getAttribute('data-lab') === filter) {
                member.classList.remove('hidden');
                member.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                member.classList.add('hidden');
            }
        });
    });
});

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-play testimonials
let testimonialInterval = setInterval(nextSlide, 5000);

// Pause on hover
const slider = document.querySelector('.testimonials-slider');
slider.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
slider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextSlide, 5000);
});

// Smooth scroll for anchor links
document.querySelectorAll('.about-nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Intersection Observer for animations
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    aboutObserver.observe(item);
});

// Observe mission cards
document.querySelectorAll('.mission-card').forEach(card => {
    aboutObserver.observe(card);
});

// Observe leader cards
document.querySelectorAll('.leader-card').forEach(card => {
    aboutObserver.observe(card);
});

// 3D hover effects for navigation items
document.querySelectorAll('.nav-item-3d').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});

