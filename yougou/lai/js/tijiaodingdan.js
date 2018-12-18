$(function() {
	//	最顶部部分
	$('#kehu').mouseover(function() {
		$('#kehu>#kehu_div').show();
		$('.h_a').eq($(this).index()).css('color', 'white');
		$('#kehu>.h_a>span').attr('class', 'sp_down');
	})
	$('#kehu').mouseout(function() {
		$('#kehu>#kehu_div').hide();
		$('.h_a').eq($(this).index()).css('color', '');
		$('#kehu>.h_a>span').attr('class', 'sp_up');
	});

	$('#xiazai').mouseover(function() {
		$('.h_a').eq($(this).index()).css('color', 'white');
		$('#xiazai>#xiazai_div').show();
	})
	$('#xiazai').mouseout(function() {
		$('.h_a').eq($(this).index()).css('color', '');
		$('#xiazai>#xiazai_div').hide();
	});

	//菜单导航条
	$('#nav>.nav_li').mouseover(function() {
		$('#nav>li>a').eq($(this).index()).css('color', '#b4a078');
		$('#nav>li>a').eq($(this).index()).css('border-bottom', '4px solid #b4a078');
		$("#nav>li>div").eq($(this).index()).css('display', 'block');

	})

	$('#nav>.nav_li').mouseout(function() {
		$('#nav>li>a').eq($(this).index()).css('color', '')
		$('#nav>li>a').eq($(this).index()).css('border-bottom', '');
		$("#nav>li>div").css('display', 'none');

	});

	//         顶部滚动显示隐藏导航条
	$('#d_ul>li').mouseover(function() {
		$('#d_ul>li>a').eq($(this).index()).css('color', '#b4a078');

		$("#d_ul>li>div").eq($(this).index()).css('display', 'block');
		//       	   $('#nav>li>a').attr('class','active1') 

	})
	$('#d_ul>li').mouseout(function() {
		$('#d_ul>li>a').eq($(this).index()).css('color', '');

		$("#d_ul>li>div").css('display', 'none');
		//       	    $('#nav>li>a').css('border-bottom','') 
	})

	$(window).scroll(function() {
		if($(window).scrollTop() >= 220) {
			$('#navvv').slideDown(400);
		} else {
			$('#navvv').slideUp(100)
		}
	});

	//	   收货信息表单验证 		
	$('#form1').validate({
		rules: {
			username1: {
				required: true,
				maxlength:5,
			},
			mobile: {
				required: true,
			    rangelength:[11,11],
			    digits: true,
			},
			s_province:{
				required: true,
			},
			s_city:{
				required:true,
			},
			s_county:{
				required:true,
			},
			comment1:{
				required: true,
			},
			checkbox1:{
				required: true,
			}
			
		},
		messages: {
			username1: {
				required: '收货人不能为空!',
				maxlength:'不能超过五个字符！'
			},
			mobile:{
				required: '手机号码不能为空!',
				rangelength:"请输入正确的手机号！",
			},
			s_province:{
				required:'省不能为空！',
			},
			s_city:{
				required:'市不能为空！',
			},
			s_county:{
				required:'区不能为空！',
			},
			comment1:{
				required:'详细地址不能为空！',	
               minlength:'至少要2个以上字符！'
			},
			checkbox1:{
				required:'必须要打勾！',
			}
		},

	});
     
//     弹出窗口部分
        var oleixing_ul=document.getElementById('leixing_ul')
        var ali=oleixing_ul.getElementsByTagName('li');
        var ofapiaoneirong=document.getElementById('fapiaoneirong')
        var ospan=ofapiaoneirong.getElementsByTagName('span');
       var oid_a=document.getElementById('id_a')
       var oclose=document.getElementById('close');

        for(var i=0;i<ali.length;i++){
        	ali[i].index=i;
        	ali[i].onclick=function(){
        		for(var i=0;i<ali.length;i++){       		
        		ali[i].className='';
        		};
        		this.className = 'active';       		
        	} ;       	
        };
        for(var i=0;i<ospan.length;i++){
        	ospan[i].index=i;
        	ospan[i].onclick=function(){
        		for(var i=0;i<ospan.length;i++){       		
        		ospan[i].className='';
        		};
        		this.className = 'active';       		
        	};        	
        };
         oid_a.onfocus=function(){
         	this.style.background='red';
         
         };
         oclose.onclick=function(){
         	oid_a.style.background='';
         
         }
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