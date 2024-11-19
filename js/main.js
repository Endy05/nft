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
    const slideWidth = slides[0].offsetWidth; 

    // Функція оновлення позиції стрічки
    const updateSlidePosition = () => {
        const offset = -currentSlide * slideWidth; // Вираховуємо зсув
        track.style.transform = `translateX(${offset}px)`;
        track.style.transition = 'transform 0.3s ease'; // Анімація
    };

    buttonLeft.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateSlidePosition();
    });
    
    buttonRight.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateSlidePosition();
    });
    
});


