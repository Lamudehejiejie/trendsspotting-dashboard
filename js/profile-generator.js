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

        // Get the best image from articles (prefer articles with images)
        const articleWithImage = categoryArticles.find(article => article.imageUrl);
        const backgroundImageUrl = articleWithImage ? articleWithImage.imageUrl : this.getFallbackImage(mainCategory);

        return {
            id: `trending-live-${Date.now()}`,
            name: 'TRENDING NOW',
            subtitle: 'REAL-TIME INSIGHTS', 
            year: 'LIVE UPDATING',
            description: `Latest ${mainCategory} trends: ${latestArticle.title}. ${latestArticle.description.substring(0, 200)}...`,
            background: this.getCategoryBackground(mainCategory),
            backgroundImage: backgroundImageUrl,
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
            tags: ['TRENDING NOW', ...this.generateTags(articles).slice(0, 4)],
            trending: categoryArticles.slice(0, 3).map(article => ({
                title: article.title.substring(0, 50) + '...',
                location: article.source,
                url: article.link,
                imageUrl: article.imageUrl
            })),
            isRealTime: true,
            isLoading: false,
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

    getFallbackImage(category) {
        // HD Unsplash images related to each category as fallbacks
        const fallbackImages = {
            tech: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&q=80',
            design: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop&q=80',
            fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&q=80',
            art: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop&q=80',
            music: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop&q=80',
            default: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1920&h=1080&fit=crop&q=80'
        };
        return fallbackImages[category] || fallbackImages.default;
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