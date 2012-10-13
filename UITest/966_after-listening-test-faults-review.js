#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #966::考试完成后错题回顾");

var target=UIATarget.localTarget();

var traverseCells=function(target,tableView){
	for(var i=0,len=tableView.cells().length;i<len;i++){
		if(tableView.cells()[i].isValid()===0) break;
		tableView.cells()[i].tap();
		target.delay(5);
	}
}

var falseReview=function(){
	UIALogger.logMessage("查看错题详情");
	UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题回顾' ").tap();
	UIATarget.localTarget().delay(1);
	var okBtn=UIATarget.localTarget().frontMostApp().mainWindow().buttons()["好的"];
	if(okBtn.checkIsValid()){
		okBtn.tap();
		//UIATarget.localTarget().frontMostApp().navigationBar().leftButton().tap();
	}
	else{
		//UIATarget.localTarget().frontMostApp().navigationBar().leftButton().tap();
		//UIATarget.localTarget().delay(1);
		//UIATarget.localTarget().frontMostApp().navigationBar().leftButton().tap();
		//var cell=UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '我的答案'");
		traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);
	}
}

UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells()[2].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();
UIALogger.logMessage("进行听力考试");
target.delay(60);
UIALogger.logMessage("听力考试结束");
UIALogger.logMessage("显示听写成绩单");
falseReview();
target.delay(2);
target.frontMostApp().navigationBar().buttons()["听写成绩单"].tap();

UIALogger.logPass("CASE #966::考试完成后错题回顾");