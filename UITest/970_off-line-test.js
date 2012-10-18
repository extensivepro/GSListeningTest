//注册用户已登录，且处于离线状态。听写站中存在已下载完成的试卷

UIALogger.logStart("CASE #970::离线情况下进行考试");

var target=UIATarget.localTarget();
var tabBar=target.frontMostApp().tabBar();
var tableView=target.frontMostApp().mainWindow().tableViews()[0];

tabBar.buttons()["我"].tap();
if(target.frontMostApp().navigationBar().buttons()["注销"].checkIsValid()){
	target.frontMostApp().navigationBar().buttons()["注销"].tap();
}
tableView.cells().firstWithPredicate("name beginswith '用户资料'").tap();
target.frontMostApp().mainWindow().textFields()["Username"].tap();
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23@\n");
target.frontMostApp().keyboard().typeString("1");
target.frontMostApp().keyboard().typeString("23456\n");

//设置为离线
target.delay(30);

tabBar.buttons()["好友"].tap();
//target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
//target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
tableView.cells()[0].tap();
tableView.cells()[1].tap();
target.delay(5);
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
//tableView.cells()[0].tap();
target.delay(5);
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();
UIALogger.logMessage("开始进行离线状态下的听力考试");

UIALogger.logPass("CASE #970::离线情况下进行考试");