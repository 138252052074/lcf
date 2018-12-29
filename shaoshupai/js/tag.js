
$(function(){
	var url="https://cdn.sspai.com/";
	var tag = window.localStorage.getItem("tag");
	$.getJSON("https://sspai.com/api/v1/articles",{"offset":0,"limit":20,"has_tag":1,"tag":tag,"type":"recommend_to_home"},function(data){
				
		$.each(data.list,function(i,item){
			var imgurl="";
			if(item.banner){
				imgurl=item.banner;
			}else{
				imgurl=item.promote_image;
			}
			var $dl=$(".body .main>dl").eq(0).clone(true);
//					console.log($dl);
			$dl.find(".useru a img").attr({"alt":item.author.nickname,"src":url+item.author.avatar});
			$dl.find(".useru h4").html(item.author.nickname);
			$dl.find(".usertit .iwant  img").attr({"alt":item.title,"src":url+imgurl+"?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220"});
			$dl.find(".usertit #title h3").html(item.title);
			$dl.find(".usertit #title summary").html(item.promote_intro);
			
			$dl.find(".usertit footer span sup").html(item.likes_count);
			$dl.find(".usertit footer a sup").html(item.all_comments_count);
			
			
			$dl.insertBefore($(".body .main>.load-more-wrapper")).css("display","block");
		})
	})
})
$(function(){
	var url="https://cdn.sspai.com/";
	var tag = window.localStorage.getItem("tag");
	$.getJSON("https://sspai.com/api/v1/topics?limit=4&offset=0&sort=recommended_at&recommended=1",function(data){
		$.each(data.list, function(i,item) {
			var $dt=$(".body .side dl>.onathter").eq(0).clone(true);
			$dt.find("a img").attr({"alt":item.author.nickname,"src":url+item.banner+"?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445"});
			$dt.find("a div h4").html(item.title);
			$dt.insertBefore($(".body .side dl .onathter-more")).css("display","block");
		});
	})
})
$(function(){
	var url="https://cdn.sspai.com/";
	var tag = window.localStorage.getItem("tag");

	$.getJSON("https://sspai.com/api/v1/special_columns",{"limit":4,"offset":0,"sort":"followers_count","tag":tag},function(data){
		$.each(data.list,function(i,item){
			var $dd=$(".body .side dl>.other").eq(0).clone(true);
			$dd.find("a header img").attr({"alt":item.nickname,"src":url+item.banner+"?imageMogr2/quality/95/thumbnail/!828x442r/gravity/Center/crop/828x442"});
			$dd.find("a section h4").html(item.title);
			$dd.find("a section p").html(item.intro);
			$dd.find("a section footer label var").html(item.followers_count);
			
			$dd.insertBefore($(".body .side dl .other-more")).css("display","block");
		})
		
	})
})

$(function(){
	var tag = window.localStorage.getItem("tag");
	var url="https://cdn.sspai.com/";
	$.getJSON("https://sspai.com/api/v1/tags/"+tag,function(data){
		$(".inner .title-inner span").html(data.title);
		$("head title").html(data.title+"-少数派");
	})
})