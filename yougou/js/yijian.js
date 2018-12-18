window.onload=function(){
		
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
//test 04/24
// 查询收货地址数据库
var oYonghumong=document.getElementById('yonghuming');
db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM loginfo1', [], function(tx, results) {
		var len = results.rows.length,i;		
		for (i = 0; i < len; i++) {
			if (results.rows.item(i).state == 1) {
				contex.executeSql('insert into Landed1(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata) values("' + results.rows.item(i).userid + '","' + results.rows.item(i).pwd + '","' + results.rows.item(i).tel + '","' + results.rows.item(i).sex + '","' + results.rows.item(i).birth + '","' + results.rows.item(i).address + '","' + results.rows.item(i).deliveryAddr + '","' + results.rows.item(i).integral + '","' + results.rows.item(i).signdata + '")');
//			   	console.log(results.rows.item(i).deliveryAddr)				
//				oDi.innerHTML=results.rows.item(i).address;
				oYonghumong.innerHTML=results.rows.item(i).userid;			  
			}
			else if(results.rows.item(i).state == 0){
				contex.executeSql('insert into Landed1(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata) values("' + results.rows.item(i).userid + '","' + results.rows.item(i).pwd + '","' + results.rows.item(i).tel + '","' + results.rows.item(i).sex + '","' + results.rows.item(i).birth + '","' + results.rows.item(i).address + '","' + results.rows.item(i).deliveryAddr + '","' + results.rows.item(i).integral + '","' + results.rows.item(i).signdata + '")');
				oYonghumong.innerHTML=results.rows.item(i).userid;
			}
		}
	});
});

//  意见反馈验证
var oTexta=document.getElementById('texta');
var oText=document.getElementById('text');
var oBtn=document.getElementById('btn');
var oCon=document.getElementById('con');
var oFan=document.getElementById('fan');
oBtn.addEventListener('touchstart',function(){
   	  var youxiang=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; 
   	  var tel=/^(13[0-9]{9})|(15[89][0-9]{8})$/;
   	  var qQ=/^[1-9]\d{5,8}$/;
   	  if(youxiang.test(oText.value) || tel.test(oText.value) || qQ.test(oText.value)){
   	  	    oText.style.border='';
   	  	    oTexta.style.border='';
   	  	    oTexta.value=oText.value='';
   	  	    window.localStorage.setItem('textaa',oTexta.value);
   	  	    window.localStorage.setItem('textt',oText.value);
   	         setTimeout(function(){
   	         	oCon.style.display='none';
   	         	oFan.style.display='block';
   	         },1000)
   	  }else{
   	  	 oText.style.border='1px solid #f0572b';
   	  	 oTexta.style.border='1px solid #f0572b';
   	  }
});


}
