document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('burger');
    let overlay = document.querySelector('.overlay'); // Вибір елемента overlay

    burger.addEventListener('click', function () {
        burger.classList.toggle('open');
        overlay.classList.toggle('open'); // Додаємо або видаляємо клас open для overlay
    });
});


// Отримуємо всі елементи меню
const menuLinks = document.querySelectorAll('.tabs__menu-link');
const panes = document.querySelectorAll('.tabs__pane');

// Додаємо обробник подій для кожного елемента меню
menuLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Видаляємо активний клас у всіх меню та зображень
        menuLinks.forEach(link => link.classList.remove('active'));
        panes.forEach(pane => pane.classList.remove('active'));

        // Додаємо активний клас до натиснутого елементу меню та відповідного зображення
        link.classList.add('active');
        panes[index].classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.mask'); // Контейнер зі слайдами
    const slides = document.querySelectorAll('.mask__slider'); // Усі слайди
    const buttonLeft = document.getElementById('slide-left'); // Кнопка вліво
    const buttonRight = document.getElementById('slide-right'); // Кнопка вправо

    let currentSlide = 0; // Поточний індекс слайда
    const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
    const maxSlideIndex = slides.length - 1; // Індекс останнього слайда

    // Функція оновлення позиції стрічки
    const updateSlidePosition = () => {
        let offset = -currentSlide * slideWidth; // Вираховуємо зсув
        track.style.transform = `translateX(${offset}px)`;
        track.style.transition = 'transform 0.3s ease'; // Анімація
    };

    // Обробка кнопки вліво
    buttonLeft.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--; // Перехід до попереднього слайда
            updateSlidePosition();
        }
    });

    // Обробка кнопки вправо
    buttonRight.addEventListener('click', () => {
        if (currentSlide < maxSlideIndex) {
            currentSlide++; // Перехід до наступного слайда
            updateSlidePosition();
        }
    });

});



// Отримуємо необхідні елементи
const sliderContainer = document.querySelector('.mask-two'); // Контейнер для всіх слайдів
const slides = document.querySelectorAll('.mask__slider-item'); // Кожен окремий слайд
const btnLeft = document.getElementById('slide-left-two'); // Кнопка вліво
const btnRight = document.getElementById('slide-right-two'); // Кнопка вправо

// Визначаємо поточний індекс слайда
let currentIndex = 0;

// Ширина одного слайда
const slideWidth = slides[0].offsetWidth + 16; // Додаємо відступ між слайдами (якщо є)

// Максимальна кількість слайдів
const maxIndex = slides.length - Math.floor(sliderContainer.offsetWidth / slideWidth);

// Функція для оновлення положення слайдера
function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Обробка кліку кнопки "вліво"
btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Обробка кліку кнопки "вправо"
btnRight.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});





