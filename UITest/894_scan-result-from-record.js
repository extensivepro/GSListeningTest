#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #894::听力考试记录列表查看成绩单");

UIAUserCenter.relogin();
var target=UIATarget.localTarget();
target.frontMostApp().tabBar().buttons()["我"];
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '已做试卷'").tap();

target.delay(3);
var traverseCells = function(target, tableView) {
	for(var i = 0; i <8; i++ ) {
		if(tableView.cells()[i].isVisible() === 0) break;
		tableView.cells()[i].tap();
		UIATarget.localTarget().frontMostApp().navigationBar().buttons()["听力考试记录"].tap();
	}
}

UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});

traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);

UIALogger.logPass("CASE #894::听力考试记录列表查看成绩单");
