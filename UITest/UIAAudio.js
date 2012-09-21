#import "UIAApplication.js";

var gs = UIATarget.localTarget().frontMostApp();

gs.log("开始测试");
gs.wait(2);
gs.selectTab("好友");
gs.wait(2);
gs.selectCell(0);
gs.wait(1);
gs.selectCell(1);
gs.wait(1);
gs.selectCell(0);
gs.wait(1);
gs.selectCell("开始考试");
gs.log("测试完成");

