class LiveTabsManager {
    constructor(dashboardController) {
        this.dashboardController = dashboardController;
        this.rssParser = new RSSFeedParser();
        this.profileGenerator = new DynamicProfileGenerator();
        this.liveProfiles = new Map();
        this.savedProfiles = new Map(); // For auto-save functionality
        this.updateIntervals = new Map();

        // Define live tab categories with their display names and descriptions
        this.liveCategories = {
            'trending': {
                name: 'TRENDING NOW',
                subtitle: 'ALL CATEGORIES',
                description: 'Real-time trending content across all categories',
                color: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                icon: '🔥',
                keywords: ['trending', 'viral', 'popular', 'hot', 'breaking']
            },
            'tech': {
                name: 'TECH LIVE',
                subtitle: 'TECHNOLOGY & AI',
                description: 'Latest technology trends, AI breakthroughs, and digital innovations',
                color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                icon: '💻',
                keywords: ['AI', 'tech', 'software', 'startup', 'innovation']
            },
            'fashion': {
                name: 'FASHION LIVE',
                subtitle: 'STYLE & STREETWEAR',
                description: 'Latest fashion trends, designer drops, and streetwear culture',
                color: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
                icon: '👗',
                keywords: ['fashion', 'style', 'designer', 'streetwear', 'runway']
            },
            'music': {
                name: 'MUSIC LIVE',
                subtitle: 'FESTIVALS & ARTISTS',
                description: 'Latest music releases, festival announcements, and artist news',
                color: 'linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%)',
                icon: '🎵',
                keywords: ['music', 'festival', 'concert', 'artist', 'album']
            },
            'design': {
                name: 'DESIGN LIVE',
                subtitle: 'CREATIVE & VISUAL',
                description: 'Latest design trends, creative works, and visual culture',
                color: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
                icon: '🎨',
                keywords: ['design', 'creative', 'visual', 'typography', 'branding']
            },
            'art': {
                name: 'ART LIVE',
                subtitle: 'CONTEMPORARY & DIGITAL',
                description: 'Latest art exhibitions, installations, and digital art movements',
                color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
                icon: '🖼️',
                keywords: ['art', 'gallery', 'exhibition', 'installation', 'contemporary']
            },
            'social-trends': {
                name: 'SOCIAL LIVE',
                subtitle: 'VIRAL & TRENDING',
                description: 'Social media trends, viral content, and digital culture movements',
                color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                icon: '📱',
                keywords: ['viral', 'social', 'influencer', 'tiktok', 'instagram']
            }
        };
    }

    async initializeLiveTabs() {
        console.log('🚀 Initializing live tabs...');

        // Create initial profiles for each category
        for (const [categoryKey, categoryInfo] of Object.entries(this.liveCategories)) {
            await this.createInitialCategoryProfile(categoryKey, categoryInfo);
        }

        // Start updating all live tabs
        this.startLiveUpdates();
    }

    async createInitialCategoryProfile(categoryKey, categoryInfo) {
        const initialProfile = {
            id: `live-${categoryKey}-${Date.now()}`,
            name: categoryInfo.name,
            subtitle: categoryInfo.subtitle,
            year: 'LIVE UPDATING',
            description: `${categoryInfo.description} Loading latest content...`,
            background: categoryInfo.color,
            backgroundImage: await this.getDefaultBackgroundForCategory(categoryKey),
            artistPhoto: '',
            social: {
                handle: '@live_updates',
                url: '#'
            },
            isCurrentlyTrending: true,
            metrics: {
                status: 'LOADING',
                sources: 'MULTIPLE',
                updated: 'LIVE'
            },
            tags: [categoryInfo.icon + ' ' + categoryInfo.name.replace(' LIVE', ''), 'REAL-TIME', 'UPDATING'],
            trending: [
                { title: 'Fetching Latest Content...', location: 'RSS Feeds', url: '#' },
                { title: 'Analyzing Trends...', location: 'Multiple Sources', url: '#' },
                { title: 'Real-time Updates...', location: 'Live Data', url: '#' }
            ],
            isRealTime: true,
            isLiveTab: true,
            category: categoryKey,
            isLoading: true,
            lastUpdated: new Date()
        };

        this.liveProfiles.set(categoryKey, initialProfile);

        // Load actual content for this category
        this.updateCategoryProfile(categoryKey);
    }

    async updateCategoryProfile(categoryKey) {
        try {
            console.log(`📡 Updating ${categoryKey} live tab...`);

            const categoryInfo = this.liveCategories[categoryKey];
            let articles = [];

            if (categoryKey === 'trending') {
                // For trending tab, get articles from all categories
                articles = await this.rssParser.getAllRelevantArticles();
            } else {
                // For specific category tabs
                articles = await this.rssParser.getArticlesByCategory(categoryKey);
            }

            if (articles.length > 0) {
                console.log(`✅ Found ${articles.length} articles for ${categoryKey}`);

                // Generate enhanced profile from articles
                const enhancedProfile = await this.generateEnhancedProfile(categoryKey, categoryInfo, articles);

                // Save to auto-save storage
                this.saveProfileData(categoryKey, enhancedProfile, articles);

                // Update the live profile
                this.liveProfiles.set(categoryKey, enhancedProfile);

                // If this category is currently visible, update the display
                this.notifyDashboardUpdate(categoryKey);

            } else {
                console.log(`⚠️ No articles found for ${categoryKey}, keeping loading state`);
            }
        } catch (error) {
            console.error(`❌ Error updating ${categoryKey} live tab:`, error);
        }
    }

    async generateEnhancedProfile(categoryKey, categoryInfo, articles) {
        // Extract trending items from articles
        const trendingItems = articles.slice(0, 5).map(article => ({
            title: article.title.length > 50 ? article.title.substring(0, 50) + '...' : article.title,
            location: article.source,
            url: article.link || '#'
        }));

        // Calculate metrics based on articles
        const sources = new Set(articles.map(a => a.source)).size;
        const totalRelevanceScore = articles.reduce((sum, a) => sum + (a.relevanceScore || 1), 0);
        const avgScore = Math.round(totalRelevanceScore / articles.length * 100) / 100;

        // Find best background image from articles
        const articleWithImage = articles.find(a => a.imageUrl);
        const backgroundImage = articleWithImage ?
            articleWithImage.imageUrl :
            await this.getDefaultBackgroundForCategory(categoryKey);

        // Create enhanced description
        const topTopics = this.extractTopTopics(articles, categoryInfo.keywords);
        const description = `${categoryInfo.description} Currently featuring ${topTopics.join(', ').toLowerCase()}.`;

        return {
            id: `live-${categoryKey}-${Date.now()}`,
            name: categoryInfo.name,
            subtitle: categoryInfo.subtitle,
            year: 'LIVE FEED',
            description: description,
            background: categoryInfo.color,
            backgroundImage: backgroundImage,
            artistPhoto: '',
            social: {
                handle: '@live_updates',
                url: '#'
            },
            isCurrentlyTrending: true,
            metrics: {
                articles: articles.length.toString(),
                sources: sources.toString(),
                score: avgScore.toString()
            },
            tags: [
                categoryInfo.icon + ' ' + categoryInfo.name.replace(' LIVE', ''),
                'LIVE',
                `${articles.length} ITEMS`,
                'AUTO-SAVED'
            ],
            trending: trendingItems,
            isRealTime: true,
            isLiveTab: true,
            category: categoryKey,
            isLoading: false,
            lastUpdated: new Date(),
            articlesData: articles // Store for auto-save
        };
    }

    extractTopTopics(articles, keywords) {
        const topicCount = {};

        articles.forEach(article => {
            const text = (article.title + ' ' + article.description).toLowerCase();
            keywords.forEach(keyword => {
                if (text.includes(keyword.toLowerCase())) {
                    topicCount[keyword] = (topicCount[keyword] || 0) + 1;
                }
            });
        });

        return Object.entries(topicCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([topic,]) => topic);
    }

    async getDefaultBackgroundForCategory(categoryKey) {
        const defaultBackgrounds = {
            'trending': 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1920&h=1080&fit=crop&q=80',
            'tech': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&q=80',
            'fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&q=80',
            'music': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&q=80',
            'design': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop&q=80',
            'art': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&q=80',
            'social-trends': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop&q=80'
        };

        return defaultBackgrounds[categoryKey] || defaultBackgrounds['trending'];
    }

    saveProfileData(categoryKey, profile, articles) {
        const saveData = {
            profile: profile,
            articles: articles,
            timestamp: Date.now(),
            category: categoryKey
        };

        // Save to localStorage for auto-save functionality
        try {
            localStorage.setItem(`live_tab_${categoryKey}`, JSON.stringify(saveData));
            this.savedProfiles.set(categoryKey, saveData);
            console.log(`💾 Auto-saved ${categoryKey} tab data (${articles.length} articles)`);
        } catch (error) {
            console.error(`❌ Error saving ${categoryKey} data:`, error);
        }
    }

    loadSavedProfileData(categoryKey) {
        try {
            const saved = localStorage.getItem(`live_tab_${categoryKey}`);
            if (saved) {
                const data = JSON.parse(saved);
                this.savedProfiles.set(categoryKey, data);
                return data;
            }
        } catch (error) {
            console.error(`❌ Error loading saved ${categoryKey} data:`, error);
        }
        return null;
    }

    getAllLiveProfiles() {
        return Array.from(this.liveProfiles.values());
    }

    getLiveProfile(categoryKey) {
        return this.liveProfiles.get(categoryKey);
    }

    startLiveUpdates() {
        // Update each category at different intervals to spread load
        Object.keys(this.liveCategories).forEach((categoryKey, index) => {
            // Stagger initial updates
            setTimeout(() => {
                this.updateCategoryProfile(categoryKey);

                // Set recurring updates every 10-20 minutes (staggered)
                const interval = setInterval(() => {
                    this.updateCategoryProfile(categoryKey);
                }, (10 + index * 2) * 60 * 1000);

                this.updateIntervals.set(categoryKey, interval);
            }, index * 5000); // 5 second stagger
        });

        console.log(`🔄 Started live updates for ${Object.keys(this.liveCategories).length} categories`);
    }

    stopLiveUpdates() {
        this.updateIntervals.forEach((interval, categoryKey) => {
            clearInterval(interval);
            console.log(`⏹️ Stopped updates for ${categoryKey}`);
        });
        this.updateIntervals.clear();
    }

    notifyDashboardUpdate(categoryKey) {
        // Notify dashboard controller that a live tab has been updated
        if (this.dashboardController && this.dashboardController.onLiveTabUpdated) {
            this.dashboardController.onLiveTabUpdated(categoryKey, this.liveProfiles.get(categoryKey));
        }
    }

    // Export saved data for potential backend integration
    exportSavedData() {
        const exportData = {};
        this.savedProfiles.forEach((data, categoryKey) => {
            exportData[categoryKey] = data;
        });

        console.log('📤 Exported saved data:', exportData);
        return exportData;
    }

    // Import data (for potential backend integration)
    importSavedData(importData) {
        Object.entries(importData).forEach(([categoryKey, data]) => {
            this.savedProfiles.set(categoryKey, data);
            if (data.profile) {
                this.liveProfiles.set(categoryKey, data.profile);
            }
        });

        console.log('📥 Imported saved data for', Object.keys(importData).length, 'categories');
    }
}