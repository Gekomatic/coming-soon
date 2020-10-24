/**
 * Template Name: Maundy - v2.1.0
 * Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });
})(jQuery);
