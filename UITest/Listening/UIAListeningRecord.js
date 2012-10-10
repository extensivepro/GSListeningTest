#import "UIAListeningResult.js"

var traverseCells = function(target, tableView) {
	for(var i = 0, len = tableView.cells().length; i < len; i++ ) {
		if(tableView.cells()[i].isVisible() === 0) {
			// UIALogger.logDebug("=====")
			tableView.cells()[i].staticTexts()[0].scrollToVisible();
		}
		tableView.cells()[i].tap()
		UIAListeningResult.show(target)
	}		
}

var UIAListeningRecord = {
	showComplete:function(target) {
		UIALogger.logStart("听写记录列表")
		UIALogger.logMessage("刷新记录")
		target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}})
		
		traverseCells(target, target.frontMostApp().mainWindow().tableViews()[0])
		
		target.frontMostApp().navigationBar().leftButton().tap();
		UIALogger.logPass("听写记录列表")
	},
	showRedo:function(target) {
		UIALogger.logStart("听力错误重做列表")
		UIALogger.logMessage("刷新记录")
		target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}})
		traverseCells(target, target.frontMostApp().mainWindow().tableViews()[0])
		target.frontMostApp().navigationBar().leftButton().tap();
		UIALogger.logPass("听力错误重做列表")
	}
}