
var target = UIATarget.localTarget();
var listIsEmpty = false;

UIATarget.onAlert = function onAlert(alert) {
	alert.defaultButton().tap();
	listIsEmpty = true;
	target.delay(1);
	return true;
}

target.frontMostApp().tabBar().buttons()[1].tap();
target.delay(1);

//var checkLogin = target.frontMostApp().mainWindow().staticTexts();
//var checkLogin = target.frontMostApp().mainWindow().buttons()[0];
var checkLogin = target.frontMostApp().mainWindow().tableViews()[0].cells();
//if(checkLogin.checkIsValid())
//if(target.frontMostApp().mainWindow().tableViews()[0].cells().length != 2)
if(checkLogin.length == 0)
{
	UIALogger.logPass("number of checkLogin Cell is "+ checkLogin.length);
	target.frontMostApp().mainWindow().buttons()[0].tap();
	target.delay(1);
	target.frontMostApp().mainWindow().tableViews()[0].cells()[0].textFields()[0].tap();
	target.frontMostApp().keyboard().typeString("123@");
	target.delay(1);
	target.frontMostApp().mainWindow().tableViews()[0].cells()[1].secureTextFields()[0].tap();
	target.frontMostApp().keyboard().typeString("1");
	target.delay(0.1);
	target.frontMostApp().keyboard().typeString("23456");

	target.delay(2);
	target.frontMostApp().mainWindow().tableViews()[0].cells()[2].tap();
	target.delay(2);
}
//select techer after data is loaded


var checkLoding = target.frontMostApp().mainWindow().tableViews()[0].cells();
while(checkLoding.length != 2)
{
	UIALogger.logPass("number of checkLodingCell is "+ checkLoding.length);
	checkLoding = target.frontMostApp().mainWindow().tableViews()[0].cells();
	target.delay(2);
}
checkLoding[0].tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells()[1].tap();
target.delay(1);
var testCell = target.frontMostApp().mainWindow().tableViews()[0].cells();
while(testCell.length != 1){
	UIALogger.logPass("number of testCell is "+ testCell.length);
	testCell  = target.frontMostApp().mainWindow().tableViews()[0].cells()[0];
	target.delay(2);
}
testCell[0].tap();

//start to do paper
target.frontMostApp().mainWindow().tableViews()[0].cells()[5].tap();
target.frontMostApp().keyboard().typeString("book");

target.delay(1);
var rightRecordReviewFirstTime = target.frontMostApp().mainWindow().tableViews()[0].cells();
while(rightRecordReviewFirstTime.length != 8){
	UIALogger.logPass("number of rightRecordReviewFirstTimeCell is "+ rightRecordReviewFirstTime.length);
	rightRecordReviewFirstTime = target.frontMostApp().mainWindow().tableViews()[0].cells();
	target.delay(2);
}
rightRecordReviewFirstTime[2].tap();
target.delay(1);
if(!listIsEmpty)
{
	target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
	target.delay(1);
	target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();
	target.delay(1);
	target.frontMostApp().navigationBar().leftButton().tap();
}
listIsEmpty = false;
var wrongRecordReviewFirstTime = target.frontMostApp().mainWindow().tableViews()[0].cells();
while(wrongRecordReviewFirstTime.length != 8)
{
	UIALogger.logPass("number of wrongRecordReviewFirstTime Cell is "+ wrongRecordReviewFirstTime.length);
	wrongRecordReviewFirstTime = target.frontMostApp().mainWindow().tableViews()[0].cells();
	target.delay(2);
}
wrongRecordReviewFirstTime[5].tap();
target.delay(1);
if(!listIsEmpty)
{
	target.frontMostApp().navigationBar().rightButton().tap();
	target.delay(1);
	target.frontMostApp().navigationBar().leftButton().tap();
	target.delay(1);
	target.frontMostApp().navigationBar().rightButton().tap();
	target.frontMostApp().keyboard().typeString("bb\n");
}
listIsEmpty = false;

var wrongRecordReviewSecondTime = target.frontMostApp().mainWindow().tableViews()[0].cells();
while(wrongRecordReviewSecondTime.length != 8)
{
	wrongRecordReviewSecondTime = target.frontMostApp().mainWindow().tableViews()[0].cells();
	target.delay(2);
}
wrongRecordReviewSecondTime[5].tap();
if(!listIsEmpty)
{
	target.frontMostApp().navigationBar().leftButton().tap();
	target.delay(1);
}
target.frontMostApp().navigationBar().leftButton().tap();
target.delay(1);
target.frontMostApp().navigationBar().leftButton().tap();
target.delay(1);
target.frontMostApp().navigationBar().leftButton().tap();
target.delay(1);
target.frontMostApp().navigationBar().leftButton().tap();
target.delay(1);
target.frontMostApp().navigationBar().leftButton().tap();
target.delay(1);
target.frontMostApp().mainWindow().tableViews()[0].cells()[0].tap();

