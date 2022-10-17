gdjs.VroomCode = {};
gdjs.VroomCode.GDBigGuyObjects1= [];
gdjs.VroomCode.GDBigGuyObjects2= [];
gdjs.VroomCode.GDBigGuyObjects3= [];
gdjs.VroomCode.GDScoreObjects1= [];
gdjs.VroomCode.GDScoreObjects2= [];
gdjs.VroomCode.GDScoreObjects3= [];
gdjs.VroomCode.GDInvisibleObjects1= [];
gdjs.VroomCode.GDInvisibleObjects2= [];
gdjs.VroomCode.GDInvisibleObjects3= [];
gdjs.VroomCode.GDCoinObjects1= [];
gdjs.VroomCode.GDCoinObjects2= [];
gdjs.VroomCode.GDCoinObjects3= [];
gdjs.VroomCode.GDPortalObjects1= [];
gdjs.VroomCode.GDPortalObjects2= [];
gdjs.VroomCode.GDPortalObjects3= [];
gdjs.VroomCode.GDBGScrollObjects1= [];
gdjs.VroomCode.GDBGScrollObjects2= [];
gdjs.VroomCode.GDBGScrollObjects3= [];
gdjs.VroomCode.GDCarObjects1= [];
gdjs.VroomCode.GDCarObjects2= [];
gdjs.VroomCode.GDCarObjects3= [];
gdjs.VroomCode.GDBGObjects1= [];
gdjs.VroomCode.GDBGObjects2= [];
gdjs.VroomCode.GDBGObjects3= [];
gdjs.VroomCode.GDupObjects1= [];
gdjs.VroomCode.GDupObjects2= [];
gdjs.VroomCode.GDupObjects3= [];
gdjs.VroomCode.GDPortalPinkObjects1= [];
gdjs.VroomCode.GDPortalPinkObjects2= [];
gdjs.VroomCode.GDPortalPinkObjects3= [];

gdjs.VroomCode.conditionTrue_0 = {val:false};
gdjs.VroomCode.condition0IsTrue_0 = {val:false};
gdjs.VroomCode.condition1IsTrue_0 = {val:false};


gdjs.VroomCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.VroomCode.GDBigGuyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.VroomCode.GDBigGuyObjects1.length !== 0 ? gdjs.VroomCode.GDBigGuyObjects1[0] : null), true, "", 0);
}}

}


};gdjs.VroomCode.eventsList1 = function(runtimeScene) {

{


gdjs.VroomCode.condition0IsTrue_0.val = false;
{
gdjs.VroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.VroomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.VroomCode.GDCarObjects2);
{for(var i = 0, len = gdjs.VroomCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.VroomCode.GDCarObjects2[i].addForce(1000, 0, 0);
}
}}

}


{


gdjs.VroomCode.condition0IsTrue_0.val = false;
{
gdjs.VroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.VroomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.VroomCode.GDCarObjects2);
{for(var i = 0, len = gdjs.VroomCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.VroomCode.GDCarObjects2[i].addForce(-(1000), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.VroomCode.GDBigGuyObjects1);

gdjs.VroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VroomCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( !(gdjs.VroomCode.GDBigGuyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.VroomCode.condition0IsTrue_0.val = true;
        gdjs.VroomCode.GDBigGuyObjects1[k] = gdjs.VroomCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.VroomCode.GDBigGuyObjects1.length = k;}if (gdjs.VroomCode.condition0IsTrue_0.val) {
}

}


};gdjs.VroomCode.mapOfGDgdjs_46VroomCode_46GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.VroomCode.GDBigGuyObjects1});gdjs.VroomCode.mapOfGDgdjs_46VroomCode_46GDPortalObjects1Objects = Hashtable.newFrom({"Portal": gdjs.VroomCode.GDPortalObjects1});gdjs.VroomCode.eventsList2 = function(runtimeScene) {

{


gdjs.VroomCode.eventsList0(runtimeScene);
}


{


gdjs.VroomCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.VroomCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.VroomCode.GDCarObjects1);

gdjs.VroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.VroomCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.VroomCode.GDBigGuyObjects1[i].getY() >= (( gdjs.VroomCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.VroomCode.GDCarObjects1[0].getPointY("")) - 60 ) {
        gdjs.VroomCode.condition0IsTrue_0.val = true;
        gdjs.VroomCode.GDBigGuyObjects1[k] = gdjs.VroomCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.VroomCode.GDBigGuyObjects1.length = k;}if (gdjs.VroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VroomCode.GDBigGuyObjects1 */
/* Reuse gdjs.VroomCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.VroomCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.VroomCode.GDBigGuyObjects1[i].setPosition((( gdjs.VroomCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.VroomCode.GDCarObjects1[0].getPointX("")) + 70,(( gdjs.VroomCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.VroomCode.GDCarObjects1[0].getPointY("")) - 30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.VroomCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.VroomCode.GDPortalObjects1);

gdjs.VroomCode.condition0IsTrue_0.val = false;
{
gdjs.VroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.VroomCode.mapOfGDgdjs_46VroomCode_46GDBigGuyObjects1Objects, gdjs.VroomCode.mapOfGDgdjs_46VroomCode_46GDPortalObjects1Objects, false, runtimeScene, false);
}if (gdjs.VroomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MiniGames", false);
}}

}


{


gdjs.VroomCode.condition0IsTrue_0.val = false;
{
gdjs.VroomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VroomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\GameSound.mp3", false, 50, 1);
}}

}


};

gdjs.VroomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VroomCode.GDBigGuyObjects1.length = 0;
gdjs.VroomCode.GDBigGuyObjects2.length = 0;
gdjs.VroomCode.GDBigGuyObjects3.length = 0;
gdjs.VroomCode.GDScoreObjects1.length = 0;
gdjs.VroomCode.GDScoreObjects2.length = 0;
gdjs.VroomCode.GDScoreObjects3.length = 0;
gdjs.VroomCode.GDInvisibleObjects1.length = 0;
gdjs.VroomCode.GDInvisibleObjects2.length = 0;
gdjs.VroomCode.GDInvisibleObjects3.length = 0;
gdjs.VroomCode.GDCoinObjects1.length = 0;
gdjs.VroomCode.GDCoinObjects2.length = 0;
gdjs.VroomCode.GDCoinObjects3.length = 0;
gdjs.VroomCode.GDPortalObjects1.length = 0;
gdjs.VroomCode.GDPortalObjects2.length = 0;
gdjs.VroomCode.GDPortalObjects3.length = 0;
gdjs.VroomCode.GDBGScrollObjects1.length = 0;
gdjs.VroomCode.GDBGScrollObjects2.length = 0;
gdjs.VroomCode.GDBGScrollObjects3.length = 0;
gdjs.VroomCode.GDCarObjects1.length = 0;
gdjs.VroomCode.GDCarObjects2.length = 0;
gdjs.VroomCode.GDCarObjects3.length = 0;
gdjs.VroomCode.GDBGObjects1.length = 0;
gdjs.VroomCode.GDBGObjects2.length = 0;
gdjs.VroomCode.GDBGObjects3.length = 0;
gdjs.VroomCode.GDupObjects1.length = 0;
gdjs.VroomCode.GDupObjects2.length = 0;
gdjs.VroomCode.GDupObjects3.length = 0;
gdjs.VroomCode.GDPortalPinkObjects1.length = 0;
gdjs.VroomCode.GDPortalPinkObjects2.length = 0;
gdjs.VroomCode.GDPortalPinkObjects3.length = 0;

gdjs.VroomCode.eventsList2(runtimeScene);
return;

}

gdjs['VroomCode'] = gdjs.VroomCode;
