#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #968::考试完成后错题重做");

var target=UIATarget.localTarget();
UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
UIALogger.logMessage("进入好友听写站");
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells()[2].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();
UIALogger.logMessage("进行听力考试");
target.delay(40);
UIALogger.logMessage("听力考试结束");
UIALogger.logMessage("显示听写成绩单");
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题回顾'").tap();
/*
var okBtn=UIATarget.localTarget().frontMostApp().mainWindow().buttons()["好的"];
if(okBtn.checkIsValid()===0){
	target.frontMostApp().navigationBar().buttons()["重做"].tap();
}
*/
target.delay(10);
target.frontMostApp().navigationBar().buttons()["重做"].tap();
UIALogger.logMessage("进入错题重做");
target.delay(40);
UIALogger.logMessage("错题重做结束");
UIALogger.logMessage("显示重做听写成绩单");
target.delay(5);

UIALogger.logPass("CASE #968::考试完成后错题重做");