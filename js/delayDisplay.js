function delayDisplay(displayNum,className){//传入两个参数     显示的数目/格式化的类名
	var isScreenNum;//已经显示的项数
	var toScreenNum;//将显示的数量
	//绑定类名
	var divClass=document.getElementsByClassName(className);
	//遍历类名 设置隐藏
	for (var i = divClass.length - 1; i >= 0; i--) {
	divClass[i].style.display="none";
	}
	//遍历 显示项目
	for(var i=0;i<displayNum;i++){
	divClass[i].style.display="";
	}
	//已经显示的项数/将要显示的项数
	isScreenNum=displayNum;
	toScreenNum=isScreenNum+displayNum;
	//注册scroll时间
	window.onscroll=function(){
		var scrollTop=document.body.scrollTop;
		var clientHeight=document.body.clientHeight ;
		var scrollHeight=document.body.scrollHeight;
		if(scrollTop+clientHeight==scrollHeight){//判断滚动条是否到达底部
			sleep(1500);
			//显示项目
			for(var i=isScreenNum;i<toScreenNum;i++){
				divClass[i].style.display="";
			}
			isScreenNum=toScreenNum;
			toScreenNum=isScreenNum+displayNum;
		}
	}
}
//sleep
function sleep(time){
  for(var t = Date.now();Date.now() - t <= time;);
}