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
    for (var i = 0; i < 4; i++) {
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


  // Фильтр Проверяем соответствие магу игрока
  //Получаем ранг
  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.manualWizardSetup.playerWizard.coatColor) {
      // console.log(wizard.colorEyes);
      rank += 2;
    }
    if (wizard.colorEyes === window.manualWizardSetup.playerWizard.eyesColor) {
      // console.log(window.manualWizardSetup.playerWizard.eyesColor);
      rank += 1;
    }

    return rank;
  };

  // Чтобы алгоритм был устойчивым, при сортировке нужно указать, как сортировать в случае, когда маги равны. Например, по имени в алфавитном порядке.
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    // similarListElement.appendChild(addToFragment(uniqueWizards));
    similarListElement.appendChild(addToFragment(data.sort(function (left, right) {
      // console.log('Левый:' + left.name + 'Правый:' + right.name);
      // console.log('Левый ранг:' + getRank(left) + 'Правыйц ранг:' + getRank(right));
      // console.log(getRank(right) - getRank(left));
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    })));
    // console.log(data);
  };

//   var updateWizards = function () {


//     // Проверяем, что совпадает плащ и глаза
//     var sameCoatAndEyesWizards = data.filter(function (it) {
//       return it.colorCoat === window.manualWizardSetup.playerWizard.coatColor &&
//         it.colorEyes === window.manualWizardSetup.playerWizard.eyesColor;
//     });
//     // Проверяем, что совпадает плащ
//     var sameCoatWizards = data.filter(function (it) {
//       // console.log(it.colorCoat);
//       // console.log(window.manualWizardSetup.playerWizard.coatColor);
//       // console.log(it.colorCoat === window.manualWizardSetup.playerWizard.coatColor);
//       return it.colorCoat === window.manualWizardSetup.playerWizard.coatColor;
//     });
//     // Проверяем, что совпадают глаза
//     var sameEyesWizards = data.filter(function (it) {
//       return it.colorEyes === window.manualWizardSetup.playerWizard.eyesColor;
//     });

//     // var filteredWizards = sameCoatWizards.concat(sameEyesWizards).concat(data);
//     // console.log(filteredWizards);
//     // Объединяем итоговоыйц массив
//     var filteredWizards = sameCoatAndEyesWizards;
//     filteredWizards = filteredWizards.concat(sameCoatWizards);
//     filteredWizards = filteredWizards.concat(sameEyesWizards);
//     filteredWizards = filteredWizards.concat(data);


//     // Проверяем уникальность волшебника (если волшебник уже был, то не берём)
//     var uniqueWizards =
//     filteredWizards.filter(function (it, i) {
//       // console.log(filteredWizards.indexOf(it));
//       return filteredWizards.indexOf(it) === i;
//     });

// console.log(uniqueWizards);
//     // ?передаём дальше?
//     similarListElement.appendChild(addToFragment(uniqueWizards));
//   };

  window.wizardSetup = {
    WIZARDS_COATS_COLORS: WIZARDS_COATS_COLORS,
    WIZARDS_EYES_COLORS: WIZARDS_EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    updateWizards: updateWizards
  };

})();
