// assets/js/journal.js

document.addEventListener('DOMContentLoaded', () => {
    const journalBlock = document.getElementById('journal-block').querySelector('.row');
  
    // Example blog posts data (can be replaced with fetch from a server)
    const blogPosts = [
      { id: 1, title: "TECH NEWS AND TRENDS", excerpt: "Stay updated with the latest in technology, from new gadgets to software updates. Get insights on how these changes will affect your daily life.", image: 'assets/img/blog-post-1.webp' },
      { id: 2, title: "HOW-TO GUIDES AND TUTORIALS", excerpt: "Easy-to-follow guides and tutorials that help you learn new skills or solve tech problems. Perfect for both beginners and tech-savvy readers.", image: 'assets/img/blog-post-2.webp' },
      { id: 3, title: "PRODUCT REVIEWS AND COMPARISONS", excerpt: "Honest reviews and side-by-side comparisons of the latest tech products to help you make informed buying decisions.", image: './assets/img/blog-post-3.png' },
    ];
  
    // Function to generate HTML for each blog post
    function generateBlogHTML(post) {
      return `
        <div class="col-lg-4 col-md-6">
          <div class="journal-info">
            <a href="blog-single.html?blogId=${post.id}"><img src="${post.image}" class="img-responsive" alt="${post.title}"></a>
            <div class="journal-txt">
              <h4><a href="blog-single.html?blogId=${post.id}">${post.title}</a></h4>
              <p class="separator">${post.excerpt}</p>
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