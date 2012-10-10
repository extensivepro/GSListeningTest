#import "UIALogin.js"

var UIAUserCenter = {
	relogin:function() {
		UIALogger.logStart("用户中心快速登陆");

		var target = UIATarget.localTarget();

		target.frontMostApp().tabBar().buttons()["我"].tap();
		var logoutBtn = target.frontMostApp().navigationBar().buttons()["注销"];
		if(logoutBtn.checkIsValid()) {
			logoutBtn.tap();
		}

		UIATarget.localTarget().pushTimeout(5);
		var loginCell = target.frontMostApp().mainWindow().tableViews()[0].cells()["用户资料, 未登录"];
		UIATarget.localTarget().popTimeout();
		loginCell.tap();

		UIALogin.loginFast(target);		
		UIALogger.logPass("用户中心快速登陆");
	}
}
/*
//target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].logElement();
cell = target.frontMostApp().mainWindow().tableViews()[0].cells()["用户资料, 123@"];
if(!cell.checkIsValid()) {
    UIALogger.logPass("登陆失败");
}


UIALogger.logStart("听力记录折叠");
cell = target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '听写记录'");
cell.tap();
cell.tap();
UIALogger.logPass("听力记录折叠");




UIALogger.logDebug("退出登陆状态");
UIATarget.localTarget().pushTimeout(5);
target.frontMostApp().navigationBar().rightButton().tap();
UIATarget.localTarget().popTimeout();
UIALogger.logPass("用户中心");	*/