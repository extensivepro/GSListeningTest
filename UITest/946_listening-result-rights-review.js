#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #946::听写成绩单下的对题回顾");

var target=UIATarget.localTarget();

UIATarget.onAlert=function onAlert(alert){
	var title=alert.name();
	// test if your script should handle the alert, and if so, return true
	var info=alert.staticTexts()[1];
	UIALogger.logDebug(info.name());
	if(info.name()=="没有对题"){
		alert.defaultButton().tap();
		UIALogger.logDebug("对题数为零验证");
		return true;
	}
	// add a warning to the log for each alert encountered
	UIALogger.logWarning("Alert with title '" + title + "' encountered!");
	// otherwise, return false to use the default handler
	return false;
}

var traverseCells=function(target,tableView){
	for(var i=0;i<8;i++){
		if(tableView.cells()[i].name()===null)  break;
		tableView.cells()[i].tap();
		target.delay(1);
	}
}

var rightsReview=function(){
	var cell=target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '对题回顾:0/'");
	if(cell.checkIsValid()){
		cell.tap();
	}else{
		target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '对题回顾'").tap();
		target.delay(2);
		traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);
		target.frontMostApp().navigationBar().buttons()["听写成绩单"].tap();
	}
}

UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["我"].tap();
target.delay(1);

//已做试卷成绩单下的对题回顾
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '已做试卷'").tap();
target.delay(2);
UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
for(var i=0;i<8;i++)
{
	if(target.frontMostApp().mainWindow().tableViews()[0].cells()[i].name()===null)  break;
	target.frontMostApp().mainWindow().tableViews()[0].cells()[i].tap();
	target.delay(2);
	rightsReview();
	target.delay(5);
	target.frontMostApp().navigationBar().buttons()["听力考试记录"].tap();
}
target.delay(2);
target.frontMostApp().navigationBar().buttons()["用户中心"].tap();

//错题重做试卷成绩单下的对题记录
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题重做试卷'").tap();
target.delay(2);
UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
for(var i=0;i<8;i++)
{
	if(target.frontMostApp().mainWindow().tableViews()[0].cells()[i].name()===null)  break;
	target.frontMostApp().mainWindow().tableViews()[0].cells()[i].tap();
	target.delay(2);
	rightsReview();
	target.delay(5);
	target.frontMostApp().navigationBar().buttons()["听力考试记录"].tap();
}
target.delay(2);
target.frontMostApp().navigationBar().buttons()["用户中心"].tap();

UIALogger.logPass("CASE #946::听写成绩单下的对题回顾");