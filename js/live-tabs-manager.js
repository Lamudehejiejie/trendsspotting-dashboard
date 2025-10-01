class LiveTabsManager {
    constructor(dashboardController) {
        this.dashboardController = dashboardController;
        this.rssParser = new RSSFeedParser();
        this.profileGenerator = new DynamicProfileGenerator();

        // Make RSS parser available for debugging
        window.debugRSSParser = this.rssParser;
        this.eventProfiles = new Map(); // Changed from liveProfiles to eventProfiles
        this.savedProfiles = new Map(); // For auto-save functionality
        this.updateInterval = null;
        this.maxEventTabs = 15; // Limit number of event tabs to prevent overwhelming UI

        // Color schemes for different categories
        this.categoryColors = {
            'tech': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'fashion': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
            'music': 'linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%)',
            'design': 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
            'art': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
            'social-trends': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'entertainment': 'linear-gradient(135deg, #ff7979 0%, #fdcb6e 100%)',
            'campaigns': 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
            'games': 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
            'trends': 'linear-gradient(135deg, #00cec9 0%, #55a3ff 100%)',
            'default': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
        };

        // Icons for different categories
        this.categoryIcons = {
            'tech': '💻',
            'fashion': '👗',
            'fashion-asia': '🌸',
            'music': '🎵',
            'design': '🎨',
            'design-asia': '🏮',
            'art': '🖼️',
            'art-asia': '🎌',
            'culture-asia': '🌸',
            'social-trends': '📱',
            'entertainment': '🎬',
            'campaigns': '📢',
            'games': '🎮',
            'trends': '🔥',
            'default': '⭐'
        };
    }

    async initializeLiveTabs() {
        console.log('🚀 Initializing event-based live tabs...');

        // Create initial loading tab
        this.createInitialLoadingTab();

        // Start fetching real events
        await this.fetchAndCreateEventTabs();

        // Start updating event tabs periodically
        this.startLiveUpdates();
    }

    createInitialLoadingTab() {
        const loadingProfile = {
            id: `loading-events-${Date.now()}`,
            name: 'LOADING EVENTS',
            subtitle: 'FETCHING TRENDING',
            year: 'LIVE UPDATING',
            description: 'Discovering trending events from multiple sources. Individual tabs will appear for each trending event...',
            background: this.categoryColors.default,
            backgroundImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1920&h=1080&fit=crop&q=80',
            artistPhoto: '',
            social: {
                handle: '@live_events',
                url: '#'
            },
            isCurrentlyTrending: true,
            metrics: {
                status: 'LOADING',
                events: '0',
                sources: 'MULTIPLE'
            },
            tags: ['🔄 LOADING', 'EVENT TABS', 'LIVE'],
            trending: [
                { title: 'Scanning RSS Feeds...', location: 'Multiple Sources', url: '#' },
                { title: 'Analyzing Content...', location: 'AI Processing', url: '#' },
                { title: 'Creating Event Tabs...', location: 'Dynamic Generation', url: '#' }
            ],
            isRealTime: true,
            isLiveTab: true,
            isEventTab: true,
            category: 'loading',
            isLoading: true,
            lastUpdated: new Date()
        };

        this.eventProfiles.set('loading', loadingProfile);
    }

    async fetchAndCreateEventTabs() {
        try {
            console.log('📡 Fetching trending events for individual tabs...');

            // Get all articles from RSS feeds
            const allArticles = await this.rssParser.getAllRelevantArticles();

            if (allArticles.length > 0) {
                console.log(`✅ Found ${allArticles.length} trending events`);

                // Remove loading tab
                this.eventProfiles.delete('loading');

                // Create individual tabs for top trending events (Japanese content prioritized)
                const topEvents = allArticles
                    .sort((a, b) => {
                        // Prioritize Japanese content first
                        if (a.isJapanese && !b.isJapanese) return -1;
                        if (!a.isJapanese && b.isJapanese) return 1;

                        // Then by relevance score
                        return b.relevanceScore - a.relevanceScore;
                    })
                    .slice(0, this.maxEventTabs); // Limit number of tabs

                // Count Japanese content
                const japaneseCount = topEvents.filter(event => event.isJapanese).length;
                console.log(`🌸 Japanese content prioritized: ${japaneseCount}/${topEvents.length} tabs`);

                for (let i = 0; i < topEvents.length; i++) {
                    const article = topEvents[i];
                    await this.createEventTab(article, i);
                }

                console.log(`🎯 Created ${topEvents.length} event tabs (${japaneseCount} Japanese-prioritized)`);

                // Notify dashboard to refresh navigation
                this.notifyDashboardUpdate('events-created');

            } else {
                console.log('⚠️ No trending events found, but keeping static profiles available');
                this.createNoEventsTab();
                this.notifyDashboardUpdate('no-events');
            }

        } catch (error) {
            console.error('❌ Error fetching events:', error);
            this.createErrorTab();
            this.notifyDashboardUpdate('error');
        }
    }

    async createEventTab(article, index) {
        const eventId = `event-${index}-${Date.now()}`;

        // Shorten title if too long for tab display
        const shortTitle = article.title.length > 40 ?
            article.title.substring(0, 40) + '...' :
            article.title;

        // Get category info for styling with Japanese priority
        const categoryColor = this.categoryColors[article.category] || this.categoryColors.default;
        const categoryIcon = this.categoryIcons[article.category] || this.categoryIcons.default;

        // Add Japanese indicator
        const japaneseIndicator = article.isJapanese ? '🇯🇵 ' : '';
        const japaneseTag = article.isJapanese ? 'JAPAN' : null;

        // Create related events from same source/category
        const relatedEvents = await this.getRelatedEvents(article);

        const eventProfile = {
            id: eventId,
            name: japaneseIndicator + article.source.toUpperCase(), // Add Japanese flag for Japanese sources
            subtitle: categoryIcon + ' ' + (article.category?.toUpperCase() || 'TRENDING'), // Show category with icon
            year: this.formatTimeAgo(article.pubDate),
            description: article.description || article.title, // Use full article title in description
            background: categoryColor,
            backgroundImage: article.imageUrl || await this.getDefaultBackgroundForCategory(article.category),
            artistPhoto: '',
            social: {
                handle: `@${article.source.toLowerCase().replace(/\s+/g, '_')}`,
                url: article.link || '#'
            },
            isCurrentlyTrending: true,
            metrics: {
                relevance: article.relevanceScore?.toString() || '1',
                category: article.category?.toUpperCase() || 'TRENDING',
                time: this.formatTimeAgo(article.pubDate)
            },
            tags: [
                categoryIcon + ' ' + (article.category?.toUpperCase() || 'TRENDING'),
                japaneseTag ? japaneseTag : null,
                'LIVE EVENT',
                'AUTO-SAVED'
            ].filter(Boolean), // Remove null tags
            trending: [
                // Keep the original event as the first trending item with full title and link
                {
                    title: article.title,
                    location: article.source,
                    url: article.link || '#'
                },
                ...relatedEvents.slice(0, 2) // Add 2 more related events instead of 3
            ],
            isRealTime: true,
            isLiveTab: true,
            isEventTab: true,
            isJapanese: article.isJapanese || false,
            category: article.category,
            eventData: article,
            isLoading: false,
            lastUpdated: new Date()
        };

        this.eventProfiles.set(eventId, eventProfile);

        // Auto-save this event
        this.saveEventData(eventId, eventProfile, article);

        return eventProfile;
    }

    async getRelatedEvents(mainArticle) {
        try {
            // Get articles from the same category
            const categoryArticles = await this.rssParser.getArticlesByCategory(mainArticle.category);

            // Filter out the main article and get top 3 related ones
            const relatedArticles = categoryArticles
                .filter(article => article.link !== mainArticle.link)
                .slice(0, 3);

            return relatedArticles.map(article => ({
                title: article.title.length > 50 ? article.title.substring(0, 50) + '...' : article.title,
                location: article.source,
                url: article.link || '#'
            }));
        } catch (error) {
            console.error('Error fetching related events:', error);
            return [
                { title: 'More trending events loading...', location: 'Multiple Sources', url: '#' }
            ];
        }
    }

    formatTimeAgo(date) {
        const now = new Date();
        const diffInMinutes = Math.floor((now - date) / (1000 * 60));

        if (diffInMinutes < 60) {
            return `${diffInMinutes}m ago`;
        } else if (diffInMinutes < 1440) {
            return `${Math.floor(diffInMinutes / 60)}h ago`;
        } else {
            return `${Math.floor(diffInMinutes / 1440)}d ago`;
        }
    }

    createNoEventsTab() {
        const noEventsProfile = {
            id: `no-events-${Date.now()}`,
            name: 'NO EVENTS FOUND',
            subtitle: 'CHECKING SOURCES',
            year: 'LIVE SYSTEM',
            description: 'No trending events found at the moment. The system is continuously monitoring RSS feeds for new content.',
            background: this.categoryColors.default,
            backgroundImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1920&h=1080&fit=crop&q=80',
            artistPhoto: '',
            social: {
                handle: '@live_events',
                url: '#'
            },
            isCurrentlyTrending: true,
            metrics: {
                status: 'MONITORING',
                events: '0',
                sources: 'ACTIVE'
            },
            tags: ['🔍 MONITORING', 'LIVE SYSTEM', 'NO EVENTS'],
            trending: [
                { title: 'Monitoring RSS Feeds...', location: 'Multiple Sources', url: '#' },
                { title: 'Waiting for Events...', location: 'Real-time', url: '#' },
                { title: 'Check Back Soon...', location: 'Auto-refresh', url: '#' }
            ],
            isRealTime: true,
            isLiveTab: true,
            isEventTab: true,
            category: 'system',
            isLoading: false,
            lastUpdated: new Date()
        };

        this.eventProfiles.set('no-events', noEventsProfile);
    }

    createErrorTab() {
        const errorProfile = {
            id: `error-events-${Date.now()}`,
            name: 'SYSTEM ERROR',
            subtitle: 'CONNECTION ISSUE',
            year: 'LIVE SYSTEM',
            description: 'Error loading trending events. Check console for details. The system will retry automatically.',
            background: 'linear-gradient(135deg, #ff7979 0%, #fdcb6e 100%)',
            backgroundImage: '',
            artistPhoto: '',
            social: {
                handle: '@system_debug',
                url: '#'
            },
            isCurrentlyTrending: false,
            metrics: {
                status: 'ERROR',
                retry: 'AUTO',
                debug: 'CONSOLE'
            },
            tags: ['❌ ERROR', 'SYSTEM', 'DEBUG'],
            trending: [
                { title: 'Check Network Connection', location: 'System', url: '#' },
                { title: 'View Browser Console', location: 'Debug', url: '#' },
                { title: 'Auto-retry in Progress', location: 'System', url: '#' }
            ],
            isRealTime: true,
            isLiveTab: true,
            isEventTab: true,
            category: 'error',
            isLoading: false,
            lastUpdated: new Date()
        };

        this.eventProfiles.set('error', errorProfile);
    }

    async refreshEventTabs() {
        try {
            console.log('🔄 Refreshing event tabs...');

            // Clear existing event profiles
            this.eventProfiles.clear();

            // Recreate tabs with fresh data
            await this.fetchAndCreateEventTabs();

            console.log('✅ Event tabs refreshed');

        } catch (error) {
            console.error('❌ Error refreshing event tabs:', error);
            this.createErrorTab();
            this.notifyDashboardUpdate('refresh-error');
        }
    }

    saveEventData(eventId, profile, article) {
        const saveData = {
            profile: profile,
            article: article,
            timestamp: Date.now(),
            eventId: eventId
        };

        // Save to localStorage for auto-save functionality
        try {
            localStorage.setItem(`event_tab_${eventId}`, JSON.stringify(saveData));
            this.savedProfiles.set(eventId, saveData);
            console.log(`💾 Auto-saved event tab: ${profile.name}`);
        } catch (error) {
            console.error(`❌ Error saving event ${eventId} data:`, error);
        }
    }

    loadSavedEventData(eventId) {
        try {
            const saved = localStorage.getItem(`event_tab_${eventId}`);
            if (saved) {
                const data = JSON.parse(saved);
                this.savedProfiles.set(eventId, data);
                return data;
            }
        } catch (error) {
            console.error(`❌ Error loading saved event ${eventId} data:`, error);
        }
        return null;
    }

    async getDefaultBackgroundForCategory(categoryKey) {
        // Only use fallback backgrounds when no image was found from RSS
        // These are high-quality, relevant images for each category
        const defaultBackgrounds = {
            'trending': null, // Let gradient background show through
            'tech': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&q=80',
            'fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&q=80',
            'fashion-asia': 'https://images.unsplash.com/photo-1493663284031-b7e3aaa27294?w=1920&h=1080&fit=crop&q=80', // Japanese fashion
            'music': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&q=80',
            'design': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop&q=80',
            'design-asia': 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&h=1080&fit=crop&q=80', // Japanese architecture
            'art': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&q=80',
            'art-asia': 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&h=1080&fit=crop&q=80', // Japanese art
            'culture-asia': 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&h=1080&fit=crop&q=80', // Japanese culture
            'social-trends': null, // Let gradient show through
            'entertainment': 'https://images.unsplash.com/photo-1489599126688-3704b6d13de7?w=1920&h=1080&fit=crop&q=80',
            'campaigns': null, // Let gradient show through
            'games': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&q=80',
            'trends': null // Let gradient show through
        };

        return defaultBackgrounds[categoryKey] || null; // Return null to show gradient instead
    }

    getAllEventProfiles() {
        return Array.from(this.eventProfiles.values());
    }

    getEventProfile(eventId) {
        return this.eventProfiles.get(eventId);
    }

    startLiveUpdates() {
        // Refresh event tabs every 20 minutes
        this.updateInterval = setInterval(() => {
            this.refreshEventTabs();
        }, 20 * 60 * 1000);

        console.log('🔄 Started live updates for event tabs (20 min intervals)');
    }

    stopLiveUpdates() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
            console.log('⏹️ Stopped event tab updates');
        }
    }

    notifyDashboardUpdate(updateType) {
        // Notify dashboard controller that event tabs have been updated
        if (this.dashboardController && this.dashboardController.onEventTabsUpdated) {
            this.dashboardController.onEventTabsUpdated(updateType, this.getAllEventProfiles());
        }
    }

    // Export saved data for potential backend integration
    exportSavedData() {
        const exportData = {};
        this.savedProfiles.forEach((data, eventId) => {
            exportData[eventId] = data;
        });

        console.log('📤 Exported saved event data:', exportData);
        return exportData;
    }

    // Import data (for potential backend integration)
    importSavedData(importData) {
        Object.entries(importData).forEach(([eventId, data]) => {
            this.savedProfiles.set(eventId, data);
            if (data.profile) {
                this.eventProfiles.set(eventId, data.profile);
            }
        });

        console.log('📥 Imported saved data for', Object.keys(importData).length, 'events');
    }
}