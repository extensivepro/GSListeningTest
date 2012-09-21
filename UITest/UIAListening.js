
var target = UIATarget.localTarget();

UIALogger.logPass("听写列表测试");
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.55, y:0.09}, endOffset:{x:0.59, y:0.53}});
target.delay(1)
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
target.delay(1)
target.frontMostApp().mainWindow().tableViews()[0].cells()[3].tap();
target.frontMostApp().mainWindow().tableViews()[0].cells()[3].tap();
target.delay(1)
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
UIALogger.logPass("好友测试成功");

target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.45, y:0.45}, endOffset:{x:0.46, y:0.86}, duration:1.1});
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
UIALogger.logPass("听力试卷列表测试成功");

target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["开始考试"].tap();
UIALogger.logPass("听力开始界面测试成功");


