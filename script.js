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


    // Получаем элементы бургер-меню и меню
var burgerMenu = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu');

// Добавляем обработчик клика по бургер-меню
burgerMenu.addEventListener('click', function() {
    // Переключаем класс 'show' у меню для отображения/скрытия
    menu.classList.toggle('show');
});


window.addEventListener('scroll', () => {
    const nav = document.querySelector('.menu');
    if (window.scrollY > 50) {  // Когда прокручено более 50px
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});




