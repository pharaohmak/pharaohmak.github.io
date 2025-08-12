(function() {
  "use strict";

  // DOM utility functions
  const select = (el, all = false) => {
    el = el.trim();
    return all 
      ? [...document.querySelectorAll(el)] 
      : document.querySelector(el);
  };

  // Event listener helper
  const on = (type, el, listener, all = false) => {
    const elements = select(el, all);
    if (!elements) return;
    
    if (all) elements.forEach(e => e.addEventListener(type, listener));
    else elements.addEventListener(type, listener);
  };

  // Scroll event helper
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearEl = select('#current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    // Handle URL hash
    const hash = window.location.hash;
    if (hash) {
      const target = select(hash);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Initialize background movement
    const landingPage = select('#landing-page');
    if (landingPage) {
      landingPage.addEventListener('mousemove', moveBackground);
    }
  });

  // Move background shapes
  const scaleFactor = 1 / 20;
  function moveBackground(event) {
    const shapes = select('.shape', true);
    if (!shapes.length) return;
    
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    shapes.forEach((shape, i) => {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shape.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`;
    });
  }

  // Navbar active state on scroll
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      
      const isActive = position >= section.offsetTop && 
                      position <= (section.offsetTop + section.offsetHeight);
      navbarlink.classList.toggle('active', isActive);
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  // Scroll to element with header offset
  const scrollto = (el) => {
    const header = select('#header');
    if (!header) return;
    
    let offset = header.offsetHeight;
    if (!header.classList.contains('header-scrolled')) {
      offset -= 16;
    }

    const element = select(el);
    if (!element) return;
    
    const elementPos = element.offsetTop - offset;
    window.scrollTo({ top: elementPos, behavior: 'smooth' });
  };

  // Header scroll class
  const headerScrolled = () => {
    const header = select('#header');
    if (!header) return;
    header.classList.toggle('header-scrolled', window.scrollY > 100);
  };
  window.addEventListener('load', headerScrolled);
  onscroll(document, headerScrolled);

  // Back to top button
  const backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      backtotop.classList.toggle('active', window.scrollY > 100);
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  // Mobile nav toggle
  on('click', '.mobile-nav-toggle', function(e) {
    const navbar = select('#navbar');
    navbar.classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // Mobile nav dropdowns
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true);

  // Scroll with offset on navigation
  on('click', '.scrollto', function(e) {
    const navbar = select('#navbar');
    if (select(this.hash)) {
      e.preventDefault();
      
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        const navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }, true);

  // Typed.js initialization
  const typed = select('.typed');
  if (typed) {
    const typedStrings = typed.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Portfolio isotope filter
  let portfolioIsotope;
  window.addEventListener('load', () => {
    const portfolioContainer = select('.portfolio-container');
    if (!portfolioContainer) return;
    
    portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    const portfolioFilters = select('#portfolio-filters li', true);
    on('click', '#portfolio-filters li', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(el => el.classList.remove('filter-active'));
      this.classList.add('filter-active');
      portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') });
    }, true);
  });

  // Portfolio lightbox
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  // Portfolio details slider
  const portfolioDetailsSlider = new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
})();