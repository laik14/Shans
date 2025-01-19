<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "ya@laik14.ru, rv.simakov@gmail.com";
    $subject = "Новое сообщение с сайта";
    $headers = "From: " . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение отправлено успешно.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
