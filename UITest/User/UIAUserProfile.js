UIATarget.onAlert = function onAlert(alert) {
	var title = alert.name();
	
    // test if your script should handle the alert, and if so, return true
	var info = alert.staticTexts()[1];
	UIALogger.logDebug(info.name());
	if(info.name() == "更新资料成功") {
		alert.defaultButton().tap();
        UIALogger.logMessage("更新资料成功");
        UIALogger.logPass("更新用户资料成功");
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

var UIAUserProfile = {
	update:function(target) {
        UIALogger.logStart("更新用户资料成功");
		target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["姓名"].textFields()[0].tap();
		target.frontMostApp().keyboard().typeString("3");
		target.frontMostApp().keyboard().typeString("\n");
		target.frontMostApp().navigationBar().rightButton().tap();
		
		target.frontMostApp().navigationBar().leftButton().tap();
	}
}
