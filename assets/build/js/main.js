$(document).ready(function() {
	$('.ac-parent').on('click',function() {
		$(this).parents('.acordeon-box').toggleClass('active');
	});

	$('.filter__item--parent').on('click',function() {
		$(this).addClass('active');
		$('.sidebar').addClass('js--open');
	});

	$('.sidebar .close-icon').on('click',function() {
		$('.filter__item--parent').removeClass('active');
		$('.sidebar').removeClass('js--open');
	})
});