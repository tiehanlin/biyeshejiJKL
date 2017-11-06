$(".eyesTitleLi01").mouseenter(function(){
	$(".eyesUl").stop().slideDown()
});
$(".eyesUl").mouseleave(function(){
	$(".eyesUl").stop().slideUp()
});
$(".tuan_ul li").mouseenter(function(){
		$(this).css({"background-color":"#f2f2f2"}).siblings().css({"background-color":""})
		$(this).children("a").css({"color":"#DA251C"})
})
$(".tuan_ul li").mouseleave(function(){
		$(this).children("a").css({"color":""})
})
setInterval(lunbo,2000)
var n=0;
function lunbo(){
	n++;
	if(n==2)
	{
		n=0;
	}
	$(".banner li").eq(n).show().siblings().hide()
}

