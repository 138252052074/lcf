$(function() {
	//幻灯片
	//幻灯片大小变化
	$(window).resize(function() {
		$('#marquee0').width($(window).width()); //让幻灯片的宽度适应窗口宽度
	});
	//幻灯片 百叶窗
	$('#marquee1').nivoSlider({
		effect: 'fold',
		slices: 40,
		animSpeed: 300,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: true,
		directionNavHide: false,
		controlNav: true,
	});
	$('.nivo-prevNav,.nivo-nextNav').empty(); //清除幻灯片左右按钮的默认文字
	//建议滚动 建议div高57px，超出……
	$('#adviceList').find('.adviceList-detail').each(function() {
		var maxwidth = 64;
		if($(this).text().length > maxwidth) {
			$(this).text($(this).text().substring(0, maxwidth));
			$(this).html($(this).html() + '…');
		}
	});
	//建议滚动
	$('#adviceList').Marquee({
		distance: 182, //每次移动50px,两条文字的高度
		time: 4, //延时时间3秒
		direction: 'up' //方向
	});
	//建议提交
	//数字检测
	$('#con-textarea').find('textarea').blur(function() {
		if($(this).val().length > 10) {
			$('#con-ad-submit').find('.notify').css('display', 'none');
		} else {
			$('#con-ad-submit').find('.notify').css('display', 'block');
		}
		$('#con-textarea').find('textarea').keypress(function() {
			if($(this).val().length > 10) {
				$('#con-ad-submit').find('.notify').css('display', 'none');
			} else {
				$('#con-ad-submit').find('.notify').css('display', 'block');
			}
		});
	});
	$('#submit-btn').click(function(){
		if($('#con-textarea').find('textarea').val().length > 10) {
			$('#singin').css('display','block');
			$('#con-ad-submit').find('.notify').css('display', 'none');
		} else {
			$('#con-ad-submit').find('.notify').css('display', 'block');
		}
	});
	//字数计算
	$('#con-textarea').find('textarea').keypress(function() {
		$('#con-textarea').find('span').text($('#con-textarea').find('textarea').val().length);
	});
	
	$('#con-inner-current').find('.Magnifier').click(function() {
		//商业大图 显示
		$('#businessmap').css('display', 'block');
		//小图清除
		$('#businessmapEllipsis').children().remove();
		//小图创建
		$('#con-inner-current').find('.con-inner-img').each(function() {
			$li = $('<li></li>');
			$(this).find('img').clone().appendTo($li);
			$li.appendTo($('#businessmapEllipsis'));
		});
		//大图 出现
		var nbigindex = $('#con-inner-current').find('.Magnifier').index($(this));
		console.log(nbigindex);
		$('#businessmap').find('.busimg').css('display', 'none');
		$('#businessmap').find('.busimg').eq(nbigindex).css('display', 'block');
		//小图active
		$('#businessmapEllipsis').find('li').eq(nbigindex).addClass('businessActive');
		//选项卡
		$('#businessmapEllipsis').find('li').click(function() {
			$('#businessmapEllipsis').find('li').attr('class', '');
			$('#businessmap').find('.busimg').css('display', 'none');
			$(this).attr('class', 'businessActive');
			$('#businessmap').find('.busimg').eq($(this).index()).css('display', 'block');
		});
	});
	//选项卡 左按钮
	$('#picslick-left').click(function() {
		var nActive = 0;
		var nLi = 0;
		var nBusimg = 0;
		nActive = $('#businessmapEllipsis').find('li').filter('.businessActive').index();
		nLi = $('#businessmapEllipsis').find('li').length;
		nBusimg = $('#businessmap').find('.busimg').length;
		$('#businessmapEllipsis').find('li').attr('class', '');
		$('#businessmap').find('.busimg').css('display', 'none');
		if(nActive - 1 < 0) {
			$('#businessmapEllipsis').find('li').eq(nLi - 1).attr('class', 'businessActive');
			$('#businessmap').find('.busimg').eq(nLi - 1).css('display', 'block');
		} else {
			$('#businessmapEllipsis').find('li').eq(nActive - 1).attr('class', 'businessActive');
			$('#businessmap').find('.busimg').eq(nActive - 1).css('display', 'block');
		}
	});
	//选项卡 右按钮
	$('#picslick-right').click(function() {
		var nActive = 0;
		var nLi = 0;
		var nBusimg = 0;
		nActive = $('#businessmapEllipsis').find('li').filter('.businessActive').index();
		nLi = $('#businessmapEllipsis').find('li').length;
		nBusimg = $('#businessmap').find('.busimg').length;
		$('#businessmapEllipsis').find('li').attr('class', '');
		$('#businessmap').find('.busimg').css('display', 'none');
		if(nActive + 1 > nLi-1) {
			$('#businessmapEllipsis').find('li').eq(0).attr('class', 'businessActive');
			$('#businessmap').find('.busimg').eq(0).css('display', 'block');
		} else {
			$('#businessmapEllipsis').find('li').eq(nActive + 1).attr('class', 'businessActive');
			$('#businessmap').find('.busimg').eq(nActive + 1).css('display', 'block');
		}
	});
	//商业大图 关闭按钮
	$('#businessmap-cls').click(function() {
		$('#businessmap').css('display', 'none');
	});
	//喜欢 变红  +1
	$('#con-inner-current').find('.dolike').click(function() {
		if($(this).find('i').css('background-position') !== '0px -21px') {
			$(this).siblings('span').eq(0).text(parseInt($(this).siblings('span').eq(0).text()) + 1);
		}
		$(this).find('i').css('background-position', ' 0 -21px');
		$(this).siblings('i').css('background-position', ' 0 -2402px');
	});
});