$(function() {
	function getzore(num){
		if(num<10){
			return '0'+num;
		}else{
			return num;
		}
	}
	//活动倒计时
	var sDaoShu = document.getElementById('daoshu');
	daoshu();
	setInterval(daoshu, 1000);
	function daoshu(){
		var sOldTime = (new Date("2017/4/1 0:0:0")).getTime();
		var sNewTime = (new Date()).getTime();
		var sTimer = sOldTime - sNewTime;
		var nTimer = parseInt(sTimer / 1000);
		var nDay = getzore(Math.floor(nTimer / (60 * 60 * 24)));
		var nHour = getzore(Math.floor((nTimer - nDay * 24 * 60 * 60) / 3600));
		var nMinute = getzore(Math.floor((nTimer - nDay * 24 * 60 * 60 - nHour * 3600) / 60));
		var nSecond = getzore(Math.floor(nTimer - nDay * 24 * 60 * 60 - nHour * 3600 - nMinute * 60));
		$('#daoshu').find('em').each(function(i,elem){
			$(elem).text('');
		});
		$('#daoshu em').eq(0).text(nDay);
		$('#daoshu em').eq(1).text(nHour);
		$('#daoshu em').eq(2).text(nMinute);
		$('#daoshu em').eq(3).text(nSecond);
	}
	$('#declarationCnt').Marquee({
		distance: 234, //每次移动162px
		time: 5, //延时时间3秒
		btnGo: {
			left: '#left',
			right: '#right'
		},
		direction: 'left' //方向
	});
	//入选甄选家 更多内容
	$('#declarationCnt').find('.more').click(function(){
		$('#allContent').css('display','block');
		$('#allContent').find('img').remove();
		$(this).parent().siblings('.useravatar').find('img').clone().appendTo($('#allContent').find('.avatar'));
		$('#allContent').find('.username').text($(this).parent().siblings('.username').text());
		$('#allContent').find('.declaration').text($(this).parent().text());
	});
	//入选甄选家 更多内容 关闭
	$('#allContent-cls').click(function(){
		$('#allContent').css('display','none');
	});
	//登录界面top位置初始化
	var nTop = ($(window).height() - $('#allContent-m').outerHeight()) / 2;
	console.log($(window).height());
	$('#allContent-m').css('top', nTop);
	//登录界面top位置随窗口大小的变化而变化
	$(window).resize(function() {
		nTop = ($(window).height() - $('#allContent-m').outerHeight()) / 2;
		nTop = nTop < 0 ? 0 : nTop;
		$('#allContent-m').css('top', nTop);
	});
});