window.onload=function(){
	var oUser=document.getElementById('user');
	var oUserTip=document.getElementById('user_tip');
	var oPwd=document.getElementById('pwd');
	var oPwdTip=document.getElementById('pwd_tip');
	var oSure=document.getElementById('sure_pwd');
	var oSureTip=document.getElementById('sure_tip');
	var oTel=document.getElementById('tel');
	var oTelTip=document.getElementById('tel_tip');
//	var user=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
	oUser.onblur=function(){
		if(oUser.value.length<6||oUser.value.length>18){
			oUserTip.style.display='inline-block';
			oUser.style.border='1px solid #d4282d';
			oUserTip.innerHTML='<b></b>'+'帐号须由6-18个字符组成';
		}
		else{
			oUserTip.style.display='none';
			oUser.style.border='1px solid #e8e8e8';
			if(oUser.value.indexOf("@163.com")!=-1||oUser.value.indexOf("@qq.com")!=-1){
				
			}
			else{
				oUser.value=oUser.value+'@163.com';
			}
		}
	}
	oPwd.onblur=function(){
		if(oPwd.value.length<6||oPwd.value.length>18){
			oPwdTip.style.display='inline-block';
			oPwd.style.border='1px solid #d4282d';
			oPwdTip.innerHTML='<b></b>'+'密码须由6-18个字符组成';
		}
		else{
			oPwdTip.style.display='none';
			oPwd.style.border='1px solid #e8e8e8';
		}
	}
	oSure.onblur=function(){
		if(oSure.value!=oPwd.value){
			oSureTip.style.display='inline-block';
			oSure.style.border='1px solid #d4282d';
			oSureTip.innerHTML='<b></b>'+'两次密码输入不一致';
		}
		else{
			oSureTip.style.display='none';
			oSure.style.border='1px solid #e8e8e8';
		}
	}
	var tel=/^[1][358][0-9]{9}$/;
	oTel.onblur=function(){
		if(tel.test(oTel.value)){
			oTelTip.style.display='none';
			oTel.style.border='1px solid #e8e8e8';
		}
		else{
			oTelTip.style.display='inline-block';
			oTel.style.border='1px solid #d4282d';
			oTelTip.innerHTML='<b></b>'+'电话号码输入有误';
		}
	}
	
	var oClickYz=document.getElementById('click_yz');
	var oYzmTxt=document.getElementById('yzm_txt');
	var aClick=getByClass('click',oYzmTxt);
	
	var cishu=0;
	oClickYz.onclick=function(ev){
		cishu++;
		var oEvent=ev || event;
		var disX=oEvent.clientX;
		var disY=oEvent.clientY;
		if(cishu<=3){
			if(cishu==1){
				aClick[0].style.display='block';
				aClick[0].style.top=disY+'px';
				aClick[0].style.left=disX+'px';
			}
			else if(cishu==2){
				aClick[1].style.display='block';
				aClick[1].style.top=disY+'px';
				aClick[1].style.left=disX+'px';
			}
			else if(cishu==3){
				aClick[2].style.display='block';
				aClick[2].style.top=disY+'px';
				aClick[2].style.left=disX+'px';
			}
		}
		else{
			cishu=0;
		}
	}
	
}
