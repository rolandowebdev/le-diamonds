function Menu(e) {
  let list = document.querySelector('#list-menu');
  e.name === 'menu'
    ? ((e.name = 'close'),
      list.classList.add('block'),
      list.classList.add('opacity-100'))
    : ((e.name = 'menu'),
      list.classList.remove('hidden'),
      list.classList.remove('opacity-100'));
}

const swiper = new Swiper('.swiper', {
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

AOS.init();
