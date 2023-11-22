const swiperservice = new Swiper('.swiper__service', {
  // Optional parameters
  direction: 'horizontal',
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 40,
  breakpoints: {
     320: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
    375: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
  430: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
   540: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
  },
   600: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
  },
    768: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
  },
   1000: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
    },
  },
  navigation: {
    nextEl: '.swiper__service--btnnext',
    prevEl: '.swiper__service--btnprev',
  },

});
const paginationButtons = document.querySelectorAll('[class^="VetCat__pagination--btn"]');
const infoElements = document.querySelectorAll('[class^="VetCat__info--img"]');
const svgElements = document.querySelectorAll('[class^="VetCat__svgpagination"]');

infoElements[0].classList.add('active');
svgElements[0].classList.add('active');

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    
    if (button.classList.contains('active')) {
      return;
    }

    // Удаляем класс "active" у всех кнопок, элементов и SVG
    paginationButtons.forEach(btn => btn.classList.remove('active'));
    infoElements.forEach(el => el.classList.remove('active'));
    svgElements.forEach(svg => svg.classList.remove('active'));

    // Добавляем класс "active" к текущей кнопке, соответствующему элементу и SVG
    button.classList.add('active');
    infoElements[index].classList.add('active');
    svgElements[index].classList.add('active');
  });
});

const swiperhistory = new Swiper('.swiper__history', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4, 
    loop: true,
    spaceBetween: 40,
  breakpoints: {
      320: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
     375: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
    430: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
   500: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
    
    },
    768: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
    970: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 60,
    },
     1024: {
      slidesPerView: 4, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
      1620: {
      slidesPerView: 4, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
        1920: {
      slidesPerView: 4, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper__history--btnnext',
    prevEl: '.swiper__history--btnprev',
  },


});
const buttons = document.querySelectorAll('[class^="blog__itemlinks--btn"]');
const items = document.querySelectorAll('[class^="blog__content--item"]');
buttons[0].classList.add('active');
items[0].classList.add('active');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      return;
    }
    buttons.forEach(btn => btn.classList.remove('active'));
    items.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    items[index].classList.add('active');
  });
});



const stroginoHospital1 = document.querySelector(".strogino-hospital");
const donskoiHospital1 = document.querySelector(".donskoi-hospital");
const swiper3 = document.querySelector(".someService-swiper1");
const swiper4 = document.querySelector(".someService-swiper2");

stroginoHospital1.addEventListener("click", () => {
  swiper3.style.display = "block";
  swiper4.style.display = "none";
  donskoiHospital1.classList.remove("btn-active");
  donskoiHospital1.classList.add("btn-nonactive");
  stroginoHospital1.classList.remove("btn-nonactive");
  stroginoHospital1.classList.add("btn-active");

});

donskoiHospital1.addEventListener("click", () => {
  swiper3.style.display = "none";
  swiper4.style.display = "block";
  stroginoHospital1.classList.remove("btn-active");
  stroginoHospital1.classList.add("btn-nonactive");
  donskoiHospital1.classList.remove("btn-nonactive");
  donskoiHospital1.classList.add("btn-active");
});

const swiperStrogino1 = new Swiper('.swiper-strogino', {

  slidesPerView: 1,
  navigation: {
    nextEl: '.custom-next-button',
    prevEl: '.custom-prev-button',
  },
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    820: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
    },
    1200: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
  },

});


const swiperDonskoi2 = new Swiper('.swiper-donskoi', {

  slidesPerView: 1,
  navigation: {
    nextEl: '.custom-next-button',
    prevEl: '.custom-prev-button',
  },
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    820: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
    },
    1200: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
  },

});
  







