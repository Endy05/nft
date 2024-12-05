document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('feedbackModal');
    const openButton = document.getElementById('openModal');
    const closeButton = document.getElementById('closeModal');
    const feedbackForm = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessageContainer = document.createElement('div'); // Спливаюче повідомлення

    // Стилі для спливаючого повідомлення
    successMessageContainer.style.position = 'fixed';
    successMessageContainer.style.top = '20px';
    successMessageContainer.style.left = '50%';
    successMessageContainer.style.transform = 'translateX(-50%)';
    successMessageContainer.style.backgroundColor = '#4CAF50';
    successMessageContainer.style.color = 'white';
    successMessageContainer.style.padding = '10px 20px';
    successMessageContainer.style.borderRadius = '5px';
    successMessageContainer.style.display = 'none'; // Спочатку приховано
    successMessageContainer.style.zIndex = '9999';
    successMessageContainer.textContent = 'Your message has been sent!';

    document.body.appendChild(successMessageContainer); // Додаємо повідомлення в body

    // Відкриття модального вікна
    openButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Закриття модального вікна
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закриття модального вікна при кліку поза ним
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обробка події надсилання форми
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Запобігає перезавантаженню сторінки

        // Валідація полів форми
        if (!nameInput.value.trim()) {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim()) {
            alert("Please enter your email.");
            emailInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            alert("Please enter a message.");
            messageInput.focus();
            return;
        }

        const formData = new FormData(feedbackForm);

        // Відправка форми через fetch без переадресації на сторінку "thanks"
        fetch(feedbackForm.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                modal.style.display = 'none'; // Закриття модального вікна після успішної відправки
                feedbackForm.reset(); // Очищення полів форми після успішної відправки

                // Показуємо повідомлення про успіх
                successMessageContainer.style.display = 'block';

                // Через 3 секунди ховаємо повідомлення
                setTimeout(() => {
                    successMessageContainer.style.display = 'none';
                }, 3000);
            } 
        })
        .catch(error => {
            console.error('Error:', error);
            feedbackForm.reset(); // Очищення полів форми після успішної відправки

                // Показуємо повідомлення про успіх
            successMessageContainer.style.display = 'block';

                // Через 3 секунди ховаємо повідомлення
            setTimeout(() => {
                successMessageContainer.style.display = 'none';
            }, 3000);
        });
    });
});
