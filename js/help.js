var MainObj=document.getElementsByClassName("RightMain")
.item(0)
.getElementsByTagName("div")
function aaa(val){
	for(i=0;i<15;i++)
	{
		if(val==i)
 		{
 			MainObj.item(i).style.display="block"
 		}
 		else
 		{
 			MainObj.item(i).style.display="none";
 		}
	}
}
var serObj=document.getElementById("serach")
serObj.onfocus=function(){
	if(serObj.value=="生鲜/水果/零食")
	{
		serObj.value="";
	}
}
