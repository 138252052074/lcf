//搜索框获取焦点模糊搜索
$(function() {
	$('input#search_input').focus(function() {
		$('ul.sey-list').addClass('sey-show');
	})
	$('input#search_input').blur(function() {
		$('ul.sey-list').remove('sey-show');
	})
})
//回到顶部
$(function(){
	$('#hdb').click(function(){
		$('html,body').animate({scrollTop:0},'slow');
	})
})
//登录验证
$(function(){
	$('.sure_btn').click(function(){
		if($('#email').val()==''){
			$('#please').css('display','block');
			$('#please>b').html('请输入账号');
			$('#email').css('border','1px solid #d4282d');
		}
		else{
			if($('#pwd').val()==''){
				$('#please').css('display','block');
				$('#please>b').html('请输入密码');
				$('#pwd').css('border','1px solid #d4282d');
			}
			$('#pwd').focus(function(){
				$('#please').css('display','none');
				$('#pwd').css('border','1px solid #e8e8e8')
			})
		}
		$('#email').focus(function(){
			$('#please').css('display','none');
			$('#email').css('border','1px solid #e8e8e8')
		})
	})
	$('#email').change(function(){
		if($('#email').val()==''){
			$('.close_email').css('display','none');
		}
		else{
			$('.close_email').css('display','block');
		}
	})
	$('#pwd').change(function(){
		if($('#pwd').val()==''){
			$('.close_pwd').css('display','none');
		}
		else{
			$('.close_pwd').css('display','block');
		}
	})
	$('.close_email').click(function(){
		$('#email').val('');
		$('.close_email').css('display','none');
	})
	$('.close_pwd').click(function(){
		$('#pwd').val('');
		$('.close_pwd').css('display','none');
	})
})