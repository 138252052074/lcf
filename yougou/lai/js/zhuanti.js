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
					$('.h_a').eq($(this).index()).css('color','white');
					$('#xiazai>#xiazai_div').show();										
				})
				$('#xiazai').mouseout(function(){
					$('.h_a').eq($(this).index()).css('color','');
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

           });
           
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
	    				$('#navvv').slideUp(100);
	    			}
	    		});
	    		
//	    		瀑布流布局
          new AnimOnScroll(document.getElementById( 'grid' ),{
				minDuration : 0.4,
				maxDuration : 0.7,
				viewportFactor : 0.2
			} );
	    		
             //	  主要内容选项卡   
           $('.con_ul>li').click(function(){          	       
           	       $('.con_ul_ul').css('display','none');
           	       $('.con_ul_ul').eq($(this).index()).css('display','block');
           	        $('.con_ul>li>a').css('color','');//  
					$('.con_ul>li>a').eq($(this).index()).css('color','#b4a078');
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
