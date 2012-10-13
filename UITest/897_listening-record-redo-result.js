#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #897::听力考试错题重做记录查看成绩单");

var traverseCells=function(target,tableView){
	for(var i=0,len=tableView.cells().length;i<len;i++){
		if(tableView.cells()[i].isVisible()===0) break;
		tableView.cells()[i].tap();
		UIATarget.localTarget().frontMostApp().navigationBar().buttons()["听力考试记录"].tap();
	}
}

var target=UIATarget.localTarget();
UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["我"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题重做试卷' ").tap();
target.delay(2);
traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);

UIALogger.logPass("CASE #897::听力考试错题重做记录查看成绩单");