window.onload = function() {
	var oJia = document.getElementById('jia');
	var oJian = document.getElementById('jian');
	var oInput = document.getElementById('input');
	var aPrice = document.getElementById('price');
	var oshopcart_sp = document.getElementById('shopcart_sp');
	var oshopcart_spp = document.getElementById('shopcart_spp');
	var oinfo_span = document.getElementById('info_span');
	var oshopcart = document.getElementById('shopcart');
	var ozeng = document.getElementById('zeng');
	var ofoo_sp = document.getElementById('foo_sp');
	var oCol = document.getElementById('col');
	var OSize = document.getElementById('Size');
	var oG_img = document.getElementById('g_img');
	var ozongjia = document.getElementById('zongjia');
	var oAa = document.getElementById('aa');
	// 读取本地储存的数据
	var oColor = window.localStorage.getItem('color');
	var oSize = window.localStorage.getItem('size');
	var oTupian = window.localStorage.getItem('tupian');
	var oPrice = window.localStorage.getItem('Price');
	oCol.innerHTML = oColor;
	OSize.innerHTML = oSize;
	oG_img.src = oTupian;
	aPrice.innerHTML = oPrice;
	ozongjia.innerHTML = oPrice;
	var num = 1;
	oAa.innerHTML = 1;
	//  数量累加
	oJia.addEventListener('touchstart', function() {
		if(parseInt(oInput.value) > 0) {
			num++;
			oInput.value = num;
			ozongjia.innerHTML = (oInput.value * aPrice.innerHTML);
			oAa.innerHTML = oInput.value;
		}
	});
	//  数量累减
	oJian.addEventListener('touchstart', function() {
		if(parseInt(oInput.value) > 1) {
			num--;
			oInput.value = num;
			ozongjia.innerHTML = (oInput.value * aPrice.innerHTML);
			oAa.innerHTML = oInput.value;
		}
		//		else if(parseInt(oInput.value) <=1){
		//		}
	});
	// 去结算	
	var obtn3 = document.getElementById('btn3');
	obtn3.addEventListener('touchstart', function() {
		window.localStorage.setItem('zongprice', ozongjia.innerHTML);
		window.localStorage.setItem('numpirce', oAa.innerHTML);
		obtn3.href='jiesuan.html';
		oshopcart.style.display='block';
	});
	//  触摸事件
	oshopcart_sp.addEventListener('touchstart', function() {
		if(oshopcart_sp.checked == false) {
			oshopcart_spp.checked = true;
//       oshopcart_sp.style.background='';
			ozeng.style.display = 'block';
		} else {
			oshopcart_spp.checked = false;
//			oshopcart_sp.style.background='';
			ozeng.style.display = 'none';
		}
		return false;
	});
	var oKong=document.getElementById('kong');
	oinfo_span.addEventListener('touchstart', function() {
		oshopcart.style.display = 'none';
		window.location.href='kong.html';
        ozongjia.innerHTML=0;
        oAa.innerHTML = 0;
	});
	ofoo_sp.addEventListener('touchstart', function() {
		if(ofoo_sp.checked == false) {
			oshopcart_spp.checked = true;
			oshopcart_sp.checked = true;
		} else {
			oshopcart_spp.checked = false;
		}
		return false;
	});
}