/*
 * liujian
 */
//创建数据库
var db=openDatabase('yougou','1.0','yougoudata',2*1024*1024);

//删除数据表
//db.transaction(function (contex){
//	contex.executeSql('drop table proLink');
//	contex.executeSql('drop table loginfo');
//	contex.executeSql('drop table Landed');
//	contex.executeSql('drop table searHistory');
//});

//创建数据表
db.transaction(function (contex){
	contex.executeSql('create table if not exists loginfo(userid,pwd,state,tel,sex,birth,address,deliveryAddr,integral,signdata,registertime)');
});

db.transaction(function (contex){
	contex.executeSql('create table if not exists searHistory(title)');
});

db.transaction(function (contex){
	contex.executeSql('create table if not exists proLink(title,proimg,nowprice,oldprice)');
});



//删除数据表数据
//db.transaction(function (contex){
//	contex.executeSql('delete from loginfo');
//});
/*
 * liujian
 */

