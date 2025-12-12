// Admin Dashboard JavaScript

// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.admin-sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Chart Placeholders (would use Chart.js in production)
const visitorChart = document.getElementById('visitorChart');
const downloadChart = document.getElementById('downloadChart');

if (visitorChart) {
    const ctx = visitorChart.getContext('2d');
    visitorChart.width = visitorChart.parentElement.offsetWidth;
    visitorChart.height = 300;
    
    // Simple line chart simulation
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(50, 200);
    ctx.lineTo(100, 180);
    ctx.lineTo(150, 150);
    ctx.lineTo(200, 120);
    ctx.lineTo(250, 100);
    ctx.lineTo(300, 80);
    ctx.stroke();
}

if (downloadChart) {
    const ctx = downloadChart.getContext('2d');
    downloadChart.width = downloadChart.parentElement.offsetWidth;
    downloadChart.height = 300;
    
    // Simple bar chart simulation
    const bars = [120, 180, 150, 200, 170, 220];
    bars.forEach((height, index) => {
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(index * 50 + 20, 300 - height, 40, height);
    });
}

// Chart Range Buttons
const chartButtons = document.querySelectorAll('.chart-btn');
chartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        chartButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Would reload chart data here
    });
});

// 3D Effects for Cards
const statCards = document.querySelectorAll('.admin-stat-3d');
statCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

