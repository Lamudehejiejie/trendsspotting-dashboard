class DashboardController {
    constructor() {
        this.currentProfileIndex = 0;
        this.isTransitioning = false;
        this.dynamicProfileGenerator = new DynamicProfileGenerator();
        this.carouselManager = new CarouselManager(this);
        this.liveTabsManager = new LiveTabsManager(this);
        this.brightnessDetector = new BrightnessDetector();
        this.allProfiles = [...artistProfiles]; // Start with static profiles
        this.realTimeUpdateInterval = null;
        this.init();
    }

    async init() {
        // Always start with static profiles to ensure tabs are visible immediately
        this.allProfiles = [...artistProfiles];

        // Create initial navigation with static profiles
        this.createProfileNavigation();
        this.setupEventListeners();
        this.updateProfile(0, false);
        this.startAutoRotation();

        // Initialize event tabs in background (this will update navigation when done)
        this.liveTabsManager.initializeLiveTabs();
    }

    onEventTabsUpdated(updateType, eventProfiles) {
        // Callback for when event tabs are updated
        console.log(`🔄 Event tabs updated: ${updateType}`);

        const wasViewingEventTab = this.allProfiles[this.currentProfileIndex]?.isEventTab;
        const hadEventTabs = this.allProfiles.some(p => p.isEventTab);

        // Remove existing event profiles and add new ones
        this.allProfiles = this.allProfiles.filter(p => !p.isEventTab);
        this.allProfiles = [...eventProfiles, ...artistProfiles];

        // Recreate navigation with new event tabs
        this.createProfileNavigation();

        // Auto-jump logic for new real-time tabs
        const currentProfile = this.allProfiles[this.currentProfileIndex];
        const isOnSystemTab = currentProfile && (
            currentProfile.category === 'loading' ||
            currentProfile.category === 'error' ||
            currentProfile.category === 'system'
        );

        if (updateType === 'events-created' && eventProfiles.length > 0 && isOnSystemTab) {
            // New event tabs were created and user is on a system tab, jump to the first event
            console.log('🎯 New events found, jumping from system tab to first event tab');
            this.currentProfileIndex = 0;
            this.updateProfile(0, true);
        } else if (wasViewingEventTab && eventProfiles.length === 0) {
            // Was viewing an event tab but no events available, go to first static profile
            console.log('📋 No events available, switching to static profiles');
            this.currentProfileIndex = eventProfiles.length; // First static profile
            this.updateProfile(this.currentProfileIndex, true);
        } else if (this.currentProfileIndex >= this.allProfiles.length) {
            // Current index is out of bounds, go to first available tab
            this.currentProfileIndex = 0;
            this.updateProfile(0, true);
        }
        // Don't auto-jump if user is actively viewing static profiles

        console.log(`✅ Updated navigation with ${eventProfiles.length} event tabs + ${artistProfiles.length} static profiles`);
    }

    updateNavigationCard(index, profile) {
        const artistCard = document.querySelector(`.artist-card[data-index="${index}"]`);
        if (artistCard) {
            const nameElement = artistCard.querySelector('.artist-name');
            const domainElement = artistCard.querySelector('.artist-domain');

            if (nameElement) nameElement.textContent = profile.name;
            if (domainElement) domainElement.textContent = profile.tags[0];

            // Update loading state
            if (profile.isLoading) {
                artistCard.classList.add('loading');
            } else {
                artistCard.classList.remove('loading');
            }
        }
    }


    createProfileNavigation() {
        const artistNavigation = document.querySelector('.artist-navigation');
        artistNavigation.innerHTML = `
            <div class="carousel-container">
                <button class="carousel-nav prev" aria-label="Previous profiles">‹</button>
                <div class="artist-carousel">
                    <div class="artist-list">
                        ${this.allProfiles.map((profile, index) => `
                            <button class="artist-card ${index === 0 ? 'active' : ''} ${profile.isEventTab ? 'event-tab-profile' : ''} ${profile.isLiveTab ? 'live-tab-profile' : ''} ${profile.isLoading ? 'loading' : ''}"
                                    data-index="${index}">
                                <div class="artist-name">${profile.name}</div>
                                <div class="artist-domain">${profile.tags[0]}</div>
                                ${profile.isCurrentlyTrending ? '<div class="mini-trending">●</div>' : ''}
                                ${profile.isEventTab ? '<div class="event-indicator">EVENT</div>' : ''}
                                ${profile.isLiveTab ? '<div class="live-indicator">LIVE</div>' : ''}
                                ${profile.isLoading ? '<div class="loading-indicator">⟳</div>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <button class="carousel-nav next" aria-label="Next profiles">›</button>
            </div>
        `;

        // Re-attach event listeners for artist cards
        document.querySelectorAll('.artist-card').forEach((btn, index) => {
            btn.addEventListener('click', () => this.switchToProfile(index));
        });

        // Setup carousel navigation
        this.carouselManager.setup();
    }

    setupEventListeners() {
        // Keyboard navigation for profiles
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && !e.shiftKey) this.previousProfile();
            if (e.key === 'ArrowRight' && !e.shiftKey) this.nextProfile();
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
        const nextIndex = (this.currentProfileIndex + 1) % this.allProfiles.length;
        this.switchToProfile(nextIndex);
    }

    previousProfile() {
        const prevIndex = this.currentProfileIndex === 0 
            ? this.allProfiles.length - 1 
            : this.currentProfileIndex - 1;
        this.switchToProfile(prevIndex);
    }

    updateProfile(index, animate = true) {
        if (this.isTransitioning) return;
        
        const profile = this.allProfiles[index];
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

        // Reset background image first
        backgroundLayer.style.backgroundImage = '';
        
        // Add loading class if profile is loading
        const mainContent = document.querySelector('.main-content');
        if (profile.isLoading) {
            mainContent.classList.add('trending-loading');
        } else {
            mainContent.classList.remove('trending-loading');
        }

        // Update title with trending indicator
        const titleElement = document.querySelector('.main-title');
        const trendingIndicator = profile.isCurrentlyTrending ?
            '<span class="trending-badge">TRENDING</span>' : '';

        // For event tabs, show the actual event title prominently and website name smaller
        if (profile.isEventTab && profile.eventData) {
            titleElement.innerHTML = `
                <span class="event-source">${profile.name}</span>${trendingIndicator}<br>
                <span class="title-highlight">${profile.eventData.title}</span>
            `;
            // Apply adaptive sizing for event title
            this.applyAdaptiveTextSizing(titleElement.querySelector('.title-highlight'), profile.eventData.title);
        } else {
            titleElement.innerHTML = `
                ${profile.name}${trendingIndicator}<br>
                <span class="title-highlight">${profile.subtitle}</span>
            `;
            // Apply adaptive sizing for subtitle
            this.applyAdaptiveTextSizing(titleElement.querySelector('.title-highlight'), profile.subtitle);
        }

        // Update subtitle with year and social handle
        const subtitleElement = document.querySelector('.title-subtitle');
        subtitleElement.innerHTML = `
            ${profile.year}
            <a href="${profile.social.url}" target="_blank" rel="noopener noreferrer" class="social-handle">${profile.social.handle}</a>
        `;

        // Update description
        const descriptionElement = document.querySelector('.description-text');
        descriptionElement.textContent = profile.description;

        // Update metrics (now dynamic based on profile data)
        const metricItems = document.querySelectorAll('.metric-item');
        const metricKeys = Object.keys(profile.metrics);
        metricItems.forEach((item, index) => {
            const valueElement = item.querySelector('.metric-value');
            const labelElement = item.querySelector('.metric-label');
            if (metricKeys[index]) {
                const key = metricKeys[index];
                valueElement.textContent = profile.metrics[key];
                labelElement.textContent = key.toUpperCase();
                
                // Add loading class for metrics if profile is loading
                if (profile.isLoading) {
                    item.classList.add('metric-loading');
                } else {
                    item.classList.remove('metric-loading');
                }
            }
        });

        // Update tags
        const tagsContainer = document.querySelector('.tags-container');
        if (tagsContainer) {
            tagsContainer.innerHTML = profile.tags.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
        }

        // Update trending items
        const trendingItems = document.querySelector('.trending-items');
        trendingItems.innerHTML = profile.trending.map(item => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="trending-item">
                <div class="trending-title">${item.title}</div>
                <div class="trending-location">${item.location}</div>
            </a>
        `).join('');
        
        // Update background image and detect brightness
        if (profile.backgroundImage) {
            const backgroundLayer = document.querySelector('.background-layer');
            backgroundLayer.style.backgroundImage = `url(${profile.backgroundImage})`;
            backgroundLayer.style.backgroundSize = 'cover';
            backgroundLayer.style.backgroundPosition = 'center';
            backgroundLayer.style.backgroundBlendMode = 'overlay';

            // Detect brightness of the background image
            this.brightnessDetector.detectBackgroundBrightness(profile.backgroundImage);
        } else {
            // No background image, analyze gradient background
            this.brightnessDetector.detectGradientBrightness(profile.background || '');
        }
        
        // Update profile photo (only if element exists)
        if (profile.artistPhoto) {
            const photoPlaceholder = document.querySelector('.photo-placeholder');
            if (photoPlaceholder) {
                photoPlaceholder.innerHTML = `<img src="${profile.artistPhoto}" alt="${profile.name}" class="artist-photo">`;
            }
        }
    }

    fadeOutElements() {
        const elements = [
            '.title-section',
            '.description-section',
            '.tags-section',
            '.side-panel'
        ];

        elements.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
            }
        });
    }

    fadeInElements() {
        const elements = [
            '.title-section',
            '.description-section',
            '.tags-section',
            '.side-panel'
        ];

        elements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }

    updateNavigation(index) {
        document.querySelectorAll('.artist-card').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
        
        // Update carousel scroll to show active card
        this.carouselManager.scrollToActiveCard();
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

    applyAdaptiveTextSizing(element, text) {
        if (!element || !text) return;

        // Remove existing size classes
        element.classList.remove('short-text', 'medium-text', 'long-text', 'very-long-text');

        // Determine text length category
        const textLength = text.length;

        if (textLength <= 30) {
            element.classList.add('short-text');
        } else if (textLength <= 50) {
            element.classList.add('medium-text');
        } else if (textLength <= 80) {
            element.classList.add('long-text');
        } else {
            element.classList.add('very-long-text');
        }

        console.log(`📏 Applied adaptive sizing: ${textLength} chars -> ${element.className.split(' ').find(c => c.endsWith('-text'))}`);
    }
}