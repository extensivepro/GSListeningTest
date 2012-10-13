#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #827::登录状态下获取我的好友信息");

var traverseCells = function(target,tableView){
	for(var i=0,len=tableView.cells().length;i<len;i++){
		if(tableView.cells()[i].isVisible()===0)
		   break;
		   tableView.cells()[i].tap();
		   //UIATarget.localTarget().frontMostApp().navigationBar().buttons()["我的好友"].tap();
		   tableView.cells()[i].tap();
	}
} 

UIAUserCenter.relogin();
var target=UIATarget.localTarget();
target.frontMostApp().tabBar().buttons()["好友"].tap();

traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);

UIALogger.logPass("CASE #827::登录状态下获取我的好友信息");