document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('portfolio-container');

    if (window.portfolioData && Array.isArray(window.portfolioData)) {
        container.innerHTML = window.portfolioData.map(item => `
            <div class="portfolio-item ${item.filter}">
                <img 
                    src="${item.img}" 
                    class="img-fluid portfolio__image--uniform rounded shadow-sm"
                    alt="${item.title || 'Project Image'}"
                    loading="lazy"
                    style="width: 100%; height: 250px; object-fit: cover;"
                >
                <div class="portfolio-info">
                    <h4>${item.title}</h4>
                    <p><strong>Technologies:</strong><br>${item.tech}</p>
                    <div class="portfolio-links">
                        ${item.preview ? `
                            <a 
                                href="${item.preview}" 
                                target="_blank" 
                                class="preview-link" 
                                title="Visit Project" 
                                aria-label="Preview ${item.title}">
                                <i class="bx bx-link-external"></i>
                            </a>` : ''}

                        ${item.repo ? `
                            <a
                                href="${item.repo}" 
                                target="_blank" 
                                class="repo-link" 
                                title="See Repo" 
                                aria-label="Repository for ${item.title}">
                                <i class='bx bxl-github'></i>
                            </a>` : ''}

                        <a 
                            href="portfolio-details.html?projectId=${item.id}" 
                            class="details-link" 
                            title="More Details" 
                            aria-label="Details for ${item.title}">
                            <i class="bx bx-detail"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Filter click handling
    const filterItems = document.querySelectorAll('#portfolio-filters li');
    filterItems.forEach(filter => {
        filter.addEventListener('click', () => {
            filterItems.forEach(f => f.classList.remove('filter-active'));
            filter.classList.add('filter-active');
            if (window.portfolioIsotope) {
                portfolioIsotope.isotope({ filter: filter.dataset.filter });
            }
        });
    });
});