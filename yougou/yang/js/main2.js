$(function() {
	$('.p-num').val(1);
	var time = null;
	var price, total = 0;
	$('.total-price').html('￥' + 0);
	$('.p-total-price').html('￥' + 0);
	for (var i = 0; i < $('.l-minus').get().length; i++) {
		$('.l-minus').get(i).index = i;
		$('.p-num').get(i).index = i;
		$('.r-add').get(i).index = i;
		$('.price').get(i).index = i;
		$('.sum').get(i).index = i;
		$('.close').get(i).index = i;
		$('.box').get(i).index = i;
		$('.select').get(i).index = i;
		//输入框内容改变时
		$('.p-num').get(i).onchange = function() {
				if (parseInt(this.value) > 1) {
					$('.l-minus').eq(this.index).css('cursor', 'pointer');
				} else {
					this.value = 1;
					$('.l-minus').eq(this.index).css('cursor', 'no-drop');

				}
				price = parseInt($('.price').eq(this.index).text().substring(1));
				$('.sum').eq(this.index).html('¥' + price * parseInt(this.value));
				//				求总价格
				total = 0;
				$('.sum').each(function() {
					total += parseInt($(this).text().substring(1));
				});
				$('.total-price').html('￥' + total);
				$('.p-total-price').html('￥' + total);
			}
			//减少数量
		$('.l-minus').get(i).onclick = function() {
				var temp1 = $('.p-num').eq(this.index).val();
				if (temp1 == 1) {
					$('.num-tip').css('opacity', 0);
					$('.num-tip').css('display', 'block');
					$('.num-tip').animate({
						opacity: 0.8
					}, 60);
					$(this).css('cursor', 'no-drop');
					clearTimeout(time);
					time = setTimeout(function() {
						$('.num-tip').css('display', 'none');
					}, 3000);
					return;
				}
				temp1--;
				$('.p-num').eq(this.index).val(temp1);
				price = parseInt($('.price').eq(this.index).text().substring(1));
				$('.sum').eq(this.index).html('¥' + price * temp1); //单件总价
				//				求总价格
				total = 0;
				$('.sum').each(function() {
					total += parseInt($(this).text().substring(1));
				});
				$('.total-price').html('￥' + total);
				$('.p-total-price').html('￥' + total);
			}
			//增加数量
		$('.r-add').get(i).onclick = function() {
				$('.l-minus').eq(this.index).css('cursor', 'pointer');
				var temp2 = $('.p-num').eq(this.index).val();
				temp2++;
				$('.p-num').eq(this.index).val(temp2);
				price = parseInt($('.price').eq(this.index).text().substring(1));
				$('.sum').eq(this.index).html('¥' + price * temp2);
				//		求总价格
				total = 0;
				$('.sum').each(function() {
					total += parseInt($(this).text().substring(1));
				});
				$('.total-price').html('￥' + total);
				$('.p-total-price').html('￥' + total);
			}
			//			删除收藏商品
		$('.close').get(i).onclick = function() {
			$('.box').eq(this.index).css('display', 'none');
			$('.select').get(this.index).checked=false;
			if(!restBox()){
				$('.empty').css('display', 'block');
				$('.banner-title').css('display', 'none');
				$('.aword').css('display', 'none');
				$('.p-del-total').css('display', 'none');
			}
		}
	}
	var flag = true;
	for (var i = 0; i < $('.cb').get().length; i++) {
		$('.cb').get(i).checked = false;
	}
	//		顶部全选
	$('.selall').click(function() {
		if (flag) {
			for (var i = 0; i < $('.cb').get().length; i++) {
				$('.cb').get(i).checked = true;
			}
			total = 0;
			$('.sum').each(function() {
				total += parseInt($(this).text().substring(1));
			});
			$('.total-price').html('￥' + total);
			$('.p-total-price').html('￥' + total);
		} else {
			for (var i = 0; i < $('.cb').get().length; i++) {
				$('.cb').get(i).checked = false;
			}
			$('.total-price').html('￥' + 0);
			$('.p-total-price').html('￥' + 0);
		}
		flag = !flag;
	});
	//		商品选择复选框
	var temp3;
	$('.select').click(function() {
		
		if (!$(this).get(0).checked) {
			temp3 = parseInt($('.total-price').text().substring(1)) - parseInt($('.sum').eq(this.index).text().substring(1));
			$('.selall').get(0).checked = false;
			$('.selall').get(1).checked = false;
		} else {
			temp3 = parseInt($('.total-price').text().substring(1)) + parseInt($('.sum').eq(this.index).text().substring(1));
			var k,selNum=0;
			for (k = 0; k < $('.select').get().length; k++) {
				if ($('.select').get(k).checked) {
					selNum++;
				}
			}
//			alert('k='+k)
//			alert('sest='+restBox())
			if (selNum == restBox()) {
				$('.selall').get(0).checked = true;
				$('.selall').get(1).checked = true;
			}
		}
		$('.total-price').html('￥' + temp3);
		$('.p-total-price').html('￥' + temp3);
	});
	//		商品删除提示框弹出
	var time1=null;
	$('.del-by-sel').click(function() {
		var n;
		for (n = 0; n < $('.select').get().length; n++) {
			if ($('.select').get(n).checked) {
				break;
			}
		}
		if (n == $('.select').get().length) {			
			$('.choose-commodity-tip').css('display', 'block');
			$('.choose-commodity-tip').css('opacity', 0);
			$('.choose-commodity-tip').animate({
				opacity: .8
			}, 60);
			clearTimeout(time1);
			time1 = setTimeout(function() {
				$('.choose-commodity-tip').css('display', 'none');
			}, 3000);
			return;
		}
		$('.del-box-tip').css('display', 'block');
		$('.p-del-box-tip').css('display', 'block');
	});
	//		商品删除提示框确定按钮
	function restBox(){
		var len=0;
//		for(var a=0;a<$('.box').get().length;a++){
//			if($('.box').css('display')=='block'){
//				len++;
//			}
//		}
		$('.box').each(function(){
			if($(this).css('display')=='block'){
				len++;
			}
		});
		return len;
	}
//	确定按钮
	$('.ok').click(function() {
		for (var i = 0; i < $('.select').get().length; i++) {
			if ($('.select').get(i).checked) {
				$('.box').eq($('.select').get(i).index).css('display', 'none');
				$('.select').get(i).checked=false;
			}		
		}
		
		if(!restBox()){
			$('.empty').css('display', 'block');
			$('.banner-title').css('display', 'none');
			$('.aword').css('display', 'none');
			$('.p-del-total').css('display', 'none');
			
		}
		$('.box').css('margin-bottom',10);
		$('.del-box-tip').css('display', 'none');
		$('.p-del-box-tip').css('display', 'none');
		$('.total-price').html('￥' + 0);
		$('.p-total-price').html('￥' + 0);
	});
	//		商品删除提示框取消按钮
	$('.cancel').click(function() {
		$('.del-box-tip').css('display', 'none');
		$('.p-del-box-tip').css('display', 'none');
	});

	//		商品删除提示框消失
	$('.close-box').click(function() {
		$('.del-box-tip').css('display', 'none');
		$('.p-del-box-tip').css('display', 'none');
	});
});