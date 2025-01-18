// Открытие модального окна
function openContactForm() {
    document.getElementById('contact-modal').style.display = 'flex';
}

// Закрытие модального окна
function closeContactForm() {
    document.getElementById('contact-modal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == document.getElementById('contact-modal')) {
        closeContactForm();
    }
};

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







