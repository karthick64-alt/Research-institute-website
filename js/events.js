// Events Page JavaScript

// Event Type Filter
const typeButtons = document.querySelectorAll('.type-btn');
const eventCards = document.querySelectorAll('.event-card');

typeButtons.forEach(button => {
    button.addEventListener('click', () => {
        typeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const type = button.getAttribute('data-type');
        
        eventCards.forEach(card => {
            if (type === 'all' || card.getAttribute('data-type') === type) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// View Toggle
const viewButtons = document.querySelectorAll('.view-btn');
const eventsGrid = document.getElementById('eventsGrid');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        viewButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const view = button.getAttribute('data-view');
        if (view === 'list') {
            eventsGrid.classList.add('list-view');
        } else {
            eventsGrid.classList.remove('list-view');
        }
    });
});

// Register Button Handler
const registerButtons = document.querySelectorAll('.register-btn');
registerButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const originalText = this.textContent;
        this.textContent = 'Registering...';
        this.disabled = true;

        // Simulate registration
        setTimeout(() => {
            this.textContent = 'Registered!';
            this.style.background = '#10b981';
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.disabled = false;
            }, 2000);
        }, 1500);
    });
});

// 3D Hover Effects
eventCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Intersection Observer for animations
const eventsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }, index * 100);
            eventsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

eventCards.forEach(card => {
    eventsObserver.observe(card);
});

