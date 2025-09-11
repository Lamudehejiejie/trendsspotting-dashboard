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

    // Interactive logo effects
    const usnLogo = document.getElementById('usnLogo');
    const claudeLogo = document.getElementById('claudeLogo');

    // USN Logo rotation effect
    if (usnLogo) {
        usnLogo.addEventListener('mousemove', (e) => {
            const rect = usnLogo.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            
            usnLogo.style.transform = `rotate(${angle}deg)`;
        });

        usnLogo.addEventListener('mouseleave', () => {
            usnLogo.style.transform = 'rotate(0deg)';
        });
    }

    // Claude Logo stretch effect
    if (claudeLogo) {
        claudeLogo.addEventListener('mousemove', (e) => {
            const rect = claudeLogo.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            
            // Normalize distances to [0, 1] range
            const maxDistance = Math.max(rect.width, rect.height) / 2;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const stretchFactor = Math.max(0, 1 - distance / maxDistance) * 0.3 + 1;
            
            // Calculate direction for stretch
            const angle = Math.atan2(deltaY, deltaX);
            const stretchX = 1 + Math.cos(angle) * (stretchFactor - 1) * 0.5;
            const stretchY = 1 + Math.sin(angle) * (stretchFactor - 1) * 0.5;
            
            claudeLogo.style.transform = `scale(${stretchX}, ${stretchY})`;
        });

        claudeLogo.addEventListener('mouseleave', () => {
            claudeLogo.style.transform = 'scale(1, 1)';
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