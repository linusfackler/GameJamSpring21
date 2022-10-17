gdjs.DeadCode = {};
gdjs.DeadCode.GDBigGuyObjects1= [];
gdjs.DeadCode.GDBigGuyObjects2= [];
gdjs.DeadCode.GDBigGuyObjects3= [];
gdjs.DeadCode.GDScoreObjects1= [];
gdjs.DeadCode.GDScoreObjects2= [];
gdjs.DeadCode.GDScoreObjects3= [];
gdjs.DeadCode.GDInvisibleObjects1= [];
gdjs.DeadCode.GDInvisibleObjects2= [];
gdjs.DeadCode.GDInvisibleObjects3= [];
gdjs.DeadCode.GDCoinObjects1= [];
gdjs.DeadCode.GDCoinObjects2= [];
gdjs.DeadCode.GDCoinObjects3= [];
gdjs.DeadCode.GDPortalObjects1= [];
gdjs.DeadCode.GDPortalObjects2= [];
gdjs.DeadCode.GDPortalObjects3= [];
gdjs.DeadCode.GDBGScrollObjects1= [];
gdjs.DeadCode.GDBGScrollObjects2= [];
gdjs.DeadCode.GDBGScrollObjects3= [];
gdjs.DeadCode.GDYouDeadObjects1= [];
gdjs.DeadCode.GDYouDeadObjects2= [];
gdjs.DeadCode.GDYouDeadObjects3= [];
gdjs.DeadCode.GDmenuObjects1= [];
gdjs.DeadCode.GDmenuObjects2= [];
gdjs.DeadCode.GDmenuObjects3= [];
gdjs.DeadCode.GDPlayAgainObjects1= [];
gdjs.DeadCode.GDPlayAgainObjects2= [];
gdjs.DeadCode.GDPlayAgainObjects3= [];

gdjs.DeadCode.conditionTrue_0 = {val:false};
gdjs.DeadCode.condition0IsTrue_0 = {val:false};
gdjs.DeadCode.condition1IsTrue_0 = {val:false};


gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDmenuObjects2Objects = Hashtable.newFrom({"menu": gdjs.DeadCode.GDmenuObjects2});gdjs.DeadCode.eventsList0 = function(runtimeScene) {

{


gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.DeadCode.GDmenuObjects1});gdjs.DeadCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.DeadCode.GDmenuObjects2);

gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDmenuObjects2Objects, runtimeScene, true, false);
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeadCode.GDmenuObjects2 */
{for(var i = 0, len = gdjs.DeadCode.GDmenuObjects2.length ;i < len;++i) {
    gdjs.DeadCode.GDmenuObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.DeadCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.DeadCode.GDmenuObjects1);

gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDmenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeadCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.DeadCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.DeadCode.GDmenuObjects1[i].setAnimation(0);
}
}}

}


};gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDPlayAgainObjects2Objects = Hashtable.newFrom({"PlayAgain": gdjs.DeadCode.GDPlayAgainObjects2});gdjs.DeadCode.eventsList2 = function(runtimeScene) {

{


gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.DeadCode.GDPlayAgainObjects1});gdjs.DeadCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.DeadCode.GDPlayAgainObjects2);

gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDPlayAgainObjects2Objects, runtimeScene, true, false);
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeadCode.GDPlayAgainObjects2 */
{for(var i = 0, len = gdjs.DeadCode.GDPlayAgainObjects2.length ;i < len;++i) {
    gdjs.DeadCode.GDPlayAgainObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.DeadCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.DeadCode.GDPlayAgainObjects1);

gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeadCode.mapOfGDgdjs_46DeadCode_46GDPlayAgainObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeadCode.GDPlayAgainObjects1 */
{for(var i = 0, len = gdjs.DeadCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.DeadCode.GDPlayAgainObjects1[i].setAnimation(0);
}
}}

}


};gdjs.DeadCode.eventsList4 = function(runtimeScene) {

{


gdjs.DeadCode.eventsList1(runtimeScene);
}


{


gdjs.DeadCode.eventsList3(runtimeScene);
}


};

gdjs.DeadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeadCode.GDBigGuyObjects1.length = 0;
gdjs.DeadCode.GDBigGuyObjects2.length = 0;
gdjs.DeadCode.GDBigGuyObjects3.length = 0;
gdjs.DeadCode.GDScoreObjects1.length = 0;
gdjs.DeadCode.GDScoreObjects2.length = 0;
gdjs.DeadCode.GDScoreObjects3.length = 0;
gdjs.DeadCode.GDInvisibleObjects1.length = 0;
gdjs.DeadCode.GDInvisibleObjects2.length = 0;
gdjs.DeadCode.GDInvisibleObjects3.length = 0;
gdjs.DeadCode.GDCoinObjects1.length = 0;
gdjs.DeadCode.GDCoinObjects2.length = 0;
gdjs.DeadCode.GDCoinObjects3.length = 0;
gdjs.DeadCode.GDPortalObjects1.length = 0;
gdjs.DeadCode.GDPortalObjects2.length = 0;
gdjs.DeadCode.GDPortalObjects3.length = 0;
gdjs.DeadCode.GDBGScrollObjects1.length = 0;
gdjs.DeadCode.GDBGScrollObjects2.length = 0;
gdjs.DeadCode.GDBGScrollObjects3.length = 0;
gdjs.DeadCode.GDYouDeadObjects1.length = 0;
gdjs.DeadCode.GDYouDeadObjects2.length = 0;
gdjs.DeadCode.GDYouDeadObjects3.length = 0;
gdjs.DeadCode.GDmenuObjects1.length = 0;
gdjs.DeadCode.GDmenuObjects2.length = 0;
gdjs.DeadCode.GDmenuObjects3.length = 0;
gdjs.DeadCode.GDPlayAgainObjects1.length = 0;
gdjs.DeadCode.GDPlayAgainObjects2.length = 0;
gdjs.DeadCode.GDPlayAgainObjects3.length = 0;

gdjs.DeadCode.eventsList4(runtimeScene);
return;

}

gdjs['DeadCode'] = gdjs.DeadCode;
