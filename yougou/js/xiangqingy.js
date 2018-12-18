//jq入口
$(function() {
	//	轮播
	var mySwiper = new Swiper('.swiper-container', {
			pagination: '.pagination',
			loop: true,
			grabCursor: true,
			paginationClickable: true
		})
		// 尺码模态框
	$('#exampleModal').on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget)
		var recipient = button.data('whatever')
		var modal = $(this)
		modal.find('.modal-title').text('New message to ' + recipient)
		modal.find('.modal-body input').val(recipient)
	});  	
// 此人还喜欢这些商品
$.ajax({
	type:"GET",
	url:"js/pingjia.json",
	async:true,
	dataType:'json',
	success:function(data){
		var arr2=eval(data);
		var arr3=arr2.conten;				
        var arr4=arr3[0].comments;
         for(var w=0;w<arr4.length;w++){       
            $li=$('<li><a><img src="'+arr4[w].images+'"/><span>'+arr4[w].describe+'</span><b>'+arr4[w].price+'</b></a></li>');
		    $li.appendTo($('#shang1_ul'))      
		}
//  推荐内容
        var arr5=arr3[0].commentss;
        for(var t=0;t<arr5.length;t++){
      	    $li1=$('<li><a><img src="'+arr5[t].images+'"/><span>'+arr5[t].describe+'</span><b>'+arr5[t].price+'</b></a></li>');
            $li1.appendTo($('#shang_div1'))  
        };
         var arr6=arr3[0].contextt;
        for(var y=0;y<arr6.length;y++){
            $('#ping').html(arr6.length);
            $('#b_b').html(arr6.length);
      	    $li2=$('<li><dl><dt>'+arr6[y].name+'</dt><dt><img src="'+arr6[y].images+'"/></dt><dt>'+arr6[y].times+'</dt></dl><p>'+arr6[y].context+'</p><p>颜色：<span>'+arr6[y].color+'</span>&nbsp&nbsp尺码：<span>38</span>(合适) </p></li>');
            $li2.appendTo($('#evaluateCon'))  
        };
	},
	error:function(data){
		alert('获取数据失败');
                $('#h4').hide();
	}
	
	
});
});
//js入口
window.onload = function() {
	//	倒计时
	var iSec = $('.sec').text();
	var iMin = $('.min').text();
	var iHour = $('.hour').text();
	time(iSec, iMin, iHour);

	function time(sec, min, hour) {
		var a = setInterval(function() {
			if(sec == 00) {
				sec = 59;
				$('.sec').text(sec);
				if(min == 00) {
					min = 59;
					$('.min').text(min);
					if(hour == 00) {
						clearTimeout(a);
						$('.sec').text('00');
						$('.min').text('00');
					} else {
						hour--;
						$('.hour').text(zeto(hour));
					}
				} else {
					min--;
					$('.min').text(zeto(min));
				}

			} else {
				sec--;
				$('.sec').text(zeto(sec));
			};
		}, 1000)

		function zeto(num) {
			if(num < 10) {
				return '0' + num;
			} else {
				return num;
			}
		}
	}
	// 选择码数
	var osize_dd = document.getElementById('size_dd');
	var oImg = osize_dd.getElementsByTagName('img');
	var oYan = document.getElementById('yan');
	var oPri = document.getElementById('pri');
	var oYanse = document.getElementById('yanse');
	var oMashu = document.getElementById('mashu');
	var oimg1 = document.getElementById('img1');
	var oChi = document.getElementById('chi');
	var oshu_ul = document.getElementById('mashu_ul');
	var oshu_li=oshu_ul.getElementsByTagName('li');	
	var arr = ['棕色', '白色', '蓝色','黑色','黄白色'];
	var oprice = ['198', '149', '166','158','111'];
	var arr1 = [35, 36, 37,38,39,40,41];
// 购物车信息
var ovart=document.getElementById('cart');
var oCol = document.getElementById('col');
var oH1 = document.getElementById('h1');
var oCcart_info = document.getElementById('cart_info');

/*
 20170502
 */

console.log(window.localStorage.getItem('u_title'));


ovart.addEventListener('touchstart', function() {	  
      if(oYanse.innerHTML!='颜色' && oMashu.innerHTML!='尺码'){
    	//  本地储存数据
    	window.localStorage.setItem('color',oYanse.innerHTML);
    	window.localStorage.setItem('size',oMashu.innerHTML);
    	window.localStorage.setItem('tupian',oimg1.src);
    	window.localStorage.setItem('Price',oPri.innerHTML);
    	window.localStorage.setItem('Title',oH1.innerHTML);
      	//  添加尺码和颜色提示
      	oCcart_info.style.WebkitTransform = "scale(1.2)";
      	oCcart_info.innerHTML='添加成功';
      	setTimeout(function() {
			oCcart_info.style.WebkitTransform = "scale(0)";
		  }, 1300);
      	setTimeout(function() {
			 window.location.href='gouwuche.html';
		}, 1300);		
      }
      else{
      	  oCcart_info.style.WebkitTransform = "scale(1.2)";
      	  setTimeout(function() {
			oCcart_info.style.WebkitTransform = "scale(0)";
		  }, 1300);
      }
     
});
	for(var i = 0; i < oImg.length; i++) {
		oImg[i].index = i;
		oImg[i].addEventListener('touchstart', function() {
			oimg1.src = 'img/xiangqingy/100475418_0' + (this.index + 1) + '_m.jpg';
			for(var j = 0; j < arr.length; j++) {
				oYanse.innerHTML=oYan.innerHTML=arr[this.index];				
			}
			for(var k = 0; k < oprice.length; k++) {
				oPri.innerHTML = oprice[this.index]
			}
		});
	}		
	     for(var l=0;l<oshu_li.length;l++){
	     	oshu_li[l].index = l;
	     	oshu_li[l].addEventListener('touchstart',function(){
	     		  for(var l= 0; l < arr1.length; l++) {
				       oMashu.innerHTML=oChi.innerHTML = arr1[this.index]
				       for(var l=0;l<oshu_li.length;l++){
				       	   oshu_li[l].style.border='';
				       }
				       this.style.border='1px solid red';
			      }
	     	})
	     }
	     
//  评论内容选项卡
//var onav_ul = document.getElementById('nav_ul'); 
//var oLi = onav_ul.getElementsByTagName('li');
//var onav_div = document.getElementById('nav_div'); 
//var oDiv = onav_div.getElementsByTagName('div');
//   for(var r=0;r<oLi.length;r++){
//   	oLi[r].index=r;
//   	oLi[r].addEventListener('touchstart',function(){
// 		     for(var r=0;r<oLi.length;r++){
//		     	oLi[r].className='';
//		     	oDiv[r].style.display='none';
// 		     }
// 		      this.className='active';
// 		      oDiv[this.index].style.display='block';
//   	})
//   }
var oli1 = document.getElementById('li1');
var oli2 = document.getElementById('li2');
var oli3 = document.getElementById('li3');
var odiv1 = document.getElementById('div1');
var odiv2 = document.getElementById('div2');
var odiv3 = document.getElementById('div3');
     odiv1.style.display='none';
     odiv3.style.display='none';
    oli1.addEventListener('touchstart',function(){
    	   odiv2.style.display='none';
    	   odiv3.style.display='none';
    	   odiv1.style.display='block';
    	   oli1.style.borderBottom='2px solid red';
    	   oli2.style.borderBottom='';
    	   oli3.style.borderBottom='';
    	   
    })
     oli2.addEventListener('touchstart',function(){
    	   odiv1.style.display='none';
    	   odiv2.style.display='block';
    	   odiv3.style.display='none';
    	   oli3.style.borderBottom='';
    	   oli1.style.borderBottom='';
    	   oli2.style.borderBottom='2px solid red';
    })
    oli3.addEventListener('touchstart',function(){
    	   odiv1.style.display='none';
    	   odiv2.style.display='none';
    	   odiv3.style.display='block';
    	   oli1.style.borderBottom='';
    	   oli2.style.borderBottom='';
    	   oli3.style.borderBottom='2px solid red';
    });
 //  点击进入购物车   
var ogouwuche=document.getElementById('gouwuche');    
 ogouwuche.addEventListener('touchstart',function(){
 	   window.location.href='kong.html';	   
 });	
	
}



