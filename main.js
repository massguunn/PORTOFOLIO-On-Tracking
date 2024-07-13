$(document).ready(function () {
  //navbar link
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  //parallax.js
  function parallaxMouse() {
    if ($("#parallax").length) {
      var scene = document.getElementById("parallax");
      var parallaxInstance = new Parallax(scene);
    }
  }
  parallaxMouse();
});
