let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_80ih0if",
      "template_d9refyl",
      event.target,
      "user_K1PoFs8pB2YVWStDxrUls"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".carousel-control-prev");
  const nextButton = document.querySelector(".carousel-control-next");
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");

  let currentIndex = 0;

  const updateCarousel = () => {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    items.forEach((item, index) => {
      item.classList.toggle("active", index === currentIndex);
    });
  };

  prevButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});

function handleFilterChange(event) {
    const components = document.getElementById("components");
    const templates = document.getElementById("templates");
    const capstone = document.getElementById("capstone");
    const programs = document.getElementById("programs");

    const value = event.target.value;
    if (value === "SHOW_TEMPLATES") {
      showTemplates();
    } else if (value === "SHOW_COMPONENTS") {
      showComponents();
    } else if (value === "SHOW_PROGRAMS") {
      showPrograms();
    } else {
      showCapstone();
    }
    function showCapstone() {
      capstone.style.display = "flex";
      components.style.display = "none";
      templates.style.display = "none";
      programs.style.display = "none";
    }

    function showTemplates() {
      capstone.style.display = "none";
      components.style.display = "none";
      programs.style.display = "none";
      templates.style.display = "flex";
    }

    function showComponents() {
      templates.style.display = "none";
      capstone.style.display = "none";
      programs.style.display = "none";
      components.style.display = "flex";
    }

    function showPrograms() {
      components.style.display = "none";
      templates.style.display = "none";
      capstone.style.display = "none";
      programs.style.display = "flex";
    }
}
