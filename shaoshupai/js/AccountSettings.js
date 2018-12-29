$(function(){
	function mediacy(){
		$("#hint").css("left",($(window).width()-$("#hint").outerWidth())/2);
		$("#hint").css("top",($(window).height()-$("#hint").outerHeight())/2+$(window).scrollTop);
	}	
	if(window.localStorage.getItem("touxian")){
		$("#touxian").attr("src",window.localStorage.getItem("touxian"));
		$("#head-scul").css("background","url("+window.localStorage.getItem('touxian')+")");
	}
	$("#head-scul").css("background","url(img/header/large.jpg) no-repeat");
	$("#head-scul").css("background-size","100% 100%");
	//导航选项卡
	function nav(){
		var $aLi = $("#nav").find("li");
		var $oInner = $("#main .inner");
		var $oTrabecula = $("#nav").find(".trabecula");
		var $oTitle = $("title");
		var oLi = $aLi.eq(0).outerWidth();
		var now = 0;
		//console.log($oTitle);
		$aLi.each(function(){
			$(this).bind("click touchend",function(){
				now = $(this).index();
				$aLi.attr("class","");
				$aLi.eq(now).attr("class","active");				
				$oTrabecula.animate({left:now*oLi},300,"linear");
				$oInner.css("display","none");
				$oInner.eq(now).css("display","block");
				$oTitle.html($(this).html()+" - 少数派");
				//console.log(oLi.outerWidth());	
			});			
		});		
		$oInner.eq(now).css("display","block");
	}
		
	$("input").each(function(){
		$(this).focus(function(){ //input获取焦点时改变样式
			$(this).css("border-color","#000");
		});
		$(this).blur(function(){ //input失去焦点时改变样式
			$(this).css("border-color","");
		});
	});		
	//信息与邮件：按钮改变
	var $oBtn = $("#info-mail .permit").find(".btn");	
	$oBtn.each(function(){
		$(this).bind("click touchend",function(){
			if($(this).find(".piece").css("left")==3+"px"){
				$(this).find(".piece").animate({left:"50"},300);
				$(this).css("background-color","#000");
			}else{
				$(this).find(".piece").animate({left:"3"},300);
				$(this).css("background-color","#c0ccda");
			}		
		});
	});
	
	//$("#textarea")里面内容数量
	$("#textarea").keyup(function(){
		var $textareaHtml = $("#textarea").find("textarea").val().length;
		$("#textarea").find("em").html(parseInt($textareaHtml));
		console.log($textareaHtml);
	});
	$("#hint .hint-btn").bind("click touchend",function(){
		$("#hint-box").css("display","none");
	});
	//基本信息验证
	function basicInfo(){
		$("#basic-info .preserve").bind("click touchend",function(){
			var ofiles = $("#files1").prop("files");
			if($("#basic-info .name").val().trim().length<2 || $("#basic-info .name").val().trim().length>10){ //判断昵称内容是否为空
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("昵称必须由2~10个中英文字符、下划线或数字组成。");
			}
			else{
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("保存成功。");
				$("#touxian").attr("src",window.localStorage.getItem("touxian"));
			}		
		});	
		//console.log($basic_Info_file);
		$("#files1").bind("change",function(){
			var ofiles = $("#files1").prop("files");
			for(var i=0;i<ofiles.length;i++){
				var oTypeImg = ofiles[i].type.split("/")[0];
				if(oTypeImg == "image"){
					var oImg = window.URL.createObjectURL(ofiles[i]);
					$("#head-scul").css("background","url("+oImg+")");
					//$("#touxian").attr("src",oImg);
					window.localStorage.setItem("touxian", window.URL.createObjectURL(ofiles[i]));
				}
				else{
					$("#hint-box").css("display","block");
					mediacy();
					$("#hint p").html("请用正确格式");
				}				
			}
				//console.log(ofiles);
		});
		
	}	
	
	//	账号密码验证
	function accountPassword(){
		var $accountPassword = $("#accountPassword").find(".preserve");
		var $accountPassword_mail = $("#accountPassword").find(".mail");
		var $accountPassword_pass1 = $("#accountPassword").find(".pass");
		var $accountPassword_pass2 = $("#accountPassword").find(".pass2");
		var oEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //邮箱验证正则
		//var oPassword = /^(?![^a-zA-Z]+$)(?!\D+$)/; //密码必须包含数字和英文
		//验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 
		var oPassword = new RegExp(/^[a-zA-Z]\w{5,17}$/);
		$accountPassword.bind("click touchend",function(){
			//邮箱验证
			if($accountPassword_mail.val().trim().length==0){ //判断内容是否为空
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("请填写正确的 Email 地址。");
			}
			else if(!oEmail.test($accountPassword_mail.val())){
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("提示\n\n请输入有效的E_mail！");
			}
			//修改密码验证
			else if($accountPassword_pass1.val()==""){
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("请输入新密码！");
			}
			else if(!oPassword.test($accountPassword_pass1.val())){
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("以字母开头，长度在6-18之间，只能包含字符、数字和下划线！");
			}
			else if($accountPassword_pass1.val() != $accountPassword_pass2.val()){
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("请输入一致密码！");
			}
			else if($("#original-pass").val()!=window.localStorage.getItem("password")){
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("请输入正确的原密码");
			}
			else if($("#original-pass").val()==$accountPassword_pass1.val()){
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("新密码与原密码相同。");
			}
			else{
				window.localStorage.setItem("password",$accountPassword_pass1.val());
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("保存成功");
			}			
		});
	}
	//实名验证
	function realNameVerif(){
		var $realNameVerif = $("#realNameVerif").find(".preserve");
		$realNameVerif.bind("click touchend",function(){
			var oPhone = /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?/;
			if(!oPhone.test($("#phone").val())){
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("请输入真确手机号码格式");
				//alert("请输入真确手机号码格式");
			}
			else{
				$("#hint-box").css("display","block");
				mediacy();
				$("#hint-box p").html("保存成功");
			}
		});
	}	
	nav();
	basicInfo();
	accountPassword();
	realNameVerif();
});
$(window).scroll(function(){
	$("#hint").css("left",($(window).width()-$("#hint").outerWidth())/2);
	$("#hint").css("top",($(window).height()-$("#hint").outerHeight())/2+$(window).scrollTop());
});
//$(document).ready(function(){
//	$(window).resize(function() {
//		$("#hint").css("left",($(window).width()-$("#hint").outerWidth())/2);
//	});
//});