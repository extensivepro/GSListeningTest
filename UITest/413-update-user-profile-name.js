//#import "User/UIALogin.js"
#import "User/UIAUserCenter.js"
#import "User/UIAUserProfile.js"

UIALogger.logStart("CASE#413::用户更新姓名");

var target = UIATarget.localTarget();
target.frontMostApp().logElementTree();
UIAUserCenter.relogin();

var cell = target.frontMostApp().mainWindow().tableViews()[0].cells()["用户资料, 123@"];
cell.tap();
UIAUserProfile.update(target);

UIALogger.logPass("CASE#413::用户更新姓名");
