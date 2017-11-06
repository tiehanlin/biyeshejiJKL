$(".b01Leftdiv").mouseenter(function(){
	$("#huaTou").stop().animate({"left":"243px"},function()
		{
			$("#huaTou").css({"left":"-243px"})
		})
});
$(".b01RightdivDt").mouseenter(function(){
	$(this).find("img").stop().animate({"left":"-10px","top":"-10px","width":"240px","height":"240px"},500)
});
$(".b01RightdivDt").mouseleave(function(){
	$(this).find("img").stop().animate({"left":"20px","top":"20px","width":"180px","height":"180px"},500)
});
$(".b02divfive").mouseenter(function(){
	$(this).find("img").css({"position":"relative"}).stop().animate({"left":"-10px"},500)
});
$(".b02divfive").mouseleave(function(){
	$(this).find("img").css({"position":"relative"}).stop().animate({"left":"0px"},500)
});
var k=0;
function minilunbo1(){
	k++
	if(k==2)
	{
		k=0;
	}
	$(".b03LeftDiv img").eq(k).show().siblings().hide()
}
setInterval(minilunbo1,2000)
$(".b03bodyUl li").mouseenter(function(){
	var i=$(this).index();
	$(this).children("a").css({"background-color":"#8BD563","color":"white"})
	$(this).siblings().children("a").css({"background-color":"","color":""})
	$(".b03bodyTab").eq(i).show().siblings().hide()
});
$(".b03bodyTabDl img").mouseenter(function(){
	$(this).stop().animate({"left":"12px"})
});
$(".b03bodyTabDl img").mouseleave(function(){
	$(this).stop().animate({"left":"4px"})
});
$(".vipCard dl").mouseenter(function(){
	$(this).children("dd").css({"color":"red"})
	$(this).children("dt").stop().animate({"bottom":"5px"})
});
$(".vipCard dl").mouseleave(function(){
	$(this).children("dd").css({"color":""})
	$(this).children("dt").stop().animate({"bottom":"0px"})
});
