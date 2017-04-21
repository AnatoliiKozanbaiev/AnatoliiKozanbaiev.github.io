jQuery(document).ready(function() {
	jQuery('.post').addClass("hidden-block").viewportChecker({
		classToAdd: 'visible-block animated zoomIn',
		offset: 120
	});
});
		
jQuery(document).ready(function() {
	jQuery('.post-1').addClass("hidden-block").viewportChecker({
		classToAdd: 'visible-block animated fadeInUp',
		offset: 120
	});
});

jQuery(document).ready(function() {
	jQuery('.post-2').addClass("hidden-block").viewportChecker({
		classToAdd: 'visible-block animated slideInLeft',
		offset: 20
	});
});