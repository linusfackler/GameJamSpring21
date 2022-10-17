gdjs.MainCode = {};
gdjs.MainCode.GDBigGuyObjects1= [];
gdjs.MainCode.GDBigGuyObjects2= [];
gdjs.MainCode.GDBigGuyObjects3= [];
gdjs.MainCode.GDScoreObjects1= [];
gdjs.MainCode.GDScoreObjects2= [];
gdjs.MainCode.GDScoreObjects3= [];
gdjs.MainCode.GDInvisibleObjects1= [];
gdjs.MainCode.GDInvisibleObjects2= [];
gdjs.MainCode.GDInvisibleObjects3= [];
gdjs.MainCode.GDCoinObjects1= [];
gdjs.MainCode.GDCoinObjects2= [];
gdjs.MainCode.GDCoinObjects3= [];
gdjs.MainCode.GDPortalObjects1= [];
gdjs.MainCode.GDPortalObjects2= [];
gdjs.MainCode.GDPortalObjects3= [];
gdjs.MainCode.GDBGScrollObjects1= [];
gdjs.MainCode.GDBGScrollObjects2= [];
gdjs.MainCode.GDBGScrollObjects3= [];
gdjs.MainCode.GDgrassObjects1= [];
gdjs.MainCode.GDgrassObjects2= [];
gdjs.MainCode.GDgrassObjects3= [];
gdjs.MainCode.GDladderObjects1= [];
gdjs.MainCode.GDladderObjects2= [];
gdjs.MainCode.GDladderObjects3= [];
gdjs.MainCode.GDCloudObjects1= [];
gdjs.MainCode.GDCloudObjects2= [];
gdjs.MainCode.GDCloudObjects3= [];
gdjs.MainCode.GDSignObjects1= [];
gdjs.MainCode.GDSignObjects2= [];
gdjs.MainCode.GDSignObjects3= [];
gdjs.MainCode.GDWaterTopObjects1= [];
gdjs.MainCode.GDWaterTopObjects2= [];
gdjs.MainCode.GDWaterTopObjects3= [];
gdjs.MainCode.GDWaterObjects1= [];
gdjs.MainCode.GDWaterObjects2= [];
gdjs.MainCode.GDWaterObjects3= [];
gdjs.MainCode.GDwsadObjects1= [];
gdjs.MainCode.GDwsadObjects2= [];
gdjs.MainCode.GDwsadObjects3= [];
gdjs.MainCode.GDSpaceObjects1= [];
gdjs.MainCode.GDSpaceObjects2= [];
gdjs.MainCode.GDSpaceObjects3= [];
gdjs.MainCode.GDBG2Objects1= [];
gdjs.MainCode.GDBG2Objects2= [];
gdjs.MainCode.GDBG2Objects3= [];
gdjs.MainCode.GDjuObjects1= [];
gdjs.MainCode.GDjuObjects2= [];
gdjs.MainCode.GDjuObjects3= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.MainCode.GDBigGuyObjects1});gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainCode.GDBigGuyObjects1.length !== 0 ? gdjs.MainCode.GDBigGuyObjects1[0] : null), true, "", 0);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects2Objects = Hashtable.newFrom({"BigGuy": gdjs.MainCode.GDBigGuyObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPortalObjects2Objects = Hashtable.newFrom({"Portal": gdjs.MainCode.GDPortalObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.MainCode.GDBigGuyObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWaterObjects1Objects = Hashtable.newFrom({"Water": gdjs.MainCode.GDWaterObjects1});gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].setAnimation(12);
}
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].flipX(false);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].setAnimation(12);
}
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].flipX(true);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].setAnimation(8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDBigGuyObjects2[k] = gdjs.MainCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDBigGuyObjects2.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBigGuyObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].setAnimation(4);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").setLadderClimbingSpeed(80);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.MainCode.GDPortalObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPortalObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MiniGames", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.MainCode.GDWaterObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWaterObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WaterWorld", false);
}}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.MainCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.MainCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDScoreObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\GameSound.mp3", false, 50, 1);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects2Objects = Hashtable.newFrom({"BigGuy": gdjs.MainCode.GDBigGuyObjects2});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.MainCode.GDCoinObjects2});gdjs.MainCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.MainCode.GDBigGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.MainCode.GDCoinObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects2Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDCoinObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDCoinObjects2 */
{for(var i = 0, len = gdjs.MainCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\coin.wav", false, 50, 1);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


};gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDBigGuyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBigGuyObjects1Objects, 44, -(263), "");
}{for(var i = 0, len = gdjs.MainCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBigGuyObjects1[i].setZOrder(6);
}
}}

}


{


gdjs.MainCode.eventsList0(runtimeScene);
}


{


gdjs.MainCode.eventsList1(runtimeScene);
}


{


gdjs.MainCode.eventsList2(runtimeScene);
}


{


gdjs.MainCode.eventsList3(runtimeScene);
}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBigGuyObjects1.length = 0;
gdjs.MainCode.GDBigGuyObjects2.length = 0;
gdjs.MainCode.GDBigGuyObjects3.length = 0;
gdjs.MainCode.GDScoreObjects1.length = 0;
gdjs.MainCode.GDScoreObjects2.length = 0;
gdjs.MainCode.GDScoreObjects3.length = 0;
gdjs.MainCode.GDInvisibleObjects1.length = 0;
gdjs.MainCode.GDInvisibleObjects2.length = 0;
gdjs.MainCode.GDInvisibleObjects3.length = 0;
gdjs.MainCode.GDCoinObjects1.length = 0;
gdjs.MainCode.GDCoinObjects2.length = 0;
gdjs.MainCode.GDCoinObjects3.length = 0;
gdjs.MainCode.GDPortalObjects1.length = 0;
gdjs.MainCode.GDPortalObjects2.length = 0;
gdjs.MainCode.GDPortalObjects3.length = 0;
gdjs.MainCode.GDBGScrollObjects1.length = 0;
gdjs.MainCode.GDBGScrollObjects2.length = 0;
gdjs.MainCode.GDBGScrollObjects3.length = 0;
gdjs.MainCode.GDgrassObjects1.length = 0;
gdjs.MainCode.GDgrassObjects2.length = 0;
gdjs.MainCode.GDgrassObjects3.length = 0;
gdjs.MainCode.GDladderObjects1.length = 0;
gdjs.MainCode.GDladderObjects2.length = 0;
gdjs.MainCode.GDladderObjects3.length = 0;
gdjs.MainCode.GDCloudObjects1.length = 0;
gdjs.MainCode.GDCloudObjects2.length = 0;
gdjs.MainCode.GDCloudObjects3.length = 0;
gdjs.MainCode.GDSignObjects1.length = 0;
gdjs.MainCode.GDSignObjects2.length = 0;
gdjs.MainCode.GDSignObjects3.length = 0;
gdjs.MainCode.GDWaterTopObjects1.length = 0;
gdjs.MainCode.GDWaterTopObjects2.length = 0;
gdjs.MainCode.GDWaterTopObjects3.length = 0;
gdjs.MainCode.GDWaterObjects1.length = 0;
gdjs.MainCode.GDWaterObjects2.length = 0;
gdjs.MainCode.GDWaterObjects3.length = 0;
gdjs.MainCode.GDwsadObjects1.length = 0;
gdjs.MainCode.GDwsadObjects2.length = 0;
gdjs.MainCode.GDwsadObjects3.length = 0;
gdjs.MainCode.GDSpaceObjects1.length = 0;
gdjs.MainCode.GDSpaceObjects2.length = 0;
gdjs.MainCode.GDSpaceObjects3.length = 0;
gdjs.MainCode.GDBG2Objects1.length = 0;
gdjs.MainCode.GDBG2Objects2.length = 0;
gdjs.MainCode.GDBG2Objects3.length = 0;
gdjs.MainCode.GDjuObjects1.length = 0;
gdjs.MainCode.GDjuObjects2.length = 0;
gdjs.MainCode.GDjuObjects3.length = 0;

gdjs.MainCode.eventsList4(runtimeScene);
return;

}

gdjs['MainCode'] = gdjs.MainCode;
