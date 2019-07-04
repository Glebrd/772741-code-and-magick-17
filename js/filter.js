'use strict';
// Фильтр Проверяем соответствие магу игрока
// Получаем ранг
var getRank = function (wizard) {
  var rank = 0;
  if (wizard.colorCoat === window.manualWizardSetup.playerWizard.coatColor) {
    // console.log(wizard.colorEyes);
    rank += 2;
  }
  if (wizard.colorEyes === window.manualWizardSetup.playerWizard.eyesColor) {
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


var filter = function (data) {
  data.sort(function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  });
  return data;
};

window.filter = filter;
