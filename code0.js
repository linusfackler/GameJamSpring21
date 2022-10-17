gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDBigGuyObjects1= [];
gdjs.MainMenuCode.GDBigGuyObjects2= [];
gdjs.MainMenuCode.GDBigGuyObjects3= [];
gdjs.MainMenuCode.GDScoreObjects1= [];
gdjs.MainMenuCode.GDScoreObjects2= [];
gdjs.MainMenuCode.GDScoreObjects3= [];
gdjs.MainMenuCode.GDInvisibleObjects1= [];
gdjs.MainMenuCode.GDInvisibleObjects2= [];
gdjs.MainMenuCode.GDInvisibleObjects3= [];
gdjs.MainMenuCode.GDCoinObjects1= [];
gdjs.MainMenuCode.GDCoinObjects2= [];
gdjs.MainMenuCode.GDCoinObjects3= [];
gdjs.MainMenuCode.GDPortalObjects1= [];
gdjs.MainMenuCode.GDPortalObjects2= [];
gdjs.MainMenuCode.GDPortalObjects3= [];
gdjs.MainMenuCode.GDBGScrollObjects1= [];
gdjs.MainMenuCode.GDBGScrollObjects2= [];
gdjs.MainMenuCode.GDBGScrollObjects3= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDButtonObjects1= [];
gdjs.MainMenuCode.GDButtonObjects2= [];
gdjs.MainMenuCode.GDButtonObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.MainMenuCode.GDButtonObjects2});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.MainMenuCode.GDButtonObjects1});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.MainMenuCode.GDButtonObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.MainMenuCode.GDButtonObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonObjects1[i].setAnimation(0);
}
}}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBigGuyObjects1.length = 0;
gdjs.MainMenuCode.GDBigGuyObjects2.length = 0;
gdjs.MainMenuCode.GDBigGuyObjects3.length = 0;
gdjs.MainMenuCode.GDScoreObjects1.length = 0;
gdjs.MainMenuCode.GDScoreObjects2.length = 0;
gdjs.MainMenuCode.GDScoreObjects3.length = 0;
gdjs.MainMenuCode.GDInvisibleObjects1.length = 0;
gdjs.MainMenuCode.GDInvisibleObjects2.length = 0;
gdjs.MainMenuCode.GDInvisibleObjects3.length = 0;
gdjs.MainMenuCode.GDCoinObjects1.length = 0;
gdjs.MainMenuCode.GDCoinObjects2.length = 0;
gdjs.MainMenuCode.GDCoinObjects3.length = 0;
gdjs.MainMenuCode.GDPortalObjects1.length = 0;
gdjs.MainMenuCode.GDPortalObjects2.length = 0;
gdjs.MainMenuCode.GDPortalObjects3.length = 0;
gdjs.MainMenuCode.GDBGScrollObjects1.length = 0;
gdjs.MainMenuCode.GDBGScrollObjects2.length = 0;
gdjs.MainMenuCode.GDBGScrollObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDButtonObjects1.length = 0;
gdjs.MainMenuCode.GDButtonObjects2.length = 0;
gdjs.MainMenuCode.GDButtonObjects3.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
