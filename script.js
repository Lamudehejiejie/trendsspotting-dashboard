// Artist Profile Data
const artistProfiles = [
    {
        id: 'teamlab',
        name: 'TEAMLAB',
        subtitle: 'DIGITAL ART COLLECTIVE',
        year: '2001 - PRESENT',
        description: 'TeamLab creates immersive digital art experiences that blur boundaries between art, science, technology, and nature. Their borderless exhibitions redefine spatial relationships through interactive installations.',
        background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%)',
        metrics: {
            projects: '150+',
            venues: '50+',
            visitors: '5.2M'
        },
        tags: ['INTERACTIVE ART', 'PROJECTION MAPPING', 'AI COLLABORATION', 'BORDERLESS SPACE', 'NATURE SIMULATION'],
        trending: [
            { title: 'Borderless World Tokyo', location: 'Odaiba' },
            { title: 'Planets Exhibition', location: 'Toyosu' },
            { title: 'Forest of Resonating Lamps', location: 'Global Tour' }
        ]
    },
    {
        id: 'rhizomatiks',
        name: 'RHIZOMATIKS',
        subtitle: 'RESEARCH & PERFORMANCE',
        year: '2006 - PRESENT',
        description: 'Rhizomatiks Research explores the potential of technology as a medium for artistic expression, creating performances that merge human movement with digital precision and data visualization.',
        background: 'linear-gradient(135deg, #b71c1c 0%, #e53935 50%, #ef5350 100%)',
        metrics: {
            projects: '200+',
            venues: '35+',
            visitors: '3.1M'
        },
        tags: ['MOTION CAPTURE', 'DATA VISUALIZATION', 'LIVE PERFORMANCE', 'DRONE CHOREOGRAPHY', 'AR INTEGRATION'],
        trending: [
            { title: 'ELEVENPLAY Collaboration', location: 'Shibuya' },
            { title: 'Perfume Live Concert Tech', location: 'Tokyo Dome' },
            { title: 'Olympic Opening Ceremony', location: 'National Stadium' }
        ]
    },
    {
        id: 'exonemo',
        name: 'EXONEMO',
        subtitle: 'NET ART PIONEERS',
        year: '1996 - PRESENT',
        description: 'exonemo pioneers internet art and digital culture critique through glitch aesthetics, browser-based installations, and explorations of digital-physical boundaries in contemporary society.',
        background: 'linear-gradient(135deg, #1b5e20 0%, #43a047 50%, #66bb6a 100%)',
        metrics: {
            projects: '80+',
            venues: '25+',
            visitors: '1.8M'
        },
        tags: ['NET ART', 'GLITCH AESTHETICS', 'BROWSER ART', 'DIGITAL CRITIQUE', 'INTERNET CULTURE'],
        trending: [
            { title: 'The Road Movie', location: 'Online/Global' },
            { title: 'Discoder Installation', location: 'ICC Tokyo' },
            { title: 'Natural Process', location: 'Ars Electronica' }
        ]
    },
    {
        id: 'sensorium',
        name: 'SENSORIUM',
        subtitle: 'SENSORY TECHNOLOGY',
        year: '2010 - PRESENT',
        description: 'Sensorium creates multisensory experiences using biometric data, environmental sensors, and responsive installations that react to human presence and emotional states in real-time.',
        background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 50%, #9c27b0 100%)',
        metrics: {
            projects: '45+',
            venues: '20+',
            visitors: '900K'
        },
        tags: ['BIOMETRIC ART', 'SENSOR NETWORKS', 'EMOTIONAL COMPUTING', 'RESPONSIVE SPACES', 'HUMAN-AI INTERACTION'],
        trending: [
            { title: 'Pulse Chamber', location: 'Mori Art Museum' },
            { title: 'Emotional Landscapes', location: 'Digital Art Fair' },
            { title: 'Breathing Buildings', location: 'Architecture Biennale' }
        ]
    }
];

class DashboardController {
    constructor() {
        this.currentProfileIndex = 0;
        this.isTransitioning = false;
        this.init();
    }

    init() {
        this.createProfileNavigation();
        this.updateProfile(0, false);
        this.setupEventListeners();
        this.startAutoRotation();
    }

    createProfileNavigation() {
        const navContainer = document.createElement('div');
        navContainer.className = 'profile-navigation';
        navContainer.innerHTML = `
            <div class="profile-nav-items">
                ${artistProfiles.map((profile, index) => `
                    <button class="profile-nav-item ${index === 0 ? 'active' : ''}" 
                            data-index="${index}">
                        <span class="profile-nav-name">${profile.name}</span>
                        <span class="profile-nav-subtitle">${profile.subtitle}</span>
                    </button>
                `).join('')}
            </div>
            <div class="profile-controls">
                <button class="profile-control prev" id="prevProfile">
                    <span>←</span>
                </button>
                <button class="profile-control next" id="nextProfile">
                    <span>→</span>
                </button>
            </div>
        `;

        const mainContent = document.querySelector('.main-content');
        mainContent.appendChild(navContainer);
    }

    setupEventListeners() {
        // Profile navigation buttons
        document.querySelectorAll('.profile-nav-item').forEach((btn, index) => {
            btn.addEventListener('click', () => this.switchToProfile(index));
        });

        // Control buttons
        document.getElementById('prevProfile').addEventListener('click', () => this.previousProfile());
        document.getElementById('nextProfile').addEventListener('click', () => this.nextProfile());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousProfile();
            if (e.key === 'ArrowRight') this.nextProfile();
        });

        // Pause auto-rotation on hover
        const dashboard = document.querySelector('.dashboard');
        dashboard.addEventListener('mouseenter', () => this.pauseAutoRotation());
        dashboard.addEventListener('mouseleave', () => this.resumeAutoRotation());
    }

    switchToProfile(index) {
        if (this.isTransitioning || index === this.currentProfileIndex) return;
        
        this.currentProfileIndex = index;
        this.updateProfile(index, true);
        this.updateNavigation(index);
    }

    nextProfile() {
        const nextIndex = (this.currentProfileIndex + 1) % artistProfiles.length;
        this.switchToProfile(nextIndex);
    }

    previousProfile() {
        const prevIndex = this.currentProfileIndex === 0 
            ? artistProfiles.length - 1 
            : this.currentProfileIndex - 1;
        this.switchToProfile(prevIndex);
    }

    updateProfile(index, animate = true) {
        if (this.isTransitioning) return;
        
        const profile = artistProfiles[index];
        this.isTransitioning = true;

        if (animate) {
            // Fade out current content
            this.fadeOutElements();
            
            setTimeout(() => {
                this.updateContent(profile);
                this.fadeInElements();
                this.isTransitioning = false;
            }, 300);
        } else {
            this.updateContent(profile);
            this.isTransitioning = false;
        }
    }

    updateContent(profile) {
        // Update background
        const backgroundLayer = document.querySelector('.background-layer');
        backgroundLayer.style.background = profile.background;

        // Update title
        const titleElement = document.querySelector('.main-title');
        titleElement.innerHTML = `
            ${profile.name}<br>
            <span class="title-highlight">${profile.subtitle}</span>
        `;

        // Update subtitle
        const subtitleElement = document.querySelector('.title-subtitle');
        subtitleElement.textContent = profile.year;

        // Update description
        const descriptionElement = document.querySelector('.description-text');
        descriptionElement.textContent = profile.description;

        // Update metrics
        const metricItems = document.querySelectorAll('.metric-item');
        const metricKeys = ['projects', 'venues', 'visitors'];
        metricItems.forEach((item, index) => {
            const valueElement = item.querySelector('.metric-value');
            const labelElement = item.querySelector('.metric-label');
            const key = metricKeys[index];
            if (profile.metrics[key]) {
                valueElement.textContent = profile.metrics[key];
                labelElement.textContent = key.toUpperCase();
            }
        });

        // Update tags
        const tagsContainer = document.querySelector('.tags-container');
        tagsContainer.innerHTML = profile.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');

        // Update trending items
        const trendingItems = document.querySelector('.trending-items');
        trendingItems.innerHTML = profile.trending.map(item => `
            <div class="trending-item">
                <div class="trending-title">${item.title}</div>
                <div class="trending-location">${item.location}</div>
            </div>
        `).join('');
    }

    fadeOutElements() {
        const elements = [
            '.title-section',
            '.description-section',
            '.characteristics',
            '.side-panel'
        ];

        elements.forEach(selector => {
            const element = document.querySelector(selector);
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        });
    }

    fadeInElements() {
        const elements = [
            '.title-section',
            '.description-section',
            '.characteristics',
            '.side-panel'
        ];

        elements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    updateNavigation(index) {
        document.querySelectorAll('.profile-nav-item').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    startAutoRotation() {
        this.autoRotationInterval = setInterval(() => {
            if (!this.isPaused) {
                this.nextProfile();
            }
        }, 8000); // Switch every 8 seconds
    }

    pauseAutoRotation() {
        this.isPaused = true;
    }

    resumeAutoRotation() {
        this.isPaused = false;
    }

    stopAutoRotation() {
        if (this.autoRotationInterval) {
            clearInterval(this.autoRotationInterval);
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DashboardController();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for background
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.01;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        const gradientOverlay = document.querySelector('.gradient-overlay');
        gradientOverlay.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Add glitch effect to title on hover
    const mainTitle = document.querySelector('.main-title');
    mainTitle.addEventListener('mouseenter', () => {
        mainTitle.style.animation = 'glitch 0.3s ease-in-out';
    });
    
    mainTitle.addEventListener('animationend', () => {
        mainTitle.style.animation = '';
    });
});