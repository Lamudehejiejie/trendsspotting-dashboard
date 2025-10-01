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
        name: 'Designboom',
        url: 'https://www.designboom.com/feed/',
        category: 'design',
        priority: 'high'
    },
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
    },

    // Japanese & Asian Sources (High Priority for Tab Placement)
    {
        name: 'Sabukaru',
        url: 'https://sabukaru.online/feed/',
        category: 'fashion-asia',
        priority: 'ultra-high',
        isJapanese: true
    },
    {
        name: 'Vogue Japan',
        url: 'https://www.vogue.co.jp/feed',
        category: 'fashion-asia',
        priority: 'ultra-high',
        isJapanese: true
    },
    {
        name: 'Hypebeast Japan',
        url: 'https://hypebeast.com/jp/feed',
        category: 'fashion-asia',
        priority: 'ultra-high',
        isJapanese: true
    },
    {
        name: 'Spoon & Tamago',
        url: 'https://www.spoon-tamago.com/feed/',
        category: 'design-asia',
        priority: 'ultra-high',
        isJapanese: true
    },
    {
        name: 'Tokyo Art Beat',
        url: 'https://www.tokyoartbeat.com/en/rss/exhibition.xml',
        category: 'art-asia',
        priority: 'high',
        isJapanese: true
    },
    {
        name: 'BEAMS Magazine',
        url: 'https://www.beams.co.jp/blog/feed/',
        category: 'fashion-asia',
        priority: 'high',
        isJapanese: true
    },
    {
        name: 'Dezeen Japan Content',
        url: 'https://www.dezeen.com/tag/japan/feed/',
        category: 'design-asia',
        priority: 'high',
        isJapanese: true
    },
    {
        name: 'Casa Brutus',
        url: 'https://casabrutus.com/feed/',
        category: 'design-asia',
        priority: 'high',
        isJapanese: true
    },
    {
        name: 'Pen Magazine',
        url: 'https://www.pen-online.com/feed/',
        category: 'culture-asia',
        priority: 'high',
        isJapanese: true
    },
    {
        name: 'WWD Japan',
        url: 'https://www.wwdjapan.com/feed',
        category: 'fashion-asia',
        priority: 'high',
        isJapanese: true
    },

    // Additional International Sources
    {
        name: 'Creative Review',
        url: 'https://www.creativereview.co.uk/feed/',
        category: 'design',
        priority: 'medium'
    },
    {
        name: 'Frame Magazine',
        url: 'https://www.frameweb.com/feed',
        category: 'design',
        priority: 'medium'
    },
    {
        name: 'AnOther Magazine',
        url: 'https://www.anothermag.com/rss',
        category: 'fashion',
        priority: 'medium'
    }
];


// Subculture Keywords for Content Filtering
const subcultureKeywords = {
    fashion: ['fashion', 'style', 'designer', 'streetwear', 'runway', 'luxury', 'clothing', 'brand', 'collection', 'sneakers', 'hypebeast', 'drop', 'collab', 'outfit', 'trend', 'couture', 'retail', 'apparel', 'boutique', 'vintage', 'thrift', 'sustainable fashion', 'fast fashion', 'haute couture', 'prêt-à-porter', 'capsule collection', 'wardrobe', 'accessory', 'jewelry', 'handbag', 'footwear', 'textile', 'fabric', 'silhouette', 'fit', 'tailoring', 'fashion week', 'lookbook', 'editorial', 'campaign', 'model', 'influencer', 'stylist', 'trendsetter', 'fashionista', 'drip', 'fit check', 'ootd', 'aesthetic', 'vibe', 'lewk', 'slay', 'serve', 'iconic', 'moment'],

    tech: ['AI', 'VR', 'AR', 'startup', 'innovation', 'digital', 'blockchain', 'crypto', 'app', 'software', 'machine learning', 'neural', 'algorithm', 'data', 'technology', 'coding', 'programming', 'developer', 'engineer', 'cybersecurity', 'cloud', 'SaaS', 'API', 'platform', 'automation', 'robotics', 'IoT', 'internet of things', 'smart device', 'wearable', 'smartphone', 'tablet', 'laptop', 'computer', 'processor', 'chip', 'semiconductor', 'quantum', 'metaverse', 'web3', 'NFT', 'DeFi', 'DAO', 'smart contract', 'cryptocurrency', 'bitcoin', 'ethereum', 'fintech', 'edtech', 'healthtech', 'biotech', 'cleantech', 'greentech', 'deeptech', 'hackathon', 'unicorn', 'venture capital', 'silicon valley', 'disruptive', 'scalable', 'agile', 'lean startup', 'MVP', 'beta', 'launch', 'pivot', 'growth hacking', 'user experience', 'UX', 'UI', 'frontend', 'backend', 'fullstack', 'DevOps', 'open source'],

    art: ['exhibition', 'gallery', 'artist', 'installation', 'creative', 'museum', 'contemporary', 'sculpture', 'digital art', 'NFT', 'generative', 'painting', 'drawing', 'photography', 'video art', 'performance art', 'conceptual art', 'abstract', 'figurative', 'portrait', 'landscape', 'still life', 'mural', 'street art', 'graffiti', 'pop art', 'minimalism', 'expressionism', 'surrealism', 'cubism', 'impressionism', 'modernism', 'postmodern', 'avant-garde', 'experimental', 'multimedia', 'mixed media', 'collage', 'printmaking', 'ceramic', 'textile art', 'fiber art', 'craft', 'artisan', 'studio', 'atelier', 'residency', 'commission', 'collection', 'curator', 'critic', 'art fair', 'biennale', 'auction', 'collector', 'patron', 'emerging artist', 'established artist', 'breakthrough', 'masterpiece', 'opus', 'oeuvre', 'aesthetic', 'visual culture', 'art world', 'art scene', 'creative industry', 'cultural'],

    music: ['concert', 'festival', 'musician', 'electronic', 'underground', 'album', 'tour', 'sound', 'producer', 'DJ', 'remix', 'beat', 'artist', 'band', 'singer', 'songwriter', 'composer', 'rapper', 'hip hop', 'rock', 'pop', 'indie', 'alternative', 'jazz', 'classical', 'folk', 'country', 'blues', 'reggae', 'punk', 'metal', 'techno', 'house', 'trap', 'drill', 'grime', 'ambient', 'experimental', 'avant-garde', 'lo-fi', 'vinyl', 'streaming', 'playlist', 'single', 'EP', 'LP', 'debut', 'sophomore', 'collab', 'feature', 'verse', 'hook', 'chorus', 'bridge', 'sample', 'loop', 'instrumental', 'acoustic', 'live', 'session', 'studio', 'record label', 'independent', 'major label', 'breakthrough', 'viral', 'trending', 'chart', 'billboard', 'grammy', 'award', 'nomination', 'review', 'interview', 'spotlight', 'rising', 'emerging', 'established', 'legend', 'icon', 'influence', 'genre-bending', 'crossover', 'mainstream', 'niche', 'scene', 'movement', 'wave', 'era', 'generation'],

    culture: ['subculture', 'youth', 'community', 'trend', 'movement', 'lifestyle', 'underground', 'emerging', 'viral', 'influencer', 'creator', 'cultural', 'social', 'society', 'generation', 'millennial', 'gen z', 'gen alpha', 'boomer', 'counterculture', 'mainstream', 'alternative', 'indie', 'hipster', 'aesthetic', 'vibe', 'mood', 'energy', 'zeitgeist', 'phenomenon', 'moment', 'era', 'period', 'wave', 'shift', 'evolution', 'revolution', 'transformation', 'change', 'progress', 'innovation', 'disruption', 'breakthrough', 'pioneer', 'trailblazer', 'maverick', 'rebel', 'activist', 'advocate', 'voice', 'platform', 'message', 'cause', 'mission', 'purpose', 'identity', 'expression', 'representation', 'diversity', 'inclusion', 'equity', 'justice', 'awareness', 'consciousness', 'mindfulness', 'wellness', 'mental health', 'self-care', 'empowerment', 'authenticity', 'vulnerability', 'transparency', 'connection', 'belonging', 'tribe', 'collective', 'collaborative', 'participatory', 'democratic', 'grassroots', 'organic', 'spontaneous', 'genuine', 'raw', 'real', 'honest', 'truthful', 'japan', 'japanese', 'tokyo', 'osaka', 'kawaii', 'manga', 'anime', 'otaku', 'harajuku', 'shibuya', 'minimalism', 'zen', 'wabi-sabi', 'origami', 'kimono'],

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

                    const articles = await this.parseRSSContent(xmlDoc, feedConfig);

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

    async parseRSSContent(xmlDoc, feedConfig) {
        const items = xmlDoc.querySelectorAll('item');
        const articles = [];

        for (let index = 0; index < Math.min(items.length, 10); index++) {
            const item = items[index];

            const title = item.querySelector('title')?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const category = item.querySelector('category')?.textContent || feedConfig.category;

            // Extract image from various RSS fields (enhanced with multiple methods)
            const imageUrl = await this.extractImageFromRSS(item, description, feedConfig);

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
                    relevanceScore: this.calculateRelevanceScore(title, description, feedConfig),
                    isJapanese: feedConfig.isJapanese || false, // Transfer Japanese flag from feed config
                    sourcePriority: feedConfig.priority || 'medium' // Transfer source priority
                });
            }
        }

        return articles.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }

    // Enhanced image extraction with multiple fallback methods
    async extractImageFromRSS(item, description, feedConfig) {
        let imageUrl = null;
        const imageUrls = []; // Collect all possible images

        // Method 1: RSS media fields (highest priority)
        const mediaThumbnail = item.querySelector('media\\:thumbnail, thumbnail');
        if (mediaThumbnail) {
            const url = mediaThumbnail.getAttribute('url');
            if (url) imageUrls.push({ url, source: 'media:thumbnail', priority: 10 });
        }

        const mediaContent = item.querySelector('media\\:content, content');
        if (mediaContent && mediaContent.getAttribute('type')?.startsWith('image')) {
            const url = mediaContent.getAttribute('url');
            if (url) imageUrls.push({ url, source: 'media:content', priority: 9 });
        }

        // Method 2: Enclosure with image type
        const enclosures = item.querySelectorAll('enclosure');
        enclosures.forEach(enclosure => {
            if (enclosure.getAttribute('type')?.startsWith('image')) {
                const url = enclosure.getAttribute('url');
                if (url) imageUrls.push({ url, source: 'enclosure', priority: 8 });
            }
        });

        // Method 3: Featured image / thumbnail fields
        const thumbnail = item.querySelector('thumbnail, image, featuredImage');
        if (thumbnail) {
            const url = thumbnail.textContent || thumbnail.getAttribute('url') || thumbnail.getAttribute('href');
            if (url) imageUrls.push({ url, source: 'thumbnail', priority: 7 });
        }

        // Method 4: Content fields with CDATA
        const content = item.querySelector('content\\:encoded, content, description');
        if (content) {
            const contentText = content.textContent || content.innerHTML;
            this.extractImagesFromHTML(contentText, imageUrls, 'content');
        }

        // Method 5: Description HTML parsing (multiple images)
        if (description) {
            this.extractImagesFromHTML(description, imageUrls, 'description');
        }

        // Method 6: Link field (sometimes points to images)
        const link = item.querySelector('link');
        if (link) {
            const linkUrl = link.textContent || link.getAttribute('href');
            if (linkUrl && this.isImageUrl(linkUrl)) {
                imageUrls.push({ url: linkUrl, source: 'link', priority: 3 });
            }
        }

        // Method 7: Try to extract from article URL (web scraping simulation)
        const articleUrl = item.querySelector('link')?.textContent || item.querySelector('guid')?.textContent;
        if (articleUrl && imageUrls.length === 0) {
            const ogImage = await this.tryExtractOGImage(articleUrl, feedConfig);
            if (ogImage) {
                imageUrls.push({ url: ogImage, source: 'og:image', priority: 6 });
            }
        }

        // Sort by priority and filter valid URLs
        const validImages = await this.validateAndPrioritizeImages(imageUrls);

        if (validImages.length > 0) {
            imageUrl = validImages[0].url;
            console.log(`🖼️ Found image from ${validImages[0].source} for ${feedConfig.name}`);
        }

        return imageUrl;
    }

    // Extract multiple images from HTML content
    extractImagesFromHTML(htmlContent, imageUrls, source) {
        if (!htmlContent) return;

        // Method 1: Standard img tags with various attribute patterns
        const imgMatches = [
            ...htmlContent.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi),
            ...htmlContent.matchAll(/<img[^>]+data-src=["']([^"']+)["'][^>]*>/gi),
            ...htmlContent.matchAll(/<img[^>]+data-lazy-src=["']([^"']+)["'][^>]*>/gi),
        ];

        imgMatches.forEach((match, index) => {
            const url = match[1];
            if (url && !url.startsWith('data:')) {
                imageUrls.push({
                    url,
                    source: `${source}:img[${index}]`,
                    priority: index === 0 ? 6 : 5 - Math.min(index, 3)
                });
            }
        });

        // Method 2: Picture elements with source tags
        const pictureMatches = htmlContent.matchAll(/<picture[^>]*>[\s\S]*?<source[^>]+srcset=["']([^"']+)["'][^>]*>[\s\S]*?<\/picture>/gi);
        pictureMatches.forEach((match, index) => {
            const srcset = match[1];
            const firstImage = srcset.split(',')[0].trim().split(' ')[0];
            if (firstImage) {
                imageUrls.push({ url: firstImage, source: `${source}:picture[${index}]`, priority: 5 });
            }
        });

        // Method 3: Background images in style attributes
        const bgMatches = htmlContent.matchAll(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi);
        bgMatches.forEach((match, index) => {
            imageUrls.push({ url: match[1], source: `${source}:bg[${index}]`, priority: 4 });
        });

        // Method 4: Direct image URLs in text (last resort)
        const urlMatches = htmlContent.matchAll(/(https?:\/\/[^\s<>"']+\.(?:jpg|jpeg|png|gif|webp|avif)(?:\?[^\s<>"']*)?)/gi);
        urlMatches.forEach((match, index) => {
            if (index < 3) { // Only take first 3 to avoid spam
                imageUrls.push({ url: match[1], source: `${source}:url[${index}]`, priority: 2 });
            }
        });
    }

    // Try to extract Open Graph image from article URL
    async tryExtractOGImage(articleUrl, feedConfig) {
        try {
            // Only try this for high-priority feeds to avoid overwhelming requests
            if (feedConfig.priority !== 'ultra-high' && feedConfig.priority !== 'high') {
                return null;
            }

            // Use a simple proxy to get the HTML content
            const proxyUrl = PROXY_SERVICES[0] + encodeURIComponent(articleUrl);
            const response = await fetch(proxyUrl, {
                timeout: 5000,
                headers: { 'User-Agent': 'TrendSpottingBot/1.0' }
            });

            if (!response.ok) return null;

            const data = await response.json();
            if (!data.contents) return null;

            // Extract og:image from meta tags
            const ogImageMatch = data.contents.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i);
            if (ogImageMatch) {
                return ogImageMatch[1];
            }

            // Fallback: look for twitter:image
            const twitterImageMatch = data.contents.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i);
            if (twitterImageMatch) {
                return twitterImageMatch[1];
            }

        } catch (error) {
            // Silently fail - this is just a bonus feature
            return null;
        }
        return null;
    }

    // Validate URLs and prioritize images
    async validateAndPrioritizeImages(imageUrls) {
        const validImages = [];

        for (const img of imageUrls) {
            if (this.isValidImageUrl(img.url)) {
                // Clean up the URL
                let cleanUrl = img.url.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

                // Enhance image quality
                cleanUrl = this.enhanceImageQuality(cleanUrl);

                // Ensure it's a valid URL
                try {
                    new URL(cleanUrl);
                    validImages.push({
                        ...img,
                        url: cleanUrl,
                        qualityScore: this.calculateImageQualityScore(cleanUrl)
                    });
                } catch (e) {
                    // Skip invalid URLs
                }
            }
        }

        // Sort by priority, then by quality score
        return validImages.sort((a, b) => {
            if (a.priority !== b.priority) return b.priority - a.priority;
            return b.qualityScore - a.qualityScore;
        });
    }

    // Check if URL looks like an image
    isImageUrl(url) {
        if (!url || typeof url !== 'string') return false;
        const imageExtensions = /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/i;
        return imageExtensions.test(url) || url.includes('image') || url.includes('photo') || url.includes('img');
    }

    // Validate image URL more thoroughly
    isValidImageUrl(url) {
        if (!url || typeof url !== 'string') return false;

        // Skip data URLs, placeholder images, and tracking pixels
        if (url.startsWith('data:') ||
            url.includes('placeholder') ||
            url.includes('1x1.gif') ||
            url.includes('tracking') ||
            url.includes('pixel') ||
            url.length < 10) {
            return false;
        }

        // Must be http/https
        if (!url.startsWith('http')) return false;

        // Check for image indicators
        return this.isImageUrl(url);
    }

    // Calculate image quality score based on URL characteristics
    calculateImageQualityScore(url) {
        let score = 50; // Base score

        // Higher score for larger dimensions in filename
        const dimensionMatch = url.match(/(\d+)x(\d+)/);
        if (dimensionMatch) {
            const width = parseInt(dimensionMatch[1]);
            const height = parseInt(dimensionMatch[2]);
            if (width >= 1200 || height >= 800) score += 30;
            else if (width >= 800 || height >= 600) score += 20;
            else if (width >= 400 || height >= 300) score += 10;
        }

        // Bonus for high-quality image services
        if (url.includes('unsplash.com')) score += 20;
        if (url.includes('pexels.com')) score += 20;
        if (url.includes('cdn.')) score += 10;
        if (url.includes('wp-content')) score += 15;

        // Penalty for likely low-quality indicators
        if (url.includes('thumb')) score -= 20;
        if (url.includes('small')) score -= 15;
        if (url.includes('icon')) score -= 25;
        if (url.includes('avatar')) score -= 20;

        // Bonus for image quality parameters
        if (url.includes('q=') || url.includes('quality=')) score += 10;
        if (url.includes('w=1920') || url.includes('width=1920')) score += 15;

        return Math.max(0, Math.min(100, score));
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

    calculateRelevanceScore(title, description, feedConfig) {
        const text = (title + ' ' + description).toLowerCase();
        let score = 0;

        // Base scoring from keyword matching
        for (const [category, keywords] of Object.entries(subcultureKeywords)) {
            for (const keyword of keywords) {
                if (text.includes(keyword.toLowerCase())) {
                    score += 1;
                }
            }
        }

        // Bonus points for Japanese content
        if (feedConfig?.isJapanese) {
            score += 5; // Significant bonus for Japanese sources

            // Additional bonus if content mentions Japanese terms
            const japaneseTerms = ['japan', 'japanese', 'tokyo', 'osaka', 'kawaii', 'harajuku', 'shibuya'];
            for (const term of japaneseTerms) {
                if (text.includes(term)) {
                    score += 2;
                }
            }
        }

        return score;
    }

    cleanText(text) {
        return text.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '').trim();
    }

    // Enhanced method with Japanese priority and feed selection
    async getAllRelevantArticles() {
        const allArticles = [];

        // Prioritize feeds based on health and priority (Japanese sources first)
        const prioritizedFeeds = this.getPrioritizedFeeds();

        console.log(`📡 Fetching from ${prioritizedFeeds.length} prioritized feeds (Japanese sources prioritized)...`);

        // Process feeds in priority order: ultra-high (Japanese) -> high -> medium
        const ultraHighPriorityFeeds = prioritizedFeeds.filter(feed => feed.priority === 'ultra-high');
        const highPriorityFeeds = prioritizedFeeds.filter(feed => feed.priority === 'high');
        const mediumPriorityFeeds = prioritizedFeeds.filter(feed => feed.priority === 'medium');

        console.log(`🌸 Processing ${ultraHighPriorityFeeds.length} ultra-high priority (Japanese) feeds first...`);
        console.log('🎌 Japanese feeds:', ultraHighPriorityFeeds.map(f => f.name));

        // Fetch ultra-high priority feeds (Japanese sources) first
        const ultraHighPromises = ultraHighPriorityFeeds.map(feed => this.fetchFeed(feed));
        const ultraHighResults = await Promise.allSettled(ultraHighPromises);

        ultraHighResults.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                // Keep existing properties and only add sourcePriority
                const articles = result.value.map(article => ({
                    ...article,
                    sourcePriority: 'ultra-high'
                    // isJapanese is already set in parseRSSContent
                }));
                allArticles.push(...articles);
            } else {
                console.warn(`❌ Ultra-high priority feed failed: ${ultraHighPriorityFeeds[index].name}`);
            }
        });

        // Fetch high priority feeds in parallel
        const highPriorityPromises = highPriorityFeeds.map(feed => this.fetchFeed(feed));
        const highPriorityResults = await Promise.allSettled(highPriorityPromises);

        highPriorityResults.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                const articles = result.value.map(article => ({
                    ...article,
                    sourcePriority: 'high'
                    // isJapanese is already set in parseRSSContent
                }));
                allArticles.push(...articles);
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
                    const articles = result.value.map(article => ({
                        ...article,
                        sourcePriority: 'medium'
                        // isJapanese is already set in parseRSSContent
                    }));
                    allArticles.push(...articles);
                } else {
                    console.warn(`❌ Medium priority feed failed: ${mediumPriorityFeeds[index].name}`);
                }
            });
        }

        // Enhanced sorting: Japanese content first, then by relevance and recency
        const japaneseCount = allArticles.filter(a => a.isJapanese).length;
        console.log(`🌸 Found ${japaneseCount}/${allArticles.length} Japanese articles before sorting`);

        const sortedArticles = allArticles
            .sort((a, b) => {
                // First priority: Japanese content
                if (a.isJapanese && !b.isJapanese) return -1;
                if (!a.isJapanese && b.isJapanese) return 1;

                // Second priority: Source priority
                const priorityOrder = { 'ultra-high': 4, 'high': 3, 'medium': 2, 'low': 1 };
                const aPriority = priorityOrder[a.sourcePriority] || 1;
                const bPriority = priorityOrder[b.sourcePriority] || 1;
                if (aPriority !== bPriority) return bPriority - aPriority;

                // Third priority: Relevance score
                if (a.relevanceScore !== b.relevanceScore) return b.relevanceScore - a.relevanceScore;

                // Fourth priority: Recency
                return b.pubDate - a.pubDate;
            })
            .slice(0, 30); // Increased to top 30 articles for more Japanese content

        const finalJapaneseCount = sortedArticles.filter(a => a.isJapanese).length;
        console.log(`🎯 Final result: ${finalJapaneseCount}/${sortedArticles.length} Japanese articles in top results`);

        return sortedArticles;
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
            (category === 'culture' && feed.category === 'culture') ||
            (category === 'fashion' && feed.category === 'fashion-asia') ||
            (category === 'design' && feed.category === 'design-asia') ||
            (category === 'art' && feed.category === 'art-asia')
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

    // Get prioritized feeds based on health and priority (Japanese sources prioritized)
    getPrioritizedFeeds() {
        return RSS_FEEDS
            .filter(feed => {
                const health = this.feedHealthStatus.get(feed.url);
                // Filter out unhealthy feeds unless we have no other choice
                return !health || health.status !== 'unhealthy';
            })
            .sort((a, b) => {
                // First priority: Japanese sources
                if (a.isJapanese && !b.isJapanese) return -1;
                if (!a.isJapanese && b.isJapanese) return 1;

                // Second priority: Feed priority level
                const priorityOrder = { 'ultra-high': 4, 'high': 3, 'medium': 2, 'low': 1 };
                const aPriority = priorityOrder[a.priority] || 1;
                const bPriority = priorityOrder[b.priority] || 1;

                if (aPriority !== bPriority) {
                    return bPriority - aPriority;
                }

                // Third priority: Health status
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
                                  feed.category.includes(category) ||
                                  (category === 'fashion' && feed.category === 'fashion-asia') ||
                                  (category === 'design' && feed.category === 'design-asia') ||
                                  (category === 'art' && feed.category === 'art-asia');

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