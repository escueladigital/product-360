const view360 = function view360(){
  const product = document.getElementById('product'),
        img = document.getElementById('product__img'),
        video = document.getElementById('product__video');

  product.addEventListener('click', () => {
      video.style.zIndex = 200;
      video.play();
    })
}();