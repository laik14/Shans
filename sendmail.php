<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));

    // Проверяем, что поля не пустые
    if (empty($name) || empty($phone)) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }

    // Настройки письма
    $to = "laik14@yandex.ru"; // Ваш email
    $subject = "Сообщение с вашего сайта"; // Тема письма
    $message = "Имя: $name\nТелефон: $phone"; // Тело письма
    $headers = "From: no-reply@yourdomain.com" . "\r\n" . // От кого
               "Reply-To: $phone" . "\r\n" . // На какой email отвечать
               "X-Mailer: PHP/" . phpversion();

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        // Если письмо отправлено успешно
        echo "<script>alert('Ваше сообщение успешно отправлено!'); window.location.href='index.html';</script>";
    } else {
        // Если произошла ошибка при отправке
        echo "<script>alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.'); window.location.href='index.html';</script>";
    }
}
?>

