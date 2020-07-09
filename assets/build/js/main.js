$(document).ready(function() {
	$('sidebar .ac-parent').on('click',function() {
		$('sidebar .ac-parent').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$('sidebar .ac-child').not($(this).next()).slideUp(10);
	  	$(this).next().slideToggle(10);
	});

	$('sidebar .ac-parent--sub').on('click',function() {
		$('sidebar .ac-parent--sub').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$('sidebar .ac-child--sub').not($(this).next()).slideUp(10);
	  	$(this).next().slideToggle(10);
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
			$(this).closest('.product-title').addClass('j-content-start ');
		} 
	});

	$(window).on("load", function() {
	    $('.product-img-item').addClass('load');
	});

	// var total = $('.product-img-item').length;
	// var counter = 0;
	// $('.product-img-item').load(function() {
 // 		if (++counter >= total) {
	//     show();
	//   }
	// });
	// $('.product-img-item').load(function() {
 // 		if (++counter >= total) {
	//     show();
	//     alert('lll');
	//   }
	// });
	// function loaded() {
	//   if (++counter >= total) {
	//     show();
	//   }
	//   for (var counter = 0; counter >= total; counter++) {
	//   	// show();
	//   	$('.product-img-item').css({'visibility' : 'visible', 'transition' : '0.3s', 'opacity' : '1'});
	//   }
	// }
	// function show() {
	//   $('.product-img-item').css({'visibility' : 'visible', 'transition' : '0.3s', 'opacity' : '1'});
	// }

});