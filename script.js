// Открыть модальное окно
function openContactForm() {
    document.getElementById("contact-modal").style.display = "block";
    // Очищаем форму при открытии модального окна
    document.getElementById("contact-form").reset();
}

// Закрыть модальное окно
function closeContactForm() {
    document.getElementById("contact-modal").style.display = "none";
}

// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Отменить стандартную отправку формы

    const form = this;
    const formData = new FormData(form); // Получаем данные формы

    // Отправка данных через fetch
    fetch('sendmail.php', {
        method: 'POST',
        body: formData // Отправляем данные формы
    })
    .then(response => response.text()) // Получаем ответ от sendmail.php
    .then(data => {
        alert(data);  // Выводим результат отправки
        form.reset(); // Очищаем форму после отправки
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Отменить стандартную отправку формы

    const form = this;
    const formData = new FormData(form); // Получаем данные формы

    // Отправка данных через fetch
    fetch('sendmail.php', {
        method: 'POST',
        body: formData // Отправляем данные формы
    })
    .then(response => response.text()) // Получаем ответ от sendmail.php
    .then(data => {
        alert(data);  // Выводим результат отправки
        form.reset(); // Очищаем форму после отправки
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});

// Функция прокрутки вверх страницы
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.menu');
    if (window.scrollY > 50) {  // Когда прокручено более 50px
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

window.addEventListener('resize', function () {
    if (myMap) {
        myMap.container.fitToViewport();
    }
});



// Инициализация при загрузке страницы
window.dispatchEvent(new Event('resize'));

ymaps.ready(function () {
    var myMap = new ymaps.Map("yandex-map", {
        center: [53.256792, 34.313202],
        zoom: 16
    });

    // Создаем метку с названием организации
    var myPlacemark = new ymaps.Placemark([53.256792, 34.313202], {
        hintContent: 'Шанс Есть',
        balloonContent: '<div class="myCustomBalloon">Центр "Шанс Есть"</div>' // Добавляем кастомный контент
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(myPlacemark);

    // Открываем балун при загрузке карты
    myPlacemark.balloon.open();

    // Обработчик для коррекции позиции балуна на мобильных устройствах
    myPlacemark.balloon.events.add('open', function () {
        if (window.innerWidth <= 768) {
            // Корректируем позицию балуна на мобильных устройствах, если необходимо
            myPlacemark.balloon.setPosition([53.256792, 34.313202]);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var callButton = document.getElementById('call-button'); // Получаем элемент кнопки звонка
    var footer = document.querySelector('footer'); // Получаем футер

    window.addEventListener('scroll', function () {
        var footerRect = footer.getBoundingClientRect(); // Получаем положение футера
        var windowHeight = window.innerHeight; // Высота окна браузера

        // Если футер достигает нижней части экрана
        if (footerRect.top <= windowHeight) {
            // Останавливаем кнопку на уровне футера
            callButton.style.bottom = (footerRect.height + 20) + 'px'; // Размещаем кнопку на 20px выше футера
        } else {
            // Если футер не виден, фиксируем кнопку внизу страницы
            callButton.style.bottom = '20px'; // Возвращаем кнопку к фиксированному положению
        }
    });
});







