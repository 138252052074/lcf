var oSearchInp=document.getElementById('search_inp');
var oYgIndex=document.getElementById('ygIndex');
var oIndexSearch=document.getElementById('indexSearch');
oSearchInp.addEventListener('focus',function(){
	oYgIndex.style.display='none';
	oIndexSearch.style.display='block';
},false);


//搜索框
var oCLearInp=document.getElementById('clear_inp');
var oSearchInp1=document.getElementById('search_inp1');
var oSearchResult=document.getElementById('search_result');
var oSearchHot=document.getElementById('search_hot');
var oSearchHistory=document.getElementById('search_history');
oCLearInp.addEventListener('touchstart',fnClear,false);

function fnClear(){
	oSearchInp1.value='';
	oSearchResult.style.display='none';
	oSearchHot.style.display='block';
	oSearchHistory.style.display='block';
}

var oSearchCLose=document.getElementById('search_close');
oSearchCLose.addEventListener('touchstart',function(ev){
	ev.preventDefault();
},false);
oSearchCLose.addEventListener('touchstart',function(){
	oYgIndex.style.display='block';
	oIndexSearch.style.display='none';
	fnClear();
},false);


//回到顶部
var oBackTop=document.getElementById('backTop');
window.addEventListener('scroll',function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>=300){
		oBackTop.style.display='block';
	}
	else{
		oBackTop.style.display='none';
	}
	oBackTop.addEventListener('touchstart',function(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	},false);
},false);

//大图，U惠购    滚动+拖拽
var oSwiperList=document.getElementById('swiper_list');
var oSwiperOl=document.getElementById('swiper_ol');
var oProduct=document.getElementById('product');
fnSwiper_a(oSwiperList,'li',oSwiperOl,'li',5000);
fnSwiper_b(oProduct,'a');
	
var oLinklr=document.getElementById('link_lr');
var oLinkam=document.getElementById('link_am');


//显示用户名
var oUser=document.getElementById('user');
var oSignOut=document.getElementById('signout');
//消息盒子
var oMess=document.getElementById('mess');
fnSignIn();
function fnSignIn(){
	var result=true;
	var index=0;
	db.transaction(function (contex){
		contex.executeSql('select * from loginfo',[],function(con,data){
			var len=data.rows.length,i;
			for(var i=0;i<len;i++){
				if(data.rows.item(i).state=='1'){
					result=true;
					index=i;
					break;
				}
				else{
					result=false;
				}
			}
			console.log(index);
			if(result){
				oUser.innerHTML=data.rows.item(index).userid;
				oUser.href='index.html';
				oSignOut.innerHTML='退出';
				oSignOut.href='index.html';
				oLinklr.style.display='none';
				oLinkam.style.display='block';
				oMess.href='message.html';
			}
		});
	});
}
//用户退出
oSignOut.addEventListener('touchstart',fnSignOut,false);
function fnSignOut(){
	db.transaction(function (contex){
		contex.executeSql('update loginfo set state="0"');
		window.location='lo_re.html';
		oUser.innerHTML='请登录';
		oSignOut.innerHTML='注册'
		oLinklr.style.display='block';
		oLinkam.style.display='none'
		oMess.href='javascript:';
	});
}

