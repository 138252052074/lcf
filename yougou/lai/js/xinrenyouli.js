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
	    		})
	    
	  
	  	//Custom settings
	var style_in = 'easeOutBounce';
	var style_out = 'jswing';
	var speed_in = 1000;
	var speed_out = 300;	

	//Calculation for corners
	var neg = Math.round($('.qitem').width() / 2) * (-1);	
	var pos = neg * (-1);	
	var out = pos * 2;
	
	$('.qitem').each(function () {
	
		url = $(this).find('a').attr('href');
		img = $(this).find('img').attr('src');
		alt = $(this).find('img').attr('img');
		
		$('img', this).remove();
		$(this).append('<div class="topLeft"></div><div class="topRight"></div><div class="bottomLeft"></div><div class="bottomRight"></div>');
		$(this).children('div').css('background-image','url('+ img + ')');
		$(this).find('div.topLeft').css({top:0, left:0, width:pos , height:pos});	
		$(this).find('div.topRight').css({top:0, left:pos, width:pos , height:pos});	
		$(this).find('div.bottomLeft').css({bottom:0, left:0, width:pos , height:pos});	
		$(this).find('div.bottomRight').css({bottom:0, left:pos, width:pos , height:pos});	

	}).hover(function () {
	
		$(this).find('div.topLeft').stop(false, true).animate({top:neg, left:neg}, {duration:speed_out, easing:style_out});	
		$(this).find('div.topRight').stop(false, true).animate({top:neg, left:out}, {duration:speed_out, easing:style_out});	
		$(this).find('div.bottomLeft').stop(false, true).animate({bottom:neg, left:neg}, {duration:speed_out, easing:style_out});	
		$(this).find('div.bottomRight').stop(false, true).animate({bottom:neg, left:out}, {duration:speed_out, easing:style_out});	
				
	},
	
	function () {
		$(this).find('div.topLeft').stop(false, true).animate({top:0, left:0}, {duration:speed_in, easing:style_in});	
		$(this).find('div.topRight').stop(false, true).animate({top:0, left:pos}, {duration:speed_in, easing:style_in});	
		$(this).find('div.bottomLeft').stop(false, true).animate({bottom:0, left:0}, {duration:speed_in, easing:style_in});	
		$(this).find('div.bottomRight').stop(false, true).animate({bottom:0, left:pos}, {duration:speed_in, easing:style_in});	
	
	}).click (function () {
		window.location = $(this).find('a').attr('href');	
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
