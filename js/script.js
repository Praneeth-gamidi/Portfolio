// Custom JavaScript for Portfolio Website

// Dark/Light Mode Toggle
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
});

// Cursor Follower
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
    const speed = 0.1;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursorFollower.style.left = cursorX - 10 + 'px';
    cursorFollower.style.top = cursorY - 10 + 'px';
    
    requestAnimationFrame(animateCursor);
}

// Hide cursor on mobile devices
if (window.innerWidth > 768) {
    animateCursor();
    cursorFollower.style.display = 'block';
} else {
    cursorFollower.style.display = 'none';
}

// Interactive Skills Section Logic
const skillsData = {
    frontend: [
        { name: 'HTML', icon: 'fab fa-html5', color: 'text-orange-600' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-600' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
        { name: 'React', icon: 'fab fa-react', color: 'text-cyan-500' }
    ],
    backend: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600' },
        { name: 'Express.js', icon: 'fas fa-server', color: 'text-gray-600' },
        { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-500' },
        { name: 'SQLite', icon: 'fas fa-database', color: 'text-blue-500' }
    ],
    ai: [
        { name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
        { name: 'NumPy', icon: 'fas fa-chart-line', color: 'text-indigo-600' },
        { name: 'Pandas', icon: 'fas fa-table', color: 'text-blue-500' },
        { name: 'Regression', icon: 'fas fa-chart-bar', color: 'text-purple-600' },
        { name: 'Machine Learning', icon: 'fas fa-brain', color: 'text-pink-600' },
        { name: 'Deep Learning', icon: 'fas fa-network-wired', color: 'text-red-600' },
        { name: 'LLMs', icon: 'fas fa-robot', color: 'text-orange-600' }
    ],
    languages: [
        { name: 'C++', icon: 'fas fa-code', color: 'text-blue-700' },
        { name: 'Java', icon: 'fab fa-java', color: 'text-red-600' },
        { name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
        { name: 'SQL', icon: 'fas fa-database', color: 'text-orange-600' }
    ],
    tools: [
        { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-600' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-600' },
        { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-800' }
    ]
};

function initializeSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');

    function renderSkills(category) {
        const skills = skillsData[category];
        
        // Add fade out effect
        skillsGrid.style.opacity = '0';
        skillsGrid.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            skillsGrid.innerHTML = skills.map(skill => `
                <div class="skill-card bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                    <div class="mb-4">
                        <i class="${skill.icon} text-4xl ${skill.color}"></i>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">${skill.name}</h3>
                </div>
            `).join('');
            
            // Add fade in effect
            skillsGrid.style.opacity = '1';
            skillsGrid.style.transform = 'scale(1)';
        }, 150);
    }

    function updateActiveButton(activeCategory) {
        categoryButtons.forEach(btn => {
            if (btn.dataset.category === activeCategory) {
                btn.className = 'category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 bg-blue-600 text-white';
            } else {
                btn.className = 'category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-300';
            }
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            renderSkills(category);
            updateActiveButton(category);
        });
    });

    // Initialize with Frontend skills
    renderSkills('frontend');
}

// Custom JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Interactive Skills Section
    initializeSkills();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                const navbarToggler = document.querySelector('.navbar-toggler');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    navbarToggler.classList.add('collapsed');
                }
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const scrollPosition = window.scrollY + navbarHeight + 100;
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        if (currentSection) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                if (navLink.getAttribute('href') === `#${currentSection}`) {
                    navLink.classList.add('active');
                }
            });
        }
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.98)';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (in real app, this would send to a server)
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.innerHTML = '<span class="loading"></span> Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // Show form message
    function showFormMessage(message, type) {
        const existingMessage = document.querySelector('.form-success, .form-error');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
        messageDiv.textContent = message;
        
        const contactForm = document.getElementById('contactForm');
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-info, .contact-form');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
    
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const heroImage = document.querySelector('.hero-image img');
        
        if (heroSection && heroImage) {
            const speed = 0.5;
            heroImage.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add ripple effect to buttons
        const buttons = card.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    });
    
    // Mobile menu close on link click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
                navbarToggler.classList.add('collapsed');
            }
        });
    });
    
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.classList.contains('no-loading') && !this.classList.contains('navbar-toggler')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const heroImage = document.querySelector('.hero-image img');
        
        if (heroSection && heroImage && scrolled < heroSection.offsetHeight) {
            const speed = 0.5;
            heroImage.style.transform = `translateY(${scrolled * speed}px) scale(1.05)`;
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                document.querySelector('.navbar-toggler').classList.add('collapsed');
            }
        }
    });
    
    // Console welcome message
    console.log('%c👋 Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with HTML5, CSS3, Bootstrap 5, and Tailwind CSS', 'color: #764ba2; font-size: 14px;');
});
