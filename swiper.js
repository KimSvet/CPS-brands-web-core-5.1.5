const brands = document.querySelector('.brands');
const brandsContainer = document.querySelector('.brands-container');
const brandsContainerItems = document.querySelectorAll('.brands-container__item');
if (window.innerWidth <= 430) {
  brands.classList.add('swiper');
  brandsContainer.classList.add('swiper-wrapper');
  for (let item of brandsContainerItems) {
    item.classList.add('swiper-slide');
  }
};

const swiper = new Swiper('.swiper', { 
  pagination: {
    el: '.swiper-pagination',
  },


  slidesPerView: 'auto',
});
