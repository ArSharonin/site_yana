const swiper = new Swiper('.swiper-container', {
    loop: true, // Циклическая прокрутка
    autoplay: {
        delay: 3000, // Автопрокрутка через 3 секунды
        disableOnInteraction: false, // Останавливается, если пользователь взаимодействует
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
