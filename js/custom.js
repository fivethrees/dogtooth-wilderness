window.onload = function() {
  fadeWanderSafely();
  fadeSentence();
}
function fadeWanderSafely() {
  $("#wander-safely").hide().fadeIn(3000);
}
function fadeSentence() {
  $("#sentence").hide();
    setTimeout(
      function() {
        $("#sentence").hide().fadeIn(3000);
      }, 2000);
  }
