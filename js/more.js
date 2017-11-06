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
$(".eyesTitleLi01").mouseenter(function(){
	$(".eyesUl").stop().slideDown()
});
$(".eyesUl").mouseleave(function(){
	$(".eyesUl").stop().slideUp()
});
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
$("#eyesTab").mouseleave(function(){

	$(".eyesUl li").css({"background-color":""})
})
$(".list01").mouseenter(function(){
	$(this).stop().animate({"left":"-58px"}).children(".whiteArea").css("display","none")
})
$(".list01").mouseleave(function(){
	$(this).stop().animate({"left":"0px"}).children(".whiteArea").css("display","block")
});
$(".whiteCar").mouseenter(function(){
			$(this).hide().siblings("div").show();
		})
$(".redCar").mouseleave(function(){
			$(this).hide().siblings("div").show();
		});