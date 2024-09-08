// Example data, in practice this would come from a server or API
const projects = {
    1: {
      title: 'Summarist',
      overview: 'Developed a Next.js app with TypeScript, Firebase, and Stripe integration.',
      images: ['./assets/img/portfolio/portfolio-1.png'],
      description: 'Developed a feature-rich web application using NextJS, TypeScript, and Firebase, with integrated authentication and payment processing via Stripe.',
      details: {
        Client: 'FES Advanced Virtual Internship',
        Category: 'Next App Development',
        Technologies: 'HTML, CSS, Next.JS, TypeScript, Firebase',
        Date: 'August 2024',
        Website: 'https://summarist-iota.vercel.app/'
      },
      features: [
        'Next JS',
        'Firebase'
      ]
    },
    2: {
      title: 'NFT Marketplace',
      overview: 'Built a secure NFT marketplace enabling users to explore, buy, and sell digital assets.',
      images: ['./assets/img/portfolio/portfolio-2.png'],
      description: 'Developed a full-featured NFT marketplace using modern web technologies, allowing users to explore, buy, and sell digital assets securely.',
      details: {
        Client: 'FES Virtual Internship',
        Category: 'React App Development',
        Technologies: 'HTML, CSS, JavaScript, React, Node.js',
        Date: 'July 2024',
        Website: 'https://makram-internship.vercel.app/'
      },
      features: [
        'React JS',
      ]
    },
    3: {
      title: 'TReact Clone',
      overview: 'This project is a clone of Treact, showcasing a simplified version of its functionality.',
      images: ['./assets/img/portfolio/portfolio-3.png'],
      description: 'The Treact Clone project replicates the essential functionalities and user interface of Treact, a social media platform.',
      details: {
        Client: 'FES Bootcamp',
        Category: 'Web Development',
        Technologies: 'HTML, CSS',
        Date: 'June 2024',
        Website: 'pharaohmak.github.io/TReact-Clone/'
      },
      features: [
        'HTML,CSS Best Practices',
        'Feature 2 for project 2'
      ]
    },
    4: {
      title: 'My Library',
      overview: 'This online bookstore application provides a foundational structure for an e-commerce site.',
      images: ['./assets/img/portfolio/portfolio-4.png'],
      description: 'This project is an online library platform that showcases a collection of books available for purchase. It includes a landing page, highlights of key features, and sections for featured and latest books.',
      details: {
        Client: 'FES Bootcamp',
        Category: 'React App Development',
        Technologies: 'HTML, CSS, JavaScript, React, Node.js',
        Date: 'June 2024',
        Website: 'https://my-library-teal.vercel.app'
      },
      features: [
        'React JS',
      ]
    },
    5: {
      title: 'Ticket Finder',
      overview: 'The Event Search Application allows users to effortlessly find events by entering keywords related to artists, locations, or dates.',
      images: ['./assets/img/portfolio/portfolio-5.png'],
      description: 'Built with HTML, CSS, JavaScript, and Bootstrap, this application features a user-friendly interface for searching and displaying event information.',
      details: {
        Client: 'FES Bootcamp',
        Category: ' React App Development',
        Technologies: 'HTML, CSS, Javascript, Bootstrap, React',
        Date: 'July 2024',
        Website: 'https://react-ticket-finder.vercel.app'
      },
      features: [
        'React JS',
      ]
    },
    6: {
      title: 'Outcome Legal Website',
      overview: 'I will create a website that can be updated with changes as they occur (names, phone numbers, and addresses) using Namecheap Domain and Hosting.',
      images: ['./assets/img/portfolio/portfolio-6.png'],
      description: "The website aims to enhance the firm's visibility and credibility, providing potential clients with easy access to information about their legal services.",
      details: {
        Client: 'Fiverr | Joseph Milchak ',
        Category: 'Web Design',
        Technologies: 'Namecheap, DNS, SEO',
        Date: 'December 2022',
        Website: 'https://www.outcomelegal.com'
      },
      features: [
        'Web Design and Maintenance',
        'Hosting and Configuration'
      ]
    },
    7: {
      title: 'Ship Handling Calculator',
      overview: 'An offline mobile app designed to calculate ship handling parameters.',
      images: ['./assets/img/portfolio/portfolio-7.png'],
      description: 'This objective for this project was to build an offline shipping handling calculator that can claculate the navigations for ship handlers to safety navigate to their destination.',
      details: {
        Client: 'Fiverr | Jill Russal',
        Category: 'React Native App Development',
        Technologies: 'JavaScript, React Native, Node.js, Expo',
        Date: 'May 2022',
        Website: 'https://shorturl.at/6PBrF'
      },
      features: [
        'React Native',
        'Expo'
      ]
    },
    8: {
      title: 'Music Player Web App',
      overview: 'The app is a responsive music player that allows users to browse and play songs from a collection.',
      images: ['./assets/img/portfolio/portfolio-8.png'],
      description: 'This repository contains the source code for a ReactJS-based music player web application. The app features a sleek interface with interactive controls for playing, pausing, and managing music',
      details: {
        Client: 'Personal Project',
        Category: 'Web Development',
        Technologies: 'HTML, CSS, JavaScript, React',
        Date: 'August 2022',
        Website: 'https://music-payer-react-app.vercel.app/'
      },
      features: [
        'React',
      ]
    },
    9: {
      title: 'Crypto Punks Clone',
      overview: 'This repository contains the source code for a tutorial on creating a React web application to list and display NFTs (Non-Fungible Tokens).',
      images: ['./assets/img/portfolio/portfolio-9.png'],
      description: 'The application integrates ReactJS, ThirdWeb, the OpenSea API, and MetaMask for a complete NFT browsing experience. Users can explore and view various NFTs with seamless blockchain wallet integration.',
      details: {
        Client: 'Personal Project',
        Category: 'React App Development',
        Technologies: 'HTML, CSS, JavaScript, React',
        Date: 'In Progress',
        Website: 'https://crypto-punks-clone.vercel.app/'
      },
      features: [
        'React',
        'Web3, ThirdWeb, OpenSea API'
      ]
    }
  };
 
// Function to load project data based on ID
function loadProjectData(projectId) {
  const project = projects[projectId];

  if (project) {
    document.getElementById('portfolio-title').textContent = project.title;
    document.getElementById('portfolio-overview').textContent = project.overview;

    // Update images
    const imageContainer = document.getElementById('portfolio-images');
    imageContainer.innerHTML = '';
    project.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'portfolio-image';
      imageContainer.appendChild(img);
    });

    document.getElementById('portfolio-description').textContent = project.description;

    // Update details
    const detailsList = document.getElementById('portfolio-details-list');
    detailsList.innerHTML = '';
    for (const [key, value] of Object.entries(project.details)) {
      const li = document.createElement('li');
      if (key === 'Website') {
        li.innerHTML = `<strong>${key}:</strong> <a href="${value}" target="_blank" rel="noopener noreferrer">${value}</a>`;
      } else {
        li.innerHTML = `<strong>${key}:</strong> ${value}`;
      }
      detailsList.appendChild(li);
    }

    // Update features
    const featuresList = document.getElementById('portfolio-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Navigation button logic
    const prevButton = document.getElementById('prev-project');
    const nextButton = document.getElementById('next-project');
  
    const projectIds = Object.keys(projects).map(Number);
    let currentIndex = projectIds.indexOf(parseInt(projectId));

    function updateButtons() {
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === projectIds.length - 1;
    }
  
    function navigateToProject(offset) {
      const newIndex = currentIndex + offset;
      if (newIndex >= 0 && newIndex < projectIds.length) {
        window.location.search = `projectId=${projectIds[newIndex]}`;
      }
    }
  
    prevButton.addEventListener('click', () => navigateToProject(-1));
    nextButton.addEventListener('click', () => navigateToProject(1));
  
    // Initialize button states
    updateButtons();
  } else {
    console.error('Project not found');
  }
}

// Get the projectId from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('projectId') || 1; // Default to 1 if no projectId is found
loadProjectData(projectId);