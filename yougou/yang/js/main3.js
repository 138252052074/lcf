$(function() {
	//	图片放大
	$('.commodity .img').hover(function() {
		$(this).find('img').stop().animate({
			left: -6,
			top: -6,
			width: 230,
			height: 230
		}, 800);
	}, function() {
		$(this).find('img').stop().animate({
			left: 0,
			top: 0,
			width: 210,
			height: 210
		}, 800);
	});
	$('.commodity1 .img').hover(function() {
		$(this).find('img').stop().animate({
			left: -6,
			top: -6,
			width: 307,
			height: 307
		}, 800);
	}, function() {
		$(this).find('img').stop().animate({
			left: 0,
			top: 0,
			width: 287,
			height: 287
		}, 800);
	});
	//	购物车登陆
	$('.cart').click(function() {
		$('.login-container').css('display', 'block');
		$('.login-panel').css('display', 'block');
	});
	$('.close-login').click(function() {
		$('.login-container').css('display', 'none');
		$('.login-panel').css('display', 'none');
	});
	//	登陆按钮单击事件
	$('.login-btn').click(function() {
		var userName = $('.user-info').val();
		var userPsw = $('.user-psw').val();
		if (123 != parseInt(userPsw)) {
			$('.login-container').css('display', 'none');
			$('.login-panel').css('display', 'none');
			alert('密码错误！');
			return;
		}
		$('.p-user-name').text(userName);
		$('.reg').css('display', 'none');
		$('.login').css('display', 'none');
		$('.p-user-name').css('display', 'block');
		$('.nav-right .up').css('display', 'block');
		$('.p-login-reg').css('display', 'none');
		$('.user-logo').css('display', 'block');
		
		$('.login-container').css('display', 'none');
		$('.login-panel').css('display', 'none');
		
		

	});
	//	顶部登录菜单项单击事件
	$('.login').click(function() {
//		var userPsw = $('.user-psw').val();
//		if (123 != parseInt(userPsw)) {
//			$('.login-container').css('display', 'none');
//			$('.login-panel').css('display', 'none');
//			alert('密码错误！');
//			return;
//		}
		$('.login-container').css('display', 'block');
		$('.login-panel').css('display', 'block');
	});
	//	退出登陆
	$('.exit').on('click', function() {
		$('.reg').css('display', 'inline-block');
		$('.login').css('display', 'inline-block');
		
		$('.p-user-name').css('display', 'none');
		$('.nav-right i').css('display', 'none');
		$('.p-user-info').css('display', 'none');
		
		$('.user-logo').css('display', 'none');
		$('.p-login-reg').css('display', 'block');
		
	});
});