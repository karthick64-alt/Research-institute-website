// Datasets Page JavaScript

// Create Particle Animation
const dataParticles = document.getElementById('dataParticles');
if (dataParticles) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-dot';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        dataParticles.appendChild(particle);
    }
}

// Filter Functionality
const datasetSearch = document.getElementById('datasetSearch');
const licenseFilter = document.getElementById('licenseFilter');
const categoryFilter = document.getElementById('categoryFilter');
const datasetCards = document.querySelectorAll('.dataset-card');

function filterDatasets() {
    const searchTerm = datasetSearch.value.toLowerCase();
    const license = licenseFilter.value;
    const category = categoryFilter.value;

    datasetCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const cardLicense = card.getAttribute('data-license');
        const cardCategory = card.getAttribute('data-category');

        const matchesSearch = searchTerm === '' || text.includes(searchTerm);
        const matchesLicense = license === 'all' || cardLicense === license;
        const matchesCategory = category === 'all' || cardCategory === category;

        if (matchesSearch && matchesLicense && matchesCategory) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.classList.add('hidden');
        }
    });
}

datasetSearch.addEventListener('input', filterDatasets);
licenseFilter.addEventListener('change', filterDatasets);
categoryFilter.addEventListener('change', filterDatasets);

// Download Button Handler
const downloadButtons = document.querySelectorAll('.download-btn');
downloadButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.disabled) {
            e.preventDefault();
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            this.disabled = true;

            // Simulate download
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Downloaded';
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }, 2000);
        }
    });
});

// 3D Hover Effects
datasetCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Intersection Observer for animations
const datasetsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }, index * 100);
            datasetsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

datasetCards.forEach(card => {
    datasetsObserver.observe(card);
});

