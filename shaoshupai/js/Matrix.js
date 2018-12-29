getTopics();

function getTopics(){
	var url='https://sspai.com/api/v1/special_columns?limit=999&offset=0&sort=recommended_at&is_matrix=true&recommended=true';
	$.getJSON(url,function(data){
		//console.log(data);
		$('.right>a:eq(0)>img').attr('src',"https://cdn.sspai.com/"+data.list[0].banner);
		$('.right>a:eq(0)>.con_title').html(data.list[0].title);
		$('.right>a:eq(0)>.con_ms').html(data.list[0].intro);
		$('.right>a:eq(0) i').html(data.list[0].followers_count);
		
		$('.right>a:eq(1)>img').attr('src',"https://cdn.sspai.com/"+data.list[1].banner);
		$('.right>a:eq(1)>.con_title').html(data.list[1].title);
		$('.right>a:eq(1)>.con_ms').html(data.list[1].intro);
		$('.right>a:eq(1) i').html(data.list[1].followers_count);
		
		$('.right>a:eq(2)>img').attr('src',"https://cdn.sspai.com/"+data.list[2].banner);
		$('.right>a:eq(2)>.con_title').html(data.list[2].title);
		$('.right>a:eq(2)>.con_ms').html(data.list[2].intro);
		$('.right>a:eq(2) i').html(data.list[2].followers_count);
		
		$('.right>a:eq(3)>img').attr('src',"https://cdn.sspai.com/"+data.list[3].banner);
		$('.right>a:eq(3)>.con_title').html(data.list[3].title);
		$('.right>a:eq(3)>.con_ms').html(data.list[3].intro);
		$('.right>a:eq(3) i').html(data.list[3].followers_count);
		
		$('.right>a:eq(4)>img').attr('src',"https://cdn.sspai.com/"+data.list[4].banner);
		$('.right>a:eq(4)>.con_title').html(data.list[4].title);
		$('.right>a:eq(4)>.con_ms').html(data.list[4].intro);
		$('.right>a:eq(4) i').html(data.list[4].followers_count);
		
		$('.right>a:eq(5)>img').attr('src',"https://cdn.sspai.com/"+data.list[5].banner);
		$('.right>a:eq(5)>.con_title').html(data.list[5].title);
		$('.right>a:eq(5)>.con_ms').html(data.list[5].intro);
		$('.right>a:eq(5) i').html(data.list[5].followers_count);
		
		$('.right>a:eq(6)>img').attr('src',"https://cdn.sspai.com/"+data.list[6].banner);
		$('.right>a:eq(6)>.con_title').html(data.list[6].title);
		$('.right>a:eq(6)>.con_ms').html(data.list[6].intro);
		$('.right>a:eq(6) i').html(data.list[6].followers_count);
		
		$('.right>a:eq(7)>img').attr('src',"https://cdn.sspai.com/"+data.list[7].banner);
		$('.right>a:eq(7)>.con_title').html(data.list[7].title);
		$('.right>a:eq(7)>.con_ms').html(data.list[7].intro);
		$('.right>a:eq(7) i').html(data.list[7].followers_count);
		
		$('.right>a:eq(8)>img').attr('src',"https://cdn.sspai.com/"+data.list[8].banner);
		$('.right>a:eq(8)>.con_title').html(data.list[8].title);
		$('.right>a:eq(8)>.con_ms').html(data.list[8].intro);
		$('.right>a:eq(8) i').html(data.list[8].followers_count);
	});
	
	
	var url='https://sspai.com/api/v1/articles?offset=0&limit=20&is_matrix=1&sort=matrix_at';
	$.getJSON(url,function(data){
		console.log(data);
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
		$('.list>li:eq(1)>.art_des').html(data.list[1].summary);
		$('.list>li:eq(1)>.comment>span').html(data.list[1].likes_count);
		$('.list>li:eq(1)>.comment>a>span').html(data.list[1].all_comments_count);
		
		$('.list>li:eq(2)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[2].author.avatar);
		$('.list>li:eq(2)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[2].banner);
		$('.list>li:eq(2)>.name').html(data.list[2].author.nickname);
		$('.list>li:eq(2)>.art').html(data.list[2].title);
		$('.list>li:eq(2)>.art_des').html(data.list[2].summary);
		$('.list>li:eq(2)>.comment>span').html(data.list[2].likes_count);
		$('.list>li:eq(2)>.comment>a>span').html(data.list[2].all_comments_count);
		
		$('.list>li:eq(3)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[3].author.avatar);
		$('.list>li:eq(3)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[3].banner);
		$('.list>li:eq(3)>.name').html(data.list[3].author.nickname);
		$('.list>li:eq(3)>.art').html(data.list[3].title);
		$('.list>li:eq(3)>.art_des').html(data.list[3].summary);
		$('.list>li:eq(3)>.comment>span').html(data.list[3].likes_count);
		$('.list>li:eq(3)>.comment>a>span').html(data.list[3].all_comments_count);
		
		$('.list>li:eq(4)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[4].author.avatar);
		$('.list>li:eq(4)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[4].banner);
		$('.list>li:eq(4)>.name').html(data.list[4].author.nickname);
		$('.list>li:eq(4)>.art').html(data.list[4].title);
		$('.list>li:eq(4)>.art_des').html(data.list[4].summary);
		$('.list>li:eq(4)>.comment>span').html(data.list[4].likes_count);
		$('.list>li:eq(4)>.comment>a>span').html(data.list[4].all_comments_count);
		
		$('.list>li:eq(5)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[5].author.avatar);
		$('.list>li:eq(5)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[5].banner);
		$('.list>li:eq(5)>.name').html(data.list[5].author.nickname);
		$('.list>li:eq(5)>.art').html(data.list[5].title);
		$('.list>li:eq(5)>.art_des').html(data.list[5].summary);
		$('.list>li:eq(5)>.comment>span').html(data.list[5].likes_count);
		$('.list>li:eq(5)>.comment>a>span').html(data.list[5].all_comments_count);
		
		$('.list>li:eq(6)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[6].author.avatar);
		$('.list>li:eq(6)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[6].banner);
		$('.list>li:eq(6)>.name').html(data.list[6].author.nickname);
		$('.list>li:eq(6)>.art').html(data.list[6].title);
		$('.list>li:eq(6)>.art_des').html(data.list[6].summary);
		$('.list>li:eq(6)>.comment>span').html(data.list[6].likes_count);
		$('.list>li:eq(6)>.comment>a>span').html(data.list[6].all_comments_count);
		
		$('.list>li:eq(7)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[7].author.avatar);
		$('.list>li:eq(7)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[7].banner);
		$('.list>li:eq(7)>.name').html(data.list[7].author.nickname);
		$('.list>li:eq(7)>.art').html(data.list[7].title);
		$('.list>li:eq(7)>.art_des').html(data.list[7].summary);
		$('.list>li:eq(7)>.comment>span').html(data.list[7].likes_count);
		$('.list>li:eq(7)>.comment>a>span').html(data.list[7].all_comments_count);
		
		$('.list>li:eq(8)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[8].author.avatar);
		$('.list>li:eq(8)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[8].banner);
		$('.list>li:eq(8)>.name').html(data.list[8].author.nickname);
		$('.list>li:eq(8)>.art').html(data.list[8].title);
		$('.list>li:eq(8)>.art_des').html(data.list[8].summary);
		$('.list>li:eq(8)>.comment>span').html(data.list[8].likes_count);
		$('.list>li:eq(8)>.comment>a>span').html(data.list[8].all_comments_count);
		
		$('.list>li:eq(9)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[9].author.avatar);
		$('.list>li:eq(9)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[9].banner);
		$('.list>li:eq(9)>.name').html(data.list[9].author.nickname);
		$('.list>li:eq(9)>.art').html(data.list[9].title);
		$('.list>li:eq(9)>.art_des').html(data.list[9].summary);
		$('.list>li:eq(9)>.comment>span').html(data.list[9].likes_count);
		$('.list>li:eq(9)>.comment>a>span').html(data.list[9].all_comments_count);
		
		$('.list>li:eq(10)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[10].author.avatar);
		$('.list>li:eq(10)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[10].banner);
		$('.list>li:eq(10)>.name').html(data.list[10].author.nickname);
		$('.list>li:eq(10)>.art').html(data.list[10].title);
		$('.list>li:eq(10)>.art_des').html(data.list[10].summary);
		$('.list>li:eq(10)>.comment>span').html(data.list[10].likes_count);
		$('.list>li:eq(10)>.comment>a>span').html(data.list[10].all_comments_count);
		
		$('.list>li:eq(11)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[11].author.avatar);
		$('.list>li:eq(11)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[1].banner);
		$('.list>li:eq(11)>.name').html(data.list[11].author.nickname);
		$('.list>li:eq(11)>.art').html(data.list[11].title);
		$('.list>li:eq(11)>.art_des').html(data.list[11].summary);
		$('.list>li:eq(11)>.comment>span').html(data.list[11].likes_count);
		$('.list>li:eq(11)>.comment>a>span').html(data.list[11].all_comments_count);
		
		$('.list>li:eq(12)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[12].author.avatar);
		$('.list>li:eq(12)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[12].banner);
		$('.list>li:eq(12)>.name').html(data.list[12].author.nickname);
		$('.list>li:eq(12)>.art').html(data.list[12].title);
		$('.list>li:eq(12)>.art_des').html(data.list[12].summary);
		$('.list>li:eq(12)>.comment>span').html(data.list[12].likes_count);
		$('.list>li:eq(12)>.comment>a>span').html(data.list[12].all_comments_count);
		
		$('.list>li:eq(13)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[13].author.avatar);
		$('.list>li:eq(13)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[13].banner);
		$('.list>li:eq(13)>.name').html(data.list[13].author.nickname);
		$('.list>li:eq(13)>.art').html(data.list[13].title);
		$('.list>li:eq(13)>.art_des').html(data.list[13].summary);
		$('.list>li:eq(13)>.comment>span').html(data.list[13].likes_count);
		$('.list>li:eq(13)>.comment>a>span').html(data.list[13].all_comments_count);
		
		$('.list>li:eq(14)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[14].author.avatar);
		$('.list>li:eq(14)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[14].banner);
		$('.list>li:eq(14)>.name').html(data.list[14].author.nickname);
		$('.list>li:eq(14)>.art').html(data.list[14].title);
		$('.list>li:eq(14)>.art_des').html(data.list[14].summary);
		$('.list>li:eq(14)>.comment>span').html(data.list[14].likes_count);
		$('.list>li:eq(14)>.comment>a>span').html(data.list[14].all_comments_count);
		
		$('.list>li:eq(15)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[15].author.avatar);
		$('.list>li:eq(15)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[15].banner);
		$('.list>li:eq(15)>.name').html(data.list[15].author.nickname);
		$('.list>li:eq(15)>.art').html(data.list[15].title);
		$('.list>li:eq(15)>.art_des').html(data.list[15].summary);
		$('.list>li:eq(15)>.comment>span').html(data.list[15].likes_count);
		$('.list>li:eq(15)>.comment>a>span').html(data.list[15].all_comments_count);
		
		$('.list>li:eq(16)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[16].author.avatar);
		$('.list>li:eq(16)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[16].banner);
		$('.list>li:eq(16)>.name').html(data.list[16].author.nickname);
		$('.list>li:eq(16)>.art').html(data.list[16].title);
		$('.list>li:eq(16)>.art_des').html(data.list[16].summary);
		$('.list>li:eq(16)>.comment>span').html(data.list[16].likes_count);
		$('.list>li:eq(16)>.comment>a>span').html(data.list[16].all_comments_count);
		
		$('.list>li:eq(17)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[17].author.avatar);
		$('.list>li:eq(17)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[17].banner);
		$('.list>li:eq(17)>.name').html(data.list[17].author.nickname);
		$('.list>li:eq(17)>.art').html(data.list[17].title);
		$('.list>li:eq(17)>.art_des').html(data.list[17].summary);
		$('.list>li:eq(17)>.comment>span').html(data.list[17].likes_count);
		$('.list>li:eq(17)>.comment>a>span').html(data.list[17].all_comments_count);
		
		$('.list>li:eq(18)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[18].author.avatar);
		$('.list>li:eq(18)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[18].banner);
		$('.list>li:eq(18)>.name').html(data.list[18].author.nickname);
		$('.list>li:eq(18)>.art').html(data.list[18].title);
		$('.list>li:eq(18)>.art_des').html(data.list[18].summary);
		$('.list>li:eq(18)>.comment>span').html(data.list[18].likes_count);
		$('.list>li:eq(18)>.comment>a>span').html(data.list[18].all_comments_count);
		
		$('.list>li:eq(19)>img:eq(0)').attr('src',"https://cdn.sspai.com/"+data.list[19].author.avatar);
		$('.list>li:eq(19)>img:eq(1)').attr('src',"https://cdn.sspai.com/"+data.list[19].banner);
		$('.list>li:eq(19)>.name').html(data.list[19].author.nickname);
		$('.list>li:eq(19)>.art').html(data.list[19].title);
		$('.list>li:eq(19)>.art_des').html(data.list[19].summary);
		$('.list>li:eq(19)>.comment>span').html(data.list[19].likes_count);
		$('.list>li:eq(19)>.comment>a>span').html(data.list[19].all_comments_count);
		
		
	
	});
	
}


$('#more').click(function(){
	var url='https://sspai.com/api/v1/articles?offset=20&limit=10&is_matrix=1&sort=matrix_at';
	$.getJSON(url,function(data){
		//console.log(data);
		var olist=document.getElementsByClassName('list')[0];
		for(var i=0;i<10;i++){
			var oli=document.createElement('li');
		olist.appendChild(oli);
		var oimg=document.createElement('img');
		oimg.src="https://cdn.sspai.com/"+data.list[i].author.avatar;
		oli.appendChild(oimg);
		var oimg2=document.createElement('img');
		oimg2.className='art_img';
		oimg2.src="https://cdn.sspai.com/"+data.list[i].banner;
		oli.appendChild(oimg2);
		var oa=document.createElement('a');
		oa.className='name';
		oa.innerHTML=data.list[i].author.nickname;
		oli.appendChild(oa);
		var otime=document.createElement('time');
		otime.innerHTML='2016年08月18日';
		oli.appendChild(otime);
		var oa2=document.createElement('a');
		oa2.className='art';
		oa2.innerHTML=data.list[i].title;
		oli.appendChild(oa2);
		var op=document.createElement('p');
		op.className='art_des';
		op.innerHTML=data.list[i].promote_intro;
		oli.appendChild(op);
		var op2=document.createElement('p');
		op2.className='comment';
		oli.appendChild(op2);
		var oi=document.createElement('i');
		oi.className='iconfont icon-like';
		op2.appendChild(oi);
		var ospan=document.createElement('span');
		ospan.innerHTML=data.list[i].likes_count;
		op2.appendChild(ospan);
		var oa3=document.createElement('a');
		op2.appendChild(oa3);
		var oi2=document.createElement('i');
		oi2.className='iconfont icon-comment';
		oa3.appendChild(oi2);
		var ospan2=document.createElement('span');
		ospan2.innerHTML=data.list[i].all_comments_count;
		oa3.appendChild(ospan2);

		var omain=document.getElementsByClassName('main')[0];
		omain.style.height='10000px';
		}
			
	});
});
