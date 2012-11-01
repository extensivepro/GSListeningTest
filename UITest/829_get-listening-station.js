#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #829::获取我的好友听写站列表");

var traverseCells=function(target,tableView){
	//var myFriendsBtn=UIATarget.localTarget().frontMostApp().navigationBar().leftButton();
	for(var i=1,len=tableView.cells().length;i<len;i++){
		if(tableView.cells()[i].isVisible()===0)
			break;
		tableView.cells()[i].tap();
		UIALogger.logMessage("进入听写站");
		//UIATarget.localTarget().delay(5);
		UIATarget.localTarget().frontMostApp().navigationBar().leftButton().tap();
		
	}
}

var target=UIATarget.localTarget();

UIAUserCenter.relogin();

target.frontMostApp().tabBar().buttons()["好友"].tap();

UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});

target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();

traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);

UIALogger.logPass("CASE #829::获取我的好友听写站列表");