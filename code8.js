gdjs.PauseCode = {};
gdjs.PauseCode.GDBigGuyObjects1= [];
gdjs.PauseCode.GDBigGuyObjects2= [];
gdjs.PauseCode.GDBigGuyObjects3= [];
gdjs.PauseCode.GDScoreObjects1= [];
gdjs.PauseCode.GDScoreObjects2= [];
gdjs.PauseCode.GDScoreObjects3= [];
gdjs.PauseCode.GDInvisibleObjects1= [];
gdjs.PauseCode.GDInvisibleObjects2= [];
gdjs.PauseCode.GDInvisibleObjects3= [];
gdjs.PauseCode.GDCoinObjects1= [];
gdjs.PauseCode.GDCoinObjects2= [];
gdjs.PauseCode.GDCoinObjects3= [];
gdjs.PauseCode.GDPortalObjects1= [];
gdjs.PauseCode.GDPortalObjects2= [];
gdjs.PauseCode.GDPortalObjects3= [];
gdjs.PauseCode.GDBGScrollObjects1= [];
gdjs.PauseCode.GDBGScrollObjects2= [];
gdjs.PauseCode.GDBGScrollObjects3= [];
gdjs.PauseCode.GDPauseObjects1= [];
gdjs.PauseCode.GDPauseObjects2= [];
gdjs.PauseCode.GDPauseObjects3= [];
gdjs.PauseCode.GDContinueObjects1= [];
gdjs.PauseCode.GDContinueObjects2= [];
gdjs.PauseCode.GDContinueObjects3= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContinueObjects2Objects = Hashtable.newFrom({"Continue": gdjs.PauseCode.GDContinueObjects2});gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.PauseCode.GDContinueObjects1});gdjs.PauseCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.PauseCode.GDContinueObjects2);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContinueObjects2Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDContinueObjects2 */
{for(var i = 0, len = gdjs.PauseCode.GDContinueObjects2.length ;i < len;++i) {
    gdjs.PauseCode.GDContinueObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.PauseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.PauseCode.GDContinueObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDContinueObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDContinueObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDContinueObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDContinueObjects1[i].setAnimation(0);
}
}}

}


};gdjs.PauseCode.eventsList2 = function(runtimeScene) {

{


gdjs.PauseCode.eventsList1(runtimeScene);
}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDBigGuyObjects1.length = 0;
gdjs.PauseCode.GDBigGuyObjects2.length = 0;
gdjs.PauseCode.GDBigGuyObjects3.length = 0;
gdjs.PauseCode.GDScoreObjects1.length = 0;
gdjs.PauseCode.GDScoreObjects2.length = 0;
gdjs.PauseCode.GDScoreObjects3.length = 0;
gdjs.PauseCode.GDInvisibleObjects1.length = 0;
gdjs.PauseCode.GDInvisibleObjects2.length = 0;
gdjs.PauseCode.GDInvisibleObjects3.length = 0;
gdjs.PauseCode.GDCoinObjects1.length = 0;
gdjs.PauseCode.GDCoinObjects2.length = 0;
gdjs.PauseCode.GDCoinObjects3.length = 0;
gdjs.PauseCode.GDPortalObjects1.length = 0;
gdjs.PauseCode.GDPortalObjects2.length = 0;
gdjs.PauseCode.GDPortalObjects3.length = 0;
gdjs.PauseCode.GDBGScrollObjects1.length = 0;
gdjs.PauseCode.GDBGScrollObjects2.length = 0;
gdjs.PauseCode.GDBGScrollObjects3.length = 0;
gdjs.PauseCode.GDPauseObjects1.length = 0;
gdjs.PauseCode.GDPauseObjects2.length = 0;
gdjs.PauseCode.GDPauseObjects3.length = 0;
gdjs.PauseCode.GDContinueObjects1.length = 0;
gdjs.PauseCode.GDContinueObjects2.length = 0;
gdjs.PauseCode.GDContinueObjects3.length = 0;

gdjs.PauseCode.eventsList2(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
