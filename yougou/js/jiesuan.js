//js入口
window.onload=function(){
	//  配送地址
	var oPeisong_b=document.getElementById('peisong_b');
	var alI=oPeisong_b.getElementsByTagName('li');	
	for(var i=0;i<alI.length;i++){
	   alI[i].addEventListener('touchstart', function() {
	     	  for(var i=0;i<alI.length;i++){
	     	  	alI[i].style.border='';
	     	  }
	     	  this.style.border='1px solid red';	      	 
	});
	}
//	支付方式
	var oPeisong_c=document.getElementById('peisong_c');
	var alI1=oPeisong_c.getElementsByTagName('li');
	var Arr=['支付宝','银联卡','招商银行']
	for(var i=0;i<alI1.length;i++){
		alI1[i].index=i;
	   alI1[i].addEventListener('touchstart', function() {
	     	  for(var i=0;i<alI1.length;i++){	     	  	
	     	  	alI1[i].style.border='';
	     	  }
	     	  this.style.border='1px solid red';
	     	   for(var j=0;j<Arr.length;j++){
	     	   	 Arr[j].index=j;
	      	  	  window.localStorage.setItem('zhifufangshi',Arr[this.index]);
	      	  }
	});
	}
//  应付总金额
var oYingfu=document.getElementById('yingfu');
var oI2=document.getElementById('i2');
var oI3=document.getElementById('i3');
var oI4=document.getElementById('i4');
oI4.innerHTML=window.localStorage.getItem('Price')
//  结算明细
var oI1=document.getElementById('i1');
oI1.innerHTML=window.localStorage.getItem('numpirce');
oI2.innerHTML=window.localStorage.getItem('zongprice');
//  判断优惠节省的金额
if(oI1.innerHTML>1){
	oYingfu.innerHTML=oI3.innerHTML=parseFloat((window.localStorage.getItem('zongprice')-(window.localStorage.getItem('zongprice')/8)))
    oI4.innerHTML=parseFloat(((window.localStorage.getItem('zongprice')/8)));
}
else if(oI1.innerHTML==1){
	oYingfu.innerHTML=oI3.innerHTML=window.localStorage.getItem('zongprice');
	oI4.innerHTML=0;
}
// 商品信息
var oCart_img=document.getElementById('cart_img');
var ossp1=document.getElementById('ssp1');
var ossp2=document.getElementById('ssp2');
var ossp3=document.getElementById('ssp3');
oCart_img.src=window.localStorage.getItem('tupian');
ossp1.innerHTML=window.localStorage.getItem('color');
ossp2.innerHTML=window.localStorage.getItem('size');
ossp3.innerHTML=window.localStorage.getItem('Price');

/*
//创建数据库
var db = openDatabase('yougou', '1.0', 'yougoudata', 2 * 1024 * 1024);

//删除数据表
//db.transaction(function (contex){
//	contex.executeSql('drop table Landed1');
//});

//创建数据表
db.transaction(function(contex) {
	//													账号，密码，状态(0离线，1登陆),电话，性别，生日，地区，地址   ,积分,     签到日期
	contex.executeSql('create table if not exists loginfo1(userid,pwd,state,tel,sex,birth,address,deliveryAddr,integral,signdata)');
	contex.executeSql('create table if not exists Landed1(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata)');
});
db.transaction(function(contex) {
	contex.executeSql('delete from loginfo1');
	contex.executeSql('delete from Landed1');
});
db.transaction(function(contex) {
	contex.executeSql('insert into loginfo1(userid,pwd,state,tel,sex,birth,address,deliveryAddr,integral,signdata) values("qq","123","1","13710486067","男","2015-12-05","广东省 广州市 天河区","大只佬,13710457821,1,广东省 广州市 天河区,车陂棠东韵泰广场/盲炳,13710486067,0,广东省 广州市 天河区,天河客运站/","105","12/14/24/25/")');

});
/*
//db.transaction(function(contex) {
//		contex.executeSql('SELECT * FROM loginfo1', [], function(tx, results) {
//		var len = results.rows.length,i;
//		for (i = 0; i < len; i++) {
//			if (results.rows.item(i).state == 1) {
//				contex.executeSql('insert into Landed1(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata) values("' + results.rows.item(i).userid + '","' + results.rows.item(i).pwd + '","' + results.rows.item(i).tel + '","' + results.rows.item(i).sex + '","' + results.rows.item(i).birth + '","' + results.rows.item(i).address + '","' + results.rows.item(i).deliveryAddr + '","' + results.rows.item(i).integral + '","' + results.rows.item(i).signdata + '")');
//				return;
//				console.log(results.rows.item(i).state == 1)
//			}
//		}
//	});
//});
*/
//test 04/24
// 查询收货地址数据库
var oBtn4=document.getElementById('btn4');
var oDi=document.getElementById('di');
db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM loginfo', [], function(tx, results) {
		var len = results.rows.length,i;	
		for (i = 0; i < len; i++) {
			if (results.rows.item(i).state == 1) {
//				contex.executeSql('insert into loginfo(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata) values("' + results.rows.item(i).userid + '","' + results.rows.item(i).pwd + '","' + results.rows.item(i).tel + '","' + results.rows.item(i).sex + '","' + results.rows.item(i).birth + '","' + results.rows.item(i).address + '","' + results.rows.item(i).deliveryAddr + '","' + results.rows.item(i).integral + '","' + results.rows.item(i).signdata + '")');
//			   	console.log(results.rows.item(i).deliveryAddr)				
//				oDi.innerHTML=results.rows.item(i).address;
//				var arr=[];
//				arr.push(results.rows.item(i).deliveryAddr.split('/'));
//				console.log(arr);
//				var arr1=[];
//				for(var i=0;i<arr.length;i++){
//					arr1.push(arr[i].split(','));
//				}
				
				var arr=results.rows.item(i).deliveryAddr.split('/');
				arr.pop();
				for(var j=0;j<arr.length;j++){
					var arr1 = arr[j].split(',');
					if(arr1[2]==1){
						oDi.innerHTML=arr1[3];
					}
				}

                 
			}
		}
	});
});
oBtn4.addEventListener('touchstart',function(){
	if(oDi.innerHTML=='请添加收货地址'){
		alert('请添加收货地址')
	}else{
		window.location.href='zhifuye.html';
		window.localStorage.setItem('jin',oYingfu.innerHTML)
	}
});

};


