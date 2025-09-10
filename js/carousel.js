// Carousel Navigation Manager
class CarouselManager {
    constructor(dashboardController) {
        this.dashboard = dashboardController;
        this.currentScroll = 0;
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
    }

    setup() {
        const carousel = document.querySelector('.artist-list');
        const prevBtn = document.querySelector('.carousel-nav.prev');
        const nextBtn = document.querySelector('.carousel-nav.next');
        const container = carousel.parentElement;
        const cardWidth = 152; // Width of each card + margin (140px + 12px gap)
        
        const getMaxScroll = () => Math.max(0, (this.dashboard.allProfiles.length * cardWidth) - container.clientWidth);
        
        const updateButtons = () => {
            const maxScroll = getMaxScroll();
            prevBtn.style.opacity = this.currentScroll <= 0 ? '0.3' : '1';
            nextBtn.style.opacity = this.currentScroll >= maxScroll ? '0.3' : '1';
            prevBtn.disabled = this.currentScroll <= 0;
            nextBtn.disabled = this.currentScroll >= maxScroll;
        };
        
        const smoothScrollTo = (targetScroll) => {
            const maxScroll = getMaxScroll();
            this.currentScroll = Math.max(0, Math.min(maxScroll, targetScroll));
            carousel.style.transform = `translateX(-${this.currentScroll}px)`;
            updateButtons();
        };
        
        // Arrow button navigation
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            smoothScrollTo(this.currentScroll - cardWidth * 3);
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            smoothScrollTo(this.currentScroll + cardWidth * 3);
        });
        
        // Mouse drag functionality with global events
        container.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.startX = e.pageX;
            this.scrollLeft = this.currentScroll;
            container.style.cursor = 'grabbing';
            document.body.style.userSelect = 'none';
            e.preventDefault();
        });
        
        // Global mouse events to handle dragging outside container
        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (this.startX - x) * 1.5; // Increased sensitivity
            smoothScrollTo(this.scrollLeft + walk);
        });
        
        document.addEventListener('mouseup', () => {
            if (this.isDragging) {
                this.isDragging = false;
                container.style.cursor = 'grab';
                document.body.style.userSelect = 'auto';
                updateButtons();
            }
        });
        
        // Touch drag functionality
        container.addEventListener('touchstart', (e) => {
            this.startX = e.touches[0].pageX;
            this.scrollLeft = this.currentScroll;
            this.isDragging = true;
        }, { passive: true });
        
        container.addEventListener('touchmove', (e) => {
            if (!this.isDragging || !this.startX) return;
            const x = e.touches[0].pageX;
            const walk = (this.startX - x) * 2; // Increased touch sensitivity
            smoothScrollTo(this.scrollLeft + walk);
        }, { passive: true });
        
        container.addEventListener('touchend', () => {
            this.startX = 0;
            this.isDragging = false;
            updateButtons();
        }, { passive: true });
        
        // Mouse wheel scrolling
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const scrollAmount = e.deltaY > 0 ? cardWidth : -cardWidth;
            smoothScrollTo(this.currentScroll + scrollAmount);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.target.closest('.artist-card')) return; // Don't interfere with card selection
            
            if (e.key === 'ArrowLeft' && e.shiftKey) {
                e.preventDefault();
                smoothScrollTo(this.currentScroll - cardWidth);
            } else if (e.key === 'ArrowRight' && e.shiftKey) {
                e.preventDefault();
                smoothScrollTo(this.currentScroll + cardWidth);
            }
        });
        
        // Set initial cursor style
        container.style.cursor = 'grab';
        
        // Initial button state
        updateButtons();
        
        // Update on window resize
        window.addEventListener('resize', updateButtons);
        
        // Auto-scroll to show active card if it's out of view
        this.scrollToActiveCard();
    }
    
    scrollToActiveCard() {
        const activeCard = document.querySelector('.artist-card.active');
        const carousel = document.querySelector('.artist-list');
        const container = carousel.parentElement;
        
        if (activeCard && carousel && container) {
            const cardRect = activeCard.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            if (cardRect.left < containerRect.left || cardRect.right > containerRect.right) {
                const cardIndex = parseInt(activeCard.dataset.index);
                const scrollAmount = cardIndex * 152; // card width
                carousel.style.transform = `translateX(-${scrollAmount}px)`;
                this.currentScroll = scrollAmount;
            }
        }
    }
}