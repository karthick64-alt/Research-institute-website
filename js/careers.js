// Careers Page JavaScript

// Job Filters
const departmentFilter = document.getElementById('departmentFilter');
const typeFilter = document.getElementById('typeFilter');
const jobCards = document.querySelectorAll('.job-card');

function filterJobs() {
    const department = departmentFilter.value;
    const type = typeFilter.value;

    jobCards.forEach(card => {
        const cardDept = card.getAttribute('data-department');
        const cardType = card.getAttribute('data-type');

        const matchesDept = department === 'all' || cardDept === department;
        const matchesType = type === 'all' || cardType === type;

        if (matchesDept && matchesType) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.classList.add('hidden');
        }
    });
}

departmentFilter.addEventListener('change', filterJobs);
typeFilter.addEventListener('change', filterJobs);

// Apply Button Handler
const applyButtons = document.querySelectorAll('.apply-btn');
applyButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const originalText = this.textContent;
        this.textContent = 'Applying...';
        this.disabled = true;

        // Simulate application
        setTimeout(() => {
            this.textContent = 'Application Sent!';
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
jobCards.forEach(card => {
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

// Internship Cards 3D Effects
const internshipCards = document.querySelectorAll('.internship-3d');
internshipCards.forEach(card => {
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
const careersObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }, index * 100);
            careersObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

jobCards.forEach(card => {
    careersObserver.observe(card);
});

internshipCards.forEach(card => {
    careersObserver.observe(card);
});

