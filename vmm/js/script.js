var exibir = false;

$( ".home" ).click(function() {
	$('.nav-mobile ul').css('display', 'none');
	exibir = false;
});

$( ".institucional" ).click(function() {
	$('.nav-mobile ul').css('display', 'none');
	exibir = false;
});

$( ".equipe" ).click(function() {
	$('.nav-mobile ul').css('display', 'none');
	exibir = false;
});

$( ".atuacao" ).click(function() {
	$('.nav-mobile ul').css('display', 'none');
	exibir = false;
});

$( ".estrutura" ).click(function() {
	$('.nav-mobile ul').css('display', 'none');
	exibir = false;
});

$( ".contato" ).click(function() {
	$('.nav-mobile ul').css('display', 'none');
	exibir = false;
});

$( "#botao-mobile" ).click(function() {
	$('#mainNavDesktop').addClass('nav-mobile');

	if (exibir) {
		$('.nav-mobile ul').css('display', 'none');
		exibir = false;
	}
	else {
		$('.nav-mobile ul').css('display', 'block');
		exibir = true;
	}
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNavDesktop'
  });

})(jQuery); // End of use strict
