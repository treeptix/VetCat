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

const swiperpatients1 = new Swiper('.patients1', {
  direction: 'horizontal',
    spaceBetween: 50,
     slidesPerView: 3,
    loop: true,
     
    breakpoints: {
              320: {
            slidesPerView: 1,
     // Кількість слайдів при ширині екрану 1300px і більше
    },
      375: {
      slidesPerView: 1 // Кількість слайдів при ширині екрану 1300px і більше
    },
    768: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
    },
    1100: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.swiperpatients1-button-next',
    prevEl: '.swiperpatients1-button-prev',
  },

 
});
const swiperpatients2 = new Swiper('.patients2', {
  direction: 'horizontal',
    spaceBetween: 40,
    slidesPerView: 3,
    loop: true,

    breakpoints: {
          320: {
            slidesPerView: 1,
     // Кількість слайдів при ширині екрану 1300px і більше
    },
      375: {
            slidesPerView: 1,
     // Кількість слайдів при ширині екрану 1300px і більше
    },
    768: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
    },
    1100: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більш
    },
  },
  navigation: {
    nextEl: '.swiperpatients2-button-next',
    prevEl: '.swiperpatients2-button-prev',
  },

 
});