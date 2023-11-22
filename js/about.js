const swiperabout = new Swiper('.swiper__about', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 16,
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
    768: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
  },
   1000: {
      slidesPerView: 4, // Кількість слайдів при ширині екрану 1300px і більше
    },
  },
  navigation: {
    nextEl: '.swiperabout-button-next',
    prevEl: '.swiperabout-button-prev',
  },

});
const pageslink = document.querySelector('.patients__pages--link');
const pageslink2 = document.querySelector('.patients__pages--link2');
    pageslink.addEventListener('click', function () {
    pageslink.classList.add('active');;
    pageslink2.classList.remove('active');
    });
   pageslink2.addEventListener('click', function () {
    pageslink2.classList.add('active');;
    pageslink.classList.remove('active');
   });