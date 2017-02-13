// JavaScript Document
$(document).ready(function(){
		
		$("#searchBtn").click(function(){
			$(".search-group").addClass("active");
			$(".search-inp").focus();
		})
		
		$(".close").click(function(){
			$(".search-group").removeClass("active");
			$(".search-inp").blur();
		})
//		$(".search-inp").blur(function(){
//			$(".search-group").removeClass("active");
//		});
		//第二部分图片遮罩
		$(".second section ul li img").hover(function(){
			$(this).prev().css({"height":"200px","opacity":"1"});
			},function(){
				$(this).prev().css({"height":"0","opacity":"0"});
		});
				
		//点击标题滑动到相应界面
		$("nav .nav-menu li").click(function(){
			var i=$(this).index();
			$("html,body").animate({scrollTop:$("article").eq(i).offset().top - 90},1000);
		});
		
		 
	});