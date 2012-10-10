var UIAUserProfile = {
	updateState:1,
	update:function(target) {
        UIALogger.logStart("更新用户资料");
		this.updateState=1
		target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["姓名"].textFields()[0].tap();
		target.frontMostApp().keyboard().typeString("3");
		target.frontMostApp().keyboard().typeString("\n");
		target.frontMostApp().navigationBar().rightButton().tap();
		
		target.delay(1);//Must do, otherwise alert will not be catch.
	},
	updateBack:function(target) {
		UIALogger.logStart("还原更新用户资料");
		this.updateStat = 0;
		target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["姓名"].textFields()[0].tap();
		target.frontMostApp().keyboard().buttons()["删除"].tap();
		target.frontMostApp().keyboard().typeString("\n");
		target.frontMostApp().navigationBar().rightButton().tap();
	},
	exit:function(target) {
		UIALogger.logDebug("退出用户资料界面");
		// var target = UIATarget.localTarget();
		target.pushTimeout(5);
		target.frontMostApp().navigationBar().leftButton().tap();		
		target.popTimeout();
	}
}

UIATarget.onAlert = function onAlert(alert) {
	var title = alert.name();
	
    // test if your script should handle the alert, and if so, return true
	var info = alert.staticTexts()[1];
	UIALogger.logDebug(info.name());
	if(info.name() == "更新资料成功") {
		alert.defaultButton().tap();
		if(UIAUserProfile.updateState === 1) {
	        UIALogger.logPass("更新用户资料成功");
		}
		else {
	        UIALogger.logPass("还原更新用户资料");
		}
		return true;
	}
	// add a warning to the log for each alert encountered
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    
    // otherwise, return false to use the default handler
    return false;
}

