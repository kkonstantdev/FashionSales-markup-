$(document).ready(function() {
	$('.ac-parent').on('click',function() {
		$(this).parents('.acordeon-box').toggleClass('active');
	});

	$('.ac-parent--sub').on('click',function() {
		$(this).parents('.sidebar-list--sub-parent').toggleClass('active');
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
});