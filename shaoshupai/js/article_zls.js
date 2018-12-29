//加载文章
$(function(){
	getArticle("38946");//38928
});
function getArticle(id){
	var url = 'https://sspai.com/api/v1/articles/' + id;
	$.getJSON(url,function(data){
		var imgUrl = "https://cdn.sspai.com/";
		var banner = "";
		if(data.banner){
			banner = imgUrl + data.banner;
		}else{
			banner = imgUrl + promote_image;
		}
		console.log(data);
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
		
	});
	
}
//时间计算

function setTime(timeNum){
	var time = new Date(timeNum*1000);
	var nowTime = new Date();
	var sTime = "";
	if(nowTime.getFullYear() == time.getFullYear()){
			if(nowTime.getMonth() == time.getMonth()){
				if(nowTime.getDate()-time.getDate() <= 5){
					if(nowTime.getDate()-time.getDate() < 1){
						if(nowTime.getHours()-time.getHours()<1){
							if(nowTime.getMinutes()-time.getMinutes()<1){
								sTime = nowTime.getSeconds()-time.getSeconds() - 1  + "秒前";
							}else{
								sTime = nowTime.getMinutes()-time.getMinutes() - 1  + "分钟前";
							}
							
						}else{
							sTime = nowTime.getHours()-time.getHours() - 1 + "小时前";
						}
					}else{
						sTime = nowTime.getDate()-time.getDate() - 1 + "天前";
					}
					
				}else{
					sTime = (time.getMonth()+1) + "月" + time.getDate() + "日";
				}
			}else{
				sTime = (time.getMonth()+1) + "月" + time.getDate() + "日";
			}
			
		}else{
			sTime =time.getFullYear() + "年" + (time.getMonth()+1) + "月" + time.getDate() + "日";
		}
		return sTime;
}
