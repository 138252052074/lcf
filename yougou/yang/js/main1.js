$(function(){
		$('.tip-nav-bar div').eq(2).css('display','block');
		$('.tip-nav-bar .has-moresub-info').eq(2).css('border-bottom','1px solid #e8e8e8');
//		 alert($('.box').get().length);
		$('.tip-nav-bar li').on('click',function(){
			$('.tip-nav-bar div').css('display','none');
			$(this).next().css('display','block');
			$('.tip-nav-bar li').css('border-bottom','');
			$(this).css('border-bottom','1px solid #e8e8e8');
			$('.tip-nav-bar li').css('background','');
			$(this).css('background','#f5f5f5');
			$('.tip-nav-bar li').css('color','');
			$(this).css('color','#b4a078');
			$('.tip-nav-bar i').attr('class','arrow-down');
			
		});
		$('.tip-nav-bar .has-moresub-info').click(function(){
			$('.tip-nav-bar i').attr('class','arrow-down');
			$(this).find('i').attr('class','arrow-up');
		});
		for(var i=0;i<$('.showdialog').get().length;i++){
			$('.showdialog').get(i).index=i;
			$('.showdialog').get(i).onclick=function(){
				$('.box').css('display','none');
				$('.box').eq(this.index).css('display','block');
			}
		}
//		$('.tip-nav-bar p').click(function(){
//			alert($(this).index());
//		});
	   
});
