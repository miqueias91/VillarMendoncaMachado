var doc = $('html, body');
$('.scrollSuave').click(function() {
    doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('#text').typed({
    strings: [
      '<span style="color:#FFD700">Aplicativos</span>',
      '<span style="color:#87CEEB">Jogos</span>',
      '<span style="color:#FF69B4">Filmes</span>',
      '<span style="color:#3CB371">Livros</span>',
      '<span style="color:#7f7f7f">Músicas</span>',
      '<span style="color:#000">Séries</span>'
    ],
    loop :  true,
    backDelay: 6000,
    typeSpeed: 60
});

/* Template: Viso - HR Recruiting Landing Page Template
   Author: InovatikThemes
   Created: Oct 2018
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

	 $('body').scrollspy({
	    target: '#navbarsExampleDefault'
	 });


})(jQuery);