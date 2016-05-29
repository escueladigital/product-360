'use strict';

var control = document.getElementById('control'),
    video = document.getElementById('video'),
    frame = 0;

control.addEventListener('input', function () {
  video.currentTime = video.duration / this.value;
  console.log(this.value);
});

addEventListener('keyup', function (e) {
  // 39 - right
  // 37 - left
  if (e.which === 39) {
    if (frame > 8) {
      frame = 0;
    }
    frame++;
    video.currentTime = video.duration / 10 * frame;
    console.log(frame);
  } else if (e.which === 37) {
    if (frame < 0) {
      frame = 9;
    }
    frame--;
    video.currentTime = video.duration / 10 * frame;
    console.log(frame);
  }
});