jQuery(document).ready(function() {
	jQuery('.post').addClass("hidden-block").viewportChecker({
		classToAdd: 'visible-block animated zoomIn',
		offset: 150
	});
});
		
jQuery(document).ready(function() {
	jQuery('.post-1').addClass("hidden-block").viewportChecker({
		classToAdd: 'visible-block animated fadeInUp',
		offset: 150
	});
});