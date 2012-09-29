#import "User/UIAUserCenter.js"
#import "Listening/UIAListeningRecord.js"

UIALogger.logStart("CASE #893::听力考试记录列表");
var target = UIATarget.localTarget();
target.frontMostApp().logElementTree();

UIAUserCenter.relogin();

target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '已做试卷'").tap();
UIAListeningRecord.showComplete(target);

UIALogger.logPass("CASE #893::听力考试记录列表");
