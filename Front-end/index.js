document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            /*if('click', function){
                
            }*/
            alert('Navigation to ' + this.textContent + ' section');
        });
    });

    const bookNowBtn = document.querySelector('.btn');
    bookNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Booking functionality would be implemented here');
    });

    const learnMoreLink = document.querySelector('.stay-content a');
    learnMoreLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Learn More functionality would be implemented here');
    });

    // Add scroll event listener for header shadow
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1s ease forwards`;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stay, footer').forEach(el => observer.observe(el));
    document.querySelectorAll('.dine').forEach(el => observer.observe(el));
});
document.querySelector('.dine-content a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Learn More about Dining functionality would be implemented here');
});
document.querySelector('.event-content a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Learn More about Dining functionality would be implemented here');
});

const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateModeToggleButton(isDarkMode);
});

function updateModeToggleButton(isDarkMode) {
    const icon = modeToggle.querySelector('svg');
    const text = modeToggle.querySelector('span');
    if (isDarkMode) {
        icon.innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        `;
        text.textContent = '';
    } else {
        icon.innerHTML = `
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        `;
        text.textContent = '';
    }
}

// Check for saved user preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
    body.classList.add('dark-mode');
    updateModeToggleButton(true);
} else {
    updateModeToggleButton(false);
}