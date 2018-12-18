var oMessage=document.getElementById('message');
var oTransaction=document.getElementById('transaction');
var oCourierMes=document.getElementById('courier_mes');
oCourierMes.addEventListener('touchstart',function(){
	oMessage.style.display='none';
	oTransaction.classList.remove('none');
},false);

var oGoMes=document.getElementById('gomes');
oGoMes.addEventListener('touchstart',function(ev){
	ev.preventDefault();
},false);
oGoMes.addEventListener('touchstart',function(){
	oMessage.style.display='block';
	oTransaction.classList.add('none');
},false);


var oNotice=document.getElementById('notice');
oNotice.addEventListener('touchstart',function(){
	
},false);

//获取localstorage
var oMesTitle=document.getElementById('mes_title');
var oHTitle=document.getElementById('h_title');
oMesTitle.innerHTML=window.localStorage.getItem('Title');
oHTitle.innerHTML=window.localStorage.getItem('Title');
oMesTitle.innerHTML=oMesTitle.innerHTML.slice(0,18)+'...';
