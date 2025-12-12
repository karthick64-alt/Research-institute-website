// Login Page JavaScript

// Toggle Password Visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    const icon = togglePassword.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});

// Form Submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);
    
    // Simulate login
    const loginBtn = loginForm.querySelector('.login-btn');
    const originalText = loginBtn.innerHTML;
    
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
    loginBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Redirect to admin dashboard (or appropriate page)
        window.location.href = 'admin/dashboard.html';
    }, 1500);
});

// 3D Effect on Login Wrapper
const loginWrapper = document.querySelector('.login-wrapper');
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        loginWrapper.style.transform = `translateY(-10px) rotateX(${y}deg) rotateY(${x}deg)`;
    }
});

