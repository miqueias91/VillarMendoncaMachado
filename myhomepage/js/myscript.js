$( "a[href='#home']" ).click(function() {
	$('title').text('Home | Miqueias Matias');
	$('a').removeClass('link-active');
	$('section').removeClass('active');
	$("#about .center .conteudo-about-me").css('opacity', '0');
	$("#portfolio .center .conteudo-portfolio").css('opacity', '0');
	$("#contacts .center .conteudo-contacts").css('opacity', '0');

	$('#home').addClass('active');
	$(this).addClass('link-active');
	$("#home .center .text-vertical").css('opacity', '1').hide().slideToggle( "slow");
});

$( "a[href='#about']" ).click(function() {
	$('title').text('About | Miqueias Matias');
	$('a').removeClass('link-active');
	$('section').removeClass('active');
  	$("#home .center .text-vertical").css('opacity', '0');
  	$("#portfolio .center .conteudo-portfolio").css('opacity', '0');
	$("#contacts .center .conteudo-contacts").css('opacity', '0');

	$('#about').addClass('active');
	$(this).addClass('link-active');
	$("#about .center .conteudo-about-me").css('opacity', '1').hide().slideToggle( "slow");
});

$( "a[href='#contacts']" ).click(function() {
	$('title').text('Contacts | Miqueias Matias');
	$('a').removeClass('link-active');
	$('section').removeClass('active');
  	$("#home .center .text-vertical").css('opacity', '0');
	$("#about .center .conteudo-about-me").css('opacity', '0');
	$("#portfolio .center .conteudo-portfolio").css('opacity', '0');

	$('#contacts').addClass('active');
	$(this).addClass('link-active');
	$("#contacts .center .conteudo-contacts").css('opacity', '1').hide().slideToggle( "slow");
});
$( "a[href='#portfolio']" ).click(function() {
	$('title').text('Portfolio | Miqueias Matias');
	$('a').removeClass('link-active');
	$('section').removeClass('active');
  	$("#home .center .text-vertical").css('opacity', '0');
	$("#about .center .conteudo-about-me").css('opacity', '0');
	$("#contacts .center .conteudo-contacts").css('opacity', '0');

	$('#portfolio').addClass('active');
	$(this).addClass('link-active');
	$("#portfolio .center .conteudo-portfolio").css('opacity', '1').hide().slideToggle( "slow");
});

  $('#text').typed({
    strings: [
      'WEB DEVELOPER',
      'FRONTEND DEVELOPER',
      'MOBILE DEVELOPER'
    ],
    loop :  true,
    backDelay: 6000,
    typeSpeed: 60
  });