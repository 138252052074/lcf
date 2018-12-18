var ocv=document.getElementsByClassName('cv');

for(var i=0;i<ocv.length;i++){
	var oc=ocv[i].getContext('2d');
}
var oWidth=ocv[0].clientWidth;
var oHeight=ocv[0].clientHeight;

for(var i=0;i<ocv.length;i++){
	fnLineCircle();
}
function fnLineCircle(){
	oc.strokeStyle='#d8d8d8';
	oc.beginPath();
	oc.save();
	oc.moveTo(oWidth/2,oHeight/5);
	oc.lineTo(oWidth/2,oHeight);
	oc.restore();
	oc.closePath();
	oc.stroke();
	
	oc.fillStyle='#d8d8d8';
	oc.beginPath();
	oc.arc(oWidth/2,oHeight/5-oWidth/2,oWidth/2,360*Math.PI/180,false);
	oc.closePath();
	oc.fill();
}
