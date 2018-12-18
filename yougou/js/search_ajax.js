var oHead=document.getElementsByTagName('head')[0];
//搜索框查找功能
oSearchInp1.addEventListener('keyup',fnSearch,false);

function fnSearch(){
	if(this.value){
		var oScript=document.createElement('script');
//		oScript.src='http://m.yougou.com/suggWord.sc?kword='+this.value+'';
		oScript.src='http://suggest.taobao.com/sug?code=utf-8&q='+this.value+'&callback=fn'
		oHead.appendChild(oScript);
		oSearchResult.style.display='block';
		oSearchHot.style.display='none';
		oSearchHistory.style.display='none';
		oCLearInp.style.display='block';
	}
	else{
		oSearchResult.style.display='none';
		oSearchHot.style.display='block';
		oSearchHistory.style.display='block';
		oCLearInp.style.display='none';
	}
}

var oResultList=document.getElementById('result_list');
var oHistoryList=document.getElementById('history_list');
function fn(data){
	var html='';
	for(var i=0;i<data.result.length;i++){
		html+='<li><a href="javascript:">'+data.result[i][0]+'</a><i class="block absolute">'+data.result[i][1]+'条结果</i></li>'
	}
	oResultList.innerHTML=html;
}

//历史搜索功能
fnSeaHistory();
function fnSeaHistory(){
	var result=false;
	oSearchInp1.addEventListener('focus',function(){
		var aResultA=oResultList.getElementsByTagName('a');
//		console.log(aResultA.length);
		for(var i=0;i<aResultA.length;i++){
			aResultA[i].index=i;
//			阻止事件冒泡
//			aResultA[i].addEventListener('touchstart',function(ev){
//				ev.stopPropagation();
//			},false);
			aResultA[i].addEventListener('touchstart',function(){
				var value=aResultA[this.index].innerHTML;
//				console.log(value);
				db.transaction(function (contex){
					contex.executeSql('select * from searHistory',[],function(con,data){
						var len=data.rows.length,i;
						for(var i=0;i<len;i++){
							if(value==data.rows.item(i).title){
								result=true;
								break;
							}
							else{
								result=false;
							}
						}
						if(result==false){
							db.transaction(function (contex){
								contex.executeSql('insert into searHistory(title) values("'+value+'")');
								window.location='manshose.html';
							});
						}
						else if(result==true){
							window.location='manshose.html';
						}
					})
				});
			},false);
		}
//		单条删除历史记录
//		var aHistoryI=oHistoryList.getElementsByTagName('i');
//		var aHistoryLi=oHistoryList.getElementsByTagName('li');
//		console.log(aHistoryI.length);
//		for(var i=0;i<aHistoryI.length;i++){
//			aHistoryI[i].index=i;
//			aHistoryI[i].addEventListener('touchstart',function(){
//				var value=aHistoryI[this.index].parentNode.innerHTML;
//				console.log(value);
//				db.transaction(function (contex){
//					contex.executeSql('delete from searHistory where title='+value+'');
//				});
//				aHistoryLi[this.index].innerHTML='';
//			},false);
//		}
	},false);
	db.transaction(function (contex){
		contex.executeSql('select * from searHistory',[],function(con,data){
			var len=data.rows.length,i;
			for(var i=0;i<len;i++){
				oHistoryList.innerHTML='<li><a href="manshose.html">'+data.rows.item(i).title+'</a><i class="block absolute">X</i></li>'+oHistoryList.innerHTML;
			}
		});
	});
}

//清空历史记录
var oClearHistory=document.getElementById('clear_history');
oClearHistory.addEventListener('touchstart',function(){
	db.transaction(function (contex){
		oHistoryList.innerHTML='';
		contex.executeSql('delete from searHistory');
	});
},false);



















