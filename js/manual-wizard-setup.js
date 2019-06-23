'use strict';
// Ручная настройка волшенбинка
// manual-wizard-setup
(function () {
  var playerSetup = document.querySelector('.setup-player');
  var eyes = playerSetup.querySelector('.wizard-eyes');
  var coat = playerSetup.querySelector('.wizard-coat');
  var fireball = playerSetup.querySelector('.setup-fireball-wrap');
  var coatColorInput = coat.querySelector('input[name="coat-color"]');
  var eyesColorInput = coat.querySelector('input[name="eyes-color"]');
  var fireballColorInput = coat.querySelector('input[name="fireball-color"]');

  var onCoatClick = function () {
    var coatColor = window.util.getRandomArrayElement(window.wizardSetup.WIZARDS_COATS_COLORS);
    coat.style.fill = coatColor;
    coatColorInput.value = coatColor;
  };

  var onEyesClick = function () {
    var eyesColor = window.util.getRandomArrayElement(window.wizardSetup.WIZARDS_EYES_COLORS);
    eyes.style.fill = eyesColor;
    eyesColorInput.value = eyesColor;
  };

  var onFireballClick = function () {
    var fireballColor = window.util.getRandomArrayElement(window.wizardSetup.FIREBALL_COLORS);
    fireball.style.backgroundColor = fireballColor;
    fireballColorInput.value = fireballColor;
  };

  coat.addEventListener('click', onCoatClick);
  eyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);
})();
