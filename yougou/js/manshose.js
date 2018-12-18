var oDataListUl=document.getElementById('datalist_ul');
$(function(){
	$.ajax({
		type:'get',
		url:'js/json/nanxie.json',
		dateType:'json',
		success:function(data){
			var html='';
//			var atitle=[];
//			var aimg=[];
//			var aprice=[];
//			var aorgPrice=[];
			var list=data.result.wall.docs;
			for(var i=0;i<list.length;i++){
				html+='<li><a href="yougou/../xiangqingy.html"><img src="'+list[i].img+'"/><div><h4>'+list[i].title+'</h4><p><span class="now">￥'+list[i].price+'</span><span>￥'+list[i].orgPrice+'</span></p></div></a></li>';
//				atitle.push(list[i].title);
//				aimg.push(list[i].img);
//				aprice.push(list[i].price);
//				aorgPrice.push(list[i].orgPrice);
			}
//			console.log(atitle);
//			for(var i=0;i<atitle.length;i++){
//				db.transaction(function (contex){
//					contex.executeSql('insert into proLink(title) values("'+atitle[i]+'")')
//				});
//			}
			$('#datalist_ul').html(html);
			//字体超出变省略号
			var aH4=oDataListUl.getElementsByTagName('h4');
			for(var i=0;i<aH4.length;i++){
				aH4[i].innerHTML=aH4[i].innerHTML.slice(0,20)+'...';
			}
		}
	})
});

//var aDataLi=oDataListUl.getElementsByTagName('li');
//var aDataH4=oDataListUl.getElementsByTagName('h4');
//
//for(var i=0;i<aDataLi.length;i++){
//	aDataLi[i].index=i;
//	aDataLi[i].addEventListener('touchstart',function(){
//		window.localStorage.setItem('u_title',aDataH4[this.index].innerHTML);
//		console.log(window.localStorage.getItem('u_title'));
//	},false);
//}

//搜索框
var oSearchInp2=document.getElementById('search_inp2');
var oManshose=document.getElementById('manshose');
var oIndexSearch=document.getElementById('indexSearch');
oSearchInp2.addEventListener('focus',function(){
	oManshose.style.display='none';
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
	oManshose.style.display='block';
	oIndexSearch.style.display='none';
	fnClear();
},false);

//回到顶部
var oBackTop=document.getElementById('backTop');
window.addEventListener('scroll',function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>=300){
		oBackTop.style.display='block';
	}
	else{
		oBackTop.style.display='none';
	}
	oBackTop.addEventListener('touchstart',function(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	},false);
},false);





