'use strict';
// Создаём массивы
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Показываем блок .setup, убрав в JS-коде у него класс .hidden.
// var showSetup = function () {
//   document.querySelector('.setup').classList.remove('hidden');
// };
// showSetup();

// Генерируем случайно число
var generateRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

// Генерируем случайное свойство волшебника
var getRandomArrElement = function (arrayName) {
  return arrayName[generateRandomNumber(arrayName.length)];
};

// Создаём массив, состоящий из сгенерированных JS объектов
var generateWizardsArray = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards[i] = {
      name: getRandomArrElement(WIZARDS_NAMES) + ' ' + getRandomArrElement(WIZARDS_LASTNAMES),
      coatColor: getRandomArrElement(WIZARDS_COATS_COLORS),
      eyesColor: getRandomArrElement(WIZARDS_EYES_COLORS)
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
var NUMBER_OF_WIZARDS = 4;
similarListElement.appendChild(addToFragment(generateWizardsArray(NUMBER_OF_WIZARDS)));

// Покажем блок .setup-similar, удалив у него CSS-класс hidden.
var showSetupSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};
showSetupSimilar();

// Нажатие на элемент .setup-open приводит
// к появлению диалогового окна .setup.
// Окно спрятано с помощью CSS-класса hidden,
// поэтому, чтобы показать, нужно удалить
// соответствующий класс

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


// Проверка валидности формы
// Имя
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// userNameInput.addEventListener('input', function (evt) {
//   var target = evt.target;
//   if (target.value.length < 2) {
//     target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else {
//     target.setCustomValidity('');
//   }
// });
