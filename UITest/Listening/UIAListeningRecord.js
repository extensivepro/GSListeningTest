#import "UIAListeningResult.js"

var traverseCells = function(target, cells) {
	for(var i = 0, len = cells.length; i < len; i++ ) {
		cells[i].tap()
		UIAListeningResult.show(target)
	}		
}

var UIAListeningRecord = {
	showComplete:function(target) {
		UIALogger.logStart("听写记录列表")
		UIALogger.logMessage("刷新记录")
		target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}})
		
		traverseCells(target, target.frontMostApp().mainWindow().tableViews()[0].cells())
		
		target.frontMostApp().navigationBar().leftButton().tap();
		UIALogger.logPass("听写记录列表")
	},
	showRedo:function(target) {
		UIALogger.logStart("听力错误重做列表")
		UIALogger.logMessage("刷新记录")
		target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}})
		traverseCells(target, target.frontMostApp().mainWindow().tableViews()[0].cells())
		target.frontMostApp().navigationBar().leftButton().tap();
		UIALogger.logPass("听力错误重做列表")
	}
}