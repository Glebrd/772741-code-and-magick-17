'use strict';
(function () {
  // Создаём массивы
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.wizardSetup = {
    WIZARDS_COATS_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    WIZARDS_EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
  var NUMBER_OF_WIZARDS = 4;

  // Создаём массив, состоящий из сгенерированных JS объектов
  var generateWizardsArray = function (numberOfWizards) {
    var wizards = [];
    for (var i = 0; i < numberOfWizards; i++) {
      wizards[i] = {
        name: window.util.getRandomArrayElement(WIZARDS_NAMES) + ' ' + window.util.getRandomArrayElement(WIZARDS_LASTNAMES),
        coatColor: window.util.getRandomArrayElement(window.wizardSetup.WIZARDS_COATS_COLORS),
        eyesColor: window.util.getRandomArrayElement(window.wizardSetup.WIZARDS_EYES_COLORS)
      };
    }
    return wizards;
  };

  // Находим элемент в который будем вставлять новые элементы
  var similarListElement = document.querySelector('.setup-similar-list');

  // Находим шаблон
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // Клонируем шаблон и заполняем данными волшебника
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // Заполнили массив данных волшебников Складываем новые элементы в контейцнер
  var addToFragment = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  // Добавляем элементы из контейцнера на страницу
  similarListElement.appendChild(addToFragment(generateWizardsArray(NUMBER_OF_WIZARDS)));

  // Покажем блок .setup-similar, удалив у него CSS-класс hidden.
  var showSetupSimilar = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  showSetupSimilar();
})();
