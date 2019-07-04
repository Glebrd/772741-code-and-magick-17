'use strict';
(function () {
  // Создаём массивы
  var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var DEFAULT_NUMBER_OF_WIZARDS = 4;
  var data = [];

  // Находим элемент в который будем вставлять новые элементы
  var similarListElement = document.querySelector('.setup-similar-list');

  // Находим шаблон
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // Клонируем шаблон и заполняем данными волшебника
  var renderWizard = function (wizard) {
    // console.log(wizard.name);
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // Заполнили массив данных волшебников Складываем новые элементы в контейцнер
  var addToFragment = function (wizards) {
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    var numberOfWizards = wizards.length > DEFAULT_NUMBER_OF_WIZARDS ? DEFAULT_NUMBER_OF_WIZARDS : wizards.length;
    for (var i = 0; i < numberOfWizards; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  // Обмен

  // Добавляем элементы из контейцнера на страницу
  var successHandler = function (wizards) {
    data = wizards;
    updateWizards();
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.exchange('https://js.dump.academy/code-and-magick/data', 'GET', successHandler, window.error.create);

  // Покажем блок .setup-similar, удалив у него CSS-класс hidden.
  var showSetupSimilar = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  showSetupSimilar();


  var updateWizards = function () {
    similarListElement.appendChild(addToFragment(window.filter(data)));
  };

  window.wizardSetup = {
    WIZARDS_COATS_COLORS: WIZARDS_COATS_COLORS,
    WIZARDS_EYES_COLORS: WIZARDS_EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    updateWizards: updateWizards,
  };

})();
