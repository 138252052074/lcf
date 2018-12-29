//头部
$(function(){
	$(".logo").bind("click touchend",function(){
		window.location.href = "index.html";
	});
	$(document).bind('scroll',function(){
//		console.log($(document).scrollTop());
		if($(document).scrollTop()>10){
			$("#header nav").addClass("hide");
		}else{
			$("#header nav").removeClass("hide");
		}
		
		if($(document).scrollTop()>120){
			$("#header").addClass("second");
			$("#header .fixed header .inner h1").css("color","#d7191a");
		}else{
			$("#header").removeClass("second");
			$("#header .fixed header .inner h1").css("color","#ffffff");
		}
				
	});
	
	$("#header header .search_form").bind("click",function(){
		$(this).addClass("expand");
		$(this).find("input").focus();
	});
	$("#header header .search_form input").bind("blur",function(){
		$("#header header .search_form").removeClass("expand");
	});
	//个人信息
	$("#header .user,.info.el-popover").bind("click",function(e){
		$(".info.el-popover").show();
		var iLeft = $(document).width()/2 + $("#header .inner").width()/2-112;
		$(".info.el-popover").css("left",iLeft);
		stopPropagation(e);
	});
	
	$(document).bind("click",function(){
		$(".info.el-popover").hide();
	});
	
	//手机端点击菜单显示或隐藏
	$("#header .menu").bind("click",function(){
		$("#header nav").toggleClass("expand");
	});
	
});

//阻止事件冒泡
function stopPropagation(e) { 
	if (e.stopPropagation) 
	e.stopPropagation(); 
	else 
	e.cancelBubble = true; 
} 

//页面设置信息数据
$(function() {
	$.getJSON("https://sspai.com/api/v1/settings", function(data) {
		var $meta_1 = $('<meta name="Keywords" content=""/>');
		var $meta_2 = $('<meta name="Description" content=""/>');
		$meta_1.appendTo($("head")).attr({ "content": data.keyword });
		$meta_2.appendTo($("head")).attr({ "content": data.description });
	});
});
// 标签
$(function(){
	$(document).on("click","#header nav ul li a",function(){
		window.localStorage.tag=$(this).html();
	});
});

//获取用户id
$(function(){
	var user=window.localStorage.getItem('user');
	
	if(user){
		var userJson = JSON.parse(user);
		console.log(userJson);
		$(".userinfo").css("display","inline-block");
		$(".login").css("display","none");
		if(userJson.avatar){
			$(".userinfo a img").attr("src","https://cdn.sspai.com/"+userJson.avatar);
		}else{
			$(".userinfo a img").attr("src","img/header/large.jpg");
		}
	}else{
			$(".userinfo").css("display","none");
			$(".login").css("display","inline-block");
	}
	$(".loginout").bind("click",function(){
		window.localStorage.user = "";
		window.location.reload();
	});
});

$(function(){
	$(".login").bind("touchend click",function(){
		$(".bg").css("display","block");
		var $landingLeft=($(window).width()-$("#landing").outerWidth())/2;
		var $landingHeight=$(window).height();
		$(".bg").css("height",$(document).height());
		$("#landing").css("left",$landingLeft);
		$("#landing").css("height",$landingHeight);
		console.log($("#landing").outerWidth());
	})
});



// 搜索
$(function(){
	$("#search_inp").bind("keydown",function(event){
		var e = event ? event :(window.event ? window.event : null); 
		if(e.keyCode==32){
			window.location.href = "search.html";
			window.localStorage.keyword = $(this).val();
		}
	})
});

//时间计算
function setTime(timeNum){
	var time = new Date(timeNum*1000);
	var nowTime = new Date();
	var sTime = "";
	if(nowTime.getFullYear() == time.getFullYear()){
			if(nowTime.getMonth() == time.getMonth()){
				if(nowTime.getDate()-time.getDate() <= 4){
					if(nowTime.getDate()-time.getDate() <= 1 ){
						if(nowTime.getDate()-time.getDate() < 1){
							if(nowTime.getHours()-time.getHours()<=1 && nowTime.getMinutes()>time.getMinutes()){
								if(nowTime.getMinutes()-time.getMinutes()<=1 && nowTime.getSeconds()>time.getSeconds()){
									sTime = nowTime.getSeconds()-time.getSeconds()   + "秒前";
								}else{
									sTime = nowTime.getMinutes()-time.getMinutes()   + "分钟前";
								}
								
							}else{
								sTime = nowTime.getHours()-time.getHours() + "小时前";
							}
							
						}else if(nowTime.getDate()-time.getDate() == 1 && nowTime.getHours() > time.getHours()){
							sTime ="1天前";
						}else if(nowTime.getDate()-time.getDate() == 1 && nowTime.getHours() < time.getHours()){
							sTime = 24 - time.getHours() + nowTime.getHours() + "小时前";
						}
					}else{
						sTime = nowTime.getDate()-time.getDate() + "天前";
					}
					
				}else{
					sTime = (time.getMonth()+1) + "月" + time.getDate() + "日";
				}
			}else{
				sTime = (time.getMonth()+1) + "月" + time.getDate() + "日";
			}
			
		}else{
			sTime =time.getFullYear() + "年" + (time.getMonth()+1) + "月" + time.getDate() + "日";
		}
		return sTime;
}