UIALogger.logStart("CASE #964::考试完成后对题回顾");

var target=UIATarget.localTarget();

/*
var traverseCells=function(target,tableView){
	for(var i=0,len=tableView.cells().length;i<len;i++){
		if(tableView.cells()[i].isVisible()===0)  break;
		tableView.cells()[i].tap();
		target.delay(2);
	}
}
*/

target.frontMostApp().tabBar().buttons()["我"].tap();
if(target.frontMostApp().navigationBar().buttons()["注销"].checkIsValid()){
	target.frontMostApp().navigationBar().buttons()["注销"].tap();
}
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '用户资料'").tap();
target.frontMostApp().mainWindow().textFields()["Username"].tap();
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23@\n");
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23456\n");

target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();

UIALogger.logMessage("开始进行听力考试");

target.delay(60);

UIALogger.logMessage("听力考试结束，显示听写成绩单");

target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '对题回顾'").tap();
//if(target.frontMostApp().mainWindow().buttons()["好的"].isValid())
	//target.frontMostApp().mainWindow().buttons()["好的"].tap();
	//break;



//traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);
//target.frontMostApp().navigationBar().buttons()["听写成绩单"].tap();


UIALogger.logPass("CASE ##964::考试完成后对题回顾");