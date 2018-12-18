$(function(){
	$('#reg_btn').click(function(){
		if($('#user').val()==''){
			$('#user_tip').css('display','inline-block');
			$('#user_tip').html('<b></b>'+'请输入账号');
			$('#user').css('border','1px solid #d4282d');
		}
		else{
			if($('#pwd').val()==''){
				$('#pwd_tip').css('display','inline-block');
				$('#pwd_tip').html('<b></b>'+'请输入密码');
				$('#pwd').css('border','1px solid #d4282d');
			}
			else{
				if($('#sure_pwd').val()==''){
					$('#sure_tip').css('display','inline-block');
					$('#sure_tip').html('<b></b>'+'请确认密码');
					$('#sure').css('border','1px solid #d4282d');
				}
				else{
					if($('#tel').val()==''){
						$('#tel_tip').css('display','inline-block');
						$('#tel_tip').html('<b></b>'+'请输入手机号');
						$('#tel').css('border','1px solid #d4282d');
					}
					$('#tel').focus(function(){
						$('#tel_tip').css('display','none');
						$('#tel').css('border','1px solid #e8e8e8')
					})
				}
				$('#sure_pwd').focus(function(){
					$('#sure_tip').css('display','none');
					$('#sure_pwd').css('border','1px solid #e8e8e8')
				})
			}
			$('#pwd').focus(function(){
				$('#pwd_tip').css('display','none');
				$('#pwd').css('border','1px solid #e8e8e8')
			})
		}
		$('#user').focus(function(){
			$('#user_tip').css('display','none');
			$('#user').css('border','1px solid #e8e8e8')
		})
	})
	$('#user').change(function(){
		if($('#user').val()==''){
			$('.close_user').css('display','none');
		}
		else{
			$('.close_user').css('display','block');
		}
	})
	$('#sure_pwd').change(function(){
		if($('#sure_pwd').val()==''){
			$('.close_sure').css('display','none');
		}
		else{
			$('.close_sure').css('display','block');
		}
	})
	$('#tel').change(function(){
		if($('#tel').val()==''){
			$('.close_tel').css('display','none');
		}
		else{
			$('.close_tel').css('display','block');
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
	$('.close_user').click(function(){
		$('#user').val('');
		$('.close_user').css('display','none');
	})
	$('.close_pwd').click(function(){
		$('#pwd').val('');
		$('.close_pwd').css('display','none');
	})
	$('.close_sure').click(function(){
		$('#sure_pwd').val('');
		$('.close_sure').css('display','none');
	})
	$('.close_tel').click(function(){
		$('#tel').val('');
		$('.close_tel').css('display','none');
	})
})

$(function(){
	$('.yzm_txt').hover(function(){
		$('.yzm img#click_yz').css('display','block');
	},function(){
		$('.yzm img#click_yz').css('display','none');
//		$('.yzm img.click').css('display','none');
		$('.yzm img.click').attr('style','none');
	})
})

$(function(){
	$('.get_message').click(function(){
		var i=60;
		var timer=setInterval(function(){
			if(i!=0){
				i--;
				$('.get_message').html('剩余'+i+'秒');
			}
			else{
				$('.get_message').html('重新发送');
			}
		},1000);
		
	})
})
