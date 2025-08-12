const projects = {
    1: {
        title: 'Skinstric AI',
        overview: 'Delivered a modern, high-performance website for Skinstric, an AI skincare startup, as part of a real-world Frontend Simplified internship.',
        images: ['./assets/img/portfolio/portfolio-1.png'],
        links: {
            Website: 'https://skinstric-ai.vercel.app/',
            GitHub: 'https://github.com/pharaohmak/SkinstricAI/'
        },
        challenge: 'Replace an outdated, unmaintainable codebase with a scalable, interactive platform showcasing advanced frontend capabilities.',
        solution: 'Developed with Next.js for SEO and performance, Tailwind CSS for utility-first styling, GSAP and Lottie for animations, and Three.js for 3D visuals. Integrated APIs for form submission, weather data, and AI-simulated skin analysis, ensuring accessibility and responsiveness.',
        result: 'Decreased page load time by 35% through optimized asset delivery, delivered 100% responsive design coverage, and implemented interactive features that improved average session duration.',
        technologies: [
            'Next.js',
            'Tailwind CSS',
            'GSAP',
            'Lottie',
            'Three.js',
            'TypeScript',
            'REST APIs',
        ],
        category: 'Next App'
    },
    2: {
        title: 'Summarist',
        overview: 'Developed a full-featured book summary web application during the Frontend Simplified virtual internship, modeled after commercial apps to provide summaries, audio content, and subscription-based features.',
        images: ['./assets/img/portfolio/portfolio-2.png'],
        links: {
            Website: 'https://summarist-seven.vercel.app/',
            GitHub: 'https://github.com/pharaohmak/Summarist'
        },
        challenge: 'Build a scalable, real-world web app with authentication, subscription management, book browsing, and audio playback, integrating multiple APIs while ensuring responsiveness and performance.',
        solution: 'Implemented authentication (email/password, guest login) with Firebase, subscription payments with Stripe, and state management with Redux Toolkit. Integrated multiple REST APIs for book data, search, and playback. Developed responsive pages including Home, For You, Book Details, Audio Player, Sales, Settings, and Library, with skeleton loading states and a global search bar.',
        result: 'Delivered a fully functional, mobile-optimized app with instant navigation, reduced API calls by 30% through debounced search, and integrated payment flow supporting monthly and annual plans.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Firebase',
            'Stripe',
            'Redux Toolkit',
            'CSS3',
            'REST APIs',
        ],
        category: 'Next App'
    },
    3: {
        title: 'NFT Marketplace',
        overview: 'Transformed a static NFT marketplace into an interactive React web app with live data integration and smooth animations in Frontend Simplified bootcamp.',
        images: ['./assets/img/portfolio/portfolio-3.png'],
        links: {
            Website: 'https://makram-internship.vercel.app/',
            GitHub: 'https://github.com/pharaohmak/makram-internship'
        },
        challenge: 'Enhance a static NFT marketplace with real-time API data, engaging visuals, and improved user flow to increase session duration and interaction rates.',
        solution: 'Integrated Axios for API requests, implemented skeleton loaders, pagination, and dynamic routing. Designed animations, transitions, and carousels for improved engagement.',
        result: 'Boosted perceived load performance by 40% through skeleton states, improved navigation speed with client-side routing, and increased user engagement through motion design.',
        technologies: [
            'React',
            'JavaScript ES6',
            'Axios',
            'CSS3',
            'AOS Animations',
        ],
        category: 'React App'
    },

    4: {
        title: 'My Library',
        overview: 'Built a production-ready e-commerce platform as the final project in the Frontend Simplified bootcamp, expanding an earlier library app with modern features.',
        images: ['./assets/img/portfolio/portfolio-4.png'],
        links: {
            Website: 'https://my-library-teal.vercel.app',
            GitHub: 'https://github.com/pharaohmak/My-Library'
        },
        challenge: 'Rebuild and enhance a simple library app into a scalable, high-performance e-commerce platform with advanced routing and user experience features.',
        solution: 'Developed with React and React Router for SPA navigation, implemented dynamic product listings, a shopping cart with persistent state, and responsive layouts following CSS best practices.',
        result: 'Improved load times by 30% via code splitting and optimized rendering, and delivered a mobile-first experience that adapts across all major devices.',
        technologies: [
            'React',
            'React Router DOM',
            'JavaScript ES6',
            'CSS3',
        ],
        category: 'React App'
    },
    5: {
        title: 'TReact Clone',
        overview: 'A responsive clone of the TReact example site, built during a Frontend Simplified bootcamp using HTML, CSS, and JavaScript to practice real-world UI development without frameworks.',

        images: ['./assets/img/portfolio/portfolio-5.png'],
        links: {
            Website: 'https://findmak.com/TReact-Clone/',
            GitHub: 'https://github.com/pharaohmak/TReact-Clone'
        },
        challenge: 'Recreate the TReact design using only core web technologies, building desktop-first, then making it mobile-responsive.',
        solution: 'Used semantic HTML5, CSS Flexbox/Grid, and media queries with CSS variables for consistency; added light JS for navigation interactivity.',
        result: 'Created a pixel-accurate, fully responsive site showcasing strong layout, styling, and responsive design skills.',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
        ],
        category: 'Website'
    },
    6: {
        title: 'Ship Handling Calculator',
        overview: 'Developed a custom offline mobile app to perform ship handling calculations, replacing manual methods with quick, accurate digital tools for maritime use.',
        images: ['./assets/img/portfolio/portfolio-6.png'],
        links: {
            Website: 'https://expo.dev/preview/update?message=ready%20for%20production%20-ios&updateRuntimeVersion=exposdk:51.0.0&createdAt=2024-11-06T02:29:55.851Z&slug=exp&projectId=584a2668-0dbf-4052-9ff1-c4d458ed5eb8&group=c4fa87a4-0a20-4563-b594-e2ea20edb2d1',
            GitHub: 'https://github.com/pharaohmak/Ship-Handling-Calculator'
        },
        challenge: 'Build a mobile app that can calculate Rate of Turn, Advance Turn Time, Speed–Time–Distance, and Anchor Swing Circle from any two given variables, ensuring offline usability and an intuitive user experience.',
        solution: 'Designed a responsive, user-friendly interface in Expo with custom navigation and no cluttered calculator view. Implemented dynamic calculation logic for multiple input combinations, incorporated offline capability, and applied client-requested design refinements (full function names, flexible input-output handling). Delivered with splash screen, branded app icon, and complete source code.',
        result: 'Delivered a reliable, offline-ready app that improved calculation speed and accuracy for maritime professionals. Received positive client feedback and later updated the project to support newer Expo SDK versions for continued compatibility.',
        technologies: [
            'Expo',
            'React Native',
            'JavaScript ES6',
        ],
        category: 'React App'
    },
    7: {
        title: 'Outcome Legal Website',
        overview: 'Designed and developed a professional, responsive website for a California family law attorney, enabling easy future updates and SEO optimization while maintaining a polished, modern look.',
        images: ['./assets/img/portfolio/portfolio-7.png'],
        links: {
            Website: 'https://www.outcomelegal.com/',
        },
        challenge: 'Create a mobile-friendly legal website inspired by a competitor’s design without directly copying content, ensuring reworded text for copyright compliance, future scalability, and integration of media, maps, and SEO enhancements.',
        solution: 'Built the site using HTML, CSS, and JavaScript on Namecheap hosting templates. Reworded all provided sample content to maintain originality, integrated client-provided images, implemented a contact form with email routing, and added a toll-free number prominently on the homepage. Guided the client on updating site content via cPanel’s website builder and integrated Google Maps API. Later added SEO metadata and optimized for search engine performance.',
        result: 'Delivered a polished, mobile-optimized legal website that improved the firm’s online presence, allowed for easy client-side updates, and incorporated SEO best practices for better visibility. Established an ongoing relationship with the client for continued updates and improvements.',
        technologies: [
            'Namecheap Hosting',
            'Google Maps API',
            'SEO Optimization',
            'Responsive Design',
        ],
        category: 'Website'
    },
    8: {
        title: 'Jazzy Cleaning Website',
        overview: 'Designed and developed a professional website for Jazzy Cleaning Services, a home cleaning company, to attract more clients and improve online visibility.',
        images: ['./assets/img/portfolio/portfolio-8.png'],
        links: {
            Website: 'https://jazzycleaning.godaddysites.com/',
        },
        challenge: 'Build a conversion-focused, SEO-optimized website for a small business using Namecheap hosting, ensuring it conveys professionalism, drives inquiries, and ranks well on Google search results.',
        solution: 'Created a clean, mobile-responsive design with clear service descriptions, contact forms, and call-to-action sections to encourage booking. Wrote SEO-friendly copy, optimized site structure, and configured metadata and keyword targeting to improve search engine ranking. Leveraged Namecheap’s hosting and templates for cost-effective development while customizing for brand identity.',
        result: 'Launched a responsive, user-friendly website that reached the first page of Google search results, driving increased inquiries and enhancing brand credibility.',
        technologies: [
            'Namecheap Hosting',
            'SEO Optimization',
            'Responsive Design',
        ],
        category: 'Website'
    },
    9: {
        title: 'Patient Pass Landing Page',
        overview: 'Rebuilt an existing marketing landing page using React to modernize the codebase, improve performance, and ensure long-term maintainability while preserving the original design.',
        images: ['./assets/img/portfolio/portfolio-9.png'],
        links: {
            Website: 'https://thepatientpass.com',
            GitHub: 'https://github.com/pharaohmak/patient-pass-lp'
        },
        challenge: 'Migrate a static landing page to a scalable React architecture without altering the visual design or user flow, ensuring responsiveness and optimized load times.',
        solution: 'Developed the page using reusable React components, implemented responsive layouts for desktop and mobile, and optimized image and asset loading to reduce initial page weight. Structured the code for easy future updates and scalability.',
        result: 'Delivered a fully responsive, performance-optimized React landing page with cleaner code, faster load speeds, and a maintainable structure ready for future feature integrations.',
        technologies: [
            'React',
            'JavaScript ES6',
            'CSS3',
            'Responsive Design',
        ],
        category: 'React App'
    },
};

// Convert the projects object into an array for the portfolio grid
window.portfolioData = Object.keys(projects).map(key => {
    const project = projects[key];
    // Map category to filter class
    let filterClass = '';
    const category = project.category;
    if (category.includes('Next')) {
        filterClass = 'filter-next';
    } else if (category.includes('React')) {
        filterClass = 'filter-react';
    } else if (category.includes('Website')) {
        filterClass = 'filter-web';
    }

    return {
        id: key,
        title: project.title,
        img: project.images[0],
        filter: filterClass,
        tech: project.technologies,
        preview: project.links.Website,
        repo: project.links.GitHub
    };
});