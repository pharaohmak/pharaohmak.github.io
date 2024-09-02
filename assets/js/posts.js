
// assets/js/blog-single.js

document.addEventListener('DOMContentLoaded', () => {
    const blogPostContainer = document.getElementById('blog-post');
    const queryParams = new URLSearchParams(window.location.search);
    const blogId = queryParams.get('blogId');

    // Example blog post data (can be replaced with fetch from a server)
    const blogPosts = [
        {
            id: 1,
            title: "The Rise of AI and What It Means for You",
            content: "Artificial Intelligence (AI) is no longer just a futuristic concept; it’s here, and it’s transforming our daily lives in ways we might not even realize. <br><br> From virtual assistants like Siri and Alexa to recommendation algorithms on Netflix and Amazon, AI is quietly shaping our experiences. But what does this mean for the average person? In simple terms, AI aims to make our lives easier by automating repetitive tasks, improving accuracy, and enhancing decision-making processes. <br><br> However, with the rise of AI comes the need for ethical considerations. Questions around privacy, job displacement, and data security are becoming more pressing. As AI continues to evolve, it’s essential for everyone to stay informed about its impact and the ways it can both benefit and challenge us. <br><br> Whether you’re a tech enthusiast or someone who simply enjoys the convenience of smart home devices, staying up to date with the latest AI trends will help you better understand the technological landscape of the future.",
            image: 'assets/img/blog-post-big-1.webp'
        },
        {
            id: 2,
            title: "A Simple Guide to Building Your First Website",
            content: "Ever thought about creating your own website but don’t know where to start? You’re not alone! Many people find building a website intimidating, but it doesn’t have to be. <br><br> Here’s a simple step-by-step guide to get you started: <br><br> 1.	Choose a Domain Name: <br>Your domain name is your website’s address on the internet. Make sure it’s easy to remember and reflects the purpose of your site. <br><br> 2.	Select a Web Hosting Provider: <br>This is where your website’s files will be stored. Popular options include Bluehost, HostGator, and SiteGround. <br><br> 3.	Use a Website Builder or CMS: <br> If you’re a beginner, platforms like WordPress, Wix, or Squarespace offer easy-to-use tools for creating websites without needing to code. <br><br> 4.	Design Your Website: <br> Pick a theme or template that suits your style and customize it with your own images, text, and branding. <br><br> 5.	Launch and Promote: <br> Once you’re happy with your website, publish it for the world to see! Don’t forget to promote it on social media and through other channels. <br><br> By following these simple steps, you can have your very own website up and running in no time!",
            image: 'assets/img/blog-post-big-2.jpeg'
        },
        {
            id: 3,
            title: "Make Smarter Tech Decisions",
            content: "Navigating the tech market can be daunting with so many products vying for your attention. To help you make informed choices, honest reviews and side-by-side comparisons are essential. Here’s why they matter and how they can guide you to the best tech products. <br><br> Why Product Reviews Are Crucial <br>•	Real User Insights: Reviews offer real-world feedback on a product’s performance and reliability. <br>•	Balanced View: They highlight both pros and cons, providing a fair evaluation. <br>•	Durability Check: Reviews can reveal potential long-term issues. <br><br>The Value of Side-by-Side Comparisons <br>•	Feature Analysis: Compare key features like performance, battery life, and connectivity. <br>•	Performance Metrics: Look at benchmarks to see how products stack up. <br>•	Cost Evaluation: Assess which product offers the best value for your money. <br><br>Tips for Effective Reviews and Comparisons <br>1.	Comprehensive and Balanced: Cover all aspects of the product and provide a fair assessment. <br>2.	Clear Language: Use straightforward language to make the information accessible. <br>3.	Real-World Testing: Base reviews on actual use rather than theoretical performance. <br><br>Example Comparison: <br>Smartphones iPhone 15 vs. Samsung Galaxy S24 <br>•	Design: Compare aesthetics and build quality. <br>•	Performance: Look at processor speed and RAM. <br>•	Camera: Evaluate image quality and features. <br>•	Battery Life: Compare battery capacity and usage times. <br>•	Price: Analyze the value offered for the cost. <br><br> By leveraging detailed reviews and comparisons, you can make more informed decisions and invest in tech products that truly meet your needs. Stay informed, and you’ll always be one step ahead in the tech world!",
            image: 'assets/img/blog-post-big-3.png'
        },
        // Add more posts as needed
    ];

    // Find the blog post with the matching ID
    const post = blogPosts.find(p => p.id === parseInt(blogId));

    if (post) {
        blogPostContainer.innerHTML = `
        <h1>${post.title}</h1>
        <img src="${post.image}" alt="${post.title}">
        <p>${post.content}</p>
      `;
    } else {
        blogPostContainer.innerHTML = '<p>Blog post not found.</p>';
    }
});