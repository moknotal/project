$(document).ready(function() {

	var flag = true;
	var wrapWidth = $('.wrap').outerWidth();
	var itemWidth = $('.wrap .item').eq(0).outerWidth();
	var resWidth  = wrapWidth - itemWidth - 100

	var b = $(' .wrap ' ).css({'left':'0px'});
	$(' .togglerleft ').on('click', function() { 
		if (flag && parseInt($('.wrap').css('left')) < 0) {
			flag = false;
			$(' .wrap ' ).css({'left':'+=' + itemWidth});
			setTimeout(function() {
				flag = true;
			}, 800);
		}
		// if (parseInt($(' .wrap ' ).css('left')) === 0) {
		// 		$(' .togglerleft ').on('click', function() { $(' .wrap ' ).css({'left':'0px'}); 
		// 	});
		// 	}
	});
				console.log('resWidth', resWidth)
	$(' .togglerright ').on('click', function() { 
		if (flag && (resWidth > (parseInt($('.wrap').css('left')) * -1))) {
			flag = false;
			$(' .wrap ' ).css({'left':'-=' + itemWidth});
			setTimeout(function() {
				flag = true;
			}, 800);
		}
	});
});
