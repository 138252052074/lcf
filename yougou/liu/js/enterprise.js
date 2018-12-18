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
//	var oLunBo = document.getElementById('lunbo');
//	var oLunBoImg = document.getElementById('lunbo_img');
//	var oLunBoList = document.getElementById('lunbo_list');
//	var aLunBoLi = oLunBoList.getElementsByTagName('li');
//	var aLunImg = oLunBo.getElementsByTagName('img');
//	var cliWidth = document.documentElement.clientWidth || document.body.clientWidth;
//	//	oLunBoList.width=cliWidth;
//	//	oLunBoImg.width=cliWidth;
//	for (var i = 0; i < aLunBoLi.length; i++) {
//		aLunBoLi[i].width = cliWidth;
//		aLunImg[i].width = cliWidth;
//	}
//	oLunBoList.style.marginLeft = -(cliWidth / 2) + 'px';

	
	
	
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











