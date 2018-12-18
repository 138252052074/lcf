function getStyle(obj, name) {
	//获取非行间样式：currentStyle兼容ie，getComputedStyle兼容非IE.
	//各个浏览器的兼容问题，内核
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, json, time, fnend) {
	//obj对象, attr属性, iTarget目标值
	//startMove()
	//startMove(iTarget)
	//startMove(obj,iTarget)  int 整数 float浮点数
	//startMove(obj,attr,iTarget) 任意对象，任意属性都可以使用
	clearInterval(obj.timer); //关闭该定时器
	obj.timer = setInterval(function() {

		var bstop = true;

		for (var attr in json) {
			var cur = 0;

			if (attr == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				cur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if (cur != json[attr]) { //如果还没有达到目标值，继续循环
				bstop = false;
			} else {
				bstop = true;
			}

			//			if (cur == iTarget) {
			//				clearInterval(obj.timer);
			//				if (fnend) fnend(); //当上一个运动达到目标，判断有没有回调函数，有的话继续执行
			//			} 
			//			else {
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;

				//					document.getElementById('txt1').value = obj.style.opacity;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
			//			}
		}

		if (bstop) {
			clearInterval(obj.timer);

			if (fnend) fnend();
		}

	}, time);
}

//随机数方法封装
function GetRandomNum(Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}

function getByclass(oParent, sclass) {
	//封装好的函数：可以通过类名查找元素们
	var aResult = []; //定义一个空数组，用来存储标签
	var aEles = oParent.getElementsByTagName('*');
	//循环判断标签的类名是否与传入的实参相同，相同则加到数组中
	for (var i = 0; i < aEles.length; i++) {
		if (aEles[i].className == sclass) {
			aResult.push(aEles[i]);
		}
	}

	return aResult;
}



	// 如何解决 getElementsByClassName 兼容问题  
    function getByClass(className, obj) {  
        obj = obj || document;  

        if (obj.getElementsByClassName) // 支持 getElementsByClassName 方法的使用  
            return obj.getElementsByClassName(className);  
        /* 不支持 getElementsByClassName 方法的使用 */  
        // 保存所有查找到的元素的数组结构  
        var result = [];   
        // 查找出 obj 对象后代所有元素  
        var tags = obj.getElementsByTagName("*");  
        // 遍历每个元素  
        for (var i = 0, len = tags.length; i < len; i++) {  
            // 获取到当前遍历元素所使用的所有类名  
            var classNames = tags[i].className.split(" ");  
            // 遍历当前元素的每个类名  
            for (var j = 0, l = classNames.length; j < l; j++) {  
                if ( classNames[j] === className ) { // 说明当前遍历到的元素使用过要查找的类名  
                    result.push(tags[i]);  
                    break;  
                }  
            }  
        }  
      
        // 返回结果集  
        return result;  
    }  