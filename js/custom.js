window.onload = function() {
  fade();
  cloudOne();
  cloudTwo();
  arrow();
  forest1();
}
  function fade() {
    if (window.matchMedia("(max-width: 576px)").matches) {
      $("#intro").hide().fadeIn(2000);
    } else {
      $("#intro").hide();
      setTimeout(
        function() {
          $("#intro").hide().fadeIn(2000);
        }, 3000);
    }
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
    if (window.matchMedia("(max-width: 576px)").matches) {
      $(".arrow").animate({
        bottom: '5px'}, 2000);
    } else {
      setTimeout(
        function() {
          $(".arrow").animate({
            bottom: '5px'}, 2000);
        }, 3000);
    }
  }
  function forest1() {
    if (window.matchMedia("(min-width: 576px)").matches) {
      $("#introduction").hide().fadeIn(2000);
    }
  }
