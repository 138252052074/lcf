
	getTopics();
	var osmall=document.getElementsByClassName('small')[0];
	//osmall.innerHTML+=osmall.innerHTML;
var obtnleft=document.getElementById('btn_left');
var obtnright=document.getElementById('btn_right');
var atopli=osmall.getElementsByTagName('li');


obtnleft.onclick=function(){
	
	atopli[0].style.display='none';
	atopli[1].style.display='block';
	atopli[2].style.display='block';
}
obtnright.onclick=function(){
	atopli[0].style.display='block';
	atopli[1].style.display='block';
	atopli[2].style.display='none';
	
}



function getTopics(){
	var url='https://sspai.com/api/v1/applications?limit=8&topic_id=150';
	$.getJSON(url,function(data){
		//console.log(data);
		$('.small>li:eq(0)>a>img').attr('src',"https://cdn.sspai.com/"+data.list[0].icon);
		$('.small>li:eq(0)>.ol>a').html(data.list[0].title);
		
		$('.small>li:eq(1)>a>img').attr('src',"https://cdn.sspai.com/"+data.list[1].icon);
		$('.small>li:eq(1)>a>img').css('width','90px');
		$('.small>li:eq(1)>a>img').css('border-radius','10px');
		$('.small>li:eq(1)>.ol>a').html(data.list[1].title);
		
		$('.small>li:eq(2)>a>img').attr('src',"https://cdn.sspai.com/"+data.list[2].icon);
		$('.small>li:eq(2)>a>img').css('width','90px');
		$('.small>li:eq(2)>a>img').css('border-radius','10px');
		$('.small>li:eq(2)>.ol>a').html(data.list[2].title);
	});
	
	
	var url='https://sspai.com/api/v1/articles?offset=0&limit=2&recommended_at_topic=true&topic_id=150';
	$.getJSON(url,function(data){
		//console.log(data);
		$('dl:eq(0)>dt>img').attr('src',"https://cdn.sspai.com/"+data.list[0].author.avatar);
		$('dl:eq(0)>dt>a').html(data.list[0].author.nickname);
		$('dl:eq(0)>dd>img').attr('src',"https://cdn.sspai.com/"+data.list[0].banner);
		
		
		$('dl:eq(0)>dd>a').html(data.list[0].title);
		$('dl:eq(0)>dd>p:eq(0)').html(data.list[0].promote_intro);
		$('dl:eq(0)>dd>.comment>span').html(data.list[0].likes_count);
		$('dl:eq(0)>dd>.comment>a>span').html(data.list[0].all_comments_count);
		
		$('dl:eq(1)>dt>img').attr('src',"https://cdn.sspai.com/"+data.list[1].author.avatar);
		$('dl:eq(1)>dt>a').html(data.list[1].author.nickname);
		$('dl:eq(1)>dd>img').attr("src","https://cdn.sspai.com/"+data.list[1].banner);
		$('dl:eq(1)>dd>a').html(data.list[1].title);
		$('dl:eq(1)>dd>p:eq(0)').html(data.list[1].promote_intro);
		$('dl:eq(1)>dd>.comment>span').html(data.list[1].likes_count);
		$('dl:eq(1)>dd>.comment>a>span').html(data.list[1].all_comments_count);
	});
	
	var url='https://sspai.com/api/v1/articles?offset=0&limit=20&topic_id=150&sort=created_at';
	$.getJSON(url,function(data){
		//console.log(data);
		$('.list>li:eq(0)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[0].author.avatar);
		$('.list>li:eq(0)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[0].banner);
		$('.list>li:eq(0)>.name').html(data.list[0].author.nickname);
		$('.list>li:eq(0)>.art').html(data.list[0].title);
		$('.list>li:eq(0)>.art_des').html(data.list[0].promote_intro);
		$('.list>li:eq(0)>.comment>span').html(data.list[0].likes_count);
		$('.list>li:eq(0)>.comment>a>span').html(data.list[0].all_comments_count);
		
		$('.list>li:eq(1)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[1].author.avatar);
		$('.list>li:eq(1)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[1].banner);
		$('.list>li:eq(1)>.name').html(data.list[1].author.nickname);
		$('.list>li:eq(1)>.art').html(data.list[1].title);
		$('.list>li:eq(1)>.art_des').html(data.list[1].promote_intro);
		$('.list>li:eq(1)>.comment>span').html(data.list[1].likes_count);
		$('.list>li:eq(1)>.comment>a>span').html(data.list[1].all_comments_count);
		
		$('.list>li:eq(2)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[2].author.avatar);
		$('.list>li:eq(2)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[2].banner);
		$('.list>li:eq(2)>.name').html(data.list[2].author.nickname);
		$('.list>li:eq(2)>.art').html(data.list[2].title);
		$('.list>li:eq(2)>.art_des').html(data.list[2].promote_intro);
		$('.list>li:eq(2)>.comment>span').html(data.list[2].likes_count);
		$('.list>li:eq(2)>.comment>a>span').html(data.list[2].all_comments_count);
		
		$('.list>li:eq(3)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[3].author.avatar);
		$('.list>li:eq(3)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[3].banner);
		$('.list>li:eq(3)>.name').html(data.list[3].author.nickname);
		$('.list>li:eq(3)>.art').html(data.list[3].title);
		$('.list>li:eq(3)>.art_des').html(data.list[3].promote_intro);
		$('.list>li:eq(3)>.comment>span').html(data.list[3].likes_count);
		$('.list>li:eq(3)>.comment>a>span').html(data.list[3].all_comments_count);
		
		$('.list>li:eq(4)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[4].author.avatar);
		$('.list>li:eq(4)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[4].banner);
		$('.list>li:eq(4)>.name').html(data.list[4].author.nickname);
		$('.list>li:eq(4)>.art').html(data.list[4].title);
		$('.list>li:eq(4)>.art_des').html(data.list[4].promote_intro);
		$('.list>li:eq(4)>.comment>span').html(data.list[4].likes_count);
		$('.list>li:eq(4)>.comment>a>span').html(data.list[4].all_comments_count);
	});
	
	
}
