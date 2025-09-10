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