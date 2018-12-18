//IE搜索框获取焦点
$(function() {
	$('input#search_input').focus(function() {
		$('.tips').css('display','block');
	})
	$('input#search_input').blur(function() {
		$('.tips').css('display','none');
	})
})