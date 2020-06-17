$(document).ready(function() {
	$('sidebar .ac-parent').on('click',function() {
		$('sidebar .ac-parent').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$('sidebar .ac-child').not($(this).next()).slideUp(400);
	  	$(this).next().slideToggle(50);
	});

	$('sidebar .ac-parent--sub').on('click',function() {
		$('sidebar .ac-parent--sub').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$('sidebar .ac-child--sub').not($(this).next()).slideUp(400);
	  	$(this).next().slideToggle(50);
	});

	$('#filter-parent-mobile').on('click',function() {
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('js--open');
		$('body').toggleClass('body-overflow');
	});

	$('.sidebar--home .close-icon').on('click',function() {
		$('#filter-parent-mobile').removeClass('active');
		$('.sidebar').removeClass('js--open');
		$('body').removeClass('body-overflow');
	});

	$('.product-star .location-link').on('click',function() {
		$(this).toggleClass('js--active');
	});

	$('.product-title span').each(function(i){
		var heightChild = $(this).height();
		if ( $(this).height() > $(this).closest('.product-title').height()){
			$(this).closest('.product-title').css('justify-content','flex-start');
		} 
	});

});

