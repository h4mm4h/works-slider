;(function ($) {
	var teamSlider = $('.ba-slider');
	teamSlider.slick({
		dots: true,
		variableWidth: true,
		slide: '.ba-slide',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '.ba-slider-prev',
		nextArrow: '.ba-slider-next'

	});
})(jQuery);
