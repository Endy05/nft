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


