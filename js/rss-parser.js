// Fallback Proxy Services for Enhanced Reliability
const PROXY_SERVICES = [
    'https://api.allorigins.win/get?url=',           // Primary proxy
    'https://corsproxy.io/?',                        // Fallback 1
    'https://cors-anywhere.herokuapp.com/',          // Fallback 2
    'https://thingproxy.freeboard.io/fetch/'         // Fallback 3
];

// RSS Feed Configuration with Multiple Sources per Category
const RSS_FEEDS = [
    // TECH - Enhanced with multiple sources
    {
        name: 'TechCrunch',
        url: 'https://feeds.feedburner.com/TechCrunch',
        category: 'tech',
        priority: 'high'
    },
    {
        name: 'TechCrunch Alt',
        url: 'https://techcrunch.com/feed/',
        category: 'tech',
        priority: 'medium'
    },
    {
        name: 'The Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        category: 'tech',
        priority: 'high'
    },
    {
        name: 'Wired',
        url: 'https://www.wired.com/feed/rss',
        category: 'tech',
        priority: 'high'
    },
    {
        name: 'Ars Technica',
        url: 'https://feeds.arstechnica.com/arstechnica/index/',
        category: 'tech',
        priority: 'medium'
    },
    {
        name: 'MIT Technology Review',
        url: 'https://www.technologyreview.com/feed/',
        category: 'tech',
        priority: 'medium'
    },
    {
        name: 'VentureBeat',
        url: 'https://venturebeat.com/feed/',
        category: 'tech',
        priority: 'medium'
    },

    // DESIGN - Enhanced with multiple sources
    {
        name: 'Dezeen',
        url: 'https://www.dezeen.com/feed/',
        category: 'design',
        priority: 'high'
    },
    {
        name: 'Fast Company Design',
        url: 'https://www.fastcompany.com/section/design/rss',
        category: 'design',
        priority: 'high'
    },
    {
        name: 'Creative Bloq',
        url: 'https://www.creativebloq.com/feed',
        category: 'design',
        priority: 'medium'
    },
    {
        name: 'Core77',
        url: 'https://www.core77.com/rss/object.xml',
        category: 'design',
        priority: 'medium'
    },
    {
        name: 'Design Milk',
        url: 'https://design-milk.com/feed/',
        category: 'design',
        priority: 'medium'
    },

    // FASHION - Enhanced with multiple sources
    {
        name: 'Highsnobiety',
        url: 'https://www.highsnobiety.com/feed/',
        category: 'fashion',
        priority: 'high'
    },
    {
        name: 'Complex Style',
        url: 'https://www.complex.com/style/rss',
        category: 'fashion',
        priority: 'medium'
    },
    {
        name: 'Hypebeast',
        url: 'https://hypebeast.com/feed',
        category: 'fashion',
        priority: 'high'
    },
    {
        name: 'Fashion United',
        url: 'https://fashionunited.com/feed',
        category: 'fashion',
        priority: 'medium'
    },

    // MUSIC - Enhanced with multiple sources
    {
        name: 'Pitchfork',
        url: 'https://pitchfork.com/rss/news/',
        category: 'music',
        priority: 'high'
    },
    {
        name: 'The Fader',
        url: 'https://www.thefader.com/rss',
        category: 'music',
        priority: 'high'
    },
    {
        name: 'Rolling Stone',
        url: 'https://www.rollingstone.com/feed/',
        category: 'music',
        priority: 'medium'
    },
    {
        name: 'Consequence',
        url: 'https://consequence.net/feed/',
        category: 'music',
        priority: 'medium'
    },
    // ART - Enhanced with multiple sources
    {
        name: 'Artforum',
        url: 'https://www.artforum.com/rss.xml',
        category: 'art',
        priority: 'high'
    },
    {
        name: 'Colossal',
        url: 'https://www.thisiscolossal.com/feed/',
        category: 'art',
        priority: 'high'
    },
    {
        name: 'Artsy',
        url: 'https://www.artsy.net/rss/news',
        category: 'art',
        priority: 'medium'
    },
    {
        name: 'Hyperallergic',
        url: 'https://hyperallergic.com/feed/',
        category: 'art',
        priority: 'medium'
    },

    // GAMING - Enhanced with multiple sources
    {
        name: 'IGN',
        url: 'https://www.ign.com/feed.xml',
        category: 'gaming',
        priority: 'high'
    },
    {
        name: 'Polygon',
        url: 'https://www.polygon.com/rss/index.xml',
        category: 'gaming',
        priority: 'high'
    },
    {
        name: 'Kotaku',
        url: 'https://kotaku.com/feed',
        category: 'gaming',
        priority: 'medium'
    },
    {
        name: 'GameSpot',
        url: 'https://www.gamespot.com/feeds/mashup/',
        category: 'gaming',
        priority: 'medium'
    },

    // CULTURE/TRENDS - Enhanced with multiple sources
    {
        name: 'Trend Hunter',
        url: 'https://www.trendhunter.com/rss',
        category: 'culture',
        priority: 'high'
    },
    {
        name: 'Cool Hunting',
        url: 'https://coolhunting.com/feed/',
        category: 'culture',
        priority: 'medium'
    },
    // Additional Fashion Sources
    {
        name: 'Vogue',
        url: 'https://www.vogue.com/feed/rss',
        category: 'fashion',
        priority: 'high'
    },
    {
        name: 'WWD',
        url: 'https://wwd.com/feed/',
        category: 'fashion',
        priority: 'medium'
    },
    {
        name: 'Business of Fashion',
        url: 'https://www.businessoffashion.com/feed/',
        category: 'fashion',
        priority: 'medium'
    },
    {
        name: 'The Cut',
        url: 'https://www.thecut.com/feed/',
        category: 'fashion',
        priority: 'medium'
    },

    // Additional Design Sources
    {
        name: 'It\'s Nice That',
        url: 'https://www.itsnicethat.com/feed',
        category: 'design',
        priority: 'medium'
    },
    {
        name: 'AIGA Eye on Design',
        url: 'https://eyeondesign.aiga.org/feed/',
        category: 'design',
        priority: 'medium'
    },

    // Additional Music Sources
    {
        name: 'NME',
        url: 'https://www.nme.com/feed',
        category: 'music',
        priority: 'medium'
    },
    {
        name: 'Stereogum',
        url: 'https://www.stereogum.com/feed/',
        category: 'music',
        priority: 'medium'
    },

    // Entertainment Sources
    {
        name: 'Variety',
        url: 'https://variety.com/feed/',
        category: 'entertainment',
        priority: 'high'
    },
    {
        name: 'The Hollywood Reporter',
        url: 'https://www.hollywoodreporter.com/feed/',
        category: 'entertainment',
        priority: 'medium'
    },

    // Social Media & Trends
    {
        name: 'Social Media Today',
        url: 'https://www.socialmediatoday.com/rss.xml',
        category: 'social-trends',
        priority: 'medium'
    },
    {
        name: 'Later Blog',
        url: 'https://later.com/blog/feed/',
        category: 'social-trends',
        priority: 'medium'
    },

    // Campaigns & Marketing
    {
        name: 'Adweek',
        url: 'https://www.adweek.com/feed/',
        category: 'campaigns',
        priority: 'high'
    },
    {
        name: 'Campaign',
        url: 'https://www.campaignlive.com/feed',
        category: 'campaigns',
        priority: 'medium'
    }
];


// Subculture Keywords for Content Filtering
const subcultureKeywords = {
    fashion: ['fashion', 'style', 'designer', 'streetwear', 'runway', 'luxury', 'clothing', 'brand', 'collection', 'sneakers', 'hypebeast', 'drop', 'collab', 'outfit', 'trend', 'couture', 'retail', 'apparel', 'boutique', 'vintage', 'thrift', 'sustainable fashion', 'fast fashion', 'haute couture', 'prêt-à-porter', 'capsule collection', 'wardrobe', 'accessory', 'jewelry', 'handbag', 'footwear', 'textile', 'fabric', 'silhouette', 'fit', 'tailoring', 'fashion week', 'lookbook', 'editorial', 'campaign', 'model', 'influencer', 'stylist', 'trendsetter', 'fashionista', 'drip', 'fit check', 'ootd', 'aesthetic', 'vibe', 'lewk', 'slay', 'serve', 'iconic', 'moment'],

    tech: ['AI', 'VR', 'AR', 'startup', 'innovation', 'digital', 'blockchain', 'crypto', 'app', 'software', 'machine learning', 'neural', 'algorithm', 'data', 'technology', 'coding', 'programming', 'developer', 'engineer', 'cybersecurity', 'cloud', 'SaaS', 'API', 'platform', 'automation', 'robotics', 'IoT', 'internet of things', 'smart device', 'wearable', 'smartphone', 'tablet', 'laptop', 'computer', 'processor', 'chip', 'semiconductor', 'quantum', 'metaverse', 'web3', 'NFT', 'DeFi', 'DAO', 'smart contract', 'cryptocurrency', 'bitcoin', 'ethereum', 'fintech', 'edtech', 'healthtech', 'biotech', 'cleantech', 'greentech', 'deeptech', 'hackathon', 'unicorn', 'venture capital', 'silicon valley', 'disruptive', 'scalable', 'agile', 'lean startup', 'MVP', 'beta', 'launch', 'pivot', 'growth hacking', 'user experience', 'UX', 'UI', 'frontend', 'backend', 'fullstack', 'DevOps', 'open source'],

    art: ['exhibition', 'gallery', 'artist', 'installation', 'creative', 'museum', 'contemporary', 'sculpture', 'digital art', 'NFT', 'generative', 'painting', 'drawing', 'photography', 'video art', 'performance art', 'conceptual art', 'abstract', 'figurative', 'portrait', 'landscape', 'still life', 'mural', 'street art', 'graffiti', 'pop art', 'minimalism', 'expressionism', 'surrealism', 'cubism', 'impressionism', 'modernism', 'postmodern', 'avant-garde', 'experimental', 'multimedia', 'mixed media', 'collage', 'printmaking', 'ceramic', 'textile art', 'fiber art', 'craft', 'artisan', 'studio', 'atelier', 'residency', 'commission', 'collection', 'curator', 'critic', 'art fair', 'biennale', 'auction', 'collector', 'patron', 'emerging artist', 'established artist', 'breakthrough', 'masterpiece', 'opus', 'oeuvre', 'aesthetic', 'visual culture', 'art world', 'art scene', 'creative industry', 'cultural'],

    music: ['concert', 'festival', 'musician', 'electronic', 'underground', 'album', 'tour', 'sound', 'producer', 'DJ', 'remix', 'beat', 'artist', 'band', 'singer', 'songwriter', 'composer', 'rapper', 'hip hop', 'rock', 'pop', 'indie', 'alternative', 'jazz', 'classical', 'folk', 'country', 'blues', 'reggae', 'punk', 'metal', 'techno', 'house', 'trap', 'drill', 'grime', 'ambient', 'experimental', 'avant-garde', 'lo-fi', 'vinyl', 'streaming', 'playlist', 'single', 'EP', 'LP', 'debut', 'sophomore', 'collab', 'feature', 'verse', 'hook', 'chorus', 'bridge', 'sample', 'loop', 'instrumental', 'acoustic', 'live', 'session', 'studio', 'record label', 'independent', 'major label', 'breakthrough', 'viral', 'trending', 'chart', 'billboard', 'grammy', 'award', 'nomination', 'review', 'interview', 'spotlight', 'rising', 'emerging', 'established', 'legend', 'icon', 'influence', 'genre-bending', 'crossover', 'mainstream', 'niche', 'scene', 'movement', 'wave', 'era', 'generation'],

    culture: ['subculture', 'youth', 'community', 'trend', 'movement', 'lifestyle', 'underground', 'emerging', 'viral', 'influencer', 'creator', 'cultural', 'social', 'society', 'generation', 'millennial', 'gen z', 'gen alpha', 'boomer', 'counterculture', 'mainstream', 'alternative', 'indie', 'hipster', 'aesthetic', 'vibe', 'mood', 'energy', 'zeitgeist', 'phenomenon', 'moment', 'era', 'period', 'wave', 'shift', 'evolution', 'revolution', 'transformation', 'change', 'progress', 'innovation', 'disruption', 'breakthrough', 'pioneer', 'trailblazer', 'maverick', 'rebel', 'activist', 'advocate', 'voice', 'platform', 'message', 'cause', 'mission', 'purpose', 'identity', 'expression', 'representation', 'diversity', 'inclusion', 'equity', 'justice', 'awareness', 'consciousness', 'mindfulness', 'wellness', 'mental health', 'self-care', 'empowerment', 'authenticity', 'vulnerability', 'transparency', 'connection', 'belonging', 'tribe', 'collective', 'collaborative', 'participatory', 'democratic', 'grassroots', 'organic', 'spontaneous', 'genuine', 'raw', 'real', 'honest', 'truthful'],

    design: ['design', 'interface', 'UX', 'UI', 'creative', 'visual', 'typography', 'branding', 'aesthetic', 'minimalist', 'graphic design', 'web design', 'product design', 'industrial design', 'interior design', 'architecture', 'landscape', 'urban planning', 'sustainable design', 'eco-friendly', 'green design', 'circular design', 'human-centered', 'user-centered', 'accessibility', 'inclusive design', 'universal design', 'responsive', 'adaptive', 'mobile-first', 'desktop', 'tablet', 'cross-platform', 'wireframe', 'prototype', 'mockup', 'concept', 'iteration', 'feedback', 'testing', 'research', 'strategy', 'methodology', 'framework', 'system', 'guideline', 'standard', 'best practice', 'innovation', 'creativity', 'inspiration', 'mood board', 'color palette', 'font', 'typeface', 'layout', 'composition', 'hierarchy', 'balance', 'contrast', 'harmony', 'rhythm', 'proportion', 'scale', 'grid', 'whitespace', 'negative space', 'visual language', 'design thinking', 'design sprint', 'agile design', 'lean UX', 'design ops', 'design system', 'component library', 'style guide', 'brand identity', 'logo', 'icon', 'illustration', 'photography', 'video', 'animation', 'motion graphics', 'interaction design', 'experience design', 'service design', 'design strategy'],

    gaming: ['gaming', 'esports', 'streamer', 'twitch', 'discord', 'console', 'indie game', 'mobile game', 'video game', 'game', 'gamer', 'player', 'gaming community', 'competitive gaming', 'professional gaming', 'tournament', 'championship', 'league', 'team', 'clan', 'guild', 'squad', 'party', 'multiplayer', 'single player', 'co-op', 'PvP', 'PvE', 'MMO', 'MMORPG', 'RPG', 'FPS', 'RTS', 'MOBA', 'battle royale', 'survival', 'horror', 'action', 'adventure', 'puzzle', 'strategy', 'simulation', 'sports', 'racing', 'fighting', 'platform', 'sandbox', 'open world', 'linear', 'narrative', 'story-driven', 'gameplay', 'mechanics', 'controls', 'graphics', 'visuals', 'art style', 'soundtrack', 'music', 'sound design', 'voice acting', 'character', 'avatar', 'customization', 'progression', 'leveling', 'XP', 'achievement', 'trophy', 'unlock', 'reward', 'loot', 'item', 'weapon', 'armor', 'skill', 'ability', 'power-up', 'upgrade', 'mod', 'DLC', 'expansion', 'update', 'patch', 'beta', 'alpha', 'early access', 'release', 'launch', 'review', 'rating', 'score', 'metacritic', 'steam', 'epic games', 'playstation', 'xbox', 'nintendo', 'PC', 'VR', 'AR', 'cloud gaming', 'streaming', 'speedrun', 'walkthrough', 'guide', 'tips', 'tricks', 'easter egg', 'bug', 'glitch', 'exploit', 'cheat', 'hack', 'mod', 'community', 'fanbase', 'culture', 'meme', 'viral', 'trending']
};

// RSS Feed Parser Class with Enhanced Reliability
class RSSFeedParser {
    constructor() {
        this.cachedFeeds = new Map();
        this.cacheTimeout = 30 * 60 * 1000; // 30 minutes
        this.feedHealthStatus = new Map(); // Track feed health
        this.currentProxyIndex = 0; // For proxy rotation
        this.maxRetries = 3;
        this.maxBackoffDelay = 30000; // 30 seconds max
        this.healthCheckInterval = null;
        this.initHealthMonitoring();
    }

    // Initialize health monitoring system
    initHealthMonitoring() {
        // Check feed health every 5 minutes
        this.healthCheckInterval = setInterval(() => {
            this.performHealthCheck();
        }, 5 * 60 * 1000);

        console.log('🏥 RSS Feed health monitoring initialized');
    }

    // Perform health check on all feeds
    async performHealthCheck() {
        console.log('🔍 Performing RSS feed health check...');

        let healthyFeeds = 0;
        let unhealthyFeeds = 0;

        for (const feed of RSS_FEEDS) {
            const health = this.feedHealthStatus.get(feed.url);
            if (!health) {
                // Initialize health status if not exists
                this.feedHealthStatus.set(feed.url, {
                    status: 'unknown',
                    lastCheck: Date.now(),
                    successCount: 0,
                    failureCount: 0,
                    lastError: null,
                    avgResponseTime: 0
                });
                continue;
            }

            if (health.status === 'healthy') healthyFeeds++;
            else if (health.status === 'unhealthy') unhealthyFeeds++;
        }

        console.log(`📊 Feed Health Status: ${healthyFeeds} healthy, ${unhealthyFeeds} unhealthy, ${RSS_FEEDS.length - healthyFeeds - unhealthyFeeds} unknown`);
    }

    // Enhanced fetch with exponential backoff and fallback proxies
    async fetchFeed(feedConfig) {
        const cacheKey = feedConfig.url;
        const cached = this.cachedFeeds.get(cacheKey);

        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            return cached.data;
        }

        const startTime = Date.now();
        let lastError = null;

        // Try with exponential backoff and proxy fallbacks
        for (let attempt = 0; attempt < this.maxRetries; attempt++) {
            try {
                const result = await this.fetchWithFallbackProxies(feedConfig, attempt);

                // Update health status on success
                this.updateFeedHealth(feedConfig.url, true, Date.now() - startTime, null);

                if (result.length > 0) {
                    this.cachedFeeds.set(cacheKey, {
                        data: result,
                        timestamp: Date.now()
                    });
                    return result;
                }
            } catch (error) {
                lastError = error;
                console.warn(`🔄 Attempt ${attempt + 1}/${this.maxRetries} failed for ${feedConfig.name}:`, error.message);

                // Exponential backoff delay
                if (attempt < this.maxRetries - 1) {
                    const delay = Math.min(1000 * Math.pow(2, attempt), this.maxBackoffDelay);
                    console.log(`⏳ Waiting ${delay}ms before retry...`);
                    await this.delay(delay);
                }
            }
        }

        // Update health status on failure
        this.updateFeedHealth(feedConfig.url, false, Date.now() - startTime, lastError);
        console.error(`❌ All ${this.maxRetries} attempts failed for ${feedConfig.name}:`, lastError);
        return [];
    }

    // Try multiple proxy services with rotation
    async fetchWithFallbackProxies(feedConfig, attemptNumber) {
        let proxyIndex = (this.currentProxyIndex + attemptNumber) % PROXY_SERVICES.length;

        for (let proxyAttempt = 0; proxyAttempt < PROXY_SERVICES.length; proxyAttempt++) {
            const proxy = PROXY_SERVICES[proxyIndex];

            try {
                console.log(`🌐 Using proxy ${proxyIndex + 1}/${PROXY_SERVICES.length}: ${proxy.split('//')[1]?.split('/')[0] || proxy}`);

                const proxyUrl = proxy + encodeURIComponent(feedConfig.url);
                const response = await fetch(proxyUrl, {
                    timeout: 15000, // 15 second timeout
                    headers: {
                        'User-Agent': 'TrendSpottingDashboard/1.0 (+https://example.com/bot)'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();

                if (data.contents) {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data.contents, 'application/xml');

                    // Check for parsing errors
                    const parseError = xmlDoc.querySelector('parsererror');
                    if (parseError) {
                        throw new Error('XML parsing failed: ' + parseError.textContent);
                    }

                    const articles = this.parseRSSContent(xmlDoc, feedConfig);

                    // Update successful proxy index for next rotation
                    this.currentProxyIndex = proxyIndex;

                    return articles;
                } else {
                    throw new Error('No content returned from proxy');
                }

            } catch (error) {
                console.warn(`🚫 Proxy ${proxyIndex + 1} failed for ${feedConfig.name}:`, error.message);
                proxyIndex = (proxyIndex + 1) % PROXY_SERVICES.length;

                // Short delay before trying next proxy
                if (proxyAttempt < PROXY_SERVICES.length - 1) {
                    await this.delay(1000);
                }
            }
        }

        throw new Error('All proxy services failed');
    }

    // Update feed health tracking
    updateFeedHealth(feedUrl, success, responseTime, error) {
        const health = this.feedHealthStatus.get(feedUrl) || {
            status: 'unknown',
            lastCheck: 0,
            successCount: 0,
            failureCount: 0,
            lastError: null,
            avgResponseTime: 0
        };

        health.lastCheck = Date.now();

        if (success) {
            health.successCount++;
            health.lastError = null;
            // Update average response time
            health.avgResponseTime = health.avgResponseTime === 0 ?
                responseTime :
                (health.avgResponseTime + responseTime) / 2;
        } else {
            health.failureCount++;
            health.lastError = error?.message || 'Unknown error';
        }

        // Determine health status based on success rate
        const totalAttempts = health.successCount + health.failureCount;
        const successRate = totalAttempts > 0 ? health.successCount / totalAttempts : 0;

        if (successRate >= 0.8) {
            health.status = 'healthy';
        } else if (successRate >= 0.5) {
            health.status = 'degraded';
        } else {
            health.status = 'unhealthy';
        }

        this.feedHealthStatus.set(feedUrl, health);
    }

    // Get health report for monitoring
    getHealthReport() {
        const report = {
            timestamp: Date.now(),
            totalFeeds: RSS_FEEDS.length,
            healthy: 0,
            degraded: 0,
            unhealthy: 0,
            unknown: 0,
            avgResponseTime: 0,
            feeds: []
        };

        let totalResponseTime = 0;
        let responseTimeCount = 0;

        RSS_FEEDS.forEach(feed => {
            const health = this.feedHealthStatus.get(feed.url);
            if (health) {
                report[health.status]++;
                if (health.avgResponseTime > 0) {
                    totalResponseTime += health.avgResponseTime;
                    responseTimeCount++;
                }

                report.feeds.push({
                    name: feed.name,
                    url: feed.url,
                    category: feed.category,
                    priority: feed.priority,
                    status: health.status,
                    successRate: health.successCount / (health.successCount + health.failureCount) || 0,
                    avgResponseTime: health.avgResponseTime,
                    lastError: health.lastError
                });
            } else {
                report.unknown++;
                report.feeds.push({
                    name: feed.name,
                    url: feed.url,
                    category: feed.category,
                    priority: feed.priority,
                    status: 'unknown'
                });
            }
        });

        report.avgResponseTime = responseTimeCount > 0 ? totalResponseTime / responseTimeCount : 0;
        return report;
    }

    // Utility delay function
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Clean up resources
    destroy() {
        if (this.healthCheckInterval) {
            clearInterval(this.healthCheckInterval);
            this.healthCheckInterval = null;
            console.log('🛑 RSS Feed health monitoring stopped');
        }
    }

    parseRSSContent(xmlDoc, feedConfig) {
        const items = xmlDoc.querySelectorAll('item');
        const articles = [];

        items.forEach((item, index) => {
            if (index >= 10) return; // Limit to 10 articles per feed

            const title = item.querySelector('title')?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const category = item.querySelector('category')?.textContent || feedConfig.category;

            // Extract image from various RSS fields
            const imageUrl = this.extractImageFromRSS(item, description);

            // Filter for subculture relevance
            if (this.isSubcultureRelevant(title, description)) {
                articles.push({
                    title: this.cleanText(title),
                    description: this.cleanText(description),
                    link,
                    pubDate: new Date(pubDate),
                    category,
                    source: feedConfig.name,
                    imageUrl: imageUrl,
                    relevanceScore: this.calculateRelevanceScore(title, description)
                });
            }
        });

        return articles.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }

    extractImageFromRSS(item, description) {
        // Try different RSS image fields in order of preference
        let imageUrl = null;

        // Method 1: media:thumbnail or media:content
        const mediaThumbnail = item.querySelector('media\\:thumbnail, thumbnail');
        if (mediaThumbnail) {
            imageUrl = mediaThumbnail.getAttribute('url');
        }

        const mediaContent = item.querySelector('media\\:content, content');
        if (!imageUrl && mediaContent && mediaContent.getAttribute('type')?.startsWith('image')) {
            imageUrl = mediaContent.getAttribute('url');
        }

        // Method 2: enclosure with image type
        const enclosure = item.querySelector('enclosure');
        if (!imageUrl && enclosure && enclosure.getAttribute('type')?.startsWith('image')) {
            imageUrl = enclosure.getAttribute('url');
        }

        // Method 3: Extract from description HTML
        if (!imageUrl && description) {
            const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
            if (imgMatch) {
                imageUrl = imgMatch[1];
            }
        }

        // Method 4: Look for image URLs in description text
        if (!imageUrl && description) {
            const urlMatch = description.match(/(https?:\/\/[^\s<>"']+\.(?:jpg|jpeg|png|gif|webp))/i);
            if (urlMatch) {
                imageUrl = urlMatch[1];
            }
        }

        // Clean up the URL if found
        if (imageUrl) {
            // Remove any HTML entities
            imageUrl = imageUrl.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            
            // Try to enhance image quality for known services
            imageUrl = this.enhanceImageQuality(imageUrl);
            
            // Ensure it's a valid URL
            try {
                new URL(imageUrl);
                return imageUrl;
            } catch (e) {
                return null;
            }
        }

        return null;
    }

    enhanceImageQuality(imageUrl) {
        // Enhance image quality for various image services
        
        // Unsplash - ensure HD quality
        if (imageUrl.includes('unsplash.com')) {
            // Add HD parameters if not present
            if (!imageUrl.includes('w=') && !imageUrl.includes('&w=')) {
                const separator = imageUrl.includes('?') ? '&' : '?';
                imageUrl += `${separator}w=1920&h=1080&fit=crop&q=80`;
            }
        }
        
        // WordPress/CDN images - try to get larger versions
        if (imageUrl.includes('wp-content') && imageUrl.includes('-')) {
            // Replace common small size indicators with larger ones
            imageUrl = imageUrl.replace(/-\d+x\d+\./g, '-1920x1080.');
            imageUrl = imageUrl.replace(/-small\./g, '-large.');
            imageUrl = imageUrl.replace(/-medium\./g, '-large.');
            imageUrl = imageUrl.replace(/-thumb\./g, '-large.');
        }
        
        // Squarespace images - enhance quality
        if (imageUrl.includes('squarespace-cdn.com')) {
            if (!imageUrl.includes('format=')) {
                const separator = imageUrl.includes('?') ? '&' : '?';
                imageUrl += `${separator}format=2500w`;
            }
        }
        
        // Generic CDN parameters for quality
        if (imageUrl.includes('images.') || imageUrl.includes('cdn.')) {
            // Add quality parameters if URL structure allows
            if (imageUrl.includes('?') && !imageUrl.includes('quality=') && !imageUrl.includes('q=')) {
                imageUrl += '&q=80';
            }
        }

        return imageUrl;
    }

    isSubcultureRelevant(title, description) {
        const text = (title + ' ' + description).toLowerCase();
        
        for (const [category, keywords] of Object.entries(subcultureKeywords)) {
            for (const keyword of keywords) {
                if (text.includes(keyword.toLowerCase())) {
                    return true;
                }
            }
        }
        return false;
    }

    calculateRelevanceScore(title, description) {
        const text = (title + ' ' + description).toLowerCase();
        let score = 0;
        
        for (const [category, keywords] of Object.entries(subcultureKeywords)) {
            for (const keyword of keywords) {
                if (text.includes(keyword.toLowerCase())) {
                    score += 1;
                }
            }
        }
        return score;
    }

    cleanText(text) {
        return text.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '').trim();
    }

    // Enhanced method with priority-based feed selection
    async getAllRelevantArticles() {
        const allArticles = [];

        // Prioritize feeds based on health and priority
        const prioritizedFeeds = this.getPrioritizedFeeds();

        console.log(`📡 Fetching from ${prioritizedFeeds.length} prioritized feeds...`);

        // Process high priority feeds first
        const highPriorityFeeds = prioritizedFeeds.filter(feed => feed.priority === 'high');
        const mediumPriorityFeeds = prioritizedFeeds.filter(feed => feed.priority === 'medium');

        // Fetch high priority feeds in parallel
        const highPriorityPromises = highPriorityFeeds.map(feed => this.fetchFeed(feed));
        const highPriorityResults = await Promise.allSettled(highPriorityPromises);

        highPriorityResults.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                allArticles.push(...result.value);
            } else {
                console.warn(`❌ High priority feed failed: ${highPriorityFeeds[index].name}`);
            }
        });

        // If we don't have enough articles, fetch medium priority feeds
        if (allArticles.length < 15) {
            const mediumPriorityPromises = mediumPriorityFeeds.map(feed => this.fetchFeed(feed));
            const mediumPriorityResults = await Promise.allSettled(mediumPriorityPromises);

            mediumPriorityResults.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    allArticles.push(...result.value);
                } else {
                    console.warn(`❌ Medium priority feed failed: ${mediumPriorityFeeds[index].name}`);
                }
            });
        }

        return allArticles
            .sort((a, b) => b.relevanceScore - a.relevanceScore) // Sort by relevance first
            .sort((a, b) => b.pubDate - a.pubDate) // Then by recency
            .slice(0, 25); // Increased to top 25 articles
    }

    // Enhanced category-based fetching with health awareness
    async getArticlesByCategory(category) {
        const categoryArticles = [];

        const categoryFeeds = RSS_FEEDS.filter(feed =>
            feed.category === category ||
            feed.category.includes(category) ||
            (category === 'social-trends' && feed.category === 'social-trends') ||
            (category === 'campaigns' && feed.category === 'campaigns') ||
            (category === 'games' && feed.category === 'games') ||
            (category === 'gaming' && feed.category === 'gaming') ||
            (category === 'trends' && feed.category === 'trends') ||
            (category === 'culture' && feed.category === 'culture')
        );

        // Prioritize healthy feeds
        const healthyFeeds = categoryFeeds.filter(feed => {
            const health = this.feedHealthStatus.get(feed.url);
            return !health || health.status === 'healthy' || health.status === 'degraded';
        });

        // Process feeds with priority awareness
        const prioritizedCategoryFeeds = healthyFeeds.sort((a, b) => {
            const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
            return (priorityOrder[b.priority] || 1) - (priorityOrder[a.priority] || 1);
        });

        for (const feedConfig of prioritizedCategoryFeeds) {
            try {
                const articles = await this.fetchFeed(feedConfig);
                categoryArticles.push(...articles);
            } catch (error) {
                console.warn(`⚠️ Category feed failed: ${feedConfig.name}`);
            }
        }

        return categoryArticles
            .sort((a, b) => b.relevanceScore - a.relevanceScore)
            .sort((a, b) => b.pubDate - a.pubDate)
            .slice(0, 20); // Top 20 articles per category
    }

    // Get prioritized feeds based on health and priority
    getPrioritizedFeeds() {
        return RSS_FEEDS
            .filter(feed => {
                const health = this.feedHealthStatus.get(feed.url);
                // Filter out unhealthy feeds unless we have no other choice
                return !health || health.status !== 'unhealthy';
            })
            .sort((a, b) => {
                // Sort by priority first
                const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
                const aPriority = priorityOrder[a.priority] || 1;
                const bPriority = priorityOrder[b.priority] || 1;

                if (aPriority !== bPriority) {
                    return bPriority - aPriority;
                }

                // Then by health status
                const aHealth = this.feedHealthStatus.get(a.url);
                const bHealth = this.feedHealthStatus.get(b.url);
                const healthOrder = { 'healthy': 3, 'degraded': 2, 'unknown': 1, 'unhealthy': 0 };

                const aHealthScore = aHealth ? healthOrder[aHealth.status] || 0 : 1;
                const bHealthScore = bHealth ? healthOrder[bHealth.status] || 0 : 1;

                return bHealthScore - aHealthScore;
            });
    }

    // Get feeds by category with health filtering
    getFeedsByCategory(category) {
        return RSS_FEEDS.filter(feed => {
            const matchesCategory = feed.category === category ||
                                  feed.category.includes(category);

            const health = this.feedHealthStatus.get(feed.url);
            const isHealthy = !health || health.status !== 'unhealthy';

            return matchesCategory && isHealthy;
        });
    }

    getAvailableCategories() {
        const categories = new Set();
        RSS_FEEDS.forEach(feed => {
            categories.add(feed.category);
        });
        return Array.from(categories);
    }

    // Developer console helpers for monitoring
    logHealthReport() {
        const report = this.getHealthReport();
        console.group('🏥 RSS Feed Health Report');
        console.log(`📊 Total Feeds: ${report.totalFeeds}`);
        console.log(`✅ Healthy: ${report.healthy}`);
        console.log(`⚠️ Degraded: ${report.degraded}`);
        console.log(`❌ Unhealthy: ${report.unhealthy}`);
        console.log(`❓ Unknown: ${report.unknown}`);
        console.log(`⏱️ Avg Response Time: ${Math.round(report.avgResponseTime)}ms`);

        console.group('📋 Feed Details');
        report.feeds
            .filter(feed => feed.status !== 'unknown')
            .sort((a, b) => {
                const statusOrder = { 'unhealthy': 0, 'degraded': 1, 'healthy': 2 };
                return statusOrder[a.status] - statusOrder[b.status];
            })
            .forEach(feed => {
                const statusIcon = {
                    'healthy': '✅',
                    'degraded': '⚠️',
                    'unhealthy': '❌'
                }[feed.status] || '❓';

                const successRate = Math.round((feed.successRate || 0) * 100);
                const responseTime = Math.round(feed.avgResponseTime || 0);

                console.log(`${statusIcon} ${feed.name} (${feed.category}) - ${successRate}% success, ${responseTime}ms avg`);
                if (feed.lastError) {
                    console.log(`   ↳ Last error: ${feed.lastError}`);
                }
            });
        console.groupEnd();
        console.groupEnd();

        return report;
    }

    // Force health check
    async forceHealthCheck() {
        console.log('🔄 Forcing health check on all feeds...');
        await this.performHealthCheck();
        return this.logHealthReport();
    }

    // Reset health data
    resetHealthData() {
        this.feedHealthStatus.clear();
        console.log('🔄 RSS feed health data reset');
    }
}

// Make RSS parser globally available for debugging
window.debugRSSParser = null;