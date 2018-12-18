$(function() {
	//头部下拉菜单
	var nConLeft = 0;
	console.log($(window).width());
	$('#nav-inner li:gt(0),#nav-bg').hover(function() {
		var nwidth=$(window).width();
		$(this).find('.con').css('display', 'block');
		$(this).find('.con').css('width',nwidth);
		nConLeft = $(this).find('.con').offset().left;
		$(this).find('.con').css('left', -nConLeft);
		$(this).find('.con ul').width($(this).find('.con li').outerWidth(true) * $(this).find('.con li').length + 40);
	}, function() {
		$(this).find('.con').css('left', 0);
		$(this).find('.con').css('display', 'none');
	});
	//下拉菜单滚动
	var bscroll = false;
	$(document).scroll(function() {
		if($(document).scrollTop() > 250) {
			if(!bscroll) {
				$logo = $('#nav-logo').clone();
				$logo.insertBefore('#nav-inner').css('display', 'block');
				$('#nav').removeClass().addClass('scroll_nav');
				$('#nav').find('.notLogin').css('display', 'block');
				$('#nav').find('.ShopCart').css('display', 'block');
				$('#nav-inner>li:gt(9)').css('display', 'none');
				bscroll = true;
			}
		} else {
			bscroll = false;
			$logo.remove();
			$('#nav').removeClass().addClass('nav');
			$('#nav').find('.notLogin').css('display', 'none');
			$('#nav').find('.ShopCart').css('display', 'none');
			$('#nav-inner>li:gt(9)').css('display', 'block');
		};
		//回到顶部的出现/消失
		if($(document).scrollTop() > 500) {
			$('#goback').css('display', 'block');
		} else {
			$('#goback').css('display', 'none');
		};
		//回到顶部
	});
	$('#goback').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
	//搜索框 热搜
	$('#nav-s-input').focus(function() {
		$(this).siblings('.nav-input-tips').slideDown();
		$(this).siblings('.nav-input-tips').mouseleave(function() {
			$(this).slideUp();
		});
	}).blur(function() {
		$(this).siblings('.nav-input-tips').slideUp();
	});
	//登陆界面
	//登录界面top位置初始化
	var nTop = ($(window).height() - $('#singin-m').outerHeight()) / 2;
	$('#singin-m').css('top', nTop);
	//登录界面top位置随窗口大小的变化而变化
	$(window).resize(function() {
		nTop = ($(window).height() - $('#singin-m').outerHeight()) / 2;
		nTop = nTop < 0 ? 0 : nTop;
		$('#singin-m').css('top', nTop);
	});
	//登陆界面 关闭界面
	$('#singin-cls').click(function() {
		$('#singin').css('display', 'none');
	});
	//登录邮箱验证
	$('#singininput').blur(function() {
		var re = /^\w+@[a-z0-9]+\.[a-z]+$/i;
		var sSingin = $('#singininput').val();
		if(re.test(sSingin)) {
			$('#singin-m').find('.singininput').css('border-color','#e8e8e8');
			$('#err_email').css('display','none');
		} else {
			$('#singin-m').find('.singininput').css('border-color','red');
			$('#err_email').css('display','block');
		}
	});

});