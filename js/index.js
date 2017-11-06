
$(window).scroll(function(){
	var docObj=$(document).scrollTop();
	if(docObj>0)
	{
		$("#returnTop").fadeIn()
	}
	else
	{
		$("#returnTop").fadeOut()
	}
});
$("#returnTop").click(function(){
	$("body,html").animate({"scrollTop":"0"},1000)
});//返回顶部
var serObj=document.getElementById("serach")
serObj.onfocus=function(){
	if(serObj.value=="生鲜/水果/零食")
	{
		serObj.value="";
	}
}
$(".bannerPoint li").mouseenter(function(){
	$(this).css({"background":"rgba(29,71,141,0.7)"}).siblings().css({"background":""})
	var i=$(this).index();
	n=i;
	$(".bannerImg li").eq(i).stop().fadeIn().siblings().stop().fadeOut()
});//划过焦点
var idz=setInterval(lunbo,2000);
var n=0;
function lunbo(){
	n++;
	if(n==4)
	{
	n=0;
	}
	$(".bannerPoint li").eq(n).css({"background":"rgba(29,71,141,0.7)"}).siblings().css({"background":""});
	$(".bannerImg li").eq(n).stop().fadeIn().siblings().fadeOut()
};//自动轮播
$(".banner").mouseenter(function(){
	clearInterval(idz);
	$("#bannerLRLeft,#bannerLRRight").stop().fadeIn();
});
$(".banner").mouseleave(function(){
	idz=setInterval(lunbo,2000);
	$("#bannerLRLeft,#bannerLRRight").stop().fadeOut();
});//启动关闭轮播
$("#bannerLRLeft").click(function(){
	n--;
	if(n==-1)
	{
	n=3;
	}
	$(".bannerPoint li").eq(n).css({"background":"rgba(29,71,141,0.7)"}).siblings().css({"background":""});
	$(".bannerImg li").eq(n).stop().fadeIn().siblings().fadeOut()
});
$("#bannerLRRight").click(function(){
	lunbo();
});//点击箭头

$(".eyesPic").mouseenter(function(){
	$(".eyesPic02 img").stop().animate({"right":"40px","width":"360px","height":"210px"}).css({"position":"relative"})
});
$(".eyesPic").mouseleave(function(){
	$(".eyesPic02 img").stop().animate({"right":"0px","width":"300px","height":"175px"}).css({"position":"relative"})
});//代金券变大小动画

$(".eyesUl li").mouseenter(function(){
	$(this).css({"background-color":"#DA251C","border-right":"0px"}).siblings().css({"background-color":""})
	var i=$(this).index()
	$(".eyesUl li dt a").eq(i).css({"color":"white"})
	$(".eyesUl li dt span").eq(i).css({"color":"white"})
});
$(".eyesUl li").mouseleave(function(){
	var i=$(this).index()
	$(".eyesUl li dt a").eq(i).css({"color":""});
	$(".eyesUl li dt span").eq(i).css({"color":""})
});//主视觉区左侧Li
$(".eyesUl li").mouseenter(function(){
	var i=$(this).index();
	$(".EightList").show()
	$(".EightList div").eq(i).show().siblings().hide();
});//鼠标进入列表显示
$("#eyesTab").mouseleave(function(){
	$(".EightList div").hide()
	$(".EightList").hide()
	$(".eyesUl li").css({"background-color":""})
})
