// 注册登录界面切换
var oLoRe=document.getElementById('lo_re');
var aLoReDiv=oLoRe.getElementsByTagName('div');

for(var i=0;i<aLoReDiv.length;i++){
	aLoReDiv[i].index=i;
	aLoReDiv[i].addEventListener('touchstart',changeLoRe,false);
}

var oRegistSection=document.getElementById('regist_section');
var oLoginSection=document.getElementById('login_section');
function changeLoRe(){
	var oLoReSpan=aLoReDiv[this.index].getElementsByTagName('span')[0];
	for(var i=0;i<aLoReDiv.length;i++){
		aLoReDiv[i].getElementsByTagName('span')[0].classList.remove('active1');
	}
	oLoReSpan.classList.add('active1');
	if(oLoReSpan.innerHTML=='账户注册'){
		oRegistSection.style.display='block';
		oLoginSection.style.display='none';
	}
	if(oLoReSpan.innerHTML=='账户登录'){
		oRegistSection.style.display='none';
		oLoginSection.style.display='block';
	}
}


//清空input输入框
var aFormInput=document.getElementsByClassName('inptxt');
var aFormSpan=document.getElementsByClassName('close');

for(var i=0;i<aFormInput.length;i++){
	aFormInput[i].index=i;
	aFormInput[i].addEventListener('focus',function(){
		aFormSpan[this.index].style.display='block';
	},false);
	aFormInput[i].addEventListener('blur',function(){
		aFormSpan[this.index].style.display='none';
	},false);
	aFormSpan[i].index=i;
	aFormSpan[i].addEventListener('touchstart',function(){
		aFormInput[this.index].value='';
	},false);
	
}

//补零函数
function fnZero(time){
	if(time<10){
		return '0'+time;
	}
	else{
		return ''+time;
	}
}
//获取系统当前时间
function GetNowTime(){
	var date=new Date();
	var nowTime=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+fnZero(date.getHours())+':'+fnZero(date.getMinutes())+':'+fnZero(date.getSeconds())+'/';
	return nowTime;
}


//注册按钮触摸事件
var oUid=document.getElementById('uid');
var oPwd=document.getElementById('pwd');
var oTel=document.getElementById('tel');
var nowT=GetNowTime();
function fnRegist(){
	db.transaction(function (contex){
		contex.executeSql('insert into loginfo(userid,pwd,state,tel,registertime) values("'+oUid.value+'","'+oPwd.value+'",'+'0'+',"'+oTel.value+'","'+nowT+'")');
		oRegistSection.style.display='none';
		oLoginSection.style.display='block';
	});
}

//登录按钮触摸事件
var oUid1=document.getElementById('uid1');
var oPwd1=document.getElementById('pwd1');
var oWrongTip1=document.getElementById('wrong_tip1');
function fnLogin(){
	var result=true;
	var index=0;
	db.transaction(function (contex){
		contex.executeSql('select * from loginfo',[],function(con,data){
			var len=data.rows.length,i;
			for(var i=0;i<len;i++){
				if(oUid1.value==data.rows.item(i).userid&&oPwd1.value==data.rows.item(i).pwd){
					result=true;
					index=i;
					break;
				}
				else{
					result=false;
				}
			}
			console.log(data.rows.item(index).userid);
			if(result){
				db.transaction(function (contex){
					contex.executeSql('update loginfo set state="1" where userid="'+data.rows.item(index).userid+'"');
					window.location='index.html';
				});
			}
			else{
				for(var i=0;i<len;i++){
					if(oUid1.value!=data.rows.item(i).userid){
						oWrongTip1.innerHTML='账号不存在';
					}
					else{
						if(oPwd1.value!=data.rows.item(i).pwd){
							oWrongTip1.innerHTML='密码有误';
						}
					}
				}
			}
		});
	})
}

var oLoginBtn=document.getElementById('login_btn');
var oRegistBtn=document.getElementById('regist_btn');
var oWrongTip=document.getElementById('wrong_tip');
var oIsPwd=document.getElementById('ispwd');
var oYZM=document.getElementById('yzm');
fnIsLogin();
function fnIsLogin(){
	oUid1.addEventListener('keyup',function(){
		if(oUid1.value&&oPwd1.value){
			oLoginBtn.style.backgroundColor='red';
			oWrongTip1.innerHTML='';
			oLoginBtn.addEventListener('touchstart',fnLogin,false);
		}
	},false);
	oPwd1.addEventListener('keyup',function(){
		if(oUid1.value&&oPwd1.value){
			oLoginBtn.style.backgroundColor='red';
			oWrongTip1.innerHTML='';
			oLoginBtn.addEventListener('touchstart',fnLogin,false);
		}
	},false);
}

//注册正则验证
fnIsUid();
function fnIsUid(){
	oUid.addEventListener('blur',function(){
		fnIsRegist();
		if(oUid.value.length<6||oUid.value.length>18){
			oWrongTip.innerHTML='帐号须由6-18个字符组成';
		}
		else{
			oWrongTip.innerHTML='';
			fnIsPwd();
		}
	},false);
	
}
fnIsPwd();
function fnIsPwd(){
	oPwd.addEventListener('blur',function(){
		fnIsRegist();
		if(oPwd.value.length<6||oPwd.value.length>18){
			oWrongTip.innerHTML='密码须由6-18个字符组成';
		}
		else{
			oWrongTip.innerHTML='';
			fnIsSurePwd();
		}
	},false);
}
fnIsSurePwd();
function fnIsSurePwd(){
	oIsPwd.addEventListener('blur',function(){
		fnIsRegist();
		if(oIsPwd.value!=oPwd.value){
			oWrongTip.innerHTML='两次密码输入不一致';
		}
		else{
			oWrongTip.innerHTML='';
			fnIsTel();
		}
	},false);
}
fnIsTel();
function fnIsTel(){
	var tel=/^[1][358][0-9]{9}$/;
	oTel.addEventListener('blur',function(){
		fnIsRegist();
		if(tel.test(oTel.value)){
			oWrongTip.innerHTML='';
			console.log(1111);
		}
		else{
			oWrongTip.innerHTML='请输入有效的手机号';
			console.log(222222);
		}
	},false);
}
fnIsYzm()
function fnIsYzm(){
	oYZM.addEventListener('keyup',function(){
		fnIsRegist();
	},false);
}
fnIsRegist();
function fnIsRegist(){
	if(oUid.value&&oPwd.value&&oIsPwd.value&&oTel.value&&oYZM.value&&oWrongTip.innerHTML==''){
		oRegistBtn.style.backgroundColor='red';
		oRegistBtn.addEventListener('touchstart',fnRegist,false);
	}
}
							




