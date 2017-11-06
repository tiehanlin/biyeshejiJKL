	$(		//登录区延迟3s后1s内缓慢显示
		function()
		{
		setTimeout(yanchi,3000)
		}
	)
	function yanchi()
	{
	$(".bodyer").fadeIn(1000);
	}//登录区延迟3s后1s内缓慢显示
/*var li01Obj=document.getElementsByClassName("login_top_li01").item(0);
var li02Obj=document.getElementsByClassName("login_top_li02").item(0);
var loginObj=document.getElementsByClassName("login_block").item(0);
var singObj=document.getElementsByClassName("sign_none").item(0);
li01Obj.onclick=function()
{
	li01Obj.style.backgroundColor="#C0050A";
	loginObj.style.display="block";
	li02Obj.style.backgroundColor="#F81418";
	singObj.style.display="none";
}
li02Obj.onclick=function()
{
	li01Obj.style.backgroundColor="#F81418";
	loginObj.style.display="none";
	li02Obj.style.backgroundColor="#C0050A";
	singObj.style.display="block";
}*///登录注册选中出相应面js
$(".login_top_li01").click(function()
{
	$(".login_top_li01").css("background-color","#C0050A");
	$(".login_block").css("display","block");
	$(".login_top_li02").css("background-color","#F81418");
	$(".sign_none").css("display","none");
});
$(".login_top_li02").click(function()
{
	$(".login_top_li01").css("background-color","#F81418");
	$(".login_block").css("display","none");
	$(".login_top_li02").css("background-color","#C0050A");
	$(".sign_none").css("display","block");
});//登录注册选中出相应面jquery
var NickNameObj=document.getElementById("NickName");
var NickNameZZ=/^[a-zA-Z]\w{1,}$/;
function nullName()
{//清除框内信息
	if(NickNameZZ.test(NickNameObj.value)==false)
	{
	NickNameObj.value="";
	NickNameObj.style.color="black";
	}
}
function checkName()
{
	if(NickNameObj.value=="")
	{
		NickNameObj.value="请输入用户名/手机号/邮箱";
		NickNameObj.style.color="";
	}
	if(NickNameZZ.test(NickNameObj.value)==true)
	{
		return true;
	}
	else
	{
		return false;
	}
}
var PasswordObj=document.getElementById("password");
var PasswordZZ=/^\w{4,}$/;
function nullPassword()
{//清除框内信息
	if(PasswordZZ.test(PasswordObj.value)==false)
	{
	PasswordObj.value="";
	}
}
function checkpassword()
{
	if(PasswordZZ.test(PasswordObj.value)==true)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function finalCheck()
{
	if(checkName()==true&&checkpassword()==true)
	{
		alert("成功");
		return true;
	}
	else
	{
		alert("请重新输入用户名和密码");
		return false;
	}
}
//正则2
var NickName1Obj=document.getElementById("NickName1");
var NickName1ZZ=/^[a-zA-Z]\w{1,}$/;
function nullName1()
{//清除框内信息
	if(NickName1ZZ.test(NickName1Obj.value)==false)
	{
	NickName1Obj.value="";
	NickName1Obj.style.color="black";
	}
}
function checkName1()
{
	if(NickName1Obj.value=="")
	{
		NickName1Obj.value="请输入用户名/手机号/邮箱";
		NickName1Obj.style.color="";
	}
	if(NickName1ZZ.test(NickName1Obj.value)==true)
	{
		return true;
	}
	else
	{
		return false;
	}
}
var Password1Obj=document.getElementById("password1");
var Password1ZZ=/^\w{4,}$/;
function nullPassword1()
{//清除框内信息
	if(Password1ZZ.test(Password1Obj.value)==false)
	{
	Password1Obj.value="";
	}
}
function checkpassword1()
{
	if(Password1ZZ.test(Password1Obj.value)==true)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function finalCheck1()
{
	if(checkName1()==true&&checkpassword1()==true)
	{
		alert("成功");
		return true;
	}
	else
	{
		alert("请重新输入用户名和密码");
		return false;
	}
}
//鼠标滑过登录显示input
var imgsubObj=document.getElementsByClassName("submitDiv").item(0).getElementsByTagName("img").item(0);
var submitObj=document.getElementById("submits");
imgsubObj.onmouseover=function()
{
	imgsubObj.style.display="none";
	submitObj.style.display="block";
}
submitObj.onmouseout=function()
{
	imgsubObj.style.display="block";
	submitObj.style.display="none";
}
var imgsub1Obj=document.getElementsByClassName("submitDiv1").item(0).getElementsByTagName("img").item(0);
var submit1Obj=document.getElementById("submits1");
imgsub1Obj.onmouseover=function()
{
	imgsub1Obj.style.display="none";
	submit1Obj.style.display="block";
}
submit1Obj.onmouseout=function()
{
	imgsub1Obj.style.display="block";
	submit1Obj.style.display="none";
}///////////////////////////////////////////////////////////

/*var idz;
function autolunbo()
{
	next=now+1;//		now     next
	if(now==3)//        0		1
	{			//		1		2
		next=0;//		2		3
	}			//		3		0
				//		0		1
	pointObj.item(now).style.backgroundColor="";
	imgObj.item(now).style.display="none";
	pointObj.item(next).style.backgroundColor="#356ACB";
	imgObj.item(next).style.display="block";
	now++;
	if(now==4)
	{
		now=0;
	}
 idz=setTimeout("autolunbo()",2000)	
}
idz=setTimeout("autolunbo()",2000)*/
//倒计时三秒
var now=0;
var next;
var timesObj=document.getElementById("times").getElementsByTagName("img");
function times()
{
	next=now+1;
	timesObj.item(now).style.display="none";
	timesObj.item(next).style.display="block";
	now++
	setTimeout("times()",1000);
}
setTimeout("times()",1000);