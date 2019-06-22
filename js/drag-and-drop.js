'use strict';
(function () {
  var shop = document.querySelector('.setup-artifacts-shop');
  var inventory = document.querySelector('.setup-artifacts');
  var draggItem = null;

  shop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName === 'IMG') {
      draggItem = evt.target;
    }
  });

  var onMoveItemToInventory = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggItem);
    evt.preventDefault();
  };

  var onMoveItemToShop = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
    if (evt.target !== shop) {
      evt.target.appendChild(draggItem);
    }
  };

  inventory.addEventListener('drop', onMoveItemToInventory);
  shop.addEventListener('drop', onMoveItemToShop);

  var createEventListener = function (object, eventName, color) {
    object.addEventListener(eventName, function (evt) {
      if (evt.target !== shop) {
        evt.target.style.backgroundColor = color;
        evt.preventDefault();
      }
    });
  };

  createEventListener(shop, 'dragover');
  createEventListener(shop, 'dragenter', 'yellow');
  createEventListener(shop, 'dragleave', '');
  createEventListener(inventory, 'dragover');
  createEventListener(inventory, 'dragenter', 'yellow');
  createEventListener(inventory, 'dragleave', '');
})();
