window.onload = function() {
  fade();
  cloudOne();
  cloudTwo();
}
  function fade() {
    $("#intro").hide().fadeIn(2000);
  }

  function cloudOne() {
    setInterval(
      function() {
        $("#cloud1").animate({
          left: '+=600px'}, 30500,
          function() { $(this).removeAttr('style'); });
      }, 1000);
  }
  function cloudTwo() {
    setInterval(
      function() {
        $("#cloud2").animate({
          left: '+=910px'}, 40000,
          function() { $(this).removeAttr('style'); });
      }, 1000);
  }
