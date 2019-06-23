'use strict';
// Проверка валидности формы
// Имя
(function () {
  window.dialog.userNameInput.addEventListener('invalid', function () {
    if (window.dialog.userNameInput.validity.tooShort) {
      window.dialog.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (window.dialog.userNameInput.validity.tooLong) {
      window.dialog.userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (window.dialog.userNameInput.validity.valueMissing) {
      window.dialog.userNameInput.setCustomValidity('Обязательное поле');
    } else {
      window.dialog.userNameInput.setCustomValidity('');
    }
  });
})();
