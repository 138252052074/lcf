$(function(){
	 //	最顶部部分
				$('#kehu').mouseover(function(){
					$('#kehu>#kehu_div').show();
						$('.h_a').eq($(this).index()).css('color','white');
					$('#kehu>.h_a>span').attr('class','sp_down');
				})
				$('#kehu').mouseout(function(){
					$('#kehu>#kehu_div').hide();
					$('.h_a').eq($(this).index()).css('color','');
					$('#kehu>.h_a>span').attr('class','sp_up');
				});
				
				$('#xiazai').mouseover(function(){
					$('#xiazai>#xiazai_div').show();										
				})
				$('#xiazai').mouseout(function(){
					$('#xiazai>#xiazai_div').hide();					
				});
				
				//菜单导航条
         $('#nav>li').mouseover(function(){
          $('#nav>li>a').eq($(this).index()).css('color','#b4a078');
        $('#nav>li>a').eq($(this).index()).css('border-bottom','4px solid #b4a078');
          $("#nav>li>div").eq($(this).index()).css('display','block');
    	               	   
           })

           $('#nav>li').mouseout(function(){
           		 $('#nav>li>a').eq($(this).index()).css('color','')
           		 $('#nav>li>a').eq($(this).index()).css('border-bottom','');
         	   $("#nav>li>div").css('display','none');

           })
        
//         顶部滚动显示隐藏导航条
            $('#d_ul>li').mouseover(function(){
           	   $('#d_ul>li>a').eq($(this).index()).css('color','#b4a078');
                            
           	   $("#d_ul>li>div").eq($(this).index()).css('display','block');
//       	   $('#nav>li>a').attr('class','active1') 
           	   
           })
       $('#d_ul>li').mouseout(function(){
       	$('#d_ul>li>a').eq($(this).index()).css('color','');
          
    	   $("#d_ul>li>div").css('display','none');
//       	    $('#nav>li>a').css('border-bottom','') 
        })
         
        $(window).scroll(function(){	    			
	    			if($(window).scrollTop()>=220){
	    				$('#navvv').slideDown(400);	    				    				
	    			} 
	    			else{
	    				$('#navvv').slideUp(100)
	    			}
	    		});
	    	
//	 滚动固定   	
//获取要定位元素距离浏览器顶部的距离
var navH = $(".con_l").offset().top;
//滚动条事件
$(window).scroll(function(){
//获取滚动条的滑动距离
var scroH = $(this).scrollTop();
//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
if(scroH>=navH){
$(".con_l").css({"position":"fixed","top":80});
   if(scroH<=3500){
     $(".con_l").show();     
}
  else if(scroH>=3550){
    	$(".con_l").hide();
    }  
}
else if(scroH<navH){
$(".con_l").css({"position":"absolute"});
}
});
	
	//	  侧边回到顶部
  $(window).scroll(function(){
            	 var sTop = $(window).scrollTop();      	
            	if(sTop>500){
            		$('.c_a44').slideDown(400);    
            		
            	}else if(sTop<500){
            		$('.c_a44').slideUp(100);  
            	}           	
            })
            $(".c_a44").click(function(){
            	 	 $('html , body').animate({scrollTop: 0},'1500','linear');  
            	 });	
});
