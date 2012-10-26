//先在web端进行听力测试，然后在手机端登录应用，查看听写记录汇总

#import "User/UIAUserCenter.js"

UIALogger.logStart("CASE #892::听力考试记录汇总");

UIAUserCenter.relogin();
target=UIATarget.localTarget();
target.frontMostApp().tabBar().buttons()["我"].tap();
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '已做试卷'").tap();
//查看异地听写记录是否上传，已做试卷记录是否进行了更新
target.delay(20);
target.frontMostApp().navigationBar().leftButton().tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题重做试卷'").tap();
//查看异地错题重做记录是否上传，错题重做记录是否进行了更新
target.delay(20);
target.frontMostApp().navigationBar().leftButton().tap();

UIALogger.logPass("CASE #892::听力考试记录汇总");