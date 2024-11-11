move()

function move() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progress_bar");
    if (!elem) return;
    var width = 1;
    var id = setInterval(frame, 10);
    if (!elem) return;
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        fadeToBlack("progress_bar");
        fadeToBlack("progress");
        fadeToBlack("logo");
      } else {
        width += (Math.random() * 0.4);
        elem.style.width = width + "%";
      }
    }
  }
}

function loadScreen(page) {
  window.location.href = page
  return false;
}

function fadeToBlack(elementId) {
  var elem = document.getElementById(elementId);
  if (!elem) return;
  var opacity = 100;
  var id = setInterval(frame, 10);
  
  function frame() {
    if (opacity <= 0) {
      clearInterval(id);
      setTimeout(function() {
        loadScreen("lock_screen.html");
      },1300);
    } else {
      opacity -= 1;
      elem.style.opacity = opacity / 100;
    }
  }
}

document.documentElement.click();

addEventListener("click", function() {
  var
        el = document.documentElement
      , rfs =
             el.requestFullScreen
          || el.webkitRequestFullScreen
          || el.mozRequestFullScreen
  ;
  rfs.call(el);
});