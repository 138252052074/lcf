/** js document
 * 创建已登陆的账号的信息
 *  
 * @author xiaojun
 * @since 2017/04/24
 */
//创建数据库
var db = openDatabase('yougou', '1.0', 'yougoudata', 2 * 1024 * 1024);
//创建数据表
db.transaction(function(contex) {
	//													账号，密码，状态(0离线，1登陆),电话，性别，生日，地区，地址   ,积分,     签到日期         注册日期
	contex.executeSql('create table if not exists loginfo(userid,pwd,state,tel,sex,birth,address,deliveryAddr,integral,signdata,registertime)');
});
//删除数据表
db.transaction(function (contex){
	contex.executeSql('drop table Landed');
});
//创建已登陆账号表
db.transaction(function(contex) {
	//													账号，密码   ,电话，性别，生日，地区，地址
	contex.executeSql('create table if not exists Landed(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata,registertime)');
});
//初始化数据表
db.transaction(function(contex) {
	contex.executeSql('delete from Landed');
});
//查询已登陆账号用户名
db.transaction(function(contex) {
	contex.executeSql('delete from Landed');
	contex.executeSql('SELECT * FROM loginfo', [], function(tx, results) {
		var len = results.rows.length,
			i;
		for (i = 0; i < len; i++) {
			if (results.rows.item(i).state == 1) {
				contex.executeSql('insert into Landed(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata,registertime) values("' + results.rows.item(i).userid + '","' + results.rows.item(i).pwd + '","' + results.rows.item(i).tel + '","' + results.rows.item(i).sex + '","' + results.rows.item(i).birth + '","' + results.rows.item(i).address + '","' + results.rows.item(i).deliveryAddr + '","' + results.rows.item(i).integral + '","' + results.rows.item(i).signdata + '","' + results.rows.item(i).registertime + '")');
				return;
			}
		}
	});
});

function update() {
	db.transaction(function(contex) {
		contex.executeSql('delete from Landed');
		contex.executeSql('SELECT * FROM loginfo', [], function(tx, results) {
			var len = results.rows.length,
				i;
			for (i = 0; i < len; i++) {
				if (results.rows.item(i).state == 1) {
					contex.executeSql('insert into Landed(userid,pwd,tel,sex,birth,address,deliveryAddr,integral,signdata,registertime) values("' + results.rows.item(i).userid + '","' + results.rows.item(i).pwd + '","' + results.rows.item(i).tel + '","' + results.rows.item(i).sex + '","' + results.rows.item(i).birth + '","' + results.rows.item(i).address + '","' + results.rows.item(i).deliveryAddr + '","' + results.rows.item(i).integral + '","' + results.rows.item(i).signdata + '","' + results.rows.item(i).registertime + '")');
					return;
				}
			}
		});
	});
}