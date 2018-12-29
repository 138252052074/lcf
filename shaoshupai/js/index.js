//跨域获取数据

//文章列表
$(function() {

	var offset = 0;
	$(".main .load-more-wrapper").bind('click touchend', function() {
		offset += 10;
		getart(offset);
	});
	getart(offset);
	function getart(offset) {
		var url = 'https://cdn.sspai.com/';
		$.getJSON("https://sspai.com/api/v1/articles", { offset: offset, limit: 10, type: 'recommend_to_home', sort: 'recommend_to_home_at' },
			function(data) {
				$.each(data.list, function(i, item) {
					var imgurl = '';
					if(item.banner) {
						imgurl = item.banner;
					} else {
						imgurl = item.promote_image;
					}
					var $dl = $("#home .container .main>div dl").eq(0).clone(true);
					$dl.find("dd").attr("data",item.id);
					$dl.find("time").html(setTime(item.created_at));
					$dl.find(".avatar img").attr({ "alt": item.author.nickname, "src": url + item.author.avatar })
					$dl.find(".user-card h4 a").html(item.author.nickname);
					$dl.find("dd .banner img").attr({ "alt": item.title, "src": url + imgurl });
					$dl.find("dd section h3 a").html(item.title);
					$dl.find("dd section summary").html(item.promote_intro);
					$dl.find("dd footer span.like-view sup").html(item.likes_count);
					$dl.find("dd footer .actions .btn-comment sup").html(item.comments_count);

					$dl.insertBefore($("#home .container .main>div .load-more-wrapper")).css("display", "");
				});
			}
		);
	}
	
	$(document).on("touchend click","#home .container .main>div dl dd",function(){
			window.localStorage.id=$(this).attr("data");
			console.log($(this).attr("data"));
		});

	

});

//banner 列表
$(function() {
	var imgUrl = 'https://cdn.sspai.com/';
	$.getJSON("https://sspai.com/api/v1/advertisements", {
		'type': 'home_1,home_2,home_3,home_4,home_5',
		'status': 'released'
	}, function(data) {
		$("#home .banner_adv .first a img").attr({ "src": imgUrl + data.list[0].image, "alt": data.list[0].title });
		$("#home .banner_adv .row .row2").eq(0).find("a").eq(0).find("img").attr({ "src": imgUrl + data.list[1].image, "alt": data.list[1].title });
		$("#home .banner_adv .row .row2").eq(0).find("a").eq(1).find("img").attr({ "src": imgUrl + data.list[2].image, "alt": data.list[2].title });
		$("#home .banner_adv .row .row2").eq(1).find("a").eq(0).find("img").attr({ "src": imgUrl + data.list[3].image, "alt": data.list[3].title });
		$("#home .banner_adv .row .row2").eq(1).find("a").eq(1).find("img").attr({ "src": imgUrl + data.list[4].image, "alt": data.list[4].title });
	});

	/*$("#home .banner_adv .row .row2").eq(0).find("a").eq(0).bind("touchend click",function(){
		window.localStorage.id = '38946';
	});*/
	$("#home .banner_adv .row .row2").eq(0).find("a").eq(1).bind("touchend click",function(){
		window.localStorage.id = '38946';
	});
	$("#home .banner_adv .row .row2").eq(1).find("a").eq(0).bind("touchend click",function(){
		window.localStorage.id = '38928';
	});
	$("#home .banner_adv .row .row2").eq(1).find("a").eq(1).bind("touchend click",function(){
		window.localStorage.id = '38817';
	});

});

//Matrix精选
$(function() {
	var imgUrl = 'https://cdn.sspai.com/';
	$.getJSON("https://sspai.com/api/v1/articles", {
		"limit": 5,
		"offset": 0,
		"is_matrix": 1,
		"sort": "matrix_at"
	}, function(data) {
		$.each(data.list, function(i,item) {
			var $dd = $(".side .matrix-section dd").eq(0).clone(true);
			$dd.find("ul li h5.title a").html(item.title);
			$dd.find("ul li .user-card .avatar img").attr({"alt":item.author.nickname,"src":imgUrl+item.author.avatar});
			$dd.find("ul li .user-card h4 a").html(item.author.nickname);
			$dd.appendTo($(".side .matrix-section")).css("display","block");
		});
	});
});

//推荐专题
$(function(){
	var imgUrl = 'https://cdn.sspai.com/';
	$.getJSON("https://sspai.com/api/v1/topics", {
		"limit": 999,
		"offset": 0,
		"recommended": 1,
		"sort": "recommended_at"
	}, function(data) {
		$.each(data.list, function(i,item) {
			var $dd = $(".side dl.side-section").eq(1).find("dd").eq(0).clone(true);
			$dd.find("a.topic-card img").attr({"src":imgUrl+item.banner});
			$dd.find("a.topic-card .mask h4").html(item.title);
			$dd.appendTo($(".side dl.side-section").eq(1)).css("display","block");
		});
	});
});

//广告
$(function(){
	var imgUrl = 'https://cdn.sspai.com/';
	$.getJSON("https://sspai.com/api/v1/advertisements", {
		"limit": 999,
		"status": "released",
		"offset": 0,
		"type": "home_sidebar",
		"sort": "released_or_retired_at"
	}, function(data) {
		$.each(data.list, function(i,item) {
			var $dd = $(".side dl.side-section").eq(2).find("dd").eq(0).clone(true);
			$dd.find("a.advert-card img").attr({"src":imgUrl+item.image,"alt":item.title});
			$dd.appendTo($(".side dl.side-section").eq(2)).css("display","block");
		});
	});
});