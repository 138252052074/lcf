//拖拽+滚动
//五个参数（循环对象，对象子节点，对应下标对象，对应下标子节点，循环时间）
function fnSwiper_a(obj,oChildN,oIndObj,oIndChildN,times){
	var aChildN=obj.getElementsByTagName(oChildN);
	var aIndChildN=oIndObj.getElementsByTagName(oIndChildN);
	//设置定时器
	var timer = null;
	//滚动距离
	var iscro = 0;
	//第几个图
	var iNow = 0;
	//初始距离
	var iStartX = 0;
	//初始滚动距离
	var iStartScroll = 0;
	
	function auto() {
		timer = setInterval(function() {
			iNow++;
			iNow = iNow % aIndChildN.length;
			tab();
		}, times)
	}
	auto();
	
	//大图滚动+拖拽
	obj.addEventListener('touchstart',fnStart,false);
	obj.addEventListener('touchmove',fnMove,false);
	obj.addEventListener('touchend',fnEnd,false);
	obj.addEventListener('touchmove',fnDft,false);
	
	function fnDft(ev){
		ev.preventDefault();
	}
	
	function fnStart(ev){
		clearInterval(timer);
		iStartX=ev.changedTouches[0].pageX;
		iStartScroll=iscro;
	}
	
	function fnMove(ev){
		var disX=ev.changedTouches[0].pageX-iStartX;
		iscro=iStartScroll+disX;
		toleft();
	}
	
	function toleft(){
		obj.style.webkitTransform='translateX('+iscro+'px)';
	}
	
	function fnEnd(){
		iNow=-iscro/window.screen.width;
		iNow=(iNow-parseInt(iNow))>0.3?Math.ceil(iNow):Math.floor(iNow);
		if(iNow<0){
			iNow=0;
		}
		if(iNow>aChildN.length-1){
			iNow=aChildN.length-1;
		}
		tab();
		auto();
	}
	
	function tab() {
		iscro = -iNow * window.screen.width;
		for (var i = 0; i < aIndChildN.length; i++) {
			aIndChildN[i].className = '';
		}
		aIndChildN[iNow].className = 'active2';
		obj.style.webkitTransition = '.5s';
		toleft();
	}
}

//二个参数（循环对象，对象子节点）
function fnSwiper_b(obj,oChildN){
	var aChildN=obj.getElementsByTagName(oChildN);
	//滚动距离
	var iscro = 0;
	//第几个图
	var iNow = 0;
	//初始距离
	var iStartX = 0;
	//初始滚动距离
	var iStartScroll = 0;
	
	//大图滚动+拖拽
	obj.addEventListener('touchstart',fnStart,false);
	obj.addEventListener('touchmove',fnMove,false);
	obj.addEventListener('touchend',fnEnd,false);
	obj.addEventListener('touchmove',fnDft,false);
	
	function fnDft(ev){
		ev.preventDefault();
	}
	
	function fnStart(ev){
		iStartX=ev.changedTouches[0].pageX;
		iStartScroll=iscro;
	}
	
	function fnMove(ev){
		var disX=ev.changedTouches[0].pageX-iStartX;
		iscro=iStartScroll+disX;
		toleft();
	}
	
	function toleft(){
		obj.style.webkitTransform='translateX('+iscro+'px)';
	}
	
	function fnEnd(ev){
		var dix = ev.changedTouches[0].pageX - iStartX;
		iscro = iStartScroll + dix;
		iNow=-iscro/window.screen.width;
		if(iNow<0){
			iNow=0;
		}
		if(iNow>aChildN.length-1){
			iNow=aChildN.length-1;
		}
		iscro=-iNow*window.screen.width;
		iNow=(iNow-parseInt(iNow))>0.3?Math.ceil(iNow):Math.floor(iNow);
		if(iscro<-420){
			iscro=-420;
		}
		toleft();
	}
}


