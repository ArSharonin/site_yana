// Если тебе нужна карусель, добавим её
const images = document.querySelectorAll('.grid img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.opacity = 0; // Скрываем текущую картинку
    currentIndex = (currentIndex + 1) % images.length; // Переходим к следующей
    images[currentIndex].style.opacity = 1; // Показываем следующую
}

// Устанавливаем начальную прозрачность для всех картинок
images.forEach((img, index) => {
    img.style.transition = 'opacity 0.5s ease';
    img.style.opacity = index === 0 ? 1 : 0; // Показываем только первую картинку
});

// Автоматическая смена каждые 3 секунды
setInterval(showNextImage, 3000);
