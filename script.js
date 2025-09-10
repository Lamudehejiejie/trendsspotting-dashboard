// RSS Feed Configuration
const RSS_FEEDS = [
    {
        name: 'TechCrunch',
        url: 'https://feeds.feedburner.com/TechCrunch',
        category: 'tech',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Dezeen Design',
        url: 'https://www.dezeen.com/feed/',
        category: 'design',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'The Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        category: 'tech',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Wired',
        url: 'https://www.wired.com/feed/rss',
        category: 'tech',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Fast Company Design',
        url: 'https://www.fastcompany.com/section/design/rss',
        category: 'design',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Creative Bloq',
        url: 'https://www.creativebloq.com/feed',
        category: 'design',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Highsnobiety',
        url: 'https://www.highsnobiety.com/feed/',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Complex Style',
        url: 'https://www.complex.com/style/rss',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Pitchfork',
        url: 'https://pitchfork.com/rss/news/',
        category: 'music',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'The Fader',
        url: 'https://www.thefader.com/rss',
        category: 'music',
        proxy: 'https://api.allorigins.win/get?url='
    }
];

// Subculture Keywords for Content Filtering
const subcultureKeywords = {
    fashion: ['fashion', 'style', 'designer', 'streetwear', 'runway', 'luxury', 'clothing', 'brand', 'collection', 'sneakers', 'hypebeast', 'drop', 'collab'],
    tech: ['AI', 'VR', 'AR', 'startup', 'innovation', 'digital', 'blockchain', 'crypto', 'app', 'software', 'machine learning', 'neural', 'algorithm', 'data'],
    art: ['exhibition', 'gallery', 'artist', 'installation', 'creative', 'museum', 'contemporary', 'sculpture', 'digital art', 'NFT', 'generative'],
    music: ['concert', 'festival', 'musician', 'electronic', 'underground', 'album', 'tour', 'sound', 'producer', 'DJ', 'remix', 'beat'],
    culture: ['subculture', 'youth', 'community', 'trend', 'movement', 'lifestyle', 'underground', 'emerging', 'viral', 'influencer', 'creator'],
    design: ['design', 'interface', 'UX', 'UI', 'creative', 'visual', 'typography', 'branding', 'aesthetic', 'minimalist'],
    gaming: ['gaming', 'esports', 'streamer', 'twitch', 'discord', 'console', 'indie game', 'mobile game']
};

// RSS Feed Parser Class
class RSSFeedParser {
    constructor() {
        this.cachedFeeds = new Map();
        this.cacheTimeout = 30 * 60 * 1000; // 30 minutes
    }

    async fetchFeed(feedConfig) {
        const cacheKey = feedConfig.url;
        const cached = this.cachedFeeds.get(cacheKey);
        
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            return cached.data;
        }

        try {
            const proxyUrl = feedConfig.proxy + encodeURIComponent(feedConfig.url);
            const response = await fetch(proxyUrl);
            const data = await response.json();
            
            if (data.contents) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data.contents, 'application/xml');
                const articles = this.parseRSSContent(xmlDoc, feedConfig);
                
                this.cachedFeeds.set(cacheKey, {
                    data: articles,
                    timestamp: Date.now()
                });
                
                return articles;
            }
        } catch (error) {
            console.error(`Error fetching RSS feed ${feedConfig.name}:`, error);
            return [];
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

            // Filter for subculture relevance
            if (this.isSubcultureRelevant(title, description)) {
                articles.push({
                    title: this.cleanText(title),
                    description: this.cleanText(description),
                    link,
                    pubDate: new Date(pubDate),
                    category,
                    source: feedConfig.name,
                    relevanceScore: this.calculateRelevanceScore(title, description)
                });
            }
        });

        return articles.sort((a, b) => b.relevanceScore - a.relevanceScore);
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

    async getAllRelevantArticles() {
        const allArticles = [];
        
        for (const feedConfig of RSS_FEEDS) {
            const articles = await this.fetchFeed(feedConfig);
            allArticles.push(...articles);
        }
        
        return allArticles
            .sort((a, b) => b.pubDate - a.pubDate)
            .slice(0, 20); // Top 20 most recent relevant articles
    }
}

// Dynamic Profile Generator
class DynamicProfileGenerator {
    constructor() {
        this.rssParser = new RSSFeedParser();
    }

    async generateProfileFromArticles(articles) {
        if (!articles || articles.length === 0) return null;

        // Group articles by category
        const categories = {};
        articles.forEach(article => {
            if (!categories[article.category]) {
                categories[article.category] = [];
            }
            categories[article.category].push(article);
        });

        // Find the most prominent category
        const mainCategory = Object.keys(categories).reduce((a, b) => 
            categories[a].length > categories[b].length ? a : b
        );

        const categoryArticles = categories[mainCategory];
        const latestArticle = categoryArticles[0];

        return {
            id: `trending-${mainCategory}-${Date.now()}`,
            name: `TRENDING ${mainCategory.toUpperCase()}`,
            subtitle: 'REAL-TIME INSIGHTS',
            year: 'LIVE FEED',
            description: `Latest developments in ${mainCategory}: ${latestArticle.title}. ${latestArticle.description.substring(0, 200)}...`,
            background: this.getCategoryBackground(mainCategory),
            backgroundImage: '', // Could add image extraction later
            artistPhoto: '',
            social: {
                handle: '@trendspotting',
                url: latestArticle.link
            },
            isCurrentlyTrending: true,
            metrics: {
                articles: `${articles.length}`,
                updated: 'LIVE',
                sources: `${new Set(articles.map(a => a.source)).size}`
            },
            tags: this.generateTags(articles),
            trending: categoryArticles.slice(0, 3).map(article => ({
                title: article.title.substring(0, 50) + '...',
                location: article.source,
                url: article.link
            })),
            isRealTime: true,
            lastUpdated: new Date()
        };
    }

    getCategoryBackground(category) {
        const backgrounds = {
            tech: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            design: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
            fashion: 'linear-gradient(135deg, #000000 0%, #434343 50%, #000000 100%)',
            art: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)',
            music: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 50%, #093637 100%)',
            default: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #ff6b35 100%)'
        };
        return backgrounds[category] || backgrounds.default;
    }

    generateTags(articles) {
        const allText = articles.map(a => a.title + ' ' + a.description).join(' ').toLowerCase();
        const foundTags = [];
        
        for (const [category, keywords] of Object.entries(subcultureKeywords)) {
            for (const keyword of keywords) {
                if (allText.includes(keyword.toLowerCase()) && !foundTags.includes(keyword.toUpperCase())) {
                    foundTags.push(keyword.toUpperCase());
                    if (foundTags.length >= 5) break;
                }
            }
            if (foundTags.length >= 5) break;
        }
        
        return foundTags.length > 0 ? foundTags : ['TRENDING', 'REAL-TIME', 'CURRENT'];
    }
}

// Artist Profile Data
const artistProfiles = [
    {
        id: 'ei-wada',
        name: 'EI WADA',
        subtitle: 'ELECTRONICOS FANTÁSTICOS',
        year: 'INTERACTIVE SOUND PIONEER',
        description: 'Ei Wada creates orchestra performances using vintage electronics as instruments, transforming discarded technology into symphonic experiences. His barcode scanner concerts turn everyday objects into musical interfaces.',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)',
        backgroundImage: 'https://images.squarespace-cdn.com/content/v1/56f4abb9e707eb33bf4e9fef/7f5a29b9-45fe-493c-b0c6-e8e8e78f4095/TRIO-bure_fix.jpg?format=2500w',
        artistPhoto: '',
        social: {
            handle: '@crabfeet',
            url: 'https://x.com/crab_feet'
        },
        isCurrentlyTrending: true,
        metrics: {
            projects: '50+',
            performances: '200+',
            countries: '15+'
        },
        tags: ['INTERACTIVE SOUND', 'ELECTRONIC ORCHESTRA', 'VINTAGE TECH', 'BARCODE PERFORMANCE', 'SOUND ART'],
        trending: [
            { title: 'Braun Tube Jazz Band', location: 'Tokyo', url: 'https://www.electronicosfantasticos.com' },
            { title: 'Shopping Cart Orchestra', location: 'Global Tour', url: 'https://www.electronicosfantasticos.com/projects' },
            { title: 'Electronicos Fantasticos!', location: 'Ars Electronica', url: 'https://ars.electronica.art' }
        ]
    },
    {
        id: 'yoichi-ochiai',
        name: 'YOICHI OCHIAI',
        subtitle: 'DIGITAL NATURE',
        year: 'WOW ORCHESTRA CONDUCTOR',
        description: 'Yoichi Ochiai bridges physical and digital realms through his WoW orchestra, where audience members become performers through real-time collaboration technology and interactive media art.',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundImage: 'https://www.w0w.co.jp/filestore/0000000/0006615.jpg',
        artistPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        social: {
            handle: '@ochyai',
            url: 'https://twitter.com/ochyai'
        },
        isCurrentlyTrending: true,
        metrics: {
            research: '100+',
            installations: '80+',
            followers: '500K+'
        },
        tags: ['AUDIENCE COLLABORATION', 'DIGITAL NATURE', 'INTERACTIVE MEDIA', 'RESEARCH ART', 'REAL-TIME PERFORMANCE'],
        trending: [
            { title: 'WoW Orchestra Live', location: 'Various Venues', url: 'https://www.youtube.com/watch?v=example' },
            { title: 'Digital Nature Exhibition', location: 'Tokyo', url: 'https://digitalnature.slis.tsukuba.ac.jp' },
            { title: 'Pixie Dust Technologies', location: 'Tech Research', url: 'https://pixiedusttech.com' }
        ]
    },
    {
        id: 'daito-manabe',
        name: 'DAITO MANABE',
        subtitle: 'RHIZOMATIKS',
        year: 'HCI & PROJECTION MASTER',
        description: 'Daito Manabe pushes the boundaries of human-computer interaction through facial muscle control, projection mapping, and data visualization. His work transforms the human body into a digital canvas.',
        background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #ff6b35 100%)',
        backgroundImage: 'https://neocha-content.oss-cn-hongkong.aliyuncs.com/wp-content/uploads/sites/2/2020/09/daito-manabe-01.gif',
        artistPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        social: {
            handle: '@daito',
            url: 'https://twitter.com/daito'
        },
        isCurrentlyTrending: false,
        metrics: {
            projects: '300+',
            awards: '25+',
            collaborations: '100+'
        },
        tags: ['HCI', 'PROJECTION MAPPING', 'FACIAL MUSCLE CONTROL', 'DATA VISUALIZATION', 'BODY INTERFACE'],
        trending: [
            { title: 'Face Visualizer', location: 'Global Exhibitions', url: 'https://www.rhizomatiks.com/en/work/face_visualizer/' },
            { title: 'Perfume Technology', location: 'Concert Tours', url: 'https://www.youtube.com/watch?v=A6xNvYoVl1M' },
            { title: 'Nike Air Max Installation', location: 'Brand Collaborations', url: 'https://www.rhizomatiks.com/en/work/nike/' }
        ]
    },
    {
        id: 'nobumichi-tosa',
        name: 'NOBUMICHI TOSA',
        subtitle: 'MEIWA DENKI',
        year: 'OTAMATONE CREATOR',
        description: 'Nobumichi Tosa creates wonderfully absurd electronic instruments and art objects. His Otamatone became a global phenomenon, bringing playful interaction to electronic music creation.',
        background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 50%, #093637 100%)',
        backgroundImage: 'https://prcdn.freetls.fastly.net/release_image/43036/10/43036-10-54a6d0d1956dba242a5dfa15ff1dcc09-2784x1856.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds',
        artistPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        social: {
            handle: '@maywadenki',
            url: 'https://twitter.com/maywadenki'
        },
        isCurrentlyTrending: true,
        metrics: {
            instruments: '200+',
            exhibitions: '150+',
            years: '30+'
        },
        tags: ['ELECTRONIC INSTRUMENTS', 'QUIRKY DESIGN', 'OTAMATONE', 'ART OBJECTS', 'PLAYFUL TECH'],
        trending: [
            { title: 'Otamatone Deluxe', location: 'Worldwide', url: 'https://otamatone.jp' },
            { title: 'Nonsense Machine Exhibition', location: 'Tokyo', url: 'https://maywadenki.com' },
            { title: 'Electronic Art Collective', location: 'Museum Shows', url: 'https://maywadenki.com/exhibition' }
        ]
    },
    {
        id: 'mae',
        name: 'MAE',
        subtitle: 'DIGITAL FASHION CURATOR',
        year: 'CDG ARCHIVE SPECIALIST',
        description: 'Mae (@maetomodayo) has built one of the most comprehensive Comme des Garçons collections, documenting fashion history through digital curation and creating virtual wardrobes that bridge physical and digital fashion.',
        background: 'linear-gradient(135deg, #000000 0%, #434343 50%, #000000 100%)',
        backgroundImage: 'https://fashionsnap-assets.com/asset/format=auto,width=1088/streetstyle/images/2025/09/08-29-25-52-03-7-b3b3696a-dc79-4b90-ab22-3b622ea492e5.jpg',
        artistPhoto: 'https://images.unsplash.com/photo-1494790108755-2616c40c2c2f?w=150&h=150&fit=crop&crop=face',
        social: {
            handle: '@maetomodayo',
            url: 'https://instagram.com/maetomodayo'
        },
        isCurrentlyTrending: true,
        metrics: {
            pieces: '2000+',
            followers: '100K+',
            years: '15+'
        },
        tags: ['FASHION TECH', 'CDG COLLECTOR', 'DIGITAL WARDROBE', 'FASHION ARCHIVE', 'VIRTUAL CURATION'],
        trending: [
            { title: 'CDG Digital Archive', location: 'Online', url: 'https://instagram.com/maetomodayo' },
            { title: 'Virtual Fashion Week', location: 'Digital Platforms', url: 'https://fashionweek.com' },
            { title: 'Fashion Documentation', location: 'Social Media', url: 'https://instagram.com/maetomodayo' }
        ]
    },
    {
        id: 'yutaka-fujiwara',
        name: 'YUTAKA FUJIWARA',
        subtitle: 'BERBERJIN',
        year: 'VINTAGE DENIM EXPERT',
        description: 'Yutaka Fujiwara (@yuttan1977) is the master of vintage denim culture, running BerBerJin and educating enthusiasts about authentic vintage pieces. His expertise shapes global denim collecting trends.',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)',
        backgroundImage: 'https://liveinrugged.com/wp/wp-content/uploads/2023/10/saintmichael_yutakafujiwara_202310_01.jpg',
        artistPhoto: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
        social: {
            handle: '@yuttan1977',
            url: 'https://twitter.com/yuttan1977'
        },
        isCurrentlyTrending: false,
        metrics: {
            years: '25+',
            pieces: '5000+',
            stores: '3'
        },
        tags: ['VINTAGE DENIM', 'FASHION EXPERTISE', 'CULTURAL CURATOR', 'AUTHENTIC VINTAGE', 'DENIM HISTORY'],
        trending: [
            { title: 'BerBerJin Collection', location: 'Tokyo Stores', url: 'https://berberjin.com' },
            { title: 'Vintage Denim Guide', location: 'Publications', url: 'https://berberjin.com/guide' },
            { title: 'Denim Culture Education', location: 'Workshops', url: 'https://berberjin.com/workshop' }
        ]
    },
    {
        id: 'emi-kusano',
        name: 'EMI KUSANO',
        subtitle: 'AI + MEMORY ARTIST',
        year: 'RETRO-FUTURIST',
        description: 'Emi Kusano explores the intersection of AI and human memory, creating retro-futuristic art that questions the relationship between technology, nostalgia, and collective memory in digital age.',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundImage: 'https://static.wixstatic.com/media/2c6d74_67cec32de2fb4ecc95f8eda1089a5c8a~mv2.jpeg/v1/fill/w_1958,h_1092,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/AN00.jpeg',
        artistPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        social: {
            handle: '@emi_kusano',
            url: 'https://twitter.com/emi_kusano'
        },
        isCurrentlyTrending: true,
        metrics: {
            artworks: '80+',
            exhibitions: '40+',
            ai_models: '15+'
        },
        tags: ['AI ART', 'MEMORY STUDIES', 'RETRO-FUTURISM', 'DIGITAL NOSTALGIA', 'TECH PHILOSOPHY'],
        trending: [
            { title: 'Memory Palace AI', location: 'Digital Galleries', url: 'https://example.com/memory-palace' },
            { title: 'Retro-Future Dreams', location: 'Tokyo Exhibition', url: 'https://example.com/retro-future' },
            { title: 'AI Memory Project', location: 'Research Collaboration', url: 'https://example.com/ai-memory' }
        ]
    },
    {
        id: 'wednesday-campanella',
        name: 'utaha',
        subtitle: 'WEDNESDAY CAMPANELLA',
        year: 'MUSIC + VISUALS',
        description: 'Wednesday Campanella creates boundary-pushing electronic music paired with surreal visual performances. Their work redefines J-pop through experimental soundscapes and otherworldly aesthetics.',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        backgroundImage: 'https://www.billboard.com/wp-content/uploads/2021/10/Wednesday-Campanella%E2%80%99-courtesy-of-bb-japan-billboard-1548-1635458426.jpg?w=942&h=628&crop=1',
        artistPhoto: 'https://images.unsplash.com/photo-1494790108755-2616c40c2c2f?w=150&h=150&fit=crop&crop=face',
        social: {
            handle: '@wed_camp',
            url: 'https://twitter.com/wed_camp'
        },
        isCurrentlyTrending: true,
        metrics: {
            albums: '10+',
            videos: '50+',
            tours: '20+'
        },
        tags: ['AVANT-GARDE MUSIC', 'ELECTRONIC POP', 'VISUAL PERFORMANCE', 'SURREAL AESTHETICS', 'EXPERIMENTAL SOUND'],
        trending: [
            { title: 'SUPERMAN Tour 2024', location: 'Asia Pacific', url: 'https://www.wednesdaycampanella.com' },
            { title: 'Visual Album Project', location: 'Digital Release', url: 'https://www.youtube.com/c/wednesdaycampanella' },
            { title: 'Collaborative Performances', location: 'Art Festivals', url: 'https://www.wednesdaycampanella.com/live' }
        ]
    }
];

class DashboardController {
    constructor() {
        this.currentProfileIndex = 0;
        this.isTransitioning = false;
        this.dynamicProfileGenerator = new DynamicProfileGenerator();
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
                console.log('Sample articles with dates:');
                articles.slice(0, 3).forEach(article => {
                    console.log(`- ${article.title} (${article.pubDate.toISOString()}) from ${article.source}`);
                });
                
                const realTimeProfile = await this.dynamicProfileGenerator.generateProfileFromArticles(articles);
                
                if (realTimeProfile) {
                    // Remove any existing real-time profiles
                    this.allProfiles = this.allProfiles.filter(p => !p.isRealTime);
                    
                    // Add new real-time profile at the beginning
                    this.allProfiles.unshift(realTimeProfile);
                    
                    // Update navigation
                    this.createProfileNavigation();
                    
                    console.log(`Added real-time profile: ${realTimeProfile.name}`);
                    console.log(`Based on ${articles.length} articles from ${new Set(articles.map(a => a.source)).size} sources`);
                }
            } else {
                console.log('No relevant articles found. Checking feeds...');
                // Debug: check individual feeds
                for (const feedConfig of RSS_FEEDS) {
                    const feedArticles = await this.dynamicProfileGenerator.rssParser.fetchFeed(feedConfig);
                    console.log(`${feedConfig.name}: ${feedArticles.length} relevant articles`);
                }
            }
        } catch (error) {
            console.error('Error loading real-time profiles:', error);
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
        `;
        
        // Re-attach event listeners
        document.querySelectorAll('.artist-card').forEach((btn, index) => {
            btn.addEventListener('click', () => this.switchToProfile(index));
        });
    }

    setupEventListeners() {
        // Artist navigation buttons
        document.querySelectorAll('.artist-card').forEach((btn, index) => {
            btn.addEventListener('click', () => this.switchToProfile(index));
        });

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