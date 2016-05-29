(function(document){

  const RIGHT = 39, LEFT = 37, STEP = 0.5;
  let control = $('control'),
      video = $('video'),
      frame = 0;

  control.addEventListener('input', function(){
    playVideo();
  });

  addEventListener('keydown', function(e) {
    if (e.which === RIGHT) {
      control.value = parseFloat(control.value) + STEP;
    } else if (e.which === LEFT) {
      control.value -= STEP;
    }
    playVideo();
  });

  function playVideo () {
    video.currentTime = video.duration * (control.value / 10);
  }

  function $(elemento) {
    return document.getElementById(elemento);
  }

})(document);
