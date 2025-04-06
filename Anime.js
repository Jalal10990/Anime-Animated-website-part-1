// Example: Title entrance animation
anime({
    targets: '.hero-title',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1500,
    easing: 'easeOutExpo'
});

// Example: Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        anime({
            targets: btn,
            scale: 1.05,
            duration: 300
        });
    });
    btn.addEventListener('mouseleave', () => {
        anime({
            targets: btn,
            scale: 1,
            duration: 300
        });
    });
});