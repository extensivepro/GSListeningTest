#import "UIALogin.js"
#import "UIAListeningRecord.js"

UIALogger.logStart("用户中心");

var target = UIATarget.localTarget();

target.frontMostApp().tabBar().buttons()["我"].tap();
var logoutBtn = target.frontMostApp().navigationBar().buttons()["注销"];
if(logoutBtn.checkIsValid()) {
	logoutBtn.tap();
	target.delay(1);
}

UIATarget.localTarget().pushTimeout(5);
var loginCell = target.frontMostApp().mainWindow().tableViews()[0].cells()["用户资料, 未登录"];
UIATarget.localTarget().popTimeout();
loginCell.tap();

UIALogin.test(target);

UIALogger.logStart("同步考试记录");
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].logElement();
var cell = target.frontMostApp().mainWindow().tableViews()[0].cells()["用户资料, 123@"];
if(cell.isValid()) {
    UIALogger.logPass("同步考试记录");
} else {
    UIALogger.logFail("同步考试记录");
}

UIALogger.logStart("听力记录折叠");
target.frontMostApp().mainWindow().tableViews()[0].cells()["听写记录, 4"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()["听写记录, 4"].tap();
UIALogger.logPass("听力记录折叠");

target.frontMostApp().mainWindow().tableViews()[0].cells()["已做试卷, 4"].tap();
UIAListeningRecord.showComplete(target);

UIALogger.logDebug("退出登陆状态");
UIATarget.localTarget().pushTimeout(5);
target.frontMostApp().navigationBar().rightButton().tap();
UIATarget.localTarget().popTimeout();
UIALogger.logPass("用户中心");


