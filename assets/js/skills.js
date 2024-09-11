document.addEventListener("DOMContentLoaded"), () => {
    const skillsBlock = document.getElementById('skills-block').querySelector('.row');

    const skills = [
        {
            name: 'HTML',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png',
        }

    ]

    function generateSkillsHTML(skill) {
        return `
        <div class="swiper-slide">
              <div class="services-block">
                <figure class="modal__language">
                  <img class="modal__language--img"
                    src=${skill.image}
                    alt="" />
                  <span class="language__name">${skill.name}</span>
                </figure>
              </div>
            </div><!-- End testimonial item -->
        `
    }

    skills.forEach(skills => {
        skillsBlock.innerHTML += generateSkillsHTML(skills);
    })
}
