// Research Page JavaScript

// Topic Filter
const topicTags = document.querySelectorAll('.topic-tag');
const labCards = document.querySelectorAll('.lab-card');

topicTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Update active tag
        topicTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');

        // Filter labs
        const topic = tag.getAttribute('data-topic');
        
        labCards.forEach(card => {
            if (topic === 'all' || card.getAttribute('data-topic') === topic) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        labCards.forEach(card => {
            card.classList.remove('hidden');
        });
        return;
    }

    labCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.classList.add('hidden');
        }
    });
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// 3D Hover Effects for Lab Cards
labCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Intersection Observer for animations
const researchObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            researchObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe lab cards
labCards.forEach(card => {
    researchObserver.observe(card);
});

// Observe topic items
document.querySelectorAll('.topic-item').forEach(item => {
    researchObserver.observe(item);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
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

