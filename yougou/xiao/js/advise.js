$(function() {
	//初始化加爱心
	$('#collect-list').find('li').each(function() {
		$(this).find('input').attr('checked', false);
	});
	//初始化建议选择
	$('#hotadvise').attr('checked', 'checked');
	//加1
	$('#collect-list').find('label').click(function() {
		if($(this).siblings('input').attr('checked') !== 'checked') {
			$(this).nextAll('.likecount').find('.add').css('visibility', 'visible');
			$(this).nextAll('.likecount').find('.add').animate({
				top: -5
			}, function() {
				$(this).css('visibility', 'hidden')
			});
			$(this).nextAll('.likecount').find('span').text(parseInt($(this).nextAll('.likecount').find('span').text()) + 1);
		}
	});
	//热门建议 最新建议 选项卡
	$('#hotadvise').click(function() {
		$('#collect-list').find('li').css('display', 'block');
		$('#collect-list').find('.newestli').css('display', 'none');
		$('#collect-list').css('height', '');
		$('#collect-slide').css('display', 'block');
	});
	$('#newestadvise').click(function() {
		$('#collect-list').find('li').css('display', 'none');
		$('#collect-list').find('.newestli').css('display', 'block');
		$('#collect-list').css('height', 1045);
		$('#collect-slide').css('display', 'none');
	});
	//打开登录界面//输入少于10个字
	$('#banner-sub').click(function() {
		if($('#banner-submit').val().length > 10) {
			$('#singin').css('display', 'block');
		} else {
			$('#notify').css('display', 'block');
			$('#notify').animate({
				opacity: 1
			});
			setTimeout(function() {
				$('#notify').animate({
					opacity: 0
				}, function() {
					$('#notify').css('display', 'none');
				});
			}, 2000);
		}
	});
});