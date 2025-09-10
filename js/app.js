// Main Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize dashboard
    const dashboard = new DashboardController();
    
    // Add some interactive effects
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.01;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        const gradientOverlay = document.querySelector('.gradient-overlay');
        if (gradientOverlay) {
            gradientOverlay.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
    });

    // Add glitch effect to title on hover
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.addEventListener('mouseenter', () => {
            mainTitle.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        mainTitle.addEventListener('animationend', () => {
            mainTitle.style.animation = '';
        });
    }

    // Console welcome message
    console.log(`
    🎨 Trendspotting Dashboard v2.0
    ================================
    
    ✨ Features:
    • Real-time RSS integration
    • Interactive carousel navigation  
    • Drag & scroll controls
    • Live content updates
    
    🎛️ Controls:
    • Arrow keys: Navigate profiles
    • Shift + Arrow keys: Scroll carousel
    • Mouse drag: Scroll carousel
    • Mouse wheel: Scroll carousel
    
    🔧 Debug:
    • Check console for RSS feed status
    • Real-time updates every 15 minutes
    `);
});