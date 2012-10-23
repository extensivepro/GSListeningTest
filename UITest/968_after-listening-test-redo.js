#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #968::考试完成后错题重做");

var target=UIATarget.localTarget();

UIATarget.onAlert = function onAlert(alert) {
	var title = alert.name();
	
    // test if your script should handle the alert, and if so, return true
	var info = alert.staticTexts()[1];
	UIALogger.logDebug(info.name());
	if(info.name() == "没有错题") {
		alert.defaultButton().tap();
        UIALogger.logDebug("错题数为零验证");
		return true;
	} 
	
	// add a warning to the log for each alert encountered
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    
    // otherwise, return false to use the default handler
    return false;
}

/*
target.frontMostApp().tabBar().buttons()["我"].tap();
if(target.frontMostApp().navigationBar().buttons()["注销"].checkIsValid()){
	target.frontMostApp().navigationBar().buttons()["注销"].tap();
}
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '用户资料'").tap();
target.frontMostApp().mainWindow().textFields()["Username"].tap();
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23@\n");
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23456\n");
*/

UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();

UIALogger.logMessage("开始进行听力考试");

target.delay(30);

UIALogger.logMessage("听力考试结束，显示听写成绩单");

var cell=target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题回顾:0/'");
if(cell.checkIsValid()){
	cell.tap();
	target.delay(5);
}else{
	target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题回顾'").tap();
	target.delay(2);
	target.frontMostApp().navigationBar().buttons()["重做"].tap();
	UIALogger.logMessage("进入错题重做");
	target.delay(30);
	UIALogger.logMessage("错题重做结束");
	UIALogger.logMessage("显示重做听写成绩单");
	target.delay(5);
}

UIALogger.logPass("CASE #968::考试完成后错题重做");