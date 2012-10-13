#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #830::打开未下载完成的听力试卷");

UIAUserCenter.relogin();
var target=UIATarget.localTarget();
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[3].tap();

target.delay(2);

target.frontMostApp().mainWindow().tableViews()[0].cells()[3].tap();

UIALogger.logMessage("打开未下载完成听力试卷通过");

UIALogger.logPass("CASE #830::打开未下载完成的听力考试试卷");