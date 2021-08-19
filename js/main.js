$(document).ready(function () {
    var currentFloor = 2; // Переменная, где хранится номер текущего этожа
    var floorPath = $('.home-image path'); /* Каждый отдельный этаж в SVG */
    var counterUp = $('.counter-up'); /* кнопка увеличения этажа*/
    var counterDown = $('.counter-down'); /* кнопка уменьшения этажа*/

    // Функция при наведении мышкой на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // Удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // Получаем значение текущего этажа
        $('.counter').text(currentFloor); // Записываем значение этажа в счетчик
    });

    counterUp.on('click', function() { // Отслеживаем клик по кнопке вверх
        // Проверяем значение этажа, оно не должна быть больше 18
       if (currentFloor < 18) { 
        currentFloor++; // Прибавляем один этаж
        usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false}); // Форматируем переменную с этажем, чтобы было 01, а не 1
        $('.counter').text(usCurrentFloor); // Записываем значение этажа в счетчик справа
        floorPath.removeClass('current-floor'); // Удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // Подсвечиваем текущий этаж
       }
    });

    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
});