function loadProjects(projectId) {
  const project = projects[projectId];

  if (project) {
    document.getElementById('portfolio-title').textContent = project.title;
    document.getElementById('portfolio-overview').textContent = project.overview;

    // Portfolio image
    const imageContainer = document.getElementById('portfolio-images');
    imageContainer.innerHTML = '';
    project.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'portfolio-image';
      imageContainer.appendChild(img);
    });

    // Portfolio links
    const linksList = document.getElementById('portfolio-details-list');
    linksList.innerHTML = '';
    for (const [key, value] of Object.entries(project.links)) {
      const li = document.createElement('li');

      if (key === 'Website') {
        li.innerHTML = `<strong>${key}:</strong> <a href="${value}" target="_blank" rel="noopener noreferrer" class="project-link">Explore site</a>`;
      } else if (key === 'GitHub' && value !== 'N/A') {
        li.innerHTML = `<strong>${key}:</strong> <a href="${value}" target="_blank" rel="noopener noreferrer" class="project-link">View repository</a>`;
      } else {

        li.innerHTML = `<strong>${key}:</strong> ${value}`;
      }

      linksList.appendChild(li);
    }

    const portfolioChallenge = document.getElementById('portfolio-challenge');
    portfolioChallenge.innerHTML = project.challenge;
    
    const portfolioSolution = document.getElementById('portfolio-solution');
    portfolioSolution.innerHTML = project.solution;
    
    const portfolioResult = document.getElementById('portfolio-result');
    portfolioResult.innerHTML = project.result;

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

    updateButtons();
  } else {
    console.error('Project not found');
  }
}

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('projectId') || 1;
loadProjects(projectId);