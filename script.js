// Инициализация Swiper с автопрокруткой
var swiper = new Swiper('.swiper-container', {
    loop: true,  // Зацикливаем карусель
    autoplay: {
        delay: 3000,  // Время между слайдами (3 секунды)
        disableOnInteraction: false,  // Автопрокрутка не останавливается при взаимодействии
    },
    speed: 3000,  // Время для полного перехода между слайдами (3 секунды)
    slidesPerView: 1,  // Показываем по одному слайду
    spaceBetween: 10,  // Пробел между слайдами
});
