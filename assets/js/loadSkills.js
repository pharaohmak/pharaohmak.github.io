document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById('skills-slider');
    if (Array.isArray(skills) && wrapper) {
        wrapper.innerHTML = skills.map(skill => `
            <div class="swiper-slide">
                <div class="skills-block">
                    <figure class="modal__language">
                        <img class="modal__language--img" src="${skill.image}" alt="${skill.name}" />
                        <span class="language__name">${skill.name}</span>
                    </figure>
                </div>
            </div>
        `).join('');

        // Initialize Swiper for skills slider
        new Swiper('.skills-slider', {
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true,
            freeModeMomentum: true,
            freeModeMomentumRatio: 0.5,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });
    }
});
