'use strict';

var view360 = function view360() {
  var product = document.getElementById('product'),
      img = document.getElementById('product__img'),
      video = document.getElementById('product__video');

  product.addEventListener('click', function () {
    video.style.zIndex = 200;
    video.play();
  });
}();