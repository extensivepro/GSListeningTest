#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #969::显示听写站中的试卷");

var target=UIATarget.localTarget();
UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[4].tap();
UIALogger.logMessage("进入好友听写站");
target.delay(5);

UIALogger.logPass("CASE #969::显示听写站中的试卷");