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