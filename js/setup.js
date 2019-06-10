'use strict';

// Показываем блок .setup, убрав в JS-коде у него класс .hidden.
var showElement = function (hiddenElementClass) {
  document.querySelector(hiddenElementClass).classList.remove('hidden');
};

showElement('.setup');

// Создаём массивы
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Генерируем случайно число
var generateRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

// Находим элемент в который будем вставлять новые элементы
var similarListElement = document.querySelector('.setup-similar-list');

// Находим шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Создаём массив, состоящий из 4 сгенерированных JS объектов
var generateWizards = function () {
  var numberOfWizards = 4;
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards[i] = {
      name: WIZARDS_NAMES[generateRandomNumber(WIZARDS_NAMES.length)] + ' ' + WIZARDS_LASTNAMES[generateRandomNumber(WIZARDS_LASTNAMES.length)],
      coatColor: WIZARDS_COATS_COLORS[generateRandomNumber(WIZARDS_COATS_COLORS.length)],
      eyesColor: WIZARDS_EYES_COLORS[generateRandomNumber(WIZARDS_EYES_COLORS.length)]};
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
showElement('.setup-similar');
