$(function() {
	//选项卡
	$('#sel-act-tag li').click(function() {
		//		console.log($('#sel-act-list').children('div'));
		$('#sel-act-list').children('div').css('display', 'none');
		$('#sel-act-list').children('div').eq($(this).index()).css('display', 'block');
	}).mouseenter(function() {
		var nUnderline = $(this).index() * 280;
		$('#underline').animate({
			left: nUnderline
		});
	}).mouseout(function() {
		$('#sel-act-list').children('div').each(function(i) {
			if($(this).css('display') == 'block') {
				var nUnderline = $(this).index() * 280;
				$('#underline').animate({
					left: nUnderline
				});
			}
		});
	});
	//商业大图
	$('#sel-act-current').find('.Magnifier').click(function() {
		//商业大图 显示
		$('#businessmap').css('display', 'block');
		//大图清除
		$('#businessmap-img').children('div').remove();
		//小图清除
		$('#businessmapEllipsis').children().remove();
		//小图创建
		$(this).closest('.con-item').find('.con-inner-img').each(function() {
			$li = $('<li></li>');
			$(this).find('img').clone().appendTo($li);
			$li.appendTo($('#businessmapEllipsis'));
		});
		//计算所在行数
		var nitem = $('#sel-act-current').find('.con-item').index($(this).closest('.con-item'));
		//计算所在行数的个数
		var nMagnifier = $('#sel-act-current .con-item').eq(nitem).find('.Magnifier').length;
		//大图 数组
		var apic = [{
			url1: "img/06jsonpic/pic1.png",
			url2: "img/06jsonpic/pic2.png",
			url3: "img/06jsonpic/pic3.png"
		}, {
			url1: "img/06jsonpic/pic4.png",
			url2: "img/06jsonpic/pic5.png",
			url3: "img/06jsonpic/pic6.png"
		}, {
			url1: "img/06jsonpic/pic7.png",
			url2: "img/06jsonpic/pic8.png",
			url3: "img/06jsonpic/pic9.png",
			url4: "img/06jsonpic/pic10.png"
		}, {
			url1: "img/06jsonpic/pic11.png",
			url2: "img/06jsonpic/pic12.png",
			url3: "img/06jsonpic/pic13.png"
		}, {
			url1: "img/06jsonpic/pic14.png",
			url2: "img/06jsonpic/pic15.png",
			url3: "img/06jsonpic/pic16.png"
		}];
		//				$.getJSON('js/pic.json', function(data) {
		//						$('#businessmap-img').find('div').remove();
		//						var surl = new String;
		//						$.each(data, function(infoIndex, info) {
		//							surl = info["url1"];
		//							$('<div class="busimg"><img src=' + surl + '/></div>').appendTo($('#businessmap-img'));
		//							surl = info["url2"];
		//							$('<div class="busimg"><img src=' + surl + '/></div>').appendTo($('#businessmap-img'));
		//							surl = info["url3"];
		//							$('<div class="busimg"><img src=' + surl + '/></div>').appendTo($('#businessmap-img'));
		//						})
		//				})
		//获得大图图片 创建大图节点
		var surl = new String;
		for(var i in apic[nitem]) {
			surl = apic[nitem][i];
			$('<div class="busimg"><img src=' + surl + '/></div>').appendTo($('#businessmap-img'));
		}
		//大图片的初始化
		$('#businessmap').find('.busimg').css('display', 'none');
		//大图 出现
		var nbigindex = $(this).closest('.con-item').find('.Magnifier').index($(this));
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
		console.log(nActive - 1);
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
		console.log(nActive + 1);
		nLi = $('#businessmapEllipsis').find('li').length;
		nBusimg = $('#businessmap').find('.busimg').length;
		$('#businessmapEllipsis').find('li').attr('class', '');
		$('#businessmap').find('.busimg').css('display', 'none');
		if(nActive + 1 > nLi - 1) {
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
	$('#sel-act-current').find('.dolike').click(function() {
		if($(this).find('i').css('background-position') !== '0px -21px') {
			$(this).siblings('span').eq(0).text(parseInt($(this).siblings('span').eq(0).text()) + 1);
		}
		$(this).find('i').css('background-position', ' 0 -21px');
		$(this).siblings('i').css('background-position', ' 0 -2402px');
	});
});