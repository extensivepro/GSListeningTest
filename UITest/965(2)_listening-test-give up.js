//听力测试过程中用户点击“放弃”按钮
#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #965(2)::听力考试")

var target=UIATarget.localTarget();
UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();
target.delay(5);
target.frontMostApp().navigationBar().leftButton().tap();

UIALogger.logPass("CASE #965(2)::听力考试");