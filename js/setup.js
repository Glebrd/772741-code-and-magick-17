'use strict';
// Создаём массивы
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_OF_WIZARDS = 4;
// var ESC_KEYCODE = 27;
// var ENTER_KEYCODE = 13;

// Генерируем случайно число
var generateRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

// Генерируем случайное свойство волшебника
var getRandomArrayElement = function (array) {
  return array[generateRandomNumber(array.length)];
};

// Создаём массив, состоящий из сгенерированных JS объектов
var generateWizardsArray = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards[i] = {
      name: getRandomArrayElement(WIZARDS_NAMES) + ' ' + getRandomArrayElement(WIZARDS_LASTNAMES),
      coatColor: getRandomArrayElement(WIZARDS_COATS_COLORS),
      eyesColor: getRandomArrayElement(WIZARDS_EYES_COLORS)
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

// Проверка валидности формы
// Имя

window.userNameInput.addEventListener('invalid', function () {
  if (window.userNameInput.validity.tooShort) {
    window.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (window.userNameInput.validity.tooLong) {
    window.userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (window.userNameInput.validity.valueMissing) {
    window.userNameInput.setCustomValidity('Обязательное поле');
  } else {
    window.userNameInput.setCustomValidity('');
  }
});

// Ручная настройка волшенбинка

var playerSetup = document.querySelector('.setup-player');
var eyes = playerSetup.querySelector('.wizard-eyes');
var coat = playerSetup.querySelector('.wizard-coat');
var fireball = playerSetup.querySelector('.setup-fireball-wrap');
var coatColorInput = coat.querySelector('input[name="coat-color"]');
var eyesColorInput = coat.querySelector('input[name="eyes-color"]');
var fireballColorInput = coat.querySelector('input[name="fireball-color"]');

var onCoatClick = function () {
  var coatColor = getRandomArrayElement(WIZARDS_COATS_COLORS);
  coat.style.fill = coatColor;
  coatColorInput.value = coatColor;
};

var onEyesClick = function () {
  var eyesColor = getRandomArrayElement(WIZARDS_EYES_COLORS);
  eyes.style.fill = eyesColor;
  eyesColorInput.value = eyesColor;
};

var onFireballClick = function () {
  var fireballColor = getRandomArrayElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = fireballColor;
  fireballColorInput.value = fireballColor;
};

coat.addEventListener('click', onCoatClick);
eyes.addEventListener('click', onEyesClick);
fireball.addEventListener('click', onFireballClick);

