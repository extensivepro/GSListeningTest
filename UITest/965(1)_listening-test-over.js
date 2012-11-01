//听力测试过程中用户未点击“放弃”按钮
#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #965(1)::听力考试");

var target=UIATarget.localTarget();
UIAUserCenter.relogin();
target.frontMostApp().tabBar().buttons()["好友"].tap();
UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.delay(1);
UIALogger.logMessage("刷新记录")
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.64, y:0.56}, endOffset:{x:0.71, y:0.91}});
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '开始考试'").tap();
target.delay(60);

UIALogger.logPass("CASE #965(1)::听力考试");