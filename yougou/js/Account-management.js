/** js document
 * 账号管理
 *  
 * @author xiaojun
 * @since 2017/04/24
 */
//设置基本个人信息
db.transaction(function(contex) {
	contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
		var len = results.rows.length,
			i;
		$('#username').text(results.rows.item(0).userid);
		$('#namefoo').text(results.rows.item(0).userid);
		if (results.rows.item(0).sex !== 'null') {
			$('#sex a').text(results.rows.item(0).sex);
		}
		if (results.rows.item(0).birth !== 'null') {
			$('#my-input').val(results.rows.item(0).birth);
		}
		if (results.rows.item(0).address !== 'null') {
			$('#city-picker').val(results.rows.item(0).address);
		}
	});
});
//生日及地区发生改变
fnChange($('#my-input'),'birth');
fnChange($('#city-picker'),'address');
function fnChange(obj, field) {
	obj.on('change', function() {
		db.transaction(function(contex) {
			contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
				var len = results.rows.length,i;
				var selects=obj.val();
				contex.executeSql("update loginfo set '"+field+"'=? where userid ='" + results.rows.item(0).userid + "'", [selects], null, null);
			});
		});
	});
}
//性别发生改变
function fnChangetest(field,info) {
		db.transaction(function(contex) {
			contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
				var len = results.rows.length,i;
				contex.executeSql("update loginfo set '"+field+"'=? where userid ='" + results.rows.item(0).userid + "'", [info], null, null);
			});
		});
}


//显示用户名
var oUser=document.getElementById('user');
var oSignOut=document.getElementById('signout');
fnSignIn();
function fnSignIn(){
	var result=true;
	var index=0;
	db.transaction(function (contex){
		contex.executeSql('select * from loginfo',[],function(con,data){
			var len=data.rows.length,i;
			for(var i=0;i<len;i++){
				if(data.rows.item(i).state=='1'){
					result=true;
					index=i;
					break;
				}
				else{
					result=false;
				}
			}
			console.log(index);
			if(result){
				oUser.innerHTML=data.rows.item(index).userid;
				oUser.href='index.html';
				oSignOut.innerHTML='退出';
				oSignOut.href='index.html';
			}
		});
	});
}
//用户退出
oSignOut.addEventListener('touchstart',fnSignOut,false);
function fnSignOut(){
	db.transaction(function (contex){
		contex.executeSql('update loginfo set state="0"');
		window.location='lo_re.html';
		oUser.innerHTML='请登录';
		oSignOut.innerHTML='注册'
	});
}