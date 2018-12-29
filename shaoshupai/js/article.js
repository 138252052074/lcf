//加载文章
$(function(){
	var id = window.localStorage.getItem("id");
	$.getJSON("https://sspai.com/api/v1/comments",{"article_id":id},function(data){
		if(data.total>10){
			$("#comment-box .load-more-wrapper a").html("展开剩余"+(data.total-10)+"条");
			$("#comment-box .load-more-wrapper").bind("touchend click",function(){
					getArticle(id,10,data.total-10);
			});
		}else{
			$("#comment-box .load-more-wrapper").hide();
		}
		});
	getArticle(id,0,10);
	
});
function getArticle(id,offset,limit){
	var url = 'https://sspai.com/api/v1/articles/' + id;
	var imgUrl = "https://cdn.sspai.com/";
	$.getJSON(url,function(data){
		var banner = "";
		if(data.banner){
			banner = imgUrl + data.banner;
		}else{
			banner = imgUrl + data.promote_image;
		}
		// console.log(data.title);
		$("head title").html(data.title);
		$("article .banner img").attr({"src":banner,"alt":data.title});
		$("article h1.title").html(data.title);
		$("article .meta .user-card a img").attr({"src":imgUrl+data.author.avatar,"alt":data.author.nickname});
		$("article .meta .user-card time").html(setTime(data.released_at));
		$("article .meta .actions .like-views sup").html(data.likes_count);
		$("article .meta .actions .btn-comment sup").html(data.all_comments_count);
		//插入文章
		$("article .article-content .content").html(data.body);
		
		//点赞数
		$(".action-region .btn-like sup").html(data.likes_count);
		
		//底部文章作者信息
		$(".affiliate-info .item a img").attr({"src":imgUrl+data.author.avatar,"alt":data.author.nickname});
		$(".affiliate-info .item .body h4 a").html(data.author.nickname);
		
	});
	
	//加载评论
	$.getJSON("https://sspai.com/api/v1/comments",{"article_id":id,"offset":offset,"limit":limit},function(data){
		$("#comment-box h3 span").html("("+data.total+")");
		$.each(data.list,function(i,item){
			
			var avatar = "";
			if(item.author.avatar){
				avatar = item.author.avatar;
			}else{
				avatar = "sspai/assets/img/avatar/large.jpg";
			}
			var $li = $("#comment-box .comment-list>.comment-item").eq(0).clone(true).attr("style","");
			$li.find("a.avatar img").attr({"src":imgUrl+avatar,"alt":item.author.nickname});
			$li.find("section h5").html(item.author.nickname);
			$li.find("section .body").html(item.comment);
			$li.find("section .ext time").html(setTime(item.created_at));
			if(item.likes_count){
				$li.find("section .ext .btn-like-comment sup").html(item.likes_count);
			}else{
				$li.find("section .ext .btn-like-comment sup").html("");
			}
			//回复评论
			if(item.comments.length != 0){
				// console.log(item.comments);
				$.each(item.comments, function(j,com) {
					if(com.author.avatar){
						comAvatar = com.author.avatar;
					}else{
						comAvatar = "sspai/assets/img/avatar/large.jpg";
					}
					var $rl = $li.find("section>.reply-list li").eq(0).clone(true).attr("style","");
					$rl.find("a.avatar img").attr({"src":imgUrl+comAvatar,"alt":com.author.nickname});
					$rl.find("section h5").html(com.author.nickname);
					$rl.find("section .body").html(com.comment);
					$rl.find("section .ext time").html(setTime(com.created_at));
					if(com.likes_count){
						$rl.find("section .ext .btn-like-comment sup").html(com.likes_count);
					}else{
						$rl.find("section .ext .btn-like-comment sup").html("");
					}
					$rl.appendTo($li.find("section>.reply-list"));
				});
			}else{
				// console.log("11");
				$li.find("section .reply-list").remove();
			}
			$li.appendTo($("#comment-box .comment-list"));
		});
		
	});
	
}


