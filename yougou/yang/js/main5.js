$(function(){
	
//	左边选项卡
	$('.small-img li').mouseenter(function(){
		$('.small-img li').attr('class','');
		$(this).attr('class','active');
		$('.large-img .img').css('display','none');
		$('.large-img .img').eq($(this).index()).css('display','block');
	});
//	右上边按钮风格设置
	$('.standard .st-r').click(function(){
		$('.standard .st-r').attr('class','st-r');
		
		if($(this).find('i').css('display')=='block'){
			$(this).find('i').css('display','none');
			$(this).attr('class','st-r');
			$('.p-num').attr('disabled',true);
			$('.r-add').css('cursor','no-drop');
			$('.l-minus').css('cursor','no-drop');
			$('.p-num').val(1);
		}
		else{
			$('.standard .st-r i').css('display','none');
			$(this).find('i').css('display','block');
			$(this).attr('class','st-r border2px');
			$('.p-num').attr('disabled',false);
			$('.l-minus').css('cursor','no-drop');
			$('.r-add').css('cursor','pointer');
			$('.p-num').val(1);
		}
		
		if($(this).index()==1){
			$('.p-price .price').html('¥459.00');
		}
		else{
			$('.p-price .price').html('¥499.00');
		}
	});
//	初始工作
	$('.p-num').val(1);
	$('.p-num').attr('disabled',true);
//	增加按钮点击事件
	$('.r-add').click(function(){
		if($(this).css('cursor')=='no-drop'){
			return;
		}
		var temp=parseInt($('.p-num').val());
		temp++;
		$('.p-num').val(temp);
		$('.l-minus').css('cursor','pointer');
	});
	//	减少按钮点击事件
	var tipShowTimer=null;
	$('.l-minus').click(function(){
		if($('.p-num').attr('disabled'))
		return;
		var temp1=parseInt($('.p-num').val());
		temp1--;
		if(temp1==0){
			$('.num-tip').css('display','block');
			clearTimeout(tipShowTimer);
			tipShowTimer=setTimeout(function(){
			$('.num-tip').css('display','none');
			},3000);
		}
		else{
			if(temp1==1){
				$('.l-minus').css('cursor','no-drop');
			}
			$('.p-num').val(temp1);
		}
		
	});
	$('.item-list .li').click(function(){
		$('.item-list .li').attr('class','li fl');
		$(this).attr('class','li fl active1');
		$('.sel-card').css('display','none');
		$('.sel-card').eq($(this).index()).css('display','block');
	});
});
