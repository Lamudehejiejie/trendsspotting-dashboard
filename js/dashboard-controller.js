class DashboardController {
    constructor() {
        this.currentProfileIndex = 0;
        this.isTransitioning = false;
        this.dynamicProfileGenerator = new DynamicProfileGenerator();
        this.carouselManager = new CarouselManager(this);
        this.allProfiles = [...artistProfiles]; // Start with static profiles
        this.realTimeUpdateInterval = null;
        this.init();
    }

    async init() {
        this.createProfileNavigation();
        this.setupEventListeners();
        this.updateProfile(0, false);
        this.startAutoRotation();
        
        // Load real-time content
        await this.loadRealTimeProfiles();
        this.startRealTimeUpdates();
    }

    async loadRealTimeProfiles() {
        try {
            console.log('Loading real-time profiles...');
            const articles = await this.dynamicProfileGenerator.rssParser.getAllRelevantArticles();
            
            console.log('Found articles:', articles.length);
            if (articles.length > 0) {
                console.log('Sample articles with dates and images:');
                articles.slice(0, 3).forEach(article => {
                    const imageStatus = article.imageUrl ? '🖼️' : '📝';
                    console.log(`${imageStatus} ${article.title} (${article.pubDate.toISOString()}) from ${article.source}`);
                    if (article.imageUrl) {
                        console.log(`   Image: ${article.imageUrl}`);
                    }
                });
                
                const realTimeProfile = await this.dynamicProfileGenerator.generateProfileFromArticles(articles);
                
                if (realTimeProfile) {
                    // Remove any existing real-time profiles
                    this.allProfiles = this.allProfiles.filter(p => !p.isRealTime);
                    
                    // Add new real-time profile at the beginning
                    this.allProfiles.unshift(realTimeProfile);
                    
                    // Update navigation
                    this.createProfileNavigation();
                    
                    console.log(`✅ Added real-time profile: ${realTimeProfile.name}`);
                    console.log(`Based on ${articles.length} articles from ${new Set(articles.map(a => a.source)).size} sources`);
                }
            } else {
                console.log('❌ No relevant articles found. Creating fallback profile...');
                
                // Create a fallback real-time profile even if no articles found
                const fallbackProfile = {
                    id: `trending-fallback-${Date.now()}`,
                    name: 'TRENDING NOW',
                    subtitle: 'REAL-TIME INSIGHTS',
                    year: 'LIVE FEED',
                    description: 'Currently updating with the latest trends from fashion, tech, and culture. New content loading...',
                    background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #ff6b35 100%)',
                    backgroundImage: '',
                    artistPhoto: '',
                    social: {
                        handle: '@trendspotting',
                        url: '#'
                    },
                    isCurrentlyTrending: true,
                    metrics: {
                        status: 'LOADING',
                        updated: 'LIVE',
                        sources: 'Multiple'
                    },
                    tags: ['TRENDING', 'REAL-TIME', 'LOADING'],
                    trending: [
                        { title: 'Content Loading...', location: 'Multiple Sources', url: '#' },
                        { title: 'Fetching Latest Trends...', location: 'RSS Feeds', url: '#' },
                        { title: 'Real-time Updates Coming...', location: 'Live Data', url: '#' }
                    ],
                    isRealTime: true,
                    lastUpdated: new Date()
                };
                
                // Remove any existing real-time profiles
                this.allProfiles = this.allProfiles.filter(p => !p.isRealTime);
                
                // Add fallback profile
                this.allProfiles.unshift(fallbackProfile);
                
                // Update navigation
                this.createProfileNavigation();
                
                console.log('📱 Added fallback real-time profile');
                
                // Debug: check individual feeds
                for (const feedConfig of RSS_FEEDS) {
                    try {
                        const feedArticles = await this.dynamicProfileGenerator.rssParser.fetchFeed(feedConfig);
                        console.log(`${feedConfig.name}: ${feedArticles.length} relevant articles`);
                    } catch (feedError) {
                        console.error(`❌ Error fetching ${feedConfig.name}:`, feedError);
                    }
                }
            }
        } catch (error) {
            console.error('❌ Error loading real-time profiles:', error);
            
            // Always ensure there's a live profile, even on error
            if (!this.allProfiles.some(p => p.isRealTime)) {
                const errorProfile = {
                    id: `trending-error-${Date.now()}`,
                    name: 'TRENDING SYSTEM',
                    subtitle: 'REAL-TIME INSIGHTS',
                    year: 'LIVE FEED',
                    description: 'Real-time content system is initializing. Check console for debug information.',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                    backgroundImage: '',
                    artistPhoto: '',
                    social: {
                        handle: '@trendspotting',
                        url: '#'
                    },
                    isCurrentlyTrending: true,
                    metrics: {
                        status: 'ERROR',
                        updated: 'LIVE',
                        sources: 'Debug'
                    },
                    tags: ['SYSTEM', 'DEBUG', 'LIVE'],
                    trending: [
                        { title: 'System Status: Debugging', location: 'Console', url: '#' },
                        { title: 'Check Browser Console', location: 'Developer Tools', url: '#' },
                        { title: 'RSS Feed Diagnostics', location: 'Network Tab', url: '#' }
                    ],
                    isRealTime: true,
                    lastUpdated: new Date()
                };
                
                this.allProfiles = this.allProfiles.filter(p => !p.isRealTime);
                this.allProfiles.unshift(errorProfile);
                this.createProfileNavigation();
            }
        }
    }

    startRealTimeUpdates() {
        // Update real-time content every 15 minutes
        this.realTimeUpdateInterval = setInterval(() => {
            this.loadRealTimeProfiles();
        }, 15 * 60 * 1000);
    }

    createProfileNavigation() {
        const artistNavigation = document.querySelector('.artist-navigation');
        artistNavigation.innerHTML = `
            <div class="carousel-container">
                <button class="carousel-nav prev" aria-label="Previous profiles">‹</button>
                <div class="artist-carousel">
                    <div class="artist-list">
                        ${this.allProfiles.map((profile, index) => `
                            <button class="artist-card ${index === 0 ? 'active' : ''} ${profile.isRealTime ? 'real-time-profile' : ''}" 
                                    data-index="${index}">
                                <div class="artist-name">${profile.name}</div>
                                <div class="artist-domain">${profile.tags[0]}</div>
                                ${profile.isCurrentlyTrending ? '<div class="mini-trending">●</div>' : ''}
                                ${profile.isRealTime ? '<div class="live-indicator">LIVE</div>' : ''}
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