$(function(){
	$.ajax({
		type:'get',
		url:'js/json/logistics.json',
		dataType:'json',
		success:function(data){
			$('#company').html(data.result.company+'快递');
			$('#no').html(data.result.no);
			var html='';
			for(var i=data.result.list.length-1;i>=0;i--){
				html+='<div class="para"><p>'+data.result.list[i].remark+'</p><p>'+data.result.list[i].datetime+'</p></div>';
			}
			$('#c_info').html(html);
			var html_img='';
			for(var i=data.result.list.length-1;i>=0;i--){
				if(i==data.result.list.length-1){
					html_img+='<img src="img/logistics/lv.png" class="hui"/>';
				}
				else{
					html_img+='<img src="img/logistics/hui.png" class="hui"/>';
				}
			}
			$('#c_img').html(html_img);
			
			var oCinfo=document.getElementById('c_info');
			var oCinfoDiv=oCinfo.getElementsByClassName('para');
			var oCimg=document.getElementById('c_img');
			var oCimgi=oCimg.getElementsByClassName('hui');
			
			for(var i=0;i<oCinfoDiv.length;i++){
				if(i==oCinfoDiv.length-1){
					oCimgi[i].style.height=oCinfoDiv[i].clientHeight-20+'px';
				}
				else{
					oCimgi[i].style.height=oCinfoDiv[i].clientHeight+1+'px';
				}
			}
		}
	});
})




















