$(function() {
	//	幻灯片
	var timer = null,
		now = 1;

	function setShowIndex() {
		for(var i = 0; i < $('.carousel-img li').get().length; i++) {
			$('.carousel-img li').get(i).index = false;
		}

	}

	function getShowIndex() {
		for(var j = 0; j < $('.carousel-img li').get().length; j++) {
			if($('.carousel-img li').get(j).index == true) {
				return j;
			}
		}
	}

	function next() {
		setShowIndex();
		if(now == $('.carousel-img li').length) {
			now = 0;
		}
		console.log('now' + now)
		if(now == 0) {
			$('.carousel-img li').eq($('.carousel-img li').length - 1).animate({
				opacity: 0
			}, 600);
			$('.carousel-img li').eq(0).css('opacity', 0);
			$('.carousel-img li').eq(0).animate({
				opacity: 1
			}, 600);
			$('.carousel-img li').get(0).index = true;
			$('.scroll-btn li').attr('class', '');
			$('.scroll-btn li').eq(getShowIndex()).attr('class', 'active');
			return;
		}
		$('.carousel-img li').eq(now - 1).animate({
			opacity: 0
		}, 600);
		$('.carousel-img li').eq(now).css('opacity', 0);
		$('.carousel-img li').eq(now).animate({
			opacity: 1
		}, 600);
		$('.carousel-img li').get(now).index = true;
		$('.scroll-btn li').attr('class', '');
		$('.scroll-btn li').eq(getShowIndex()).attr('class', 'active');
	}

	function tab() {
		now++;
		next();
	}

	function auto() {
		timer = setInterval(tab, 3000);
	}
	auto();
	$('.left').click(function() {
		console.log(now);
		setShowIndex();
		clearInterval(timer);
		now--;
		if(now < 0) {
			now = $('.carousel-img li').length - 1;
			$('.carousel-img li').eq(0).animate({
				opacity: 0
			}, 600);
			$('.carousel-img li').eq($('.carousel-img li').length - 1).css('opacity', 0);
			$('.carousel-img li').eq($('.carousel-img li').length - 1).animate({
				opacity: 1
			}, 600);
			$('.carousel-img li').get($('.carousel-img li').length - 1).index = true;
			$('.scroll-btn li').attr('class', '');
			$('.scroll-btn li').eq(getShowIndex()).attr('class', 'active');
			timer = setInterval(tab, 3000);
			return;
		}
		$('.carousel-img li').eq(now + 1).animate({
			opacity: 0
		}, 600);
		$('.carousel-img li').eq(now).css('opacity', 0);
		$('.carousel-img li').eq(now).animate({
			opacity: 1
		}, 600);
		$('.carousel-img li').get(now).index = true;
		$('.scroll-btn li').attr('class', '');
		$('.scroll-btn li').eq(getShowIndex()).attr('class', 'active');
		timer = setInterval(tab, 3000);
	});
	$('.right').click(function() {
		clearInterval(timer);
		if(now == $('.carousel-img li').length - 1) {
			now = 0;
		} else {
			now++;
		}
		next();

		timer = setInterval(tab, 3000);
	});
	$('.scroll-btn li').click(function() {
		clearInterval(timer);
		$('.scroll-btn li').attr('class', '');
		$(this).attr('class', 'active');
		$('.carousel-img li').eq(getShowIndex()).animate({
			opacity: 0
		}, 600);
		$('.carousel-img li').eq($(this).index()).css('opacity', 0);
		$('.carousel-img li').eq($(this).index()).animate({
			opacity: 1
		}, 600);
		setShowIndex();
		$('.carousel-img li').get($(this).index()).index = true;
		now = $(this).index();
		auto();
	});
	$('.carousel-img').mouseenter(function() {
		clearInterval(timer);

	});
	$('.carousel-img').mouseleave(function() {
		auto();
	});
//图片放大及遮罩
$('.img-rect').hover(function(){
	$(this).find('img').stop().animate({left:-10,top:-10,width:285,height:285},800);
	$(this).find('.cover').stop().animate({left:0,top:0,width:245,height:245,opacity:.6},200);
},function(){
	$(this).find('img').stop().animate({left:0,top:0,width:245,height:245},800);
	$(this).find('.cover').stop().animate({left:-245,top:-245,width:0,height:0,opacity:0},200);
});

});
