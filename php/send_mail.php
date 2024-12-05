<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримуємо дані з форми
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Адреса, на яку буде відправлено лист
    $to = "tourekttok@mail.com"; 
    
    // Тема листа
    $subject = "New feedback from $name";
    
    // Тіло листа
    $body = "You have received a new feedback message.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message";
    
    // Заголовки для пошти
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Відправка листа
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
