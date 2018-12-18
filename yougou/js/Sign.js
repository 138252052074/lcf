/** js document
 * 签到页面
 *  
 * @author xiaojun
 * @since 2017/04/25
 */
//已签到天数
var aSignData = [];
//积分
var sIntegral = new String;
//签到时间
var nSigntime=new String;
//查询已登陆账号用户名
db.transaction(function(contex) {
	contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
		var len = results.rows.length,
			i;
		$('#namefoo').text(results.rows.item(0).userid);
		aSignData = results.rows.item(0).signdata.split('/');
		aSignData.pop();
		//初始化连续签到
		$('#signday').text(continueSign(aSignData)-1);
		//初始化积分
		$('#myScoreCount').text(results.rows.item(0).integral);
		sIntegral=results.rows.item(0).integral;
	});
});
//打开签到
$('#signClick').on('touchstart', function() {
	$('#data').css('display', 'block');

	$('#my-input').find('.toolbar').css('display', 'none');
	
	//签到打钩
	$('#my-input').find('.picker-calendar-month-current[data-month="' + new Date().getMonth() + '"] div').each(function() {
		//div的属性15号的div对应15
		var ndataday=$(this).attr('data-day');
		//今天签到
		if ($(this).hasClass('picker-calendar-day-today')) {
			//添加span标签，签到打钩
			addSign($(this));
			//今天签到插入数据表
			db.transaction(function(contex) {
				contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
					var len = results.rows.length,i;
					//插入签到
					var sSignData=results.rows.item(0).signdata+ndataday+'/';
					contex.executeSql("update loginfo set signdata=? where userid ='" + results.rows.item(0).userid + "'", [sSignData], null, null);
					//添加积分+5,插入数据表
					$('#myScoreCount').text(sIntegral);
					contex.executeSql("update loginfo set integral=? where userid ='" + results.rows.item(0).userid + "'", [sIntegral], null, null);
					//连续签到
					var arr=sSignData.split('/');
					arr.pop();
					$('#signday').text(continueSign(arr));
					//添加签到时间
					var sSigntime = results.rows.item(0).registertime + nSigntime + '/';
					contex.executeSql("update loginfo set registertime=? where userid ='" + results.rows.item(0).userid + "'", [sSigntime], null, null);
				});
			});
		}
		//本月往日已签到打钩
		for (var i = 0; i < aSignData.length; i++) {
			//排除上个月的和下个月的
			var bthismonth=$(this).hasClass('picker-calendar-day-prev') || $(this).hasClass('picker-calendar-day-next');
			if(!bthismonth){
				if (ndataday == "" + aSignData[i] + "") {
					addSign($(this));
				}
			}
		}
	});
});
//关闭签到
$('#clsdata').on('touchstart', function() {
	$('#data').css('display', 'none');
	$('#signState').text('已签到');
});
//判断 下个月，签到日期清空
clearsign();
function clearsign(){
	db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
			var len = results.rows.length,i;
			var arr=results.rows.item(0).registertime.split('/');
			arr.pop();
			if(arr.length!==1){
				if((new Date().getMonth()+1)!==parseInt(arr[arr.length-1].split('-')[1])){
					contex.executeSql("update loginfo set signdata=? where userid ='" + results.rows.item(0).userid + "'", [''], null, null);
				}
			}
		});
	});
}
//添加span标签，签到打钩
function addSign(obj) {
	if (obj.children().length == 1) {
		var oEm = $('<em class="signtoday"></em>');
		obj.css('position', 'relative');
		oEm.css('position', 'absolute');
		oEm.css('display', 'block');
		oEm.css('width', '100%');
		oEm.css('height', '100%');
		oEm.css('background', 'url(img/04Sign/check.png) no-repeat');
		oEm.css('opacity', '0.8');

		oEm.appendTo(obj);
		
		//添加积分+5,插入数据表
		sIntegral=parseInt(sIntegral)+5;
		
		//返回签到时间
		var year=new Date().getFullYear();
		var month=new Date().getMonth()+1;
		var dates=new Date().getDate();
		var hours=new Date().getHours();
		var minutes=new Date().getMinutes();
		var seconds=new Date().getSeconds();
		nSigntime=year+'-'+repairZore(month)+'-'+repairZore(dates)+' '+repairZore(hours)+':'+repairZore(minutes)+':'+repairZore(seconds);
	}
}
//补零
function repairZore(num){
	if(num<10){
		return '0'+num;
	}else{
		return num;
	}
}
//连续签到
function continueSign(arr){
	var nContinueDay=1;
	for(var i=arr.length-2;i<arr.length;i--){
		if(arr[i+1]-arr[i]==1){
			nContinueDay++;
		}else{
			return nContinueDay;
		}
	}
}
