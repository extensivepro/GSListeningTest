
UIALogger.logStart("CASE #971::用户注销");
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
	
UIALogger.logPass("CASE #971::用户注销");
