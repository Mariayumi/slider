var swiper = new Swiper(".slide-content", {
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
  },
});
