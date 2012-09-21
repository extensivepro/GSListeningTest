
var target = UIATarget.localTarget();

target.delay(2);
target.frontMostApp().tabBar().buttons()["好友"].tap();
target.delay(2);
if (target.frontMostApp().mainWindow().tableViews().length == 0)
{
    UIALogger.logIssue("没有登录");
}
else
{
    target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
    target.delay(2);
    target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
    target.delay(2);
    target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
    target.frontMostApp().mainWindow().tableViews()[0].cells()["开始考试"].tap();
    target.delay(2);
    UIALogger.logPass("开始听写");
    target.delay(2);
    target.frontMostApp().keyboard().typeString("borad\n");
    while (target.frontMostApp().mainWindow().tableViews()[0].visibleCells().length <= 2)
    {
        UIALogger.logPass("正在听写");
        target.delay(2);
    }
    UIALogger.logPass("听写结束");
    if (target.frontMostApp().mainWindow().tableViews()[0].visibleCells().length > 5)
    {
        UIALogger.logPass("得到考试结果");
        target.delay(2);
        target.frontMostApp().mainWindow().tableViews()[0].cells()[5].tap();
        target.delay(2);
    }
    target.delay(2);
    UIALogger.logPass("返回");
    target.frontMostApp().navigationBar().leftButton().tap();
    target.delay(2);
    target.frontMostApp().navigationBar().leftButton().tap();
    target.delay(2);
    target.frontMostApp().navigationBar().leftButton().tap();
    target.delay(2);
    target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
    target.delay(2);
    target.frontMostApp().tabBar().buttons()["考试"].tap();
}

UIALogger.logPass("测试完成");