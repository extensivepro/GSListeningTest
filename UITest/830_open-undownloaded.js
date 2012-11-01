#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #830::打开未下载完成的听力试卷");

var target=UIATarget.localTarget();

UIATarget.onAlert=function onAlert(alert){
	var title = alert.name();
	// test if your script should handle the alert, and if so, return true
	var info = alert.staticTexts()[0];
	UIALogger.logDebug(info.name());
	if(info.name()=="提示"){
		alert.defaultButton().tap();
		UIALogger.logDebug("听力试卷未下载完成验证");
		return true;
	}
	// add a warning to the log for each alert encountered
	UIALogger.logWarning("Alert with title'"+ title +"'encountered!");
	// otherwise, return false to use the default handler
	return false;
}

UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[2].tap();

target.delay(2);

UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
target.frontMostApp().mainWindow().tableViews()[0].cells()[3].tap();

target.delay(3);

UIALogger.logMessage("打开未下载完成听力试卷通过");

UIALogger.logPass("CASE #830::打开未下载完成的听力考试试卷");