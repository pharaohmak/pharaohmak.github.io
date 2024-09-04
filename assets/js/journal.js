// assets/js/journal.js

document.addEventListener('DOMContentLoaded', () => {
  const journalBlock = document.getElementById('journal-block').querySelector('.row');

  // Example blog posts data (can be replaced with fetch from a server)
  const blogPosts = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      subtitle: "Transform your online presence with a visually stunning and highly functional website.",
      description: "I specialize in creating responsive, SEO-optimized, and user-friendly websites that captivate your audience and drive conversions. <br><br>From single-page applications to complex e-commerce platforms, I deliver tailored solutions using the latest technologies like React, Next.js, and Node.js. <br><br> Let’s build a web experience that truly represents your brand and scales with your business growth.",
      image: '/assets/img/blog-post-1.png',
      rate: "250"
    },
    {
      id: 2,
      title: "MOBILE APP DEVELOPMENT",
      description: "I create intuitive and engaging mobile apps for both iOS and Android using React Native, Flutter, and native development techniques. <br><br> Whether it’s a consumer app or an enterprise solution, I focus on performance, user experience, and scalability to ensure your app stands out . <br><br> From concept to launch, I guide you through every step to achieve an app that delights users and drives results.",
      subtitle: "Bring your app idea to life with a custom-built mobile solution tailored to your unique business needs.",
      image: '/assets/img/blog-post-2.svg',
      rate: "500"
    },
    {
      id: 3,
      title: "SOFTWARE DEVELOPMENT",
      subtitle: "Unlock the full potential of your business with custom software designed to solve your specific challenges.",
      description: "I offer end-to-end software development services, from initial consulting and design to development, testing, and deployment. <br><br> Whether you need a CRM system, automation tools, data management software, or an AI-driven application, I build scalable and secure solutions that enhance your operations and drive efficiency. <br><br> Let’s develop software that turns your business vision into reality.",
      image: '/assets/img/blog-post-3.png',
      rate: "1000"
    },
  ];

  // Function to generate HTML for each blog post
  function generateBlogHTML(post) {
    return `
       <div class="blog-card col-lg-4 col-md-6">
        <div class="blog-card-info">
        <h1 class="blog-card-rate">$${post.rate}</h1>
          <a href="blog-single.html?blogId=${post.id}">
            <img src="${post.image}" class="blog-card-image" alt="${post.title}">
          </a>
        <div class="blog-card-text">
          <h4 class="blog-card-title">
            <a href="blog-single.html?blogId=${post.id}">${post.title}</a>
          </h4>
          <h6 class="blog-card-subtitle">${post.subtitle}</h6>
          <div class="blog-card-divider" style="margin: 25px 0"></div>
          <p class="blog-card-description">${post.description}</p>
        </div>
      </div>
    </div>
      `;
  }

  // Insert blog posts into the journal block
  blogPosts.forEach(post => {
    journalBlock.innerHTML += generateBlogHTML(post);
  });
});