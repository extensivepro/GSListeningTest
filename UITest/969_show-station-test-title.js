#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #969::显示听写站中的试卷");

var target=UIATarget.localTarget();

var traverseCells = function(target,tableView){
	for(var i=2,len=tableView.cells().length;i<len;i++){
		if(tableView.cells()[i].isVisible()===0)  break;
		tableView.cells()[i].tap();
		target.delay(2);
		target.frontMostApp().navigationBar().leftButton().tap();
		target.delay(2);
	}
}

UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
/*
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[4].tap();
UIALogger.logMessage("进入好友听写站");
target.delay(5);
*/
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);

UIALogger.logPass("CASE #969::显示听写站中的试卷");