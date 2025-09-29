class BrightnessDetector {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.currentBrightness = 'dark'; // default
    }

    async detectBackgroundBrightness(imageUrl, callback) {
        if (!imageUrl) {
            // No image, assume dark background
            this.applyBrightnessMode('dark');
            if (callback) callback('dark');
            return 'dark';
        }

        try {
            const img = new Image();
            img.crossOrigin = 'anonymous';

            img.onload = () => {
                try {
                    // Set canvas size to sample image
                    this.canvas.width = Math.min(img.width, 100);
                    this.canvas.height = Math.min(img.height, 100);

                    // Draw image to canvas
                    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);

                    // Get image data
                    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
                    const data = imageData.data;

                    // Calculate average brightness
                    let totalBrightness = 0;
                    let pixelCount = 0;

                    // Sample every 4th pixel for performance
                    for (let i = 0; i < data.length; i += 16) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];

                        // Calculate luminance using standard formula
                        const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
                        totalBrightness += luminance;
                        pixelCount++;
                    }

                    const averageBrightness = totalBrightness / pixelCount;

                    // Determine if background is light or dark
                    // Threshold: 128 (middle of 0-255 range)
                    const brightnessMode = averageBrightness > 128 ? 'light' : 'dark';

                    console.log(`🎨 Background brightness: ${averageBrightness.toFixed(1)} - Mode: ${brightnessMode}`);

                    this.currentBrightness = brightnessMode;
                    this.applyBrightnessMode(brightnessMode);

                    if (callback) callback(brightnessMode);

                } catch (error) {
                    console.error('Error analyzing image brightness:', error);
                    this.applyBrightnessMode('dark');
                    if (callback) callback('dark');
                }
            };

            img.onerror = () => {
                console.log('Could not load image for brightness detection, using dark mode');
                this.applyBrightnessMode('dark');
                if (callback) callback('dark');
            };

            img.src = imageUrl;

        } catch (error) {
            console.error('Error in brightness detection:', error);
            this.applyBrightnessMode('dark');
            if (callback) callback('dark');
        }
    }

    applyBrightnessMode(mode) {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        // Remove existing brightness classes
        mainContent.classList.remove('bright-background', 'dark-background');

        // Add appropriate class
        if (mode === 'light') {
            mainContent.classList.add('bright-background');
            console.log('🔆 Applied bright background mode - black text');
        } else {
            mainContent.classList.add('dark-background');
            console.log('🌙 Applied dark background mode - white text');
        }

        this.currentBrightness = mode;
    }

    getCurrentBrightness() {
        return this.currentBrightness;
    }

    // Method to detect brightness from gradient backgrounds
    detectGradientBrightness(gradientString) {
        // Extract color values from gradient string
        const colorMatches = gradientString.match(/#[0-9a-fA-F]{6}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g);

        if (!colorMatches || colorMatches.length === 0) {
            this.applyBrightnessMode('dark');
            return 'dark';
        }

        let totalBrightness = 0;
        let colorCount = 0;

        colorMatches.forEach(color => {
            let r, g, b;

            if (color.startsWith('#')) {
                // Hex color
                r = parseInt(color.slice(1, 3), 16);
                g = parseInt(color.slice(3, 5), 16);
                b = parseInt(color.slice(5, 7), 16);
            } else if (color.startsWith('rgb')) {
                // RGB color
                const matches = color.match(/\d+/g);
                if (matches && matches.length >= 3) {
                    r = parseInt(matches[0]);
                    g = parseInt(matches[1]);
                    b = parseInt(matches[2]);
                }
            }

            if (r !== undefined && g !== undefined && b !== undefined) {
                const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
                totalBrightness += luminance;
                colorCount++;
            }
        });

        if (colorCount === 0) {
            this.applyBrightnessMode('dark');
            return 'dark';
        }

        const averageBrightness = totalBrightness / colorCount;
        const brightnessMode = averageBrightness > 128 ? 'light' : 'dark';

        console.log(`🎨 Gradient brightness: ${averageBrightness.toFixed(1)} - Mode: ${brightnessMode}`);

        this.applyBrightnessMode(brightnessMode);
        return brightnessMode;
    }
}