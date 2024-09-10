document.addEventListener('DOMContentLoaded', () => {
  const journalBlock = document.getElementById('journal-block').querySelector('.row');

  const blogPosts = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      subtitle: "Transform your online presence with a visually stunning and highly functional website.",
      description: "I specialize in creating responsive, SEO-optimized, and user-friendly websites that captivate your audience and drive conversions. <br><br> From simple single-page apps to complex e-commerce solutions, I craft tailored applications using the latest tech like React, Next.js, and Node.js. <br><br> Let’s build a web experience that truly represents your brand and scales with your business growth.",
      image: '/assets/img/blog-post-1.png',
    },
    {
      id: 2,
      title: "MOBILE APP DEVELOPMENT",
      subtitle: "Bring your app idea to life with a custom-built mobile solution tailored to your unique business needs.",
      description: "I develop intuitive mobile apps for iOS and Android using React Native, Flutter, and native techniques for seamless user experiences. <br><br> Whether it’s a consumer app or an enterprise solution, I focus on performance, user experience, and scalability to ensure your app stands out . <br><br> From concept to launch, I guide you through every step to achieve an app that delights users and drives results.",
      image: '/assets/img/blog-post-2.svg',
    },
    {
      id: 3,
      title: "SOFTWARE DEVELOPMENT",
      subtitle: "Unlock the full potential of your business with custom software designed to solve your specific challenges.",
      description: "I offer end-to-end software development services, from initial consulting and design to development, testing, and deployment. <br><br> From CRM systems to automation tools and AI applications, I create scalable, secure solutions that improve operations and increase efficiency. <br><br> Let’s build software that brings your business vision to life and drives success in every aspect of your operations.",
      image: '/assets/img/blog-post-3.png',
    },
  ];

  function generateBlogHTML(post) {
    return `
      <div class="blog-card col-lg-4 col-md-6">
    <div class="blog-card-info">
        <a href="service-details.html?blogId=${post.id}">
            <img src="${post.image}" class="blog-card-image" alt="${post.title}">
        </a>
        <div class="blog-card-text">
            <h4 class="blog-card-title">
                <a href="service-details.html?blogId=${post.id}">${post.title}</a>
            </h4>
            <h6 class="blog-card-subtitle">${post.subtitle}</h6>
            <div class="blog-card-divider" style="margin: 25px 0"></div>
            <p class="blog-card-description">${post.description}</p>
        </div>
    </div>
    <div class="consultation-button mt-3">
        <a href="service-details.html?blogId=${post.id}" class="btn btn-primary">Learn More</a>
    </div>
</div>
      `;
  }

  blogPosts.forEach(post => {
    journalBlock.innerHTML += generateBlogHTML(post);
  });
});