window.onload = function() {
  fadeWanderSafely();
  fadeSentence();
  arrow();
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
function arrow() {

        setTimeout(
          function() {
            $(".arrow").animate({
              bottom: '5px'}, 2000);
          }, 3000);
  }
