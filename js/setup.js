'use strict';

// Показываем блок .setup, убрав в JS-коде у него класс .hidden.
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Создаём массивы
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Получаем случайные параметры волшебника
var generateRandomName = function () {
  var wizardName = WIZARDS_NAMES[Math.floor(Math.random() * WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[Math.floor(Math.random() * WIZARDS_LASTNAMES.length)];
  return wizardName;
};

var generateRandomWizardColor = function () {
  var wizardCoatColor = WIZARDS_COATS_COLORS[Math.floor(Math.random() * WIZARDS_COATS_COLORS.length)];
  return wizardCoatColor;
};

var generateRandomEyesColor = function () {
  var wizardEyesColor = WIZARDS_EYES_COLORS[Math.floor(Math.random() * WIZARDS_EYES_COLORS.length)];
  return wizardEyesColor;
};


var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Создаём массив, состоящий из 4 сгенерированных JS объектов
var generateWizards = function () {
  var numberOfWizards = 4;
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards[i] = {name: generateRandomName(), coatColor: generateRandomWizardColor(), eyesColor: generateRandomEyesColor()};
  }
  return wizards;
};

// Клонируем шаблон и заполняем данными волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Заполнили массив данных волшебников
var wizards = generateWizards();
// Складываем новые элементы в контейцнер
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
// Добавляем элементы из контейцнера на страницу
similarListElement.appendChild(fragment);


// Покажем блок .setup-similar, удалив у него CSS-класс hidden.
userDialog.querySelector('.setup-similar').classList.remove('hidden');
