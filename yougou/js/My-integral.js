/** js document
 * 签到页面
 *  
 * @author xiaojun
 * @since 2017/04/26
 */
//积分
var sIntegrallist = new String;
//查询已登陆账号用户名||添加积分来源及时间
db.transaction(function(contex) {
	contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
		var len = results.rows.length,
			i;
		$('#namefoo').text(results.rows.item(0).userid);
		//初始化积分
		$('#myScoreCount').text(results.rows.item(0).integral);
		sIntegrallist=results.rows.item(0).registertime;
		var arr = sIntegrallist.split('/');
		arr.pop();
		if(arr.length==1){
			addScorelist(arr[0],1);
		}else{
			
			addScorelist(arr[0],1);
			for(var i=1;i<arr.length;i++){
				addScorelist(arr[i],0);
			}
		}
	});
});
//积分详情
function addScorelist(time,register){
	if (register) {
		var oLi = $('<li><p><span>注册成功送积分 100</span><span>'+time+'</span></p><p><span><em>+100</em>积分</span></p></li>');
		
	}else{
		var oLi = $('<li><p><span>无线端签到领积分</span><span>'+time+'</span></p><p><span><em>+5</em>积分</span></p></li>');
	}
	oLi.prependTo($('#scorelist'));
}
