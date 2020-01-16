$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".dropdown-trigger").dropdown();
  $(".parallax").parallax();
  $(".materialboxed").materialbox();
  $(".scrollspy").scrollSpy();
  $(".slider").slider({ height: 1500, interval: 20000 });
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });

  // Hide header on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("nav").outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If scrolled down and past the navbar, add class sticky-nav.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("nav")
        .removeClass("sticky-nav")
        .addClass("nav-down");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("nav")
          .addClass("sticky-nav")
          .removeClass("nav-down");
      }
    }

    lastScrollTop = st;
  }
});
