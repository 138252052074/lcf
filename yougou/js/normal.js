//将body的高度跟设备可视区高度一致
document.body.style.height = view().h + "px";
//绑定事件
function bind(obj, ev, fn) {
	//事件绑定兼容性处理
	if (obj.addEventListener) {
		obj.addEventListener(ev, fn, false);
	} else {
		obj.attachEvent('on' + ev, function() {
			fn.call(obj);
		});
	}
}

function view() {
	//获取可视区的宽高，json形式
	return {
		w: document.documentElement.clientWidth,
		h: document.documentElement.clientHeight
	};
}
//点击，导航栏出现
$('#menu').click(function(){
	if($('#nav').css('display')=='block'){
		$('#nav').css('display','none');
	}else{
		$('#nav').css('display','block');
	}
});
//查询已登陆账号用户名
var susername = new String;
db.transaction(function(contex) {
	contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
		var len = results.rows.length,
			i;
		susername = results.rows.item(0).userid;
	});
});
//点击退出登陆
$('#SignOut').on('touchend',function(){
	db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
			contex.executeSql("update loginfo set state=0 where userid ='" + susername + "'");
		});
	});
});