$(function(){
	var oFalse = false;
	
//	console.log($landingLeft);
	$(window).resize(function(){
		var $landingLeft=($(window).width()-$("#landing").outerWidth())/2;
		var $landingHeight=$(window).height();
		$(".bg").css("height",$(document).height());
		$("#landing").css("left",$landingLeft);
		$("#landing").css("height",$landingHeight);
	});
	$(window).scroll(function(){	
		var $landingTop=($(window).height()-$("#landing").outerHeight())/2+$(window).scrollTop();
		$("#landing").css("top",$landingTop);
	})
	$("#btn-login").bind("click",function(){
		if($("#email").val()!="" && $("#password").val()!=""){
			var strJson = {
				email:$("#email").val(),
				password:$("#password").val(),
				remember:false,
				type:"user"
			};
			$.ajax({
				url:"https://sspai.com/api/v1/session",
				type:"post",
				contentType:"application/json; charset=utf-8",
				data:JSON.stringify(strJson),
				success:function(data){
//					console.log(data.user);
					$(".bg").css("display","none");
					$(".login").css("display","none");
					$(".userinfo").css("display","inline-block");
					if(data.user.avatar){
						$(".userinfo a img").attr("src","https://cdn.sspai.com/"+data.user.avatar);
					}else{
						$(".userinfo a img").attr("src","img/header/large.jpg");
					}
					window.localStorage.user = JSON.stringify(data.user);
				},
				error:function(data){
					alert(data.responseText.message);
					console.log(data);
				}
			});

		}else{
			alert("账号或密码不能为空！");
		}
	});
	
	
});
