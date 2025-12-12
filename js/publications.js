// Publications Page JavaScript

// Canvas Animation for Hero
const canvas = document.getElementById('publicationsCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    // Animated particles
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.3 - 0.15;
            this.speedY = Math.random() * 0.3 - 0.15;
            this.opacity = Math.random() * 0.3 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particles = [];
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    });
}

// Filter Functionality
const pubSearch = document.getElementById('pubSearch');
const yearFilter = document.getElementById('yearFilter');
const typeFilter = document.getElementById('typeFilter');
const topicFilter = document.getElementById('topicFilter');
const publicationItems = document.querySelectorAll('.publication-item');

function filterPublications() {
    const searchTerm = pubSearch.value.toLowerCase();
    const year = yearFilter.value;
    const type = typeFilter.value;
    const topic = topicFilter.value;

    publicationItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const itemYear = item.querySelector('.pub-year').textContent;
        const itemType = item.querySelector('.pub-type-badge').textContent.toLowerCase();
        
        const matchesSearch = searchTerm === '' || text.includes(searchTerm);
        const matchesYear = year === 'all' || itemYear === year;
        const matchesType = type === 'all' || itemType.includes(type);
        const matchesTopic = topic === 'all' || text.includes(topic);

        if (matchesSearch && matchesYear && matchesType && matchesTopic) {
            item.classList.remove('hidden');
            item.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            item.classList.add('hidden');
        }
    });
}

pubSearch.addEventListener('input', filterPublications);
yearFilter.addEventListener('change', filterPublications);
typeFilter.addEventListener('change', filterPublications);
topicFilter.addEventListener('change', filterPublications);

// Citation Copy Function
function copyCitation(button) {
    const publication = button.closest('.publication-item');
    const title = publication.querySelector('.pub-title').textContent;
    const authors = publication.querySelector('.pub-authors').textContent;
    const venue = publication.querySelector('.pub-venue').textContent;
    const year = publication.querySelector('.pub-year').textContent;
    const doi = publication.querySelector('.pub-doi').textContent.replace('DOI: ', '');

    const format = button.getAttribute('data-citation');
    let citation = '';

    switch(format) {
        case 'APA':
            citation = `${authors} (${year}). ${title}. ${venue}. ${doi}`;
            break;
        case 'MLA':
            citation = `${authors}. "${title}." ${venue}, ${year}. ${doi}`;
            break;
        case 'Chicago':
            citation = `${authors}. "${title}." ${venue} (${year}). ${doi}`;
            break;
    }

    // Copy to clipboard
    navigator.clipboard.writeText(citation).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#10b981';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
}

// Export BibTeX
function exportBibTeX() {
    const publications = Array.from(publicationItems).filter(item => !item.classList.contains('hidden'));
    let bibtex = '';

    publications.forEach((pub, index) => {
        const title = pub.querySelector('.pub-title').textContent;
        const authors = pub.querySelector('.pub-authors').textContent;
        const year = pub.querySelector('.pub-year').textContent;
        const venue = pub.querySelector('.pub-venue').textContent;
        const doi = pub.querySelector('.pub-doi').textContent.replace('DOI: ', '');

        bibtex += `@article{ref${index + 1},\n`;
        bibtex += `  title={${title}},\n`;
        bibtex += `  author={${authors}},\n`;
        bibtex += `  journal={${venue}},\n`;
        bibtex += `  year={${year}},\n`;
        bibtex += `  doi={${doi}}\n`;
        bibtex += `}\n\n`;
    });

    // Download as file
    const blob = new Blob([bibtex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'publications.bib';
    a.click();
    URL.revokeObjectURL(url);
}

// Intersection Observer for animations
const pubObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }, index * 100);
            pubObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

publicationItems.forEach(item => {
    pubObserver.observe(item);
});

