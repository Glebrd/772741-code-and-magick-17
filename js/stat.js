'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP_SHADOW = 10;
  var GAP_BETWEEN_COLUMNS = 50;
  var GAP = 10;
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;

  var renderRectangle = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var getMaxElement = function (array) {
    var maxElement = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }
    return maxElement;
  };

  var getBarColor = function (player) {
    var colorYou = 'rgba(255, 0, 0, 1)';
    var randomBlue = 'hsl(240,' + Math.round(Math.random() * 100) + '%,50%)';
    return (player === 'Вы') ? colorYou : randomBlue;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderRectangle(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
    renderRectangle(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP_BETWEEN_COLUMNS, CLOUD_Y + GAP * 4);
    ctx.fillText('Список результатов:', CLOUD_X + GAP_BETWEEN_COLUMNS, CLOUD_Y + GAP * 6);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var barHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;
      var barColor = getBarColor(players[i]);
      var barX = CLOUD_X + GAP_BETWEEN_COLUMNS + (GAP_BETWEEN_COLUMNS + BAR_WIDTH) * i;
      var barY = CLOUD_HEIGHT - barHeight;
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], barX, CLOUD_HEIGHT + GAP / 2);
      ctx.fillText(Math.round(times[i]), barX, barY - GAP * 2);
      renderRectangle(ctx, barX, barY - GAP, BAR_WIDTH, barHeight, barColor);
    }
  };
})();
