UIATarget.onAlert = function onAlert(alert) {
	var title = alert.name();
	
    // test if your script should handle the alert, and if so, return true
	var info = alert.staticTexts()[1];
	UIALogger.logDebug(info.name());
	if(info.name() == "请输入用户名和密码") {
		alert.defaultButton().tap();
        UIALogger.logMessage("用户名和密码为空验证");
		return true;
	} else if(info.name() == "用户名必须是电子邮件") {
		alert.defaultButton().tap();
        UIALogger.logMessage("用户名必须是电子邮件验证");
        UIALogger.logPass("用户登陆输入验证");
		return true;
    }
	// add a warning to the log for each alert encountered
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    
    // otherwise, return false to use the default handler
    return false;
}

var UIALogin = {
    login:function(target) {
	    UIALogger.logStart("用户登陆输入验证");
	    UIATarget.localTarget().pushTimeout(5);
	    target.frontMostApp().mainWindow().buttons()["Login"].tap();
	    UIATarget.localTarget().popTimeout();
	    target.frontMostApp().mainWindow().textFields()["Username"].tap();
	    target.frontMostApp().keyboard().typeString("1");
	    target.frontMostApp().keyboard().typeString("2\n");
	    target.frontMostApp().keyboard().typeString("1");
	    target.frontMostApp().keyboard().typeString("23456\n");

	    UIALogger.logStart("用户登陆");
	    target.frontMostApp().mainWindow().textFields()["Username"].tap();
	    target.frontMostApp().keyboard().typeString("3@\n");
	    target.frontMostApp().mainWindow().buttons()["Login"].tap();
	    UIALogger.logPass("用户登陆");
    },
	loginFast:function(target) {
	    UIALogger.logStart("用户快速登陆");
	    target.frontMostApp().mainWindow().textFields()["Username"].tap();
	    target.frontMostApp().keyboard().typeString("1");
	    target.frontMostApp().keyboard().typeString("23@\n");
	    target.frontMostApp().keyboard().typeString("1");
	    target.frontMostApp().keyboard().typeString("23456\n");
	    target.frontMostApp().mainWindow().buttons()["Login"].tap();		
	    UIALogger.logPass("用户快速登陆");	
	}
};

