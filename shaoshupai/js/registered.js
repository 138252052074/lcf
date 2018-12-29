$(function(){	
	var oEmail = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/); //邮箱验证
	//验证用户名或昵称经常用到: ^[\u4e00-\u9fa5A-Za-z0-9-_]*$  只能中英文，数字，下划线，减号
	var oName = new RegExp(/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/);
	//验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 
	var oPassword = new RegExp(/^[a-zA-Z]\w{5,17}$/);
	var oTrue = true;
	$("#email").bind("blur",function(){ //email输入测试
		if($("#email").val()==""){
			$("#email-wrong").html("请输入Email地址!");
			$("#email").css("border-color","#d7191a");
		}
		else if(!oEmail.test($("#email").val())){
			$("#email-wrong").html("请输入正确Email格式!");
			$("#email").css("border-color","#d7191a");
		}
		else{
			$(".inp1").attr("title","1");
			$("#email-wrong").html("");
			$("#email").css("border-color","");
		}
	});
	$("#name").bind("blur",function(){ //新密码输入测试
		if($("#name").val()==""){
			$("#name-wrong").html("请输入昵称!");
			$("#name").css("border-color","#d7191a");
		}
		else if(!oName.test($("#name").val())){
			$("#name-wrong").html("请输入中英文，数字，下划线，减号。");
			$("#name").css("border-color","#d7191a");
		}
		else{
			$(".inp2").attr("title","1");
			$("#name-wrong").html("");
			$("#name").css("border-color","");
		}
	});
	$("#password").bind("blur",function(){
		if($("#password").val()==""){
			$("#password-wrong").html("请输入您的密码！");
			$("#password").css("border-color","#d7191a");
		}
		else if(!oPassword.test($("#password").val())){
			$("#password-wrong").html("以字母开头，长度在6-18之间，只能包含字符、数字和下划线。");
			$("#password").css("border-color","#d7191a");
		}
		else{
			$(".inp3").attr("title","1");
			$("#password-wrong").html("");
			$("#password").css("border-color","");
		}
	});
	$("#btn-submit").bind("click touchend",function(){
		var oInput = document.querySelectorAll(".inputs");
		for(var i = 0;i<oInput.length;i++){
			if(oInput[i].title==""){
				oTrue = false;
				break;
			}else{
				oTrue = true;
			}
		}
		if(oTrue){
			/*window.localStorage.setItem("email",$("#email").val());
			window.localStorage.setItem("name",$("#name").val());
			window.localStorage.setItem("password",$("#password").val());*/
			var dataJson = {
				email:$("#email").val(),
				nickname:$("#name").val(),
				password:$("#password").val(),
				role:"user"
			}
			$.ajax({
				url:"https://sspai.com/api/v1/users",
				type:"post",
				contentType:"application/json; charset=utf-8",
				data:JSON.stringify(dataJson),
				success:function(data){
					window.localStorage.user = JSON.stringify(data);
					$("#hint-box").css("display","block");
					$("#hint-box #hint p").html("注册成功");
				},
				error:function(error){
					console.log(error.message);
					window.localStorage.user = "";
					$("#hint-box #hint p").html(error.message);
					$("#hint-box").css("display","block");
					
				}
			});
			
			
		}else{
			if($("#email").val()==""){
				$("#email-wrong").html("请输入Email地址!");
				$("#email").css("border-color","#d7191a");
				$(".inp1").attr("title","");
			}
			else if(!oEmail.test($("#email").val())){
				$("#email-wrong").html("请输入正确Email格式!");
				$("#email").css("border-color","#d7191a");
				$(".inp1").attr("title","");
			}
			else{
				$("#email-wrong").html("");
				$("#email").css("border-color","");
				$(".inp1").attr("title","1");
			}
			if($("#name").val()==""){
				$("#name-wrong").html("请输入昵称!");
				$("#name").css("border-color","#d7191a");
				$(".inp2").attr("title","");
			}
			else if(!oName.test($("#name").val())){
				$("#name-wrong").html("请输入中英文，数字，下划线，减号。");
				$("#name").css("border-color","#d7191a");
				$(".inp2").attr("title","");
			}
			else{
				$("#name-wrong").html("");
				$("#name").css("border-color","");
				$(".inp2").attr("title","1");
			}
			if($("#password").val()==""){
				$("#password-wrong").html("请输入您的密码！");
				$("#password").css("border-color","#d7191a");
				$(".inp3").attr("title","");
			}
			else if(!oPassword.test($("#password").val())){
				$("#password-wrong").html("以字母开头，长度在6-18之间，只能包含字符、数字和下划线。");
				$("#password").css("border-color","#d7191a");
				$(".inp3").attr("title","");
			}
			else{
				$("#password-wrong").html("");
				$("#password").css("border-color","");
				$(".inp3").attr("title","1");
			}	
		}	
	});
	$("#hint-box .hint-btn").bind("click",function(){
		$("#hint-box").css("display","none");
		var uer = window.localStorage.getItem("user");
		if(uer){
			window.location.href="index.html";
		}else{
			return false;
		}
		
	});
	$("#hint").css("left",($(window).width()-$("#hint").outerWidth())/2);
	$("#hint").css("top",($(window).height()-$("#hint").outerHeight())/2);

});
	$(window).scroll(function(){
	$("#hint").css("top",($(window).height()-$("#hint").outerHeight())/2+$(window).scrollTop());
});
$(document).ready(function(){
	$(window).resize(function() {
		$("#hint").css("left",($(window).width()-$("#hint").outerWidth())/2);
	});
});