window.onload = function() {
  fade();
  arrow();
}
  function fade() {
      $("#intro").hide().fadeIn(2000);
  }
  
  function arrow() {
    $(".arrow").animate({
      bottom: '5px'}, 2000);
  }
