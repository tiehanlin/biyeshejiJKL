$(".eyesTitleLi01").mouseenter(function(){
	$(".eyesUl").stop().slideDown()
});
$(".eyesUl").mouseleave(function(){
	$(".eyesUl").stop().slideUp()
});
$(".smallImg li").click(function(){
	$(this).css({"border":"1px solid #DA251C"})
	$(this).siblings().css({"border":""})
	var i=$(this).index()
	$(".bigImg li").eq(i).show().siblings().hide()
});
$(".shopcar1").mouseenter(function(){
	$(".shopcar2").show()
	$(this).hide()
});
$(".shopcar2").mouseleave(function(){
	$(".shopcar1").show()
	$(this).hide()
});
var serObj=document.getElementById("serach")
serObj.onfocus=function(){
	if(serObj.value=="生鲜/水果/零食")
	{
		serObj.value="";
	}
}
