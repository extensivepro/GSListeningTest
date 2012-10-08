#import "User/UIAUserCenter.js"
#import "Listening/UIAListeningRecord.js"

UIALogger.logStart("CASE #896::听力考试错题重做记录列表");
var target = UIATarget.localTarget();

UIAUserCenter.relogin();

target.frontMostApp().mainWindow().tableViews()[0].cells().firstWithPredicate("name beginswith '错题重做试卷'").tap();
UIAListeningRecord.showRedo(target);

UIALogger.logPass("CASE #896::听力考试错题重做记录列表");
