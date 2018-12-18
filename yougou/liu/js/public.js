window.onload = function() {
	//	客户服务、下载APP
	var oService = document.getElementById('service');
	var oFontI = oService.getElementsByTagName('i')[0];
	var oServiceSecond = document.getElementById('service_second');
	var oDownLoad = document.getElementById('download');
	var oErWeiMa = document.getElementById('erweima');
	oService.onmouseover = function() {
		oFontI.innerHTML = '∨';
		oServiceSecond.style.display = 'block';
		oServiceSecond.style.zIndex = 10;
	}
	oService.onmouseout = function() {
		oFontI.innerHTML = '∧';
		oServiceSecond.style.display = 'none';
		oServiceSecond.style.zIndex = 0;
	}
	oDownLoad.onmouseover = function() {
		oErWeiMa.style.display = 'block';
		oErWeiMa.style.zIndex = 10;
	}
	oDownLoad.onmouseout = function() {
		oErWeiMa.style.display = 'none';
		oErWeiMa.style.zIndex = 0;
	}
	
	
	
	// IE搜索框获取焦点
	var oSearchInput=document.getElementById('search_input');
	var oTips=document.getElementById('tips');
	oSearchInput.onfocus=function(){
		oTips.style.display='block';
	}
	oSearchInput.onblur=function(){
		oTips.style.display='none';
	}
	
	
	//	菜单
	var oFirstList = document.getElementById('first_list');
	var aListBlock = getByClass('list_block', oFirstList);
	var aListDiv = oFirstList.getElementsByTagName('div');
	var oListBg = document.getElementById('list_bg');
	for (var i = 0; i < aListBlock.length; i++) {
		aListBlock[i].index = i;
		aListBlock[i].onmouseover = function() {
			aListDiv[this.index].style.display = 'block';
			aListDiv[this.index].style.zIndex = 20;
			startMove(oListBg, {
				opacity: 100
			}, 10);
			oListBg.style.zIndex = 10;
		}
		aListBlock[i].onmouseout = function() {
			aListDiv[this.index].style.display = 'none';
			aListDiv[this.index].style.zIndex = 0;
			startMove(oListBg, {
				opacity: 0
			}, 10);
			oListBg.style.zIndex = 0;
		}
	}
	
	
	//顶部子菜单
	var oFirstList1=document.getElementById('first_list1');
	var aListBlock1=getByClass('list_block',oFirstList1);
	var aListDiv1 = oFirstList1.getElementsByTagName('div');
	var oListBg1 = document.getElementById('list_bg1');
	for (var i = 0; i < aListBlock1.length; i++) {
		aListBlock1[i].index = i;
		aListBlock1[i].onmouseover = function() {
			aListDiv1[this.index].style.display = 'block';
			aListDiv1[this.index].style.zIndex = 20;
			startMove(oListBg1, {
				opacity: 100
			}, 10);
			oListBg1.style.zIndex = 10;
		}
		aListBlock1[i].onmouseout = function() {
			aListDiv1[this.index].style.display = 'none';
			aListDiv1[this.index].style.zIndex = 0;
			startMove(oListBg1, {
				opacity: 0
			}, 10);
			oListBg1.style.zIndex = 0;
		}
	}

	
	
	var oHeaderList=document.getElementById('header_list');
	var oHeaderListTop=document.getElementById('no');
	var oHDB=document.getElementById('hdb');
	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
//		console.log(scrollTop);
		//顶部菜单
		if(scrollTop>=250){
			oHeaderListTop.style.display='block';
			oHeaderListTop.style.zIndex=50;
			startMove(oHeaderListTop,{top:0},20);
		}
		else{
			oHeaderListTop.style.display='none';
			oHeaderListTop.style.zIndex=0;
			oHeaderListTop.style.top='-50px';
		}
		//回到顶部
		if(scrollTop>=500){
			oHDB.style.opacity=1;
			oHDB.style.filter='alpha(opacity:100)';
		}
		else{
			oHDB.style.opacity=0;
			oHDB.style.filter='alpha(opacity:0)';
		}
	}
	
	
	//	控制轮播图片尺寸
	var oLunBo = document.getElementById('lunbo');
	var oLunBoImg = document.getElementById('lunbo_img');
	var oLunBoList = document.getElementById('lunbo_list');
	var aLunBoLi = oLunBoList.getElementsByTagName('li');
	var aLunImg = oLunBo.getElementsByTagName('img');
	var cliWidth = document.documentElement.clientWidth || document.body.clientWidth;
	//	oLunBoList.width=cliWidth;
	//	oLunBoImg.width=cliWidth;
	for (var i = 0; i < aLunBoLi.length; i++) {
		aLunBoLi[i].width = cliWidth;
		aLunImg[i].width = cliWidth;
	}
	oLunBoList.style.marginLeft = -(cliWidth / 2) + 'px';
	
	
	//	轮播图播放
	var oOlBtn = oLunBoImg.getElementsByTagName('ol')[0];
	var aOlBtns = oOlBtn.getElementsByTagName('li');
	var oBtnPrev = document.getElementById('prev_img');
	var oBtnNext = document.getElementById('next_img');
	var timer = null;
	var now = 0;
	//setInterval兼容性：IE不支持在setInterval里直接调用方法，必须写具体的function函数
	function auto() {
		timer = setInterval(next, 5000);
	}
	auto();
	function next() {
		now++;
		tab();
	}
	function tab() {
		if(now==aOlBtns.length){
			now=0;
		}
		if(now<0){
			now=aOlBtns.length-1;
		}
		for (var i = 0; i < aOlBtns.length; i++) {
			aOlBtns[i].className = '';
			startMove(aLunBoLi[i],{opacity:0},50);
		}
		aOlBtns[now].className = 'active';
		startMove(aLunBoLi[now],{opacity:100},50);
	}
	for (var i = 0; i < aOlBtns.length; i++) {
		aOlBtns[i].index = i;
		aOlBtns[i].onmouseover = function() {
			now = this.index;
			tab();
		}
	}
//	for (var i = 0; i < aLunBoLi.length; i++) {
//		aLunBoLi[i].onmouseover = function() {
//			clearInterval(timer);
//		}
//		aLunBoLi[i].onmouseout = function() {
//			timer=setInterval(next,5000);
//		}
//	}
	oLunBoList.onmouseover=function(){
		clearInterval(timer);
	}
	oLunBoList.onmouseout=function(){
		auto();
	}
	oBtnNext.onclick = function() {
		clearInterval(timer);
		next();
		auto();
	}
	oBtnPrev.onclick = function() {
		clearInterval(timer);
		now--;
		tab();
		auto();
	}
	
	
	
	//	产品图片慢慢放大
	var oContent = document.getElementById('content');
	var aChangeBig = getByClass('change_big', oContent);
//	var arrW=new Array();
//	var arrH=new Array();
//	for(var i=0;i<aChangeBig.length;i++){
//		arrW.push(aChangeBig[i].offsetWidth);
//		arrH.push(aChangeBig[i].offsetHeight);
//	}
	for (var i = 0; i < aChangeBig.length; i++) {
		aChangeBig[i].index = i;
		aChangeBig[i].onmouseover = function() {
			aChangeBig[this.index].style.transform = 'scale(1.05)';
			aChangeBig[this.index].style.transition = '1s';
//			startMove(aChangeBig[this.index],{width:arrW[this.index]*1.05,height:arrH[this.index]*1.05},50);
		}
		aChangeBig[i].onmouseout = function() {
			aChangeBig[this.index].style.transform = 'scale(1)';
			aChangeBig[this.index].style.transition = '1s';
		}
	}
	
	
	
	//新品首发图片切换
	var oXPSF = document.getElementById('xpsf');
	var aXPSFimg = getByClass('zheng',oXPSF);
	var aXPSFimg1=getByClass('fan',oXPSF);
//	var aXPSFtext = oXPSF.getElementsByClassName('xpsf_text');
	var aXPSFtext=getByClass('xpsf_text',oXPSF);
	var aBoxShadow = getByClass('boxShadow', oXPSF);
	for (var i = 0; i < aBoxShadow.length; i++) {
		aBoxShadow[i].index = i;
		aBoxShadow[i].onmouseover = function() {
			aXPSFimg[this.index].style.transform = 'scale(1.05)';
			aXPSFimg[this.index].style.transition = '0s';
//			aXPSFimg[this.index].src = 'img/index/content2_xpsf/b' + this.index + '.jpg';
			aXPSFimg[this.index].style.display='none';
			aXPSFimg1[this.index].style.display='block';
//			aXPSFimg[this.index].style.opacity='0';
//			aXPSFimg1[this.index].style.opacity='1';
			aXPSFtext[this.index].style.background = '#f4f0ea';
			aBoxShadow[this.index].style.boxShadow = '2px 2px 2px 1px #f1f1f1';
		}
		aBoxShadow[i].onmouseout = function() {
//			aXPSFimg[this.index].src = 'img/index/content2_xpsf/a' + this.index + '.png';
			aXPSFimg[this.index].style.display='block';
			aXPSFimg1[this.index].style.display='none';
//			aXPSFimg[this.index].style.opacity='1';
//			aXPSFimg1[this.index].style.opacity='0';
			aXPSFimg[this.index].style.transform = 'scale(1)';
			aXPSFimg[this.index].style.transitionDelay='1s';
			aXPSFimg[this.index].style.transition = '2s';
			aXPSFtext[this.index].style.background = '#fff';
			aBoxShadow[this.index].style.boxShadow = 'none';
		}
	}



	//新品首发上下张
	var oXpPrev=document.getElementById('xp_prev');
	var oXpNext=document.getElementById('xp_next');
	var oXpUl=document.getElementById('xp_ul');
	oXpPrev.onclick=function(){	
		if(-oXpUl.offsetLeft<=1000){
			startMove(oXpUl,{left:oXpUl.offsetLeft-271},30);
		}
	}
	oXpNext.onclick=function(){
		if(-oXpUl.offsetLeft>0){
			startMove(oXpUl,{left:oXpUl.offsetLeft+271},30);
		}
	}
	
	
	
	//人气推荐选项卡
	var oRqtjXxk=document.getElementById('rqtj_xxk');
	var aRqtjA=oRqtjXxk.getElementsByTagName('a');
	var aRqtjSpan=oRqtjXxk.getElementsByTagName('span');
	var oRqtj=document.getElementById('rqtj');
	var aXxk=getByClass('product',oRqtj);
	for(var i=0;i<aRqtjA.length;i++){
		aRqtjA[i].index=i;
		aRqtjA[i].onclick=function(){
			for(var i=0;i<aRqtjA.length;i++){
				aRqtjSpan[i].className='';
				aXxk[i].style.display='none';
			}
			aRqtjSpan[this.index].className='active';
			aXxk[this.index].style.display='block';
		}
	}



	//	限时购倒计时
	function zero(num) {
		if (num < 10) { //小于十的数补零
			return '0' + num;
		} else {
			return num;
		}
	}
	function countDown(year, month, day, divName) {
		var date = new Date();
		var endDate = new Date(year, month - 1, day);
		var Millisecd = endDate.getTime() - date.getTime();
		var secd = Millisecd / 1000;
		var oDay = Math.floor(secd / (60 * 60 * 24));
		var oHour = Math.floor((secd - oDay * 24 * 60 * 60) / 3600);
		var oMinute = Math.floor((secd - oDay * 24 * 60 * 60 - oHour * 3600) / 60);
		var oSecond = Math.floor(secd % 60);
		var oDiv = document.getElementById('endtime');
		var oSpanH = document.getElementById('hours');
		var oSpanM = document.getElementById('minute');
		var oSpanS = document.getElementById('second');
		oSpanH.innerHTML = zero(oHour);
		oSpanM.innerHTML = zero(oMinute);
		oSpanS.innerHTML = zero(oSecond);
	}

	countDown(2017, 4, 1, 'endtime');
	var timer1 = setInterval(function() {
		countDown(2017, 10, 1, 'endtime');
	}, 1000);
	
	
	
	//限时购数量缩减
	var oBuying=document.getElementById('buying');
	var aBuyNow=getByClass('buynow',oBuying);
	var aI=oBuying.getElementsByTagName('i');
	var aNumBarIn=getByClass('numbar_in',oBuying);
	var oldnum=new Array();
	for(var i=0;i<aI.length;i++){
		oldnum[i]=aI[i].innerHTML;
	}
	for(var i=0;i<aBuyNow.length;i++){
		aBuyNow[i].index=i;
		aBuyNow[i].onclick=function(){
			if(parseInt(aI[this.index].innerHTML)>0){
				aNumBarIn[this.index].style.width=aNumBarIn[this.index].offsetWidth-(150/oldnum[this.index])+'px';
				aI[this.index].innerHTML=parseInt(aI[this.index].innerHTML)-1;
			}
			else{
				aBuyNow[this.index].innerHTML='已抢购完';
				aBuyNow[this.index].style.background='#666';
				aBuyNow[this.index].style.cursor='not-allowed';
			}
		}
	}
	
	
	
	//大家说上下张
	var oAllSayPrev=document.getElementById('all_say_prev');
	var oAllSayNext=document.getElementById('all_say_next');
	var oAllSayUl=document.getElementById('all_say_ul');
	oAllSayPrev.onclick=function(){	
		if(-oAllSayUl.offsetLeft<=1000){
			startMove(oAllSayUl,{left:oAllSayUl.offsetLeft-366},30);
		}
	}
	oAllSayNext.onclick=function(){
		if(-oAllSayUl.offsetLeft>0){
			startMove(oAllSayUl,{left:oAllSayUl.offsetLeft+366},30);
		}
	}
	
	
	
	//固定广告
	var oXRYL=document.getElementById('xryl');
	var oXAAPP=document.getElementById('xzapp');
	var oZXKF=document.getElementById('zxkf');
	var oXRYL_p=document.getElementById('xryl_p');
	var oXZAPP_p=document.getElementById('xzapp_p');
	var oZXKF_p=document.getElementById('zxkf_p');
	var oPosiEr=document.getElementById('posi_er');
	oXRYL.onmouseover=function(){
		oXRYL.className='xryl1';
		oXRYL_p.style.color='#B4A078';
	}
	oXRYL.onmouseout=function(){
		oXRYL.className='xryl';
		oXRYL_p.style.color='#666';
	}
	oXAAPP.onmouseover=function(){
		oXAAPP.className='xzapp1';
		oXZAPP_p.style.color='#B4A078';
		oPosiEr.style.display='block';
	}
	oXAAPP.onmouseout=function(){
		oXAAPP.className='xzapp';
		oXZAPP_p.style.color='#666';
		oPosiEr.style.display='none';
	}
	oZXKF.onmouseover=function(){
		oZXKF.className='zxkf1';
		oZXKF_p.style.color='#B4A078';
	}
	oZXKF.onmouseout=function(){
		oZXKF.className='zxkf';
		oZXKF_p.style.color='#666';
	}
//	回到顶部
//	oHDB.onclick=function(){
//		document.documentElement.scrollTop=document.body.scrollTop=0;
//	}


	var oOpen=document.getElementById('open');
	var oClose=document.getElementById('close');
	var oAllSayText=document.getElementById('all_say_one_text');
	oOpen.onclick=function(){
		startMove(oAllSayText,{height:160},50);
	}
//	oClose.onclick=function(){
//		startMove(oAllSayText,{height:140},50);
//	}
}
