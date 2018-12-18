window.onload=function(){
	var oList=document.getElementsByClassName('list')[0];
	var aList=oList.getElementsByClassName('li');
	var oHead3=document.getElementsByClassName('head3')[0];
	var aDiv=oHead3.getElementsByTagName('div');
	for(var i=0;i<aList.length;i++){
		aList[i].index=i;
		aList[i].onmouseenter=aDiv[i].onmouseenter=function(){		
			aDiv[this.index].style.display='block';

		}
		aList[i].onmouseleave=aDiv[i].onmouseleave=function(){
			aDiv[this.index].style.display='none';
		}
	};
	var oCode=document.getElementById('code');
	var oDw2=document.getElementById('dw2');
	oDw2.onmouseover=function(){
		oCode.style.display='block';
	};
	oDw2.onmouseout=function(){
		oCode.style.display='none';
	};
	
	var oHide=document.getElementsByClassName('hide-ul')[0];
	var aHide=oHide.getElementsByClassName('hideli');
	var aHidediv=oHide.getElementsByClassName('hidebox');
	for(var i=0;i<aHide.length;i++){
		aHide[i].index=i;
		aHide[i].onmouseenter=function(){		
			aHidediv[this.index].style.display='block';

		}
		aHide[i].onmouseleave=function(){
			aHidediv[this.index].style.display='none';
		}
	};
	
};
window.onscroll=function(){
	//滚动菜单
	var nscrolltop=document.documentElement.scrollTop||document.body.scrollTop;
	var oUp=document.getElementsByClassName('hideheadwarp')[0];
	var oBacktop=document.getElementById('backtop');
	console.log(oUp);
	if(nscrolltop>200){
		oUp.style.display='block';
	}
	else{
		oUp.style.display='none';
	}if(nscrolltop>300){
		oBacktop.style.display='block';
	}
	else{
		oBacktop.style.display='none';
	}
	oBacktop.onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	}

	
	//返回顶部
	
	
}
