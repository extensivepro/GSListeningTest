#import "User/UIALogin.js"

UIALogger.logStart("CASE #1020::未登录状态下查看好友信息");
var traverseCells = function(target,tableView){
for(var i=0,len=tableView.cells().length;i<len;i++){
		if(tableView.cells()[i].isVisible()===0)
		   break;
		   tableView.cells()[i].tap();
		   tableView.cells()[i].tap();
	}
} 
var target = UIATarget.localTarget();

target.frontMostApp().tabBar().buttons()["我"].tap();
var logoutBtn=target.frontMostApp().navigationBar().buttons()["注销"];
if(logoutBtn.checkIsValid()){
 logoutBtn.tap();
}

target.delay(1);
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.delay(1);
target.frontMostApp().mainWindow().buttons()["登录"].tap();
target.delay(1);
UIALogin.loginFast(target);

target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});

traverseCells(target,target.frontMostApp().mainWindow().tableViews()[0]);
target.delay(3);

UIALogger.logPass("CASE #1020::未登录状态下查看好友信息");