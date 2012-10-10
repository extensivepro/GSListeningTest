#import "User/UIALogin.js"

UIALogger.logStart("CASE #826::未登陆状态下获取我的好友信息");

var target = UIATarget.localTarget();
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().buttons()["登录"].tap();

UIALogin.loginFast(target);
//target.frontMostApp().tabBar().buttons()["我"].tap();
//target.frontMostApp().navigationBar().rightButton().tap();

UIALogger.logPass("CASE #826::未登陆状态下获取我的好友信息");
