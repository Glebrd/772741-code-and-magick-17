'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var isEscKey = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };
  var isEnterKey = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };
  // Генерируем случайно число
  var generateRandomNumber = function (max) {
    return Math.floor(Math.random() * max);
  };

  // Получаем случайцныйц элемент массива
  var getRandomArrayElement = function (array) {
    return array[window.util.generateRandomNumber(array.length)];
  };

  window.util = {
    isEscKey: isEscKey,
    isEnterKey: isEnterKey,
    getRandomArrayElement: getRandomArrayElement,
    generateRandomNumber: generateRandomNumber
  };
})();
