// News Page JavaScript

// News Search
const newsSearch = document.getElementById('newsSearch');
const newsArticles = document.querySelectorAll('.news-article');

newsSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    newsArticles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(query)) {
            article.classList.remove('hidden');
            article.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            article.classList.add('hidden');
        }
    });
});

// Category Filter
const categoryButtons = document.querySelectorAll('.cat-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        
        newsArticles.forEach(article => {
            if (category === 'all' || article.getAttribute('data-category') === category) {
                article.classList.remove('hidden');
                article.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                article.classList.add('hidden');
            }
        });
    });
});

// 3D Hover Effects
newsArticles.forEach(article => {
    article.addEventListener('mousemove', (e) => {
        const rect = article.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        article.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    article.addEventListener('mouseleave', () => {
        article.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Featured Article 3D Effect
const featuredArticle = document.querySelector('.featured-article');
if (featuredArticle) {
    featuredArticle.addEventListener('mousemove', (e) => {
        const rect = featuredArticle.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        featuredArticle.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    featuredArticle.addEventListener('mouseleave', () => {
        featuredArticle.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
}

// Intersection Observer for animations
const newsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }, index * 100);
            newsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

newsArticles.forEach(article => {
    newsObserver.observe(article);
});

if (featuredArticle) {
    newsObserver.observe(featuredArticle);
}

