$(document).ready(function() {
	$('.ac-parent').on('click',function() {
		$(this).parents('.acordeon-box').toggleClass('active');
	});

	$('.ac-parent--sub').on('click',function() {
		$(this).parents('.sidebar-list--sub-parent').toggleClass('active');
	});

	$('#filter-parent-mobile').on('click',function() {
		$(this).addClass('active');
		$('.sidebar').addClass('js--open');
		$('body').css('overflow','hidden');
	});

	$('.sidebar--home .close-icon').on('click',function() {
		$('#filter-parent-mobile').removeClass('active');
		$('.sidebar').removeClass('js--open');
		$('body').css('overflow','');
	});

	// ================= Filter scroll desktop ============
	$(function(){
		var parentElemWidth = $(".filter-box").width(),
			innerElemWidth = $(".filter-box--inner").width(),
	    	margLeft = 0;

	    $('#filter-parent-desktop').on('click',function() {
	    	margLeft = margLeft+200;
			if(parentElemWidth < innerElemWidth) {
				$('.filter-box--inner').css({'margin-left': '-' + margLeft + 'px'});
			}

			if ($(window).width() > '992'){
				if(innerElemWidth-800 < margLeft) {
					$('.filter-box--inner').css({'margin-left': '48px'});
					margLeft = 0;
				}
			}
			if ($(window).width() <= '992'){
				if(innerElemWidth-500 < margLeft) {
					$('.filter-box--inner').css({'margin-left': '48px'});
					margLeft = 0;
				}
			}
		});
	});

});