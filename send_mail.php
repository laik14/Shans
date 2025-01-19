<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ya@laik14.ru, rv.simakov@gmail.com";
    $subject = "Новое сообщение с сайта";

    $email_message = "Имя: $name\n";
    $email_message .= "Телефон: $phone\n";
    $email_message .= "Сообщение:\n$message\n";

    $headers = "From: no-reply@shans-est.ru\r\n";
    $headers .= "Reply-To: no-reply@shans-est.ru\r\n";

    if (mail($to, $subject, $email_message, $headers)) {
        echo "Сообщение отправлено успешно.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный запрос.";
}
?>