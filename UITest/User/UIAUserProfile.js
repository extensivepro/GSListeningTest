var UIAUserProfile = {
	update:function(target) {
        UIALogger.logStart("更新用户资料");
		target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["姓名"].textFields()[0].tap();
		target.frontMostApp().keyboard().typeString("3");
		target.frontMostApp().keyboard().typeString("\n");
		target.frontMostApp().navigationBar().rightButton().tap();
		
		target.delay(1);//Must do, otherwise alert will not be catch.
	},
	exit:function() {
		UIALogger.logDebug("退出用户资料界面");
		var target = UIATarget.localTarget();
		target.frontMostApp().navigationBar().leftButton().tap();		
	}
}

UIATarget.onAlert = function onAlert(alert) {
	var title = alert.name();
	
    // test if your script should handle the alert, and if so, return true
	var info = alert.staticTexts()[1];
	UIALogger.logDebug(info.name());
	if(info.name() == "更新资料成功") {
		alert.defaultButton().tap();
        UIALogger.logDebug("更新资料成功");
        UIALogger.logPass("更新用户资料成功");
		return true;
	}
	// add a warning to the log for each alert encountered
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    
    // otherwise, return false to use the default handler
    return false;
}

