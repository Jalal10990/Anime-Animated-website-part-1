
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ff1493" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00bfff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.featured-shows, .character-spotlight');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    document.querySelectorAll('.featured-shows, .character-spotlight').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Load featured shows dynamically
    const featuredShows = [
        { title: "Demon Slayer", image: "images/shows/demon-slayer.jpg", rating: 4.9 },
        { title: "Attack on Titan", image: "images/shows/aot.jpg", rating: 5.0 },
        { title: "Jujutsu Kaisen", image: "images/shows/jujutsu.jpg", rating: 4.8 },
        { title: "My Hero Academia", image: "images/shows/mha.jpg", rating: 4.7 },
        { title: "One Piece", image: "images/shows/one-piece.jpg", rating: 4.9 }
    ];

    const carousel = document.querySelector('.show-carousel');
    
    featuredShows.forEach(show => {
        const showCard = document.createElement('div');
        showCard.className = 'show-card';
        showCard.innerHTML = `
            <div class="show-image">
                <img src="${show.image}" alt="${show.title}">
                <div class="show-rating">${show.rating} <i class="fas fa-star"></i></div>
            </div>
            <h3>${show.title}</h3>
        `;
        carousel.appendChild(showCard);
    });

    // Character spotlight animation
    const character = document.querySelector('.character-float');
    character.addEventListener('mouseover', () => {
        anime({
            targets: character,
            scale: 1.1,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });
    
    character.addEventListener('mouseout', () => {
        anime({
            targets: character,
            scale: 1,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });

    // Add glitch effect to logo text
    const logoText = document.querySelector('.logo-text');
    setInterval(() => {
        if (Math.random() > 0.7) {
            logoText.classList.add('glitch');
            setTimeout(() => {
                logoText.classList.remove('glitch');
            }, 1000);
        }
    }, 3000);
});

const themeColors = {
    default: { primary: '#ff1493', secondary: '#00bfff' },
    shonen: { primary: '#ff0000', secondary: '#ffcc00' },
    shojo: { primary: '#ff69b4', secondary: '#9370db' },
    seinen: { primary: '#4169e1', secondary: '#32cd32' }
};

function changeTheme(theme) {
    document.documentElement.style.setProperty('--primary', themeColors[theme].primary);
    document.documentElement.style.setProperty('--secondary', themeColors[theme].secondary);
}
// Create a 360° view of characters
const characterViewer = document.querySelector('.character-viewer');
let rotation = 0;

characterViewer.addEventListener('mousemove', (e) => {
    const rect = characterViewer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    rotation = (x / rect.width) * 360;
    characterViewer.style.transform = `rotateY($)`
    });