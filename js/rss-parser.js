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
    },
    {
        name: 'Chizaizukan',
        url: 'https://chizaizukan.com/news/',
        category: 'tech',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Newspicks',
        url: 'https://newspicks.com/theme-news/technology/',
        category: 'tech',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Lumen Prize',
        url: 'https://lumenprize.org/',
        category: 'art',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'ARs Electronica',
        url: 'https://ars.electronica.art/news/en/',
        category: 'art',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Designboom',
        url: 'https://www.designboom.com/web/rss/',
        category: 'design',
        proxy: 'https://api.allorigins.win/get?url='
        },
    // FASHION
    {
        name: 'Vogue',
        url: 'https://www.vogue.com/feed/rss',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Hypebeast',
        url: 'https://hypebeast.com/feed',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'WWD (Women\'s Wear Daily)',
        url: 'https://wwd.com/feed/',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Business of Fashion',
        url: 'https://www.businessoffashion.com/feed/',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'The Cut',
        url: 'https://www.thecut.com/feed/',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Who What Wear',
        url: 'https://www.whowhatwear.com/rss',
        category: 'fashion',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // CREATIVE/DESIGN
    {
        name: 'Designboom',
        url: 'https://www.designboom.com/feed/',
        category: 'design',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Dezeen',
        url: 'https://www.dezeen.com/feed/',
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
        name: 'It\'s Nice That',
        url: 'https://www.itsnicethat.com/feed',
        category: 'design',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Colossal',
        url: 'https://www.thisiscolossal.com/feed/',
        category: 'art',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // ENTERTAINMENT/CULTURE
    {
        name: 'Variety',
        url: 'https://variety.com/feed/',
        category: 'entertainment',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'The Hollywood Reporter',
        url: 'https://www.hollywoodreporter.com/feed/',
        category: 'entertainment',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Deadline',
        url: 'https://deadline.com/feed/',
        category: 'entertainment',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // MUSIC FESTIVALS
    {
        name: 'Pitchfork',
        url: 'https://pitchfork.com/rss/',
        category: 'music',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Consequence',
        url: 'https://consequence.net/feed/',
        category: 'music',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'NME',
        url: 'https://www.nme.com/feed',
        category: 'music',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Stereogum',
        url: 'https://www.stereogum.com/feed/',
        category: 'music',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // SOCIAL MEDIA TRENDS
    {
        name: 'Social Media Today',
        url: 'https://www.socialmediatoday.com/rss.xml',
        category: 'social-trends',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Later Blog (Instagram/TikTok trends)',
        url: 'https://later.com/blog/feed/',
        category: 'social-trends',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Hootsuite Blog',
        url: 'https://blog.hootsuite.com/feed/',
        category: 'social-trends',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // TECH/CAMPAIGNS
    {
        name: 'The Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        category: 'tech',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'TechCrunch',
        url: 'https://techcrunch.com/feed/',
        category: 'tech',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Adweek',
        url: 'https://www.adweek.com/feed/',
        category: 'campaigns',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Campaign',
        url: 'https://www.campaignlive.com/feed',
        category: 'campaigns',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Ads of the World',
        url: 'https://www.adsoftheworld.com/feed',
        category: 'campaigns',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // GAMING
    {
        name: 'IGN',
        url: 'https://www.ign.com/feed.xml',
        category: 'games',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Polygon',
        url: 'https://www.polygon.com/rss/index.xml',
        category: 'games',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Kotaku',
        url: 'https://kotaku.com/feed',
        category: 'games',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Game Informer',
        url: 'https://www.gameinformer.com/feeds/thefeed.aspx',
        category: 'games',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Eurogamer',
        url: 'https://www.eurogamer.net/?format=rss',
        category: 'games',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // YEAR WRAP-UP/TRENDS
    {
        name: 'Trend Hunter',
        url: 'https://www.trendhunter.com/rss',
        category: 'trends',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'WGSN Insider',
        url: 'https://www.wgsn.com/blogs/feed/',
        category: 'trends',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // REGIONAL - ASIA
    {
        name: 'Vogue Japan',
        url: 'https://www.vogue.co.jp/feed',
        category: 'fashion-asia',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Hypebeast Japan',
        url: 'https://hypebeast.com/jp/feed',
        category: 'fashion-asia',
        proxy: 'https://api.allorigins.win/get?url='
    },

    // REGIONAL - EUROPE
    {
        name: 'Vogue UK',
        url: 'https://www.vogue.co.uk/feed/rss',
        category: 'fashion-europe',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'i-D Magazine',
        url: 'https://i-d.vice.com/en/feed',
        category: 'fashion-europe',
        proxy: 'https://api.allorigins.win/get?url='
    },
    {
        name: 'Dazed',
        url: 'https://www.dazeddigital.com/rss',
        category: 'fashion-europe',
        proxy: 'https://api.allorigins.win/get?url='
    },

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

    async getArticlesByCategory(category) {
        const categoryArticles = [];

        const categoryFeeds = RSS_FEEDS.filter(feed =>
            feed.category === category ||
            feed.category.includes(category) ||
            (category === 'social-trends' && feed.category === 'social-trends') ||
            (category === 'campaigns' && feed.category === 'campaigns') ||
            (category === 'games' && feed.category === 'games') ||
            (category === 'trends' && feed.category === 'trends')
        );

        for (const feedConfig of categoryFeeds) {
            const articles = await this.fetchFeed(feedConfig);
            categoryArticles.push(...articles);
        }

        return categoryArticles
            .sort((a, b) => b.pubDate - a.pubDate)
            .slice(0, 15); // Top 15 most recent articles for each category
    }

    getAvailableCategories() {
        const categories = new Set();
        RSS_FEEDS.forEach(feed => {
            categories.add(feed.category);
        });
        return Array.from(categories);
    }
}