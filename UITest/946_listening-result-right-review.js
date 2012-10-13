//脚本能Pass，但是有问题

#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #946::听写成绩单下的对题回顾");

var rightReview=function(){
	UIALogger.logMessage("查看对题详情");
	UIATarget.localTarget().frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '对题回顾' ").tap();
	UIATarget.localTarget().delay(1);
	var okBtn=UIATarget.localTarget().frontMostApp().mainWindow().buttons()["好的"];
	if(okBtn.checkIsValid()){
		okBtn.tap();
		UIATarget.localTarget().frontMostApp().navigationBar().leftButton().tap();
	}
	else{
		//UIATarget.localTarget().delay(1);
		UIATarget.localTarget().frontMostApp().navigationBar().leftButton().tap();
		//UIATarget.localTarget().delay(1);
		//UIATarget.localTarget().frontMostApp().navigationBar().leftButton().tap();
	}
	//UIATarget.localTarget().frontMostApp().navigationBar().buttons()["听力考试记录"].tap();
}

var traverseCells=function(target,tableView){
	for(var i=0/*,len=tableView.cells().length*/;/*i<len*/i<7;i++){
		//if(tableView.cells()[i].isVisible()===0) break;
		tableView.cells()[i].tap();
		UIATarget.localTarget().delay(1);
		rightReview();
	}
}

var target=UIATarget.localTarget();
UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["我"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '已做试卷' ").tap();
target.delay(1);
traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);

UIALogger.logPass("CASE #946::听写成绩单下的对题回顾");