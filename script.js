let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length;

    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const newTransform = -currentSlide * 100;
    document.querySelector(".carousel-images").style.transform = `translateX(${newTransform}%)`;
}
