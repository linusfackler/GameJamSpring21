gdjs.Choose_32PlayerCode = {};
gdjs.Choose_32PlayerCode.GDBigGuyObjects1= [];
gdjs.Choose_32PlayerCode.GDBigGuyObjects2= [];
gdjs.Choose_32PlayerCode.GDBigGuyObjects3= [];
gdjs.Choose_32PlayerCode.GDScoreObjects1= [];
gdjs.Choose_32PlayerCode.GDScoreObjects2= [];
gdjs.Choose_32PlayerCode.GDScoreObjects3= [];
gdjs.Choose_32PlayerCode.GDInvisibleObjects1= [];
gdjs.Choose_32PlayerCode.GDInvisibleObjects2= [];
gdjs.Choose_32PlayerCode.GDInvisibleObjects3= [];
gdjs.Choose_32PlayerCode.GDCoinObjects1= [];
gdjs.Choose_32PlayerCode.GDCoinObjects2= [];
gdjs.Choose_32PlayerCode.GDCoinObjects3= [];
gdjs.Choose_32PlayerCode.GDPortalObjects1= [];
gdjs.Choose_32PlayerCode.GDPortalObjects2= [];
gdjs.Choose_32PlayerCode.GDPortalObjects3= [];
gdjs.Choose_32PlayerCode.GDBGScrollObjects1= [];
gdjs.Choose_32PlayerCode.GDBGScrollObjects2= [];
gdjs.Choose_32PlayerCode.GDBGScrollObjects3= [];
gdjs.Choose_32PlayerCode.GDLinusNameObjects1= [];
gdjs.Choose_32PlayerCode.GDLinusNameObjects2= [];
gdjs.Choose_32PlayerCode.GDLinusNameObjects3= [];
gdjs.Choose_32PlayerCode.GDFowzyNameObjects1= [];
gdjs.Choose_32PlayerCode.GDFowzyNameObjects2= [];
gdjs.Choose_32PlayerCode.GDFowzyNameObjects3= [];
gdjs.Choose_32PlayerCode.GDLoicNameObjects1= [];
gdjs.Choose_32PlayerCode.GDLoicNameObjects2= [];
gdjs.Choose_32PlayerCode.GDLoicNameObjects3= [];
gdjs.Choose_32PlayerCode.GDChooseObjects1= [];
gdjs.Choose_32PlayerCode.GDChooseObjects2= [];
gdjs.Choose_32PlayerCode.GDChooseObjects3= [];
gdjs.Choose_32PlayerCode.GDFowzyObjects1= [];
gdjs.Choose_32PlayerCode.GDFowzyObjects2= [];
gdjs.Choose_32PlayerCode.GDFowzyObjects3= [];
gdjs.Choose_32PlayerCode.GDLinusObjects1= [];
gdjs.Choose_32PlayerCode.GDLinusObjects2= [];
gdjs.Choose_32PlayerCode.GDLinusObjects3= [];
gdjs.Choose_32PlayerCode.GDLoicObjects1= [];
gdjs.Choose_32PlayerCode.GDLoicObjects2= [];
gdjs.Choose_32PlayerCode.GDLoicObjects3= [];

gdjs.Choose_32PlayerCode.conditionTrue_0 = {val:false};
gdjs.Choose_32PlayerCode.condition0IsTrue_0 = {val:false};
gdjs.Choose_32PlayerCode.condition1IsTrue_0 = {val:false};


gdjs.Choose_32PlayerCode.mapOfGDgdjs_46Choose_9532PlayerCode_46GDFowzyObjects2Objects = Hashtable.newFrom({"Fowzy": gdjs.Choose_32PlayerCode.GDFowzyObjects2});gdjs.Choose_32PlayerCode.mapOfGDgdjs_46Choose_9532PlayerCode_46GDLinusObjects2Objects = Hashtable.newFrom({"Linus": gdjs.Choose_32PlayerCode.GDLinusObjects2});gdjs.Choose_32PlayerCode.mapOfGDgdjs_46Choose_9532PlayerCode_46GDLoicObjects1Objects = Hashtable.newFrom({"Loic": gdjs.Choose_32PlayerCode.GDLoicObjects1});gdjs.Choose_32PlayerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fowzy"), gdjs.Choose_32PlayerCode.GDFowzyObjects2);

gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = false;
{
gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Choose_32PlayerCode.mapOfGDgdjs_46Choose_9532PlayerCode_46GDFowzyObjects2Objects, runtimeScene, true, false);
}if (gdjs.Choose_32PlayerCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PacMan", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Linus"), gdjs.Choose_32PlayerCode.GDLinusObjects2);

gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = false;
{
gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Choose_32PlayerCode.mapOfGDgdjs_46Choose_9532PlayerCode_46GDLinusObjects2Objects, runtimeScene, true, false);
}if (gdjs.Choose_32PlayerCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PacMan", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Loic"), gdjs.Choose_32PlayerCode.GDLoicObjects1);

gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = false;
{
gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Choose_32PlayerCode.mapOfGDgdjs_46Choose_9532PlayerCode_46GDLoicObjects1Objects, runtimeScene, true, false);
}if (gdjs.Choose_32PlayerCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PacMan", false);
}}

}


};gdjs.Choose_32PlayerCode.eventsList1 = function(runtimeScene) {

{


gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = false;
{
gdjs.Choose_32PlayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Choose_32PlayerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Choose_32PlayerCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Choose_32PlayerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Choose_32PlayerCode.GDBigGuyObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDBigGuyObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDBigGuyObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDScoreObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDScoreObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDScoreObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDInvisibleObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDInvisibleObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDInvisibleObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDCoinObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDCoinObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDCoinObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDPortalObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDPortalObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDPortalObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDBGScrollObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDBGScrollObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDBGScrollObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDLinusNameObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDLinusNameObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDLinusNameObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDFowzyNameObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDFowzyNameObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDFowzyNameObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDLoicNameObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDLoicNameObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDLoicNameObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDChooseObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDChooseObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDChooseObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDFowzyObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDFowzyObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDFowzyObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDLinusObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDLinusObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDLinusObjects3.length = 0;
gdjs.Choose_32PlayerCode.GDLoicObjects1.length = 0;
gdjs.Choose_32PlayerCode.GDLoicObjects2.length = 0;
gdjs.Choose_32PlayerCode.GDLoicObjects3.length = 0;

gdjs.Choose_32PlayerCode.eventsList1(runtimeScene);
return;

}

gdjs['Choose_32PlayerCode'] = gdjs.Choose_32PlayerCode;
