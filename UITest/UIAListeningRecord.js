var UIAListeningRecord = {
	showComplete:function(target) {
		UIALogger.logStart("听写记录列表");
		target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
		//target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
		target.frontMostApp().navigationBar().leftButton().tap();
		
		UIALogger.logPass("听写记录列表");
	}
}