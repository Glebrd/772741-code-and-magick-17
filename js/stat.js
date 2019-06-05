'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SHADOW = 10;
var GAP_BETWEEN_COLUMNS = 50;
var GAP = 10;
var barHeight = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_BETWEEN_COLUMNS, CLOUD_Y + GAP * 4);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_BETWEEN_COLUMNS, CLOUD_Y + GAP * 6);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_BETWEEN_COLUMNS + (GAP_BETWEEN_COLUMNS + BAR_WIDTH) * i, CLOUD_HEIGHT + GAP / 2);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_BETWEEN_COLUMNS + (GAP_BETWEEN_COLUMNS + BAR_WIDTH) * i, -GAP * 2 + CLOUD_HEIGHT - (barHeight * times[i]) / maxTime);
    var randomColor = 'rgba(0, 0, ' + Math.round(Math.random() * 255) + ', 1)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor;
    }
    ctx.fillRect(CLOUD_X + GAP_BETWEEN_COLUMNS + (GAP_BETWEEN_COLUMNS + BAR_WIDTH) * i, -GAP + CLOUD_HEIGHT - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
