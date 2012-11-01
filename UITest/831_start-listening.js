#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #831::开始听力考试");
var target = UIATarget.localTarget();

UIAUserCenter.relogin();

//UIATarget.localTarget().pushTimeout(5);
//target.frontMostApp().mainWindow().buttons()["登录"].tap();
/*UIATarget.localTarget().popTimeout();
target.frontMostApp().mainWindow().textFields()["Username"].tap();
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23@\n");
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23456\n");
*/
//target.frontMostApp().tabBar().buttons()["好友"].tap();

UIALogger.logMessage("进入听力考试概况页面");
target.frontMostApp().tabBar().buttons()["好友"].tap();
UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();

target.delay(3);

UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();

target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();

UIALogger.logPass("CASE #831::开始听力考试");