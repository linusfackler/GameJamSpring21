gdjs.MiniGamesCode = {};
gdjs.MiniGamesCode.GDBigGuyObjects1= [];
gdjs.MiniGamesCode.GDBigGuyObjects2= [];
gdjs.MiniGamesCode.GDBigGuyObjects3= [];
gdjs.MiniGamesCode.GDScoreObjects1= [];
gdjs.MiniGamesCode.GDScoreObjects2= [];
gdjs.MiniGamesCode.GDScoreObjects3= [];
gdjs.MiniGamesCode.GDInvisibleObjects1= [];
gdjs.MiniGamesCode.GDInvisibleObjects2= [];
gdjs.MiniGamesCode.GDInvisibleObjects3= [];
gdjs.MiniGamesCode.GDCoinObjects1= [];
gdjs.MiniGamesCode.GDCoinObjects2= [];
gdjs.MiniGamesCode.GDCoinObjects3= [];
gdjs.MiniGamesCode.GDPortalObjects1= [];
gdjs.MiniGamesCode.GDPortalObjects2= [];
gdjs.MiniGamesCode.GDPortalObjects3= [];
gdjs.MiniGamesCode.GDBGScrollObjects1= [];
gdjs.MiniGamesCode.GDBGScrollObjects2= [];
gdjs.MiniGamesCode.GDBGScrollObjects3= [];
gdjs.MiniGamesCode.GDChooseObjects1= [];
gdjs.MiniGamesCode.GDChooseObjects2= [];
gdjs.MiniGamesCode.GDChooseObjects3= [];
gdjs.MiniGamesCode.GDHitObjects1= [];
gdjs.MiniGamesCode.GDHitObjects2= [];
gdjs.MiniGamesCode.GDHitObjects3= [];
gdjs.MiniGamesCode.GDEscapeObjects1= [];
gdjs.MiniGamesCode.GDEscapeObjects2= [];
gdjs.MiniGamesCode.GDEscapeObjects3= [];
gdjs.MiniGamesCode.GDSmashObjects1= [];
gdjs.MiniGamesCode.GDSmashObjects2= [];
gdjs.MiniGamesCode.GDSmashObjects3= [];
gdjs.MiniGamesCode.GDPingObjects1= [];
gdjs.MiniGamesCode.GDPingObjects2= [];
gdjs.MiniGamesCode.GDPingObjects3= [];
gdjs.MiniGamesCode.GDfootballObjects1= [];
gdjs.MiniGamesCode.GDfootballObjects2= [];
gdjs.MiniGamesCode.GDfootballObjects3= [];
gdjs.MiniGamesCode.GDpacObjects1= [];
gdjs.MiniGamesCode.GDpacObjects2= [];
gdjs.MiniGamesCode.GDpacObjects3= [];
gdjs.MiniGamesCode.GDFootObjects1= [];
gdjs.MiniGamesCode.GDFootObjects2= [];
gdjs.MiniGamesCode.GDFootObjects3= [];
gdjs.MiniGamesCode.GDPacObjects1= [];
gdjs.MiniGamesCode.GDPacObjects2= [];
gdjs.MiniGamesCode.GDPacObjects3= [];
gdjs.MiniGamesCode.GDpingpoObjects1= [];
gdjs.MiniGamesCode.GDpingpoObjects2= [];
gdjs.MiniGamesCode.GDpingpoObjects3= [];

gdjs.MiniGamesCode.conditionTrue_0 = {val:false};
gdjs.MiniGamesCode.condition0IsTrue_0 = {val:false};
gdjs.MiniGamesCode.condition1IsTrue_0 = {val:false};


gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDHitObjects2Objects = Hashtable.newFrom({"Hit": gdjs.MiniGamesCode.GDHitObjects2});gdjs.MiniGamesCode.eventsList0 = function(runtimeScene) {

{


gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Football", false);
}}

}


};gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDHitObjects1Objects = Hashtable.newFrom({"Hit": gdjs.MiniGamesCode.GDHitObjects1});gdjs.MiniGamesCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hit"), gdjs.MiniGamesCode.GDHitObjects2);

gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDHitObjects2Objects, runtimeScene, true, false);
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MiniGamesCode.GDHitObjects2 */
{for(var i = 0, len = gdjs.MiniGamesCode.GDHitObjects2.length ;i < len;++i) {
    gdjs.MiniGamesCode.GDHitObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MiniGamesCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hit"), gdjs.MiniGamesCode.GDHitObjects1);

gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDHitObjects1Objects, runtimeScene, true, true);
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MiniGamesCode.GDHitObjects1 */
{for(var i = 0, len = gdjs.MiniGamesCode.GDHitObjects1.length ;i < len;++i) {
    gdjs.MiniGamesCode.GDHitObjects1[i].setAnimation(0);
}
}}

}


};gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDEscapeObjects2Objects = Hashtable.newFrom({"Escape": gdjs.MiniGamesCode.GDEscapeObjects2});gdjs.MiniGamesCode.eventsList2 = function(runtimeScene) {

{


gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Choose Player", false);
}}

}


};gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDEscapeObjects1Objects = Hashtable.newFrom({"Escape": gdjs.MiniGamesCode.GDEscapeObjects1});gdjs.MiniGamesCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Escape"), gdjs.MiniGamesCode.GDEscapeObjects2);

gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDEscapeObjects2Objects, runtimeScene, true, false);
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MiniGamesCode.GDEscapeObjects2 */
{for(var i = 0, len = gdjs.MiniGamesCode.GDEscapeObjects2.length ;i < len;++i) {
    gdjs.MiniGamesCode.GDEscapeObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MiniGamesCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Escape"), gdjs.MiniGamesCode.GDEscapeObjects1);

gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDEscapeObjects1Objects, runtimeScene, true, true);
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MiniGamesCode.GDEscapeObjects1 */
{for(var i = 0, len = gdjs.MiniGamesCode.GDEscapeObjects1.length ;i < len;++i) {
    gdjs.MiniGamesCode.GDEscapeObjects1[i].setAnimation(0);
}
}}

}


};gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDSmashObjects2Objects = Hashtable.newFrom({"Smash": gdjs.MiniGamesCode.GDSmashObjects2});gdjs.MiniGamesCode.eventsList4 = function(runtimeScene) {

{


gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PingPong", false);
}}

}


};gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDSmashObjects1Objects = Hashtable.newFrom({"Smash": gdjs.MiniGamesCode.GDSmashObjects1});gdjs.MiniGamesCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Smash"), gdjs.MiniGamesCode.GDSmashObjects2);

gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDSmashObjects2Objects, runtimeScene, true, false);
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MiniGamesCode.GDSmashObjects2 */
{for(var i = 0, len = gdjs.MiniGamesCode.GDSmashObjects2.length ;i < len;++i) {
    gdjs.MiniGamesCode.GDSmashObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MiniGamesCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Smash"), gdjs.MiniGamesCode.GDSmashObjects1);

gdjs.MiniGamesCode.condition0IsTrue_0.val = false;
{
gdjs.MiniGamesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MiniGamesCode.mapOfGDgdjs_46MiniGamesCode_46GDSmashObjects1Objects, runtimeScene, true, true);
}if (gdjs.MiniGamesCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MiniGamesCode.GDSmashObjects1 */
{for(var i = 0, len = gdjs.MiniGamesCode.GDSmashObjects1.length ;i < len;++i) {
    gdjs.MiniGamesCode.GDSmashObjects1[i].setAnimation(0);
}
}}

}


};gdjs.MiniGamesCode.eventsList6 = function(runtimeScene) {

{


gdjs.MiniGamesCode.eventsList1(runtimeScene);
}


{


gdjs.MiniGamesCode.eventsList3(runtimeScene);
}


{


gdjs.MiniGamesCode.eventsList5(runtimeScene);
}


{


{
}

}


};

gdjs.MiniGamesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MiniGamesCode.GDBigGuyObjects1.length = 0;
gdjs.MiniGamesCode.GDBigGuyObjects2.length = 0;
gdjs.MiniGamesCode.GDBigGuyObjects3.length = 0;
gdjs.MiniGamesCode.GDScoreObjects1.length = 0;
gdjs.MiniGamesCode.GDScoreObjects2.length = 0;
gdjs.MiniGamesCode.GDScoreObjects3.length = 0;
gdjs.MiniGamesCode.GDInvisibleObjects1.length = 0;
gdjs.MiniGamesCode.GDInvisibleObjects2.length = 0;
gdjs.MiniGamesCode.GDInvisibleObjects3.length = 0;
gdjs.MiniGamesCode.GDCoinObjects1.length = 0;
gdjs.MiniGamesCode.GDCoinObjects2.length = 0;
gdjs.MiniGamesCode.GDCoinObjects3.length = 0;
gdjs.MiniGamesCode.GDPortalObjects1.length = 0;
gdjs.MiniGamesCode.GDPortalObjects2.length = 0;
gdjs.MiniGamesCode.GDPortalObjects3.length = 0;
gdjs.MiniGamesCode.GDBGScrollObjects1.length = 0;
gdjs.MiniGamesCode.GDBGScrollObjects2.length = 0;
gdjs.MiniGamesCode.GDBGScrollObjects3.length = 0;
gdjs.MiniGamesCode.GDChooseObjects1.length = 0;
gdjs.MiniGamesCode.GDChooseObjects2.length = 0;
gdjs.MiniGamesCode.GDChooseObjects3.length = 0;
gdjs.MiniGamesCode.GDHitObjects1.length = 0;
gdjs.MiniGamesCode.GDHitObjects2.length = 0;
gdjs.MiniGamesCode.GDHitObjects3.length = 0;
gdjs.MiniGamesCode.GDEscapeObjects1.length = 0;
gdjs.MiniGamesCode.GDEscapeObjects2.length = 0;
gdjs.MiniGamesCode.GDEscapeObjects3.length = 0;
gdjs.MiniGamesCode.GDSmashObjects1.length = 0;
gdjs.MiniGamesCode.GDSmashObjects2.length = 0;
gdjs.MiniGamesCode.GDSmashObjects3.length = 0;
gdjs.MiniGamesCode.GDPingObjects1.length = 0;
gdjs.MiniGamesCode.GDPingObjects2.length = 0;
gdjs.MiniGamesCode.GDPingObjects3.length = 0;
gdjs.MiniGamesCode.GDfootballObjects1.length = 0;
gdjs.MiniGamesCode.GDfootballObjects2.length = 0;
gdjs.MiniGamesCode.GDfootballObjects3.length = 0;
gdjs.MiniGamesCode.GDpacObjects1.length = 0;
gdjs.MiniGamesCode.GDpacObjects2.length = 0;
gdjs.MiniGamesCode.GDpacObjects3.length = 0;
gdjs.MiniGamesCode.GDFootObjects1.length = 0;
gdjs.MiniGamesCode.GDFootObjects2.length = 0;
gdjs.MiniGamesCode.GDFootObjects3.length = 0;
gdjs.MiniGamesCode.GDPacObjects1.length = 0;
gdjs.MiniGamesCode.GDPacObjects2.length = 0;
gdjs.MiniGamesCode.GDPacObjects3.length = 0;
gdjs.MiniGamesCode.GDpingpoObjects1.length = 0;
gdjs.MiniGamesCode.GDpingpoObjects2.length = 0;
gdjs.MiniGamesCode.GDpingpoObjects3.length = 0;

gdjs.MiniGamesCode.eventsList6(runtimeScene);
return;

}

gdjs['MiniGamesCode'] = gdjs.MiniGamesCode;
