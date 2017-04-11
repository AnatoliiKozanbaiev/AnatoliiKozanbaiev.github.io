$(window).on('load', function () {
	var $preloader = $('#p_prldr'),
	$svg_anm   = $preloader.find('.svg_anm');
	$svg_anm.fadeOut();
	$preloader.delay(300).fadeOut('slow');
});