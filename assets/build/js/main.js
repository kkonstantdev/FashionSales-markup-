$(document).ready(function() {
	$('.ac-parent').on('click',function() {
		$(this).parents('.acordeon-box').toggleClass('active');
	});

	$('.ac-parent--sub').on('click',function() {
		$(this).parents('.sidebar-list--sub-parent').toggleClass('active');
	});

	$('.filter__item--parent').on('click',function() {
		$(this).addClass('active');
		$('.sidebar').addClass('js--open');
		$('body').css('overflow','hidden');
	});

	$('.sidebar .close-icon').on('click',function() {
		$('.filter__item--parent').removeClass('active');
		$('.sidebar').removeClass('js--open');
		$('body').css('overflow','');
	})
});