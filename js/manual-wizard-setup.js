'use strict';
// Ручная настройка волшенбинка
// manual-wizard-setup
(function () {

  var playerSetup = document.querySelector('.setup-player');
  var eyes = playerSetup.querySelector('.wizard-eyes');
  var coat = playerSetup.querySelector('.wizard-coat');
  var fireball = playerSetup.querySelector('.setup-fireball-wrap');
  var coatColorInput = playerSetup.querySelector('input[name="coat-color"]');
  var eyesColorInput = playerSetup.querySelector('input[name="eyes-color"]');
  var fireballColorInput = playerSetup.querySelector('input[name="fireball-color"]');
  var playerWizard = {};


  playerWizard.coatColor = coat.style.fill;
  var onCoatClick = function () {
    var coatColor = window.util.getRandomArrayElement(window.wizardSetup.WIZARDS_COATS_COLORS);
    coat.style.fill = coatColor;
    coatColorInput.value = coatColor;
    // Для фильтра
    playerWizard.coatColor = coatColor;
    window.wizardSetup.updateWizards();
  };


  var onEyesClick = function () {
    var eyesColor = window.util.getRandomArrayElement(window.wizardSetup.WIZARDS_EYES_COLORS);
    eyes.style.fill = eyesColor;
    eyesColorInput.value = eyesColor;
    // Для фильтра
    playerWizard.eyesColor = eyesColor;
    window.wizardSetup.updateWizards();
  };



  var onFireballClick = function () {
    var fireballColor = window.util.getRandomArrayElement(window.wizardSetup.FIREBALL_COLORS);
    fireball.style.backgroundColor = fireballColor;
    fireballColorInput.value = fireballColor;
  };

  coat.addEventListener('click', onCoatClick);
  eyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);


  window.manualWizardSetup = {playerWizard: playerWizard};

})();
