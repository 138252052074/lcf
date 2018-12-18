$(function() {
	//往期试用滚动
//	$('#trialProducts').Marquee({
//		distance: 366, //每次移动162px
//		time: 5, //延时时间3秒
//		direction: 'left' //方向
//	});
	//试用选项
	var bflag = false;
	$('#sel-act-tag li').click(function() {
		$('#trialProductlist').children('div').css('display', 'none');
		$('#trialProductlist').children('div').eq($(this).index()).css('display', 'block');
		if($('#trialProductlist').children('div').eq(1).css('display') == 'block' && !bflag) {
			bflag = !bflag;
			$('#trialProducts').Marquee({
				distance: 366, //每次移动162px
				time: 5, //延时时间3秒
				direction: 'left' //方向
			});
		}
	}).mouseenter(function() {
		var nUnderline = $(this).index() * 280;
		$('#underline').animate({
			left: nUnderline
		});
	}).mouseout(function() {
		$('#trialProductlist').children('div').each(function(i) {
			if($(this).css('display') == 'block') {
				var nUnderline = $(this).index() * 280;
				$('#underline').animate({
					left: nUnderline
				});
			}
		});
	});
});