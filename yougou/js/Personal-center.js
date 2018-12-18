/** js document
 * 个人信息(我的优购)
 *  
 * @author xiaojun
 * @since 2017/04/24
 */
//查询已登陆账号用户名
db.transaction(function(contex) {
	contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
		var len = results.rows.length,
			i;
			//创建已登陆的数据表
		//登陆后显示用户名
		$('#name').text(results.rows.item(0).userid);
		$('#namefoo').text(results.rows.item(0).userid);
		$('#integral').text(results.rows.item(0).integral);
		if($('#integral').text()=='null'){
			$('#integral').text(100);
			contex.executeSql("update loginfo set integral=100 where userid ='" + results.rows.item(0).userid + "'");
		}
	});
});
//关闭头部广告
$('#close').on('click', function() {
	$('#downApp').remove();
	
});