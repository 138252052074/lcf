$(function(){
	$.ajax({
		type:"get",
		url:"js/json/1nanxie.json",
		async:true,
		dataType:"json",
		success:function(data){
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#nvx').html(img);
			var title='';
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#nvx').html($('#nvx').html()+title);
			$('#nnx').html($('#nnx').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="/yougou/manshose.html"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#nvx').find('ul').eq(i).html($('#nvx').find('ul').eq(i).html()+html);
				$('#nvx').find('ul').eq(i).addClass('clear');
				$('#nnx').find('ul').eq(i).html($('#nnx').find('ul').eq(i).html()+html);
				$('#nnx').find('ul').eq(i).addClass('clear');
			}
		},
	});
});


$(function(){
	$.ajax({
		type:"get",
		url:"js/json/2yundong.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#yd').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#yd').html($('#yd').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#yd').find('ul').eq(i).html($('#yd').find('ul').eq(i).html()+html);
				$('#yd').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/3huwai.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#hw').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#hw').html($('#hw').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#hw').find('ul').eq(i).html($('#hw').find('ul').eq(i).html()+html);
				$('#hw').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/4nanzhuang.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#nnz').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#nnz').html($('#nnz').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#nnz').find('ul').eq(i).html($('#nnz').find('ul').eq(i).html()+html);
				$('#nnz').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/5nvzhuang.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#nvz').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#nvz').html($('#nvz').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#nvz').find('ul').eq(i).html($('#nvz').find('ul').eq(i).html()+html);
				$('#nvz').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/6xiangbao.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#xb').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#xb').html($('#xb').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#xb').find('ul').eq(i).html($('#xb').find('ul').eq(i).html()+html);
				$('#xb').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/7yunyingtong.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#txtz').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#txtz').html($('#txtz').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#txtz').find('ul').eq(i).html($('#txtz').find('ul').eq(i).html()+html);
				$('#txtz').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/8huazhuangpin.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#hzp').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#hzp').html($('#hzp').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#hzp').find('ul').eq(i).html($('#hzp').find('ul').eq(i).html()+html);
				$('#hzp').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/9quanbupinpai.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#qbpp').html(title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#qbpp').find('ul').eq(i).html($('#qbpp').find('ul').eq(i).html()+html);
				$('#qbpp').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

$(function(){
	$.ajax({
		type:"get",
		url:"js/json/10zhuanguitongkuan.json",
		async:true,
		dataType:"json",
		success:function(data){
			var title='';
			var img='<img class="t" src="'+data.ads[0].imgUrl+'"/>';
			$('#zgtk').html(img);
			for(var i=0;i<data.cls.length;i++){
				title+='<div><p>'+data.cls[i].name+'</p><ul></ul></div>';
			}
			$('#zgtk').html($('#zgtk').html()+title);
			for(var i=0;i<data.cls.length;i++){
				var html='';
				for(var j=0;j<data.cls[i].thrCls.length;j++){
					html+='<li><a href="javhascript:"><img src="'+data.cls[i].thrCls[j].pic+'"/><span>'+data.cls[i].thrCls[j].name+'</span></a></li>';
				}
				$('#zgtk').find('ul').eq(i).html($('#zgtk').find('ul').eq(i).html()+html);
				$('#zgtk').find('ul').eq(i).addClass('clear');
			}
		},
	});
});

var oLaside=document.getElementById('l_aside');
var oLasideLi=oLaside.getElementsByTagName('li');
var oRaide=document.getElementById('r_aside');
var oRasideDiv=oRaide.getElementsByClassName('r_div');

for(var i=0;i<oLasideLi.length;i++){
	oLasideLi[i].index=i;
	oLasideLi[i].addEventListener('touchstart',function(){
		for(var j=0;j<oLasideLi.length;j++){
			oLasideLi[j].className='';
			oRasideDiv[j].style.display='none';
		}
		this.className='active3';
		oRasideDiv[this.index].style.display='block';
	},false);
}

oLaside.style.height=document.documentElement.getBoundingClientRect().height+1000+'px';

//搜索框
var oSearchInp2=document.getElementById('search_inp2');
var oFenlei=document.getElementById('fenlei');
var oIndexSearch=document.getElementById('indexSearch');
oSearchInp2.addEventListener('focus',function(){
	oFenlei.style.display='none';
	oIndexSearch.style.display='block';
},false);


//搜索框
var oCLearInp=document.getElementById('clear_inp');
var oSearchInp1=document.getElementById('search_inp1');
var oSearchResult=document.getElementById('search_result');
var oSearchHot=document.getElementById('search_hot');
var oSearchHistory=document.getElementById('search_history');
oCLearInp.addEventListener('touchstart',fnClear,false);

function fnClear(){
	oSearchInp1.value='';
	oSearchResult.style.display='none';
	oSearchHot.style.display='block';
	oSearchHistory.style.display='block';
}

var oSearchCLose=document.getElementById('search_close');
oSearchCLose.addEventListener('touchstart',function(ev){
	ev.preventDefault();
},false);
oSearchCLose.addEventListener('touchstart',function(){
	oFenlei.style.display='block';
	oIndexSearch.style.display='none';
	fnClear();
},false);