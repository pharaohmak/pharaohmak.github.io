document.addEventListener('DOMContentLoaded', () => {
    const blogPostContainer = document.getElementById('blog-post');
    const queryParams = new URLSearchParams(window.location.search);
    const blogId = queryParams.get('blogId');

    // Example blog post data (can be replaced with fetch from a server)
    const blogPosts = [
        {
            id: 1,
            title: "Dynamic Web Development & Design",
            content: "This service focuses on building engaging, high-performance websites that enhance brand visibility and user interaction. Utilizing modern frameworks like React, Next.js, and Node.js, I deliver websites that are not only visually appealing but also responsive, fast, and optimized for search engines. Whether you’re looking for a single-page application, a corporate website, or a full-fledged e-commerce platform, I provide solutions that are tailored to your business goals, ensuring your website scales as your business grows.",
            usp: "Responsive and mobile-friendly design., SEO-optimized for better search engine rankings., Scalable and secure architectures for long-term growth., Custom UI/UX that aligns with your brand identity.",
            benefits: "Increased web traffic and engagement., Improved conversion rates through intuitive design., Stronger online presence and brand recognition.",
            image: '/assets/img/blog-post-big-1.webp'
        },
        {
            id: 2,
            title: "Custom Mobile App Development",
            content: "This service is dedicated to crafting custom mobile apps that provide seamless user experiences on both iOS and Android platforms. By leveraging tools like React Native, Flutter, or native development technologies, I develop apps that are user-friendly, high-performing, and aligned with your business objectives. From ideation and wireframing to design, development, and deployment, I guide you through the entire process to ensure your app meets market standards and resonates with your target audience.",
            usp: "Cross-platform app development for wider reach., Focus on user experience and intuitive design., Scalable architecture to support app growth., Comprehensive development process from concept to launch.",
            benefits: "Direct engagement with customers via a branded app., Enhanced customer loyalty and retention through an optimized mobile experience., Competitive edge in the mobile market with a custom-built solution.",
            image: '/assets/img/blog-post-big-2.webp'
        },
        {
            id: 3,
            title: "Bespoke Software Solutions",
            content: "This service offers end-to-end custom software development tailored to meet specific business needs. Whether it’s building a CRM system, developing an automation tool, or creating a data management solution, I handle every stage of the development cycle—from initial consultation and requirements gathering to design, coding, testing, and deployment. The goal is to create secure, scalable, and efficient software that improves business processes, enhances productivity, and supports strategic goals.",
            usp: "Fully customized software solutions for unique business needs., Robust architecture and secure coding practices., Agile development methodology for faster delivery and flexibility., Continuous support and maintenance to ensure software efficiency.",
            benefits: "Streamlined operations and increased productivity., Solutions designed to scale with business growth., Reduced operational costs through automation and process improvement.",
            image: '/assets/img/blog-post-big-3.png'
        },
        // Add more posts as needed
    ];

    // Find the blog post with the matching ID
    const currentIndex = blogPosts.findIndex(p => p.id === parseInt(blogId));
    const post = blogPosts[currentIndex];

    // Determine previous and next post IDs
    const previousPostId = currentIndex > 0 ? blogPosts[currentIndex - 1].id : null;
    const nextPostId = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1].id : null;

    if (post) {
        blogPostContainer.innerHTML = `
        <div class="blog-post">
            <h1 class="blog-title">${post.title}</h1>
            <img src="${post.image}" class="blog-image" alt="${post.title}">
            <h3 class="section-title">Overview</h3>
            <p class="blog-content">${post.content}</p>

            <h3 class="section-title">Unique Selling Points</h3>
            <ul class="blog-list">
                ${post.usp.split(',').map(point => `<li>${point.trim()}</li>`).join('')}
            </ul>

            <h3 class="section-title">Client Benefits</h3>
            <ul class="blog-list">
                ${post.benefits.split(',').map(point => `<li>${point.trim()}</li>`).join('')}
            </ul>
            <div class="blog-navigation">
                ${previousPostId ? `<a href="blog-single.html?blogId=${previousPostId}" class="nav-button prev-button">Previous</a>` : '<span class="nav-button prev-button disabled">Previous</span>'}
                ${nextPostId ? `<a href="blog-single.html?blogId=${nextPostId}" class="nav-button next-button">Next</a>` : '<span class="nav-button next-button disabled">Next</span>'}
            </div>
        </div>
        `;
    } else {
        blogPostContainer.innerHTML = '<p>Blog post not found.</p>';
    }
});