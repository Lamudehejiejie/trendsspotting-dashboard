const artistProfiles = [
    {
        id: 'yuri-suzuki',
        name: 'YURI SUZUKI',
        subtitle: 'SOUND DESIGN',
        year: 'AUDIO INNOVATION',
        description: 'Yuri Suzuki designs innovative audio experiences and sound installations. His work spans from colorful modular synthesizers to architectural sound projects that make music creation accessible and playful.',
        background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #EC4899 100%)',
        backgroundImage: 'https://www.yurisuzuki.com/content/2-projects/3-ototnomori/ototonomori-yurisuzuki-1.jpg',
        social: {
            handle: '@yuri_suzuki_',
            url: 'https://twitter.com/yuri_suzuki_'
        },
        isCurrentlyTrending: true,
        metrics: {
            instruments: '50+',
            installations: '80+',
            collaborations: '40+'
        },
        tags: ['SOUND DESIGN', 'AUDIO INNOVATION', 'MODULAR SYNTH', 'INTERACTIVE SOUND', 'PLAYFUL DESIGN'],
        trending: [
            { title: 'Ototo Touch Synthesizer', location: 'Global Retail', url: 'https://yurisuzuki.com/ototo' },
            { title: 'Sound of the Earth', location: 'Museum Installations', url: 'https://yurisuzuki.com/sound-earth' },
            { title: 'Colour Chaser', location: 'Interactive Exhibits', url: 'https://yurisuzuki.com/colour-chaser' }
        ]
    },
    {
        id: 'takeshi-murata',
        name: 'TAKESHI MURATA',
        subtitle: 'DIGITAL GLITCH MASTER',
        year: 'VIDEO ART PIONEER',
        description: 'Takeshi Murata creates hypnotic digital sculptures and glitch videos that transform familiar imagery into otherworldly experiences. His work bridges traditional Japanese aesthetics with cutting-edge digital manipulation.',
        background: 'linear-gradient(135deg, #1F2937 0%, #DC2626 50%, #F59E0B 100%)',
        backgroundImage: 'https://themassage.jp/wwp/wp-content/uploads/2018/08/TMu_The_Sisterhood_2011_23.jpg',
        social: {
            handle: '@takeshimurata',
            url: 'https://twitter.com/takeshimurata'
        },
        isCurrentlyTrending: true,
        metrics: {
            videos: '50+',
            exhibitions: '100+',
            collaborations: '30+'
        },
        tags: ['GLITCH ART', 'VIDEO SCULPTURE', 'DIGITAL MANIPULATION', 'JAPANESE AESTHETICS', 'EXPERIMENTAL MEDIA'],
        trending: [
            { title: 'Infinite Doors', location: 'LACMA', url: 'https://takeshimurata.com' },
            { title: 'Pink Dot', location: 'Venice Biennale', url: 'https://takeshimurata.com/pink-dot' },
            { title: 'Gyre Installation', location: 'Tokyo Art Fair', url: 'https://takeshimurata.com/gyre' }
        ]
    },
    {
        id: 'ryoji-ikeda',
        name: 'RYOJI IKEDA',
        subtitle: 'DATA SOUND ARTIST',
        year: 'MINIMAL ELECTRONIC',
        description: 'Ryoji Ikeda transforms pure data into immersive audiovisual experiences. His minimal electronic compositions and data visualizations create transcendent experiences from mathematical precision.',
        background: 'linear-gradient(135deg, #000000 0%, #1F2937 50%, #374151 100%)',
        backgroundImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ryoji_Ikeda.jpg',
        social: {
            handle: '@ryojiikeda',
            url: 'https://twitter.com/ryojiikeda'
        },
        isCurrentlyTrending: true,
        metrics: {
            installations: '40+',
            albums: '15+',
            venues: '100+'
        },
        tags: ['DATA ART', 'MINIMAL ELECTRONIC', 'AUDIOVISUAL', 'MATHEMATICAL ART', 'SOUND SCULPTURE'],
        trending: [
            { title: 'data.matrix', location: 'Global Installations', url: 'https://ryojiikeda.com/project/datamatrix' },
            { title: 'superposition', location: 'Park Avenue Armory', url: 'https://ryojiikeda.com/project/superposition' },
            { title: 'point line cloud', location: 'European Tour', url: 'https://ryojiikeda.com/project/pointlinecloud' }
        ]
    },
    {
        id: 'sputniko',
        name: 'SPUTNIKO!',
        subtitle: 'TECH FEMINISM',
        year: 'SPECULATIVE DESIGN',
        description: 'Sputniko! (Hiromi Ozaki) creates provocative projects that examine technology through a feminist lens. Her speculative designs challenge gender roles in tech and imagine alternative technological futures.',
        background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 50%, #FBBF24 100%)',
        backgroundImage: 'https://storage.googleapis.com/studio-design-asset-files/projects/1Va6wNdJW7/s-1800x1200_v-frms_webp_9d5d03ee-16e6-4d4f-9a89-d88b17622398_regular.webp',
        social: {
            handle: '@5putn1k0',
            url: 'https://twitter.com/5putn1k0'
        },
        isCurrentlyTrending: true,
        metrics: {
            projects: '60+',
            videos: '25+',
            talks: '200+'
        },
        tags: ['TECH FEMINISM', 'SPECULATIVE DESIGN', 'CRITICAL DESIGN', 'GENDER TECH', 'FUTURE SCENARIOS'],
        trending: [
            { title: 'Menstruation Machine', location: 'Design Museums', url: 'https://sputniko.com/menstruation-machine' },
            { title: 'Crowbot Jenny', location: 'MIT Media Lab', url: 'https://sputniko.com/crowbot-jenny' },
            { title: 'Red Silk of Fate', location: 'Tokyo Exhibition', url: 'https://sputniko.com/red-silk-fate' }
        ]
    },
    {
        id: 'so-kanno',
        name: 'SO KANNO',
        subtitle: 'ROBOTIC PERFORMANCE',
        year: 'MACHINE ORCHESTRA',
        description: 'So Kanno creates robotic performances where machines become musical performers. His works explore the relationship between humans and machines through orchestrated mechanical performances.',
        background: 'linear-gradient(135deg, #374151 0%, #6B7280 50%, #9CA3AF 100%)',
        backgroundImage: 'https://www.kanno.so/wp-content/uploads/2021/05/MG_7243-2.jpg',
        social: {
            handle: '@so_kanno',
            url: 'https://twitter.com/so_kanno'
        },
        isCurrentlyTrending: true,
        metrics: {
            robots: '100+',
            performances: '50+',
            installations: '30+'
        },
        tags: ['ROBOTIC ART', 'MACHINE PERFORMANCE', 'MECHANICAL ORCHESTRA', 'SOUND INSTALLATION', 'AUTOMATION ART'],
        trending: [
            { title: 'Spiritual Machine Orchestra', location: 'Ars Electronica', url: 'https://so-kanno.com/spiritual-machine' },
            { title: 'Piano Phase', location: 'Music Venues', url: 'https://so-kanno.com/piano-phase' },
            { title: 'Robotic Percussion', location: 'Tokyo Performance', url: 'https://so-kanno.com/percussion' }
        ]
    },
    {
        id: 'exonemo',
        name: 'EXONEMO',
        subtitle: 'NET ART COLLECTIVE',
        year: 'DIGITAL ARCHAEOLOGY',
        description: 'ExoNemo (Kensuke Sembo & Yae Akaiwa) are pioneers of Japanese net art, creating works that explore digital culture, online behavior, and the archaeology of internet history.',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 50%, #7C3AED 100%)',
        backgroundImage: 'https://evm.elektramontreal.ca/uploads/gallery/exonemo/exonemo-evm-3-1200w.png',
        social: {
            handle: '@exonemo',
            url: 'https://twitter.com/exonemo'
        },
        isCurrentlyTrending: true,
        metrics: {
            net_works: '200+',
            exhibitions: '150+',
            years: '25+'
        },
        tags: ['NET ART', 'DIGITAL ARCHAEOLOGY', 'INTERNET CULTURE', 'BROWSER ART', 'ONLINE BEHAVIOR'],
        trending: [
            { title: 'The Road Movie', location: 'Digital Platforms', url: 'https://exonemo.com/road-movie' },
            { title: 'Kiss or Kill', location: 'Net Art Archive', url: 'https://exonemo.com/kiss-kill' },
            { title: 'Browser Crash', location: 'Media Art Festivals', url: 'https://exonemo.com/browser-crash' }
        ]
    },
    {
        id: 'masahiko-sato',
        name: 'MASAHIKO SATO',
        subtitle: 'BTOY CREATOR',
        year: 'DIGITAL TOY DESIGN',
        description: 'Masahiko Sato creates digital toys and interactive installations that blur the line between play and art. His work brings Japanese kawaii culture into contemporary digital art spaces.',
        background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)',
        backgroundImage: 'https://static.designboom.com/wp-content/uploads/2018/04/issey-miyake-masahiko-sato-my-first-me-exhibition-milan-designboom-04.jpg',
        social: {
            handle: '@masahiko_sato',
            url: 'https://twitter.com/masahiko_sato'
        },
        isCurrentlyTrending: true,
        metrics: {
            toys: '100+',
            installations: '60+',
            apps: '20+'
        },
        tags: ['DIGITAL TOYS', 'INTERACTIVE PLAY', 'KAWAII TECH', 'GAME ART', 'PLAYFUL INTERFACES'],
        trending: [
            { title: 'BTOY Digital Toys', location: 'App Stores', url: 'https://masahikosato.com/btoy' },
            { title: 'Playful Interfaces', location: 'Design Museums', url: 'https://masahikosato.com/interfaces' },
            { title: 'Interactive Kawaii', location: 'Tokyo Digital Art', url: 'https://masahikosato.com/kawaii' }
        ]
    },
    {
        id: 'aya-takano',
        name: 'AYA TAKANO',
        subtitle: 'SUPERFLAT EVOLUTION',
        year: 'POST-KAWAII ARTIST',
        description: 'Aya Takano evolves the Superflat movement into contemporary digital realms. Her otherworldly characters and landscapes explore themes of technology, nature, and Japanese pop culture futurism.',
        background: 'linear-gradient(135deg, #FBBF24 0%, #F472B6 50%, #8B5CF6 100%)',
        backgroundImage: 'https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/w_auto,c_fill,q_auto,dpr_1.0,f_auto,h_631/https://d2u3kfwd92fzu7.cloudfront.net/catalog/artwork/gallery/1134/Galerie_Perrotin_Aya_Takano-1.jpg',
        social: {
            handle: '@aya_takano_art',
            url: 'https://twitter.com/aya_takano_art'
        },
        isCurrentlyTrending: true,
        metrics: {
            paintings: '500+',
            exhibitions: '100+',
            collaborations: '50+'
        },
        tags: ['SUPERFLAT', 'POST-KAWAII', 'JAPANESE FUTURISM', 'POP SURREALISM', 'DIGITAL PAINTING'],
        trending: [
            { title: 'Magical Girl Landscapes', location: 'Perrotin Gallery', url: 'https://perrotin.com/aya-takano' },
            { title: 'Cosmic Kawaii Series', location: 'Tokyo Museums', url: 'https://aya-takano.com/cosmic' },
            { title: 'Digital Native Paintings', location: 'International Fairs', url: 'https://aya-takano.com/digital' }
        ]
    },
    {
        id: 'akira-wakita',
        name: 'AKIRA WAKITA',
        subtitle: 'WEARABLE TECH',
        year: 'FASHION TECHNOLOGY',
        description: 'Akira Wakita designs experimental wearables that respond to emotion, environment, and social interaction. His work explores how clothing can become an interface for digital expression.',
        background: 'linear-gradient(135deg, #1F2937 0%, #7C3AED 50%, #EC4899 100%)',
        backgroundImage: 'https://akirawakita.com/img/work-inner/dismantle/dismantle_01.jpg',
        social: {
            handle: '@akira_wakita',
            url: 'https://twitter.com/akira_wakita'
        },
        isCurrentlyTrending: true,
        metrics: {
            prototypes: '80+',
            patents: '15+',
            collaborations: '30+'
        },
        tags: ['WEARABLE TECH', 'FASHION TECHNOLOGY', 'RESPONSIVE CLOTHING', 'EMOTIONAL INTERFACES', 'SMART TEXTILES'],
        trending: [
            { title: 'Emotion Sensing Garments', location: 'Fashion Tech Shows', url: 'https://akirawakita.com/emotion' },
            { title: 'Social Distance Clothing', location: 'Design Exhibitions', url: 'https://akirawakita.com/social' },
            { title: 'Adaptive Fashion Tech', location: 'Tokyo Fashion Week', url: 'https://akirawakita.com/adaptive' }
        ]
    },
    {
        id: 'kohei-nawa',
        name: 'KOHEI NAWA',
        subtitle: 'SCULPTURE TECHNOLOGIST',
        year: 'MATERIAL INNOVATOR',
        description: 'Kohei Nawa creates sculptures that seem to exist between digital and physical realms. His pixelated and liquid-like forms challenge our perception of matter and space through innovative materials.',
        background: 'linear-gradient(135deg, #065F46 0%, #059669 50%, #10B981 100%)',
        backgroundImage: 'https://hubemag.com/wp-content/uploads/2024/09/6B4405A9-7278-472F-825B-4E132002E7A7-1536x1193.jpg',
        social: {
            handle: '@kohei_nawa',
            url: 'https://twitter.com/kohei_nawa'
        },
        isCurrentlyTrending: true,
        metrics: {
            sculptures: '200+',
            materials: '50+',
            exhibitions: '80+'
        },
        tags: ['MATERIAL INNOVATION', 'DIGITAL SCULPTURE', 'PIXEL ART', 'SPACE PERCEPTION', 'CONTEMPORARY SCULPTURE'],
        trending: [
            { title: 'PixCell Series', location: 'International Museums', url: 'https://kohei-nawa.net/pixcell' },
            { title: 'Liquid Sculptures', location: 'Venice Biennale', url: 'https://kohei-nawa.net/liquid' },
            { title: 'Force Installation', location: 'Museum of Contemporary Art', url: 'https://kohei-nawa.net/force' }
        ]    
    },
    {
        id: 'siro-inc',
        name: 'SIRO INC.',
        subtitle: 'DESIGN ENGINEERING',
        year: 'KINETIC INSTALLATION',
        description: 'siro inc. is a Tokyo-based design engineering studio creating time-based, mechanical-poetic installations—e.g., the Seiko collaboration “Drops of Time.”',
        background: 'linear-gradient(135deg, #0EA5E9 0%, #A78BFA 50%, #F472B6 100%)',
        backgroundImage: 'https://si-ro.jp/wp/wp-content/uploads/2024/02/100946_f.jpg',
        social: { handle: '@siro_inc', url: 'https://www.instagram.com/siro_inc/' },
        isCurrentlyTrending: true,
        metrics: { disciplines: 'Art + Engineering', collaborators: 'Seiko, Takram', focus: 'Time-based works' },
        tags: ['INSTALLATION', 'MECHANICAL POETRY', 'INTERACTION', 'TIME', 'ENGINEERING'],
        trending: [
          { title: 'Drops of Time（時のしずく）', location: 'Seiko Seed, Harajuku', url: 'https://si-ro.jp/drops-of-time' },
          { title: 'Bouncing with Motion & Control', location: 'NSK × Takram', url: 'https://si-ro.jp/bouncing-with-motion-control' },
          { title: '「時のしずく」を語る #1', location: 'note', url: 'https://note.com/gff02521/n/nf715e67474fe' }
        ]
    },
    {
        id: 'konel',
        name: 'KONEL',
        subtitle: 'ART & TECHNOLOGY COLLECTIVE',
        year: 'FUTURE EXPERIENCES',
        description: 'Konel is a multi-base creative collective “shaping desire with art and technology,” delivering brand, spatial, product and art projects.',
        background: 'linear-gradient(135deg, #22C55E 0%, #06B6D4 50%, #6366F1 100%)',
        backgroundImage: 'https://prcdn.freetls.fastly.net/release_image/57032/29/57032-29-f91ca3d6542e3d777e3f872c1f92318e-1280x670.jpg',
        social: { handle: '@hellokonel', url: 'https://instagram.com/hellokonel' },
        isCurrentlyTrending: true,
        metrics: { creators: '30+ disciplines', bases: 'Tokyo/Kanazawa/Kyoto/Niigata', scope: 'Brand–Art–Space' },
        tags: ['ART & TECH', 'SPATIAL DESIGN', 'EXPERIENCE', 'DATA ART', 'INNOVATION'],
        trending: [
          { title: 'WEATHER TWIN', location: 'SEE SEA PARK, Fukui', url: 'https://konel.jp/en/works/weather-twin/' },
          { title: 'BWTC (Brainwave Trading Center)', location: 'Various', url: 'https://konel.jp/en/works/bwtc/' },
          { title: 'NO-ON', location: 'MUTEK Japan debut', url: 'https://konel.jp/en/works/ecceaffb74/' }
        ]
    },
    {
        id: 'nomena',
        name: 'NOMENA',
        subtitle: 'ENGINEERING STUDIO',
        year: 'PROTOTYPING & INSTALLATION',
        description: 'nomena is an engineering studio in Tokyo turning unlikely ideas into mechanisms across art, design, architecture, and science.',
        background: 'linear-gradient(135deg, #111827 0%, #4B5563 50%, #9CA3AF 100%)',
        backgroundImage: 'https://nomena.co.jp/static/b19af7c84dbbfe4599900dbedad7cc43/a148b/c9f0070f2ad15ed60378f9aedb0abe98.png',
        social: { handle: '@nomena_jp', url: 'https://x.com/nomena_jp' },
        isCurrentlyTrending: true,
        metrics: { domains: 'Art/Architecture/Science', gallery: 'Asakusa', approach: 'Mechanism-first' },
        tags: ['ENGINEERING', 'KINETIC', 'INSTALLATION', 'RESEARCH', 'PROTOTYPING'],
        trending: [
          { title: '時計の捨象 #01 (Abstracting the Clock #01)', location: 'Seiko Seed, Tokyo', url: 'https://nomena.co.jp/project/watchesthatforgottheirrole01/' },
          { title: 'Projects Portfolio', location: 'Tokyo', url: 'https://nomena.co.jp/projects/' },
          { title: 'Nomena Gallery Asakusa', location: 'Asakusa, Tokyo', url: 'https://www.tokyoartbeat.com/en/venues/-/nomena-gallery-asakusa' }
        ]
    },
    {
        id: 'spline-design-hub',
        name: 'SPLINE DESIGN HUB',
        subtitle: 'DESIGN ENGINEERING / ROBOTICS',
        year: 'ROBOTIC INSTALLATIONS',
        description: 'SPLINE DESIGN HUB is a design team centered on design engineering, creating robotics, installations, and products.',
        background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F59E0B 100%)',
        backgroundImage: 'https://framerusercontent.com/images/5muxZF4NTeiHCu89c6LQSnYaI0.jpg',
        social: { handle: '@spline_info', url: 'https://x.com/spline_info' },
        isCurrentlyTrending: true,
        metrics: { core: 'Robotics + Installations', awards: 'Tech Direction Awards (coverage)', collabs: 'siro, labs' },
        tags: ['ROBOTICS', 'INSTALLATION', 'INTERACTION', 'ENGINEERING', 'PRODUCT'],
        trending: [
          { title: '時のしずく (Drops of Time)', location: 'Seiko Seed, Tokyo', url: 'https://www.spline-d.com/projects/drops-of-time' },
          { title: '時の足音 (Karakuri no Mori 2024)', location: 'Seiko Seed', url: 'https://prtimes.jp/main/html/rd/p/000000001.000151111.html' },
          { title: 'Clockoid', location: '21_21 DESIGN SIGHT – Future Elements', url: 'https://niewmedia.com/en/news/033422/' }
        ]
    },      
    {
        id: 'ei-wada',
        name: 'EI WADA',
        subtitle: 'ELECTRONICOS FANTÁSTICOS',
        year: 'INTERACTIVE SOUND PIONEER',
        description: 'Ei Wada creates orchestra performances using vintage electronics as instruments, transforming discarded technology into symphonic experiences. His barcode scanner concerts turn everyday objects into musical interfaces.',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)',
        backgroundImage: 'https://images.squarespace-cdn.com/content/v1/56f4abb9e707eb33bf4e9fef/7f5a29b9-45fe-493c-b0c6-e8e8e78f4095/TRIO-bure_fix.jpg?format=2500w',
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
        social: {
            handle: '@daito',
            url: 'https://twitter.com/daito'
        },
        isCurrentlyTrending: true,
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
        social: {
            handle: '@yuttan1977',
            url: 'https://twitter.com/yuttan1977'
        },
        isCurrentlyTrending: true,
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
        ],
    }
];