/** js document
 * 添加收货地址
 *  
 * @author xiaojun
 * @since 2017/04/24
 */
//编辑为1  新增为2
var edOad = 0;
//编辑的地址.addressbox对象
var oEdobj = new Object;
//编辑的地址.addressbox对象的index
var nEdobjIndex = 0;
//删除的地址.addressbox对象的index
var nDelobjIndex = 0;
//点击选择默认地址.addressbox对象的index
var nClickDefault = 0;
//查询已登陆账号用户名
var susername = new String;
db.transaction(function(contex) {
	contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
		var len = results.rows.length,
			i;
		susername = results.rows.item(0).userid;
	});
});
//打开已登陆账号表
db.transaction(function(contex) {
	contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
		var len = results.rows.length,
			i;
		var arr = results.rows.item(0).deliveryAddr.split('/');
		if (arr.length == 1) {
			clearinput();
			edOad = 2;
			//没有收货地址 添加新地址
			$('#addresslist').css('display', 'none');
			$('#newaddress').css('display', 'block');
		} else {
			//存在收货地址 显示已有地址
			$('#newaddress').css('display', 'none');
			$('#addresslist').css('display', 'block');
			//去除最后一个空的
			arr.pop();
			for (var i = 0; i < arr.length; i++) {
				arr[i].split(',');
				var name = arr[i].split(',')[0];
				var tel = arr[i].split(',')[1];
				var region = arr[i].split(',')[3];
				var address = arr[i].split(',')[4];
				if (arr[i].split(',')[2] == 1) {
					$('#addresslistinfo').get(0).innerHTML += '<div class="addressbox"><ul><li><span>' + name + '</span><span>' + tel + '</span></li><li><span>' + region + '</span><span>' + address + '</span></li></ul><p><a href="###" class="edit">编辑</a><a href="###" class="del">删除</a><label class="isdefault">设为默认地址</label></p></div>';
				} else {
					$('#addresslistinfo').get(0).innerHTML += '<div class="addressbox"><ul><li><span>' + name + '</span><span>' + tel + '</span></li><li><span>' + region + '</span><span>' + address + '</span></li></ul><p><a href="###" class="edit">编辑</a><a href="###" class="del">删除</a><label>设为默认地址</label></p></div>';
				}
			}
		}
	});
});
//设定默认地址
$('#addresslist').on('touchend', 'label', function() {
	$('#addresslist').find('label').each(function() {
		$(this).removeClass();
	});
	$(this).addClass('isdefault');
	//获取当前设置为默认地址的index
	nClickDefault = $(this).closest('.addressbox').index();
	db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
			var len = results.rows.length,i;
			var arr = results.rows.item(0).deliveryAddr.split('/');
			arr.pop();
			var arr1=[];
			for(var i=0;i<arr.length;i++){
				var arr2=arr[i].split(',');
				if(nClickDefault==i){
					//1为默认地址
					arr2[2]='1';
				}else{
					//0为不是默认地址
					arr2[2]='0';
				}
				arr1.push(arr2.join(','));
			}
			var sAddress=arr1.join('/');
			sAddress=sAddress+'/';
			contex.executeSql("update loginfo set deliveryAddr=? where userid ='" + susername + "'", [sAddress], null, null);
		});
	});
});
//地址点击删除
$('#addresslistinfo').on('click', '.del', function() {
	nDelobjIndex = $(this).closest('.addressbox').index();
	delsite();
	update();
	$(this).closest('.addressbox').remove();
	db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
			var len = results.rows.length,
				i;
			var arr = results.rows.item(0).deliveryAddr.split('/');
			if (arr.length == 1) {
				clearinput();
				edOad = 2;
				//没有收货地址 添加新地址
				$('#addresslist').css('display', 'none');
				$('#newaddress').css('display', 'block');
			}
		});
	});
});
//地址点击编辑
$('#addresslistinfo').on('click', '.edit', function() {
	//获取当前需要编辑地址信息
	editsite($(this).closest('.addressbox'));
	edOad = 1;
	oEdobj = $(this).closest('.addressbox');
	nEdobjIndex = $(this).closest('.addressbox').index();
	$('#addresslist').css('display', 'none');
	$('#newaddress').css('display', 'block');
});
//保存地址
$('#keepaddress').on('touchend', function() {
	if (check('请填写完整的地址信息', '联系电话有误，请重填')) {
		if (edOad == 1) {
			//编辑后修改地址列表  写入需要编辑的.addressbox元素
			addnewsite(oEdobj);
		} else if (edOad == 2) {
			//添加地址到地址列表
			addnewsite();
		}
		clearinput();
		$('#newaddress').css('display', 'none');
		$('#addresslist').css('display', 'block');
	}
});
//添加新地址
$('#AddNewAddress').on('touchend', function() {
	clearinput();
	edOad = 2;
	$('#addresslist').css('display', 'none');
	$('#newaddress').css('display', 'block');
});
//地址点击编辑清除函数
function clearinput() {
	$('#newaddress').find('input').val('');
}
//保存地址验证
function check(notice1, notice2) {
	var btag = true;
	$('#newaddress').find('input').each(function(i) {
		//验证是否填写完整
		if ($(this).val() == '') {
			$('#notice').text(notice1);
			$('#notice').css('display', 'block');
			setTimeout(function() {
				$('#notice').css('display', 'none');
			}, 1000);
			btag = false;
			return false;
		}
		//验证电话是否有误
		if (i == 1) {
			var re = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
			var sSingin = $(this).val();
			if (!re.test(sSingin)) {
				$('#notice').text(notice2);
				$('#notice').css('display', 'block');
				setTimeout(function() {
					$('#notice').css('display', 'none');
				}, 1000);
				btag = false;
				return false;
			}
		}
	});
	if (btag) {
		return true;
	}
}
//(不写入edit)添加地址到地址列表
//(写入edit)编辑后修改地址列表  写入需要编辑的.addressbox元素
function addnewsite(edit) {
	var name = $('#newaddress').find('input').eq(0).val();
	var tel = $('#newaddress').find('input').eq(1).val();
	var region = $('#newaddress').find('input').eq(2).val();
	var address = $('#newaddress').find('input').eq(3).val();
	db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
			var len = results.rows.length,
				i;
			if (edit) {
				//编辑
				edit.get(0).innerHTML = '<ul><li><span>' + name + '</span><span>' + tel + '</span></li><li><span>' + region + '</span><span>' + address + '</span></li></ul><p><a href="###" class="edit">编辑</a><a href="###" class="del">删除</a><label>设为默认地址</label></p>';
				//编辑修改数据表
				var arr = results.rows.item(0).deliveryAddr.split('/');
				arr[nEdobjIndex] = name + ',' + tel + ',' + '0,' + region + ',' + address;
				var sAddress = arr.join('/');
			} else {
				//新添加
				$('#addresslistinfo').get(0).innerHTML += '<div class="addressbox"><ul><li><span>' + name + '</span><span>' + tel + '</span></li><li><span>' + region + '</span><span>' + address + '</span></li></ul><p><a href="###" class="edit">编辑</a><a href="###" class="del">删除</a><label>设为默认地址</label></p></div>';
				//将数据插入数据表
				var sAddress = results.rows.item(0).deliveryAddr + name + ',' + tel + ',' + '0,' + region + ',' + address + '/';
			}
			contex.executeSql("update loginfo set deliveryAddr=? where userid ='" + susername + "'", [sAddress], null, null);
		});
	});
	update();
}
//获取当前需要编辑地址信息
//写入需要编辑的.addressbox元素
function editsite(edit) {
	var name = edit.find('span').eq(0).text();
	var tel = edit.find('span').eq(1).text();
	var region = edit.find('span').eq(2).text();
	var address = edit.find('span').eq(3).text();
	$('#newaddress').find('input').eq(0).val(name);
	$('#newaddress').find('input').eq(1).val(tel);
	$('#newaddress').find('input').eq(2).val(region);
	$('#newaddress').find('input').eq(3).val(address);
}
//删除地址
function delsite() {
	db.transaction(function(contex) {
		contex.executeSql('SELECT * FROM Landed', [], function(tx, results) {
			var len = results.rows.length,
				i;
			var arr = results.rows.item(0).deliveryAddr.split('/');
			arr.splice(nDelobjIndex, 1);
			var sAddress = arr.join('/');
			contex.executeSql("update loginfo set deliveryAddr=? where userid ='" + susername + "'", [sAddress], null, null);
		});
	});
}