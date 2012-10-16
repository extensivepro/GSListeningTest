#import "User/UIALogin.js"

UIALogger.logStart("CASE #826::未登陆状态下获取我的好友信息");


var target = UIATarget.localTarget();

target.delay(3);

target.frontMostApp().tabBar().buttons()["我"].tap();
target.delay(3);
var logoutBtn=target.frontMostApp().navigationBar().buttons()["注销"];
if(logoutBtn.checkIsValid()){
 logoutBtn.tap();
}

target.delay(3);
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.delay(3);
target.frontMostApp().mainWindow().buttons()["登录"].tap();

target.delay(3);
UIALogin.loginFast(target);
//target.frontMostApp().tabBar().buttons()["我"].tap();
//target.frontMostApp().navigationBar().rightButton().tap();

UIALogger.logPass("CASE #826::未登陆状态下获取我的好友信息");
