var oSel=document.getElementById('sel');
var aBtn=oSel.getElementsByTagName('a');
var aCon=document.getElementsByClassName('con');

for(var i=0;i<aBtn.length;i++){
	aBtn[i].index=i;
	
	aBtn[i].onclick=function(){
		for(var j=0;j<aBtn.length;j++){
			aBtn[j].className='';
			aCon[j].className='con non';
		}
		this.className='active';
		aCon[this.index].className='con active1';
	}
	aBtn[i].ontouchend=function(){
		for(var j=0;j<aBtn.length;j++){
			aBtn[j].className='';
			aCon[j].className='con non';
		}
		this.className='active';
		aCon[this.index].className='con active1';
	}
}
