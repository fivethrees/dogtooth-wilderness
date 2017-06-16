window.onload = function() {
  fade();
  cloudOne();
  cloudTwo();
  arrow();
}
  function fade() {
    $("#intro").hide().fadeIn(2000);
  }
  function cloudOne() {
    setInterval(
      function() {
        $("#cloud1").animate({
          left: $(window).width()}, 45000,
          function() { $(this).removeAttr('style'); });
      }, 1000);
  }
  function cloudTwo() {
    setInterval(
      function() {
        $("#cloud2").animate({
          left: $(window).width()}, 50000,
          function() { $(this).removeAttr('style'); });
      }, 1000);
  }
  function arrow() {
    $(".arrow").animate({
      bottom: '5px'}, 2000);
  }
