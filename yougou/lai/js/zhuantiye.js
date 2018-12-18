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
//         		 $('#nav>li>a').eq(10).css('border-bottom','3px solid #b4a078')
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
	    		
//	    留言评论区
		var n = 0; 
      $('#a_anniu').click(function(){
      		n++;
  	       var $li = $("li.ping_li:eq(0)").clone();

  	       $li.find('#pinglunqu').html($('#texta').val());
      	    if(n<10){

	      	    if($('#pinglun').html()==''){
	      	    	$('#pinglun').append($li);      	    	
	      	    }
	      	    else{
	      	    	$('#pinglun').prepend($li);
	      	    }
      	    }
      	    else{
      	    	return false;
      	    }           
      });
      
      $('#jiazai').click(function(){
      	   $('.liu').animate({height:830},400,'linear');
      	   $('#jiazai').css('display','none');
      	   $('#shouqi').css('display','block');
      });
       $('#shouqi').click(function(){
      	   $('.liu').animate({height:437},700,'linear');
      	   $('#shouqi').css('display','none');
      	   $('#jiazai').css('display','block');
      });
    
//	   最部分图片效果
  $('ul.thumb li').Zoomer({speedView:400,speedRemove:400,altAnim:true,speedTitle:600,debug:false});
	   
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
