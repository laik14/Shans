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

ymaps.ready(init);

function init() {
    // Инициализация карты
    var myMap = new ymaps.Map("yandex-map", {
        center: [53.256792, 34.313202], // Координаты вашего места
        zoom: 16, // Масштаб
        controls: ['zoomControl', 'fullscreenControl'] // Элементы управления
    });

    // Создаем метку с названием организации
    var myPlacemark = new ymaps.Placemark([53.256792, 34.313202], {
        hintContent: 'Шанс Есть' // Текст, который появляется при наведении
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(myPlacemark);

    // Открываем балун с названием организации при загрузке карты
    myPlacemark.balloon.open();
}



