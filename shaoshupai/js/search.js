$(function(){
	var offset = 0;
	var keyword = window.localStorage.getItem("keyword");
	$(".main .load-more-wrapper").bind('click touchend', function() {
		offset += 10;
		getart(offset,keyword);
	});
	getart(offset,keyword);
	$(".search-form a").bind("click touchend",function(){
		keyword=$("#q").val();
		console.log(keyword);
		getart(0,keyword);
	});
	function getart(offset,keword) {
		// $('.search-form #q').val(keyword);
		$("#home .container .main>div dl:gt(0)").remove();
		var url = 'https://cdn.sspai.com/';
	$.getJSON("https://sspai.com/api/v1/search",{'offset':0,'limit':10,'type':'article','keyword':keyword},function(data){
		$(".el-tabs__nav .el-tabs__item").eq(0).html("文章("+data.total+")");

		$.each(data.list, function(i, item) {
			var imgurl = '';
			var $dl = $("#home .container .main>div dl").eq(0).clone(true);
			$dl.find("dd").attr("data",item.id);
			$dl.find("time").html(setTime(item.released_at));
			$dl.find(".avatar img").attr({ "alt": item.author.nickname, "src": url + item.author.avatar })
			$dl.find(".user-card h4 a").html(item.author.nickname);

			if(item.banner) {
				imgurl = item.banner;
				$dl.find("dd .banner img").attr({ "alt": item.title, "src": url + imgurl });
			} else {
				$dl.find("dd .banner img").remove();
			}
			$dl.find("dd section h3 a").html(item.title);
			$dl.find("dd section summary").html(item.summary);
			$dl.find("dd footer span.like-view sup").html(item.likes_count);
			$dl.find("dd footer .actions .btn-comment sup").html(item.comments_count);
			$dl.insertBefore($("#home .container .main>div .load-more-wrapper")).css("display", "");
		});
	});
}
		$(document).on("touchend click","#home .container .main>div dl dd",function(){
			window.localStorage.id=$(this).attr("data");
			console.log($(this).attr("data"));
		});
});