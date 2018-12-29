$(function(){
	var $aLi = $("#navs").find("li");
	var $navsInfo = $("#navs-info").find("li");
	var now = 0;
	$aLi.each(function(){
		$aLi.bind("click tarchend",function(){
			$aLi.attr("class","");
			$(this).attr("class","active");
			now = $(this).index();
			$navsInfo.css("display","none");
			$navsInfo.eq(now).css("display","block");
		});
		
	});
	console.log($navsInfo);
});
