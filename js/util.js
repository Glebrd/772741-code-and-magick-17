'use strict';
window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscKey: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterKey: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    // Генерируем случайно число
    generateRandomNumber: function (max) {
      return Math.floor(Math.random() * max);
    },

    // Получаем случайцныйц элемент массива
    getRandomArrayElement: function (array) {
      return array[window.util.generateRandomNumber(array.length)];
    }
  };
})();
