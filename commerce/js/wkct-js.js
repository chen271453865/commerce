
/*
	* 焦点图轮播
	* 禁止更换JQuery运行空间！！！！
*/
define(function(require,exports,module){
	require('css/reset.css');
	require('css/wkct.css');
	require('css/header.css');
	require('http://at.alicdn.com/t/font_vgkgbzbx377m0a4i.css');
	require('css/footer.css');
	
	require('js/jquery-1.7.2.min.js');
	
	
	function  enter(){
		$(document).ready(function($){
			var windowWidth = $(window).width();
			$(".ct-fimglist").width(windowWidth * 4); 
			$(".ct-fimglist li").width(windowWidth);
			$(".ct-ftoollist li").mouseover(function(){
				$(this).siblings().removeClass("on");
				$(this).addClass("on");
				var preNumber=$(this).prevAll().size();
				$(".ct-fimglist li").removeClass("onpre");
				$(".ct-fimglist li:nth-child("+preNumber+")").addClass("onpre");
				var margin = windowWidth;
				margin = margin *preNumber; 
				margin = margin * -1;
				$(".ct-fimglist").stop().animate({marginLeft: margin + "px"}, {duration: 500});
			});
		});
	}
	function animate(){
		$(function(){
			$('.logo').animate({
				marginLeft:'50px',
			});
			$('.search').animate({
				marginRight:'50px',
			})
		})
	}
	function tab(){
		$('#tab_ul').find('a').click(function(){
			$('#tab_ul').find('a').removeClass('a_hover');
			$(this).addClass('a_hover');
			$('.item').css({
				display:'none',
			})
			$('.item').eq( $(this).index()-1 ).css({
				display:'block',
			})
		})
	}
	exports.enter = enter;
	exports.animate = animate;
	exports.tab = tab;
})
