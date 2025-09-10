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
        artistPhoto: '',
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
        artistPhoto: '',
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
        artistPhoto: '',
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
        artistPhoto: '',
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
        artistPhoto: '',
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
        artistPhoto: '',
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
        artistPhoto: '',
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