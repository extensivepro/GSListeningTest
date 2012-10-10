#import "User/UIAUserCenter.js"
#import "User/UIAUserProfile.js"

UIALogger.logStart("CASE#413::用户更新姓名");

var target = UIATarget.localTarget();

UIAUserCenter.relogin();

target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '用户资料'").tap();

UIAUserProfile.update(target);
UIAUserProfile.updateBack(target);
//target.logElementTree();
target.delay(3);
target.frontMostApp().navigationBar().leftButton().tap();

UIALogger.logPass("CASE#413::用户更新姓名");

