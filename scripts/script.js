/*Слайдер*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    });