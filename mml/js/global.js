$(function() {
	main();
	//预订
	book();
	//返回顶部
	totop();
	//请求ajax数据
	getInfo();	
	//设置图片
	creatImg();
	//景点评分
	grade();
	//登录
	login();
	//注册
	reg();
	//初始化数据库
	initDatabase();	
	//reset();
	carShow();	
})

function main(){
	//设置html的fontsize
	(function() {
		window.onresize = function(){
			var html = document.documentElement;
			var hWidth = html.getBoundingClientRect().width;
			html.style.fontSize = hWidth / 15 + "px";
		}
		var html = document.documentElement;
		var hWidth = html.getBoundingClientRect().width;
		html.style.fontSize = hWidth / 15 + "px";
	})();
	//设置内容页最小高度
	$('.container').css('min-height',$(window).height())
	$('.section').height($(window).height());
	
	$('header .user').click(function(){
		window.location.href = 'login.html';
	})
	//首页全屏翻页
	if($(document).fullpage) {
		$('#container').fullpage({
			navigation: true
		});
	}
	//手机导航
	$('.nav-btn').on('touchstart',function(){
		$('.nav').fadeToggle(300)
	});
}
//预订
function book(){
	$('.main .selector').click(function() {
		$('#from1').show();
		$('.main .selector').removeClass('curselect');
		$(this).addClass('curselect');
	});

	$('.select-btn').click(function() {
		event.preventDefault();
		$(this).toggleClass('btn-cur');
	});
	
	$('.submit').click(function(){
		event.preventDefault()
		if(localStorage.getItem('cookie')){
			alert('提交成功');
			window.location.href = 'index.html';
		}else{
			alert('请登录');
			window.location.href = 'login.html';
		}
	})
}
//返回顶部
function totop() {
	$(window).on('scroll', function() {
		if($('body').scrollTop() > $(window).height()) {
			$('#totop').show();
		} else {
			$('#totop').hide();
		}
	});

	$('#totop').on('click touchstart', function() {
		$("body").animate({
			scrollTop: 0
		}, 600)
	});
}
//请求ajax数据
function getInfo(){
	$.ajax({
		type:"GET",
		url:"info.json",
		dataType: "json",  
		success:function(date){		
			setInfo(date.scenic,$('#about'));
			saveInDB(date.scenic);
		},
		error:function(){
			console.log('请求失败');
		}
	});	
}

function setInfo(myDate,obj){
	for(i in myDate){
		var $section = $('<section class="scenic"></section>');
		if(myDate[i].h1){
			$section.append($('<h1></h1>').text(myDate[i].h1));
		}
		$h3 = $('<h3></h3>').text(myDate[i].h3);		
		$section.append($h3);

		$img = $('<img></img>').attr('src',myDate[i].pic[0]);
		$section.append($img);
	
		obj.append($section);
	}		
	saveInfo(myDate);
}

function saveInfo(myDate){	
	$('.scenic img').on({
		'click':function(){
			var index = 0;
			for(var i=0;i<myDate.length;i++){
				if(myDate[i].h3 == $(this).parent().find('h3').text()){
					index = i;
					break;
				}
			}			
			window.location.href = 'grade.html';	
			//将数据存储在本地
			localStorage.setItem("rowid", index+'');
		}		
	});	
//	if(window.location.href == 'http://127.0.0.1:8020/lovepalau/grade.html'){
//		creatImg();
//	}
}
//读取本地存储数据
function creatImg(){
    var json;
	var index = localStorage.getItem('rowid');
	var db = getCurrentDb();
	db.transaction(function(trans) {
		trans.executeSql("select * from content ", [], function(ts, data) {
			if(data) {				
				json = data.rows.item(index);
//				console.log(json)
				var src = eval(json.pic);
				var imgLength = src.length;
				var desc = json.desc;
				
				var $warp = $('.banner #imglist');	
				$warp.width(window.screen.width*imgLength);
				//创建轮播图
				for(var i=0;i<imgLength;i++){
					var $img = $('<img/>').attr('src',src[i]);
					var $li = $('<li></li>').append($img);
					$warp.append($li);				
					$('#btns').append($('<span></span>'));
				}
				$('.banner .title').text(json.h3);
				$('.desc').text(desc);

				var comment = eval(json.comm);
				
				if(!comment){
					$('<p class="none">暂无评论</p>').appendTo($('.comment-list'));
					$('.scenic-desc span').addClass('up');			
					$('.desc').show();					
				}else{
					for(var i=0;i<comment.length;i++){
						var $box = $('<div class="list-box"></div>');
						var $head = $('<span class="head"></span>');	
						
						var $listTop = $('<div class="list-top"></div>');
						var $name = $('<p class="name"></p>');
						$name.text(comment[i].user).appendTo($listTop);
						var $time = $('<span class="time"></span>');
						$time.text(comment[i].time).appendTo($listTop);
						var $gradeStar = $('<p class="grade-star"></p>');
						for(var j=0;j<comment[i].grade;j++){
							$('<span></span>').appendTo($gradeStar);
						}
						$gradeStar.appendTo($listTop);
						
						var $listCon = $('<div class="list-content"></div>');
						var $p = $('<p></p>').appendTo($listCon);
						$p.text(comment[i].content);
						$('.comment-list').append($box);
						$box.append($head).append($listTop).append($listCon);
					}
				}		
				imgMove();
			}
		}, function(ts, message) {
			alert(message);
		});
	});
	
}
//图片滚动
function imgMove() {			
	var $warp = $('.banner #imglist');	
	var $btn = $('.banner #btns span');	
	var imgLength = $warp.find('img').length;
	var l = $warp.find('img').width();

	//滚动坐标值
	var iScroll = 0;
	//当下图片个数
	var iNow = 0;
	//初始位置
	var iStartX = 0;
	//初始滚动距离
	var iStartScroll = 0;
	
	var timer;
	
	$btn.eq(iNow).attr('class','active');
	
	$(document).on('touchmove', function() {
		event.preventDefault();
	});
	
	$warp.on({
		'touchstart': function() {
			clearInterval(timer);
			iStartX = event.changedTouches[0].pageX;
			iStartScroll = iScroll;
		},
		'touchmove': function() {
			var iDis = event.changedTouches[0].pageX - iStartX;
			iScroll = iStartScroll + iDis;
			move();
		},
		'touchend': function() {
			var iDis = event.changedTouches[0].pageX - iStartX;
			iScroll = iStartScroll + iDis;
			iNow = -iScroll / l;
			iNow = iNow % 1 < 0.3 ? Math.floor(iNow) : Math.ceil(iNow);
			if(iNow < 0) {
				iNow = 0;
			}
			if(iNow > imgLength - 1) {
				iNow = imgLength - 1;
			}
			//每次翻一屏
			iScroll = -iNow * l;
			for(var i = 0; i < imgLength; i++) {
				//按钮跟着图片走
				if(i != iNow) {
					$btn.eq(i).removeClass('active');
				} else {
					$btn.eq(i).addClass('active');
				}
			}
			move();
			timer = setInterval(autoPlay,5000);
		}
	});
	
	timer = setInterval(autoPlay,5000);
	//自动轮播
	function autoPlay(){
		iNow++
		if(iNow > imgLength - 1) {
			iNow = 0;
		}
		iScroll = -iNow * l;
		for(var i = 0; i < imgLength; i++) {
			//按钮跟着图片走
			if(i != iNow) {
				$btn.eq(i).removeClass('active');
			} else {
				$btn.eq(i).addClass('active');
			}
		}
		move();
	}
	
	function move() {
		$warp.css({
			'WebkitTransform': "translateX(" + iScroll + "px)",
			'transform': "translateX(" + iScroll + "px)"
		});
	}
}
//星星评分
function grade(){
	$('.scenic-desc').click(function(){
		$(this).find('span').toggleClass('up');
		$('.desc').slideToggle();
	});
	
	$('.comments').click(function(){
		$(this).find('span').toggleClass('up');
		$('section.grade').slideToggle();
	});
	
	$star = $('.star span');
	$star.each(function(){
		$(this).on({
			'touchstart click':function(){
				$(this).addClass('cur').prevAll().addClass('cur');
				$(this).nextAll().removeClass('cur');
			}
		});
	})	
}
//登录
function login(){	
	var mycookie = JSON.parse(localStorage.getItem('cookie'));
	
	if(mycookie){
		$('#login-username').val(mycookie.username);
		$('#login-password').val(mycookie.password);
	}
	
	$('#login').click(function(){
		var username = $('#login-username').val();
		var password = $('#login-password').val();
		console.log(username);
		console.log(password);
		
		var db = getCurrentDb();
		db.transaction(function(trans) {
			trans.executeSql("select * from user ", [], function(ts, data) {
				var loginSecc = false;
				var cookie = {};
				if(data) {
					for(var i = 0; i < data.rows.length; i++) {
						//获取某行数据的json对象
						if(data.rows.item(i).username == username&&data.rows.item(i).password == password) {
							loginSecc = true;
							cookie.username = username;
							cookie.password = password;
							break;
						}
					}
				}
				if(!loginSecc){
					alert('用户名或密码错误');
				}else{
					alert('登录成功');
					window.location.href = 'index.html';
					localStorage.setItem('cookie',JSON.stringify(cookie));
				}
			}, function(ts, message) {
				alert(message);
			});
		});
	});
}
//注册
function reg(){
	var username;
	var password;
	var code;
	var usernameCorrect = false;
	var passwordCorrect = false;
	var codeCorrect = false;
	//用户名校验
	$('#reg-username').on({
		'blur':function(){
			username = $(this).val();
			//验证用户名是否重复
			var db = getCurrentDb();
			db.transaction(function(trans) {
				trans.executeSql("select username from user ", [], function(ts, data) {
					if(data) {
						for(var i = 0; i < data.rows.length; i++) {
							//获取某行数据的json对象
							if(data.rows.item(i).username == username){
								$('.username-warning').text('用户名已存在');
								$(this).addClass('no');
								usernameCorrect = false;																			
								break;
							}
						}
					}
				}, function(ts, message) {
					alert(message);
				});
			});
			
			if(!checkUserName(username)){
				$('.username-warning').text('请输入以字母开头的4-16位用户名');
				$(this).addClass('no');
				usernameCorrect = false;
			}else{
				$('.username-warning').text('');
				$(this).removeClass('no');
				usernameCorrect = true;
			}
		}
	});
	//密码校验
	$('#reg-password').on({
		'blur':function(){
			password = $(this).val();
			if(!checkPwd(password)){
				$('.password-warning').text('请输入以字母开头的6-16位的密码');
				$(this).addClass('no');
				passwordCorrect = false;
			}else{
				$('.password-warning').text('');
				$(this).removeClass('no');
				passwordCorrect = true;
			}
		}
	});
	//确认密码
	$('#reg-repassword').on({
		'blur':function(){
			if($(this).val() != password){
				$('.repassword-warning').text('两次输入的密码不一致');
				$(this).addClass('no');
				passwordCorrect = false;
			}else{
				$('.repassword-warning').text('');
				$(this).removeClass('no');
				passwordCorrect = true;
			}
		}
	});				
	//获取验证码
	code = creatCode(6);
	$("#getCode").val(code);
	
	$("#getCode").click(function(){
		code = creatCode(6);
		$("#getCode").val(code);
	});
	//验证码校验
	$('#code').on({
		'blur':function(){
			if($(this).val() != code){
				codeCorrect = false;
				$(this).addClass('no');
				$('.code-warning').text('验证码错误');
			}else{
				codeCorrect = true;
				$(this).removeClass('no');
				$('.code-warning').text('');
			}
		}
	})
	//注册
	$('#reg').click(function(){
		if(passwordCorrect && usernameCorrect && codeCorrect){				
			var newUser = {};	
			newUser.username = username;
			newUser.password = password;
			
			saveDate(newUser);
		}else{
			alert('请正确填写注册信息');
		}
	});
}

//生成随机验证码
function creatCode(num){
	var str = '';
	for(var i=0;i<num;i++){
		str += Math.floor(Math.random()*10);
	}
	return str;
}

function checkUserName(i){
	var checkNum = /^[a-zA-Z][a-zA-Z0-9]{3,16}$/;
	return checkNum.test(i);
}

function checkPwd(i){
	var checkNum = /^[a-zA-Z0-9][a-zA-Z0-9]{5,18}$/;
	return checkNum.test(i);	
}
//初始化数据库
function initDatabase() {
	var db = getCurrentDb(); 
	if(!db) {
		alert("您的浏览器不支持HTML5本地数据库");
		return;
	}
	//启动一个事务，并设置回调函数
	db.transaction(function(trans) { 
		//trans.executeSql('DROP TABLE user',[], function(trans, result) {}, function(trans, message) {});
		trans.executeSql("create table if not exists user(username text null,password text null)", [], function(trans, result) {}, function(trans, message) {
			alert('建立数据表失败');
		});
		//trans.executeSql('DROP TABLE content',[], function(trans, result) {}, function(trans, message) {});
		trans.executeSql("create table if not exists content(h1 text,h3 text,desc text,pic text,comm text)", [], function(trans, result) {}, function(trans, message) {
			alert('建立数据表失败');
		});
	});
}
//打开数据库，或者直接连接数据库参数：数据库名称，版本，概述，大小。如果数据库不存在那么创建
function getCurrentDb() {	
 	var db = openDatabase("info", "1.0", "it's to save data!", 1024 * 1024);;
 	return db;
}
//将数据写入数据库
function saveDate(mydate) {
	var db = getCurrentDb();
	var username = mydate.username;
	var password = mydate.password;
	
	db.transaction(function(trans) {					
		trans.executeSql("insert into user(username,password) values(?,?) ", [username,password], function(ts, data) {
			alert('注册成功');
			window.location.href = 'login.html';
		}, function(ts, message) {
			alert('请正确填写注册信息');
		});
	});
}			
//写入数据
function saveInDB(mydate){
	var isSet = localStorage.getItem('isSet');
	if(!isSet){
		var db = getCurrentDb();
		
		db.transaction(function(trans) {	
			for(var i=0;i<mydate.length;i++){
				var h1 = mydate[i].h1 || '';
				var h3 = mydate[i].h3;
				var desc = mydate[i].desc;
				var pic = JSON.stringify(mydate[i].pic);
				var comm = JSON.stringify(mydate[i].comment) || '';						
			
				trans.executeSql("insert into content(h1,h3,desc,pic,comm) values(?,?,?,?,?) ", [h1,h3,desc,pic,comm], function(ts, data) {
					localStorage.setItem('isSet','true');
				}, function(ts, message) {
					alert('写入失败');
				});
			}
		});		
	}
}

function reset(){
	var db = getCurrentDb(); 
	if(!db) {
		alert("您的浏览器不支持HTML5本地数据库");
		return;
	}
	//启动一个事务，并设置回调函数
	db.transaction(function(trans) { 
		trans.executeSql('DROP TABLE content',[], function(trans, result) {}, function(trans, message) {});
		localStorage.removeItem('isSet');
	});
}

function carShow(){	
	$('.car-img-warp .btn').click(function(){
		var $count = $(this).siblings().find('li');
		
		if($(this).hasClass('btn-left')){
			$count.parent().prepend($count.last());
		}else{
			$count.parent().append($count.first());
		}
	});
}
