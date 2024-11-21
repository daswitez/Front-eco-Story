document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateCarousel();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateCarousel();
    });

});

document.addEventListener('DOMContentLoaded', () => {
    // Animación de Hover para los beneficios
    const benefitItems = document.querySelectorAll('.benefit-item');

    benefitItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateCarousel();
    });
});

