
UIALogger.logStart("CASE #972::未登录状态下获取用户听写记录");
var target = UIATarget.localTarget();

UIATarget.localTarget().pushTimeout(5);
target.frontMostApp().mainWindow().buttons()["登录"].tap();
UIATarget.localTarget().popTimeout();
target.frontMostApp().mainWindow().textFields()["Username"].tap();
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23@\n");
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23456\n");

target.frontMostApp().tabBar().buttons()["我"].tap();
target.frontMostApp().navigationBar().buttons()["注销"].tap();
UIALogger.logMessage("用户处于未登录状态");

UIATarget.localTarget().pushTimeout(5);
target.frontMostApp().navigationBar().buttons()["登录"].tap();
UIATarget.localTarget().popTimeout();
target.frontMostApp().mainWindow().textFields()["Username"].tap();
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23@\n");
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23456\n");

target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '听写记录'").tap();
UIALogger.logMessage("未登录状态下获取用户听写记录");

UIALogger.logPass("CASE #972::未登录状态下获取用户考试记录和听写记录");