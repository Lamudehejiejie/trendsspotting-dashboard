class DashboardController {
    constructor() {
        this.currentProfileIndex = 0;
        this.isTransitioning = false;
        this.dynamicProfileGenerator = new DynamicProfileGenerator();
        this.carouselManager = new CarouselManager(this);
        this.liveTabsManager = new LiveTabsManager(this);
        this.allProfiles = [...artistProfiles]; // Start with static profiles
        this.realTimeUpdateInterval = null;
        this.init();
    }

    async init() {
        // Initialize live tabs first
        await this.liveTabsManager.initializeLiveTabs();

        // Add live profiles to the beginning of all profiles
        const liveProfiles = this.liveTabsManager.getAllLiveProfiles();
        this.allProfiles = [...liveProfiles, ...artistProfiles];

        this.createProfileNavigation();
        this.setupEventListeners();
        this.updateProfile(0, false);
        this.startAutoRotation();
    }

    onLiveTabUpdated(categoryKey, updatedProfile) {
        // Callback for when a live tab gets updated
        const profileIndex = this.allProfiles.findIndex(p =>
            p.isLiveTab && p.category === categoryKey
        );

        if (profileIndex !== -1) {
            this.allProfiles[profileIndex] = updatedProfile;

            // If this is the currently displayed profile, update the view
            if (profileIndex === this.currentProfileIndex) {
                this.updateContent(updatedProfile);
            }

            // Update navigation to reflect changes
            this.updateNavigationCard(profileIndex, updatedProfile);

            console.log(`🔄 Updated live tab: ${updatedProfile.name}`);
        }
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
                            <button class="artist-card ${index === 0 ? 'active' : ''} ${profile.isLiveTab ? 'live-tab-profile' : ''} ${profile.isLoading ? 'loading' : ''}"
                                    data-index="${index}">
                                <div class="artist-name">${profile.name}</div>
                                <div class="artist-domain">${profile.tags[0]}</div>
                                ${profile.isCurrentlyTrending ? '<div class="mini-trending">●</div>' : ''}
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
        titleElement.innerHTML = `
            ${profile.name}${trendingIndicator}<br>
            <span class="title-highlight">${profile.subtitle}</span>
        `;

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
        
        // Update background image
        if (profile.backgroundImage) {
            const backgroundLayer = document.querySelector('.background-layer');
            backgroundLayer.style.backgroundImage = `url(${profile.backgroundImage})`;
            backgroundLayer.style.backgroundSize = 'cover';
            backgroundLayer.style.backgroundPosition = 'center';
            backgroundLayer.style.backgroundBlendMode = 'overlay';
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
}