gdjs.PingPongCode = {};
gdjs.PingPongCode.GDBigGuyObjects1= [];
gdjs.PingPongCode.GDBigGuyObjects2= [];
gdjs.PingPongCode.GDBigGuyObjects3= [];
gdjs.PingPongCode.GDScoreObjects1= [];
gdjs.PingPongCode.GDScoreObjects2= [];
gdjs.PingPongCode.GDScoreObjects3= [];
gdjs.PingPongCode.GDInvisibleObjects1= [];
gdjs.PingPongCode.GDInvisibleObjects2= [];
gdjs.PingPongCode.GDInvisibleObjects3= [];
gdjs.PingPongCode.GDCoinObjects1= [];
gdjs.PingPongCode.GDCoinObjects2= [];
gdjs.PingPongCode.GDCoinObjects3= [];
gdjs.PingPongCode.GDPortalObjects1= [];
gdjs.PingPongCode.GDPortalObjects2= [];
gdjs.PingPongCode.GDPortalObjects3= [];
gdjs.PingPongCode.GDBGScrollObjects1= [];
gdjs.PingPongCode.GDBGScrollObjects2= [];
gdjs.PingPongCode.GDBGScrollObjects3= [];
gdjs.PingPongCode.GDPingObjects1= [];
gdjs.PingPongCode.GDPingObjects2= [];
gdjs.PingPongCode.GDPingObjects3= [];
gdjs.PingPongCode.GDPongObjects1= [];
gdjs.PingPongCode.GDPongObjects2= [];
gdjs.PingPongCode.GDPongObjects3= [];
gdjs.PingPongCode.GDBallObjects1= [];
gdjs.PingPongCode.GDBallObjects2= [];
gdjs.PingPongCode.GDBallObjects3= [];
gdjs.PingPongCode.GDScorePingObjects1= [];
gdjs.PingPongCode.GDScorePingObjects2= [];
gdjs.PingPongCode.GDScorePingObjects3= [];
gdjs.PingPongCode.GDBottomObjects1= [];
gdjs.PingPongCode.GDBottomObjects2= [];
gdjs.PingPongCode.GDBottomObjects3= [];
gdjs.PingPongCode.GDLeftObjects1= [];
gdjs.PingPongCode.GDLeftObjects2= [];
gdjs.PingPongCode.GDLeftObjects3= [];
gdjs.PingPongCode.GDRightObjects1= [];
gdjs.PingPongCode.GDRightObjects2= [];
gdjs.PingPongCode.GDRightObjects3= [];
gdjs.PingPongCode.GDTopObjects1= [];
gdjs.PingPongCode.GDTopObjects2= [];
gdjs.PingPongCode.GDTopObjects3= [];
gdjs.PingPongCode.GDScorePongObjects1= [];
gdjs.PingPongCode.GDScorePongObjects2= [];
gdjs.PingPongCode.GDScorePongObjects3= [];
gdjs.PingPongCode.GDRestartObjects1= [];
gdjs.PingPongCode.GDRestartObjects2= [];
gdjs.PingPongCode.GDRestartObjects3= [];
gdjs.PingPongCode.GDBGObjects1= [];
gdjs.PingPongCode.GDBGObjects2= [];
gdjs.PingPongCode.GDBGObjects3= [];

gdjs.PingPongCode.conditionTrue_0 = {val:false};
gdjs.PingPongCode.condition0IsTrue_0 = {val:false};
gdjs.PingPongCode.condition1IsTrue_0 = {val:false};
gdjs.PingPongCode.condition2IsTrue_0 = {val:false};


gdjs.PingPongCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ping"), gdjs.PingPongCode.GDPingObjects2);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
gdjs.PingPongCode.condition1IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.PingPongCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PingPongCode.GDPingObjects2.length;i<l;++i) {
    if ( gdjs.PingPongCode.GDPingObjects2[i].getY() > 0 ) {
        gdjs.PingPongCode.condition1IsTrue_0.val = true;
        gdjs.PingPongCode.GDPingObjects2[k] = gdjs.PingPongCode.GDPingObjects2[i];
        ++k;
    }
}
gdjs.PingPongCode.GDPingObjects2.length = k;}}
if (gdjs.PingPongCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDPingObjects2 */
{for(var i = 0, len = gdjs.PingPongCode.GDPingObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDPingObjects2[i].addForce(0, -(300), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ping"), gdjs.PingPongCode.GDPingObjects1);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
gdjs.PingPongCode.condition1IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.PingPongCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PingPongCode.GDPingObjects1.length;i<l;++i) {
    if ( gdjs.PingPongCode.GDPingObjects1[i].getY() < 285 ) {
        gdjs.PingPongCode.condition1IsTrue_0.val = true;
        gdjs.PingPongCode.GDPingObjects1[k] = gdjs.PingPongCode.GDPingObjects1[i];
        ++k;
    }
}
gdjs.PingPongCode.GDPingObjects1.length = k;}}
if (gdjs.PingPongCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDPingObjects1 */
{for(var i = 0, len = gdjs.PingPongCode.GDPingObjects1.length ;i < len;++i) {
    gdjs.PingPongCode.GDPingObjects1[i].addForce(0, 300, 0);
}
}}

}


};gdjs.PingPongCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pong"), gdjs.PingPongCode.GDPongObjects2);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PingPongCode.GDPongObjects2.length;i<l;++i) {
    if ( gdjs.PingPongCode.GDPongObjects2[i].getY() > 0 ) {
        gdjs.PingPongCode.condition0IsTrue_0.val = true;
        gdjs.PingPongCode.GDPongObjects2[k] = gdjs.PingPongCode.GDPongObjects2[i];
        ++k;
    }
}
gdjs.PingPongCode.GDPongObjects2.length = k;}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects2);
/* Reuse gdjs.PingPongCode.GDPongObjects2 */
{for(var i = 0, len = gdjs.PingPongCode.GDPongObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDPongObjects2[i].addForceTowardPosition(560, (( gdjs.PingPongCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.PingPongCode.GDBallObjects2[0].getPointY("")), 160, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pong"), gdjs.PingPongCode.GDPongObjects1);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PingPongCode.GDPongObjects1.length;i<l;++i) {
    if ( gdjs.PingPongCode.GDPongObjects1[i].getY() < 285 ) {
        gdjs.PingPongCode.condition0IsTrue_0.val = true;
        gdjs.PingPongCode.GDPongObjects1[k] = gdjs.PingPongCode.GDPongObjects1[i];
        ++k;
    }
}
gdjs.PingPongCode.GDPongObjects1.length = k;}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects1);
/* Reuse gdjs.PingPongCode.GDPongObjects1 */
{for(var i = 0, len = gdjs.PingPongCode.GDPongObjects1.length ;i < len;++i) {
    gdjs.PingPongCode.GDPongObjects1[i].addForceTowardPosition(560, (( gdjs.PingPongCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.PingPongCode.GDBallObjects1[0].getPointY("")), 160, 0);
}
}}

}


};gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PingPongCode.GDBallObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDPingObjects2Objects = Hashtable.newFrom({"Ping": gdjs.PingPongCode.GDPingObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PingPongCode.GDBallObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDPongObjects2Objects = Hashtable.newFrom({"Pong": gdjs.PingPongCode.GDPongObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PingPongCode.GDBallObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBottomObjects2Objects = Hashtable.newFrom({"Bottom": gdjs.PingPongCode.GDBottomObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.PingPongCode.GDBallObjects1});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDTopObjects1Objects = Hashtable.newFrom({"Top": gdjs.PingPongCode.GDTopObjects1});gdjs.PingPongCode.eventsList2 = function(runtimeScene) {

{


gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects2);
{for(var i = 0, len = gdjs.PingPongCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDBallObjects2[i].addPolarForce(-(20), 600, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ping"), gdjs.PingPongCode.GDPingObjects2);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects, gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDPingObjects2Objects, false, runtimeScene, false);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PingPongCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDBallObjects2[i].addPolarForce(0, 600, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pong"), gdjs.PingPongCode.GDPongObjects2);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects, gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDPongObjects2Objects, false, runtimeScene, false);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PingPongCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDBallObjects2[i].addPolarForce(180, 600, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bottom"), gdjs.PingPongCode.GDBottomObjects2);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects, gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBottomObjects2Objects, false, runtimeScene, false);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PingPongCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDBallObjects2[i].addPolarForce(-(90), 600, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Top"), gdjs.PingPongCode.GDTopObjects1);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects1Objects, gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDTopObjects1Objects, false, runtimeScene, false);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.PingPongCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PingPongCode.GDBallObjects1[i].addPolarForce(90, 600, 1);
}
}}

}


};gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PingPongCode.GDBallObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.PingPongCode.GDLeftObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PingPongCode.GDBallObjects2});gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.PingPongCode.GDRightObjects2});gdjs.PingPongCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.PingPongCode.GDLeftObjects2);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects, gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDBallObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.PingPongCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDBallObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PingPong", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PingPongCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.PingPongCode.GDRightObjects2);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDBallObjects2Objects, gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PingPongCode.GDBallObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.PingPongCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PingPongCode.GDBallObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PingPong", true);
}}

}


{


gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{


{
}

}


};gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.PingPongCode.GDRestartObjects1});gdjs.PingPongCode.eventsList4 = function(runtimeScene) {

{


gdjs.PingPongCode.eventsList0(runtimeScene);
}


{


gdjs.PingPongCode.eventsList1(runtimeScene);
}


{


gdjs.PingPongCode.eventsList2(runtimeScene);
}


{


gdjs.PingPongCode.eventsList3(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("ScorePing"), gdjs.PingPongCode.GDScorePingObjects1);
{for(var i = 0, len = gdjs.PingPongCode.GDScorePingObjects1.length ;i < len;++i) {
    gdjs.PingPongCode.GDScorePingObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ScorePong"), gdjs.PingPongCode.GDScorePongObjects1);
{for(var i = 0, len = gdjs.PingPongCode.GDScorePongObjects1.length ;i < len;++i) {
    gdjs.PingPongCode.GDScorePongObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.PingPongCode.GDRestartObjects1);

gdjs.PingPongCode.condition0IsTrue_0.val = false;
gdjs.PingPongCode.condition1IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PingPongCode.mapOfGDgdjs_46PingPongCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PingPongCode.condition0IsTrue_0.val ) {
{
gdjs.PingPongCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PingPongCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PingPong", true);
}}

}


{


gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


{


gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\GameSound.mp3", false, 50, 1);
}}

}


{


gdjs.PingPongCode.condition0IsTrue_0.val = false;
{
gdjs.PingPongCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 15;
}if (gdjs.PingPongCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.PingPongCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PingPongCode.GDBigGuyObjects1.length = 0;
gdjs.PingPongCode.GDBigGuyObjects2.length = 0;
gdjs.PingPongCode.GDBigGuyObjects3.length = 0;
gdjs.PingPongCode.GDScoreObjects1.length = 0;
gdjs.PingPongCode.GDScoreObjects2.length = 0;
gdjs.PingPongCode.GDScoreObjects3.length = 0;
gdjs.PingPongCode.GDInvisibleObjects1.length = 0;
gdjs.PingPongCode.GDInvisibleObjects2.length = 0;
gdjs.PingPongCode.GDInvisibleObjects3.length = 0;
gdjs.PingPongCode.GDCoinObjects1.length = 0;
gdjs.PingPongCode.GDCoinObjects2.length = 0;
gdjs.PingPongCode.GDCoinObjects3.length = 0;
gdjs.PingPongCode.GDPortalObjects1.length = 0;
gdjs.PingPongCode.GDPortalObjects2.length = 0;
gdjs.PingPongCode.GDPortalObjects3.length = 0;
gdjs.PingPongCode.GDBGScrollObjects1.length = 0;
gdjs.PingPongCode.GDBGScrollObjects2.length = 0;
gdjs.PingPongCode.GDBGScrollObjects3.length = 0;
gdjs.PingPongCode.GDPingObjects1.length = 0;
gdjs.PingPongCode.GDPingObjects2.length = 0;
gdjs.PingPongCode.GDPingObjects3.length = 0;
gdjs.PingPongCode.GDPongObjects1.length = 0;
gdjs.PingPongCode.GDPongObjects2.length = 0;
gdjs.PingPongCode.GDPongObjects3.length = 0;
gdjs.PingPongCode.GDBallObjects1.length = 0;
gdjs.PingPongCode.GDBallObjects2.length = 0;
gdjs.PingPongCode.GDBallObjects3.length = 0;
gdjs.PingPongCode.GDScorePingObjects1.length = 0;
gdjs.PingPongCode.GDScorePingObjects2.length = 0;
gdjs.PingPongCode.GDScorePingObjects3.length = 0;
gdjs.PingPongCode.GDBottomObjects1.length = 0;
gdjs.PingPongCode.GDBottomObjects2.length = 0;
gdjs.PingPongCode.GDBottomObjects3.length = 0;
gdjs.PingPongCode.GDLeftObjects1.length = 0;
gdjs.PingPongCode.GDLeftObjects2.length = 0;
gdjs.PingPongCode.GDLeftObjects3.length = 0;
gdjs.PingPongCode.GDRightObjects1.length = 0;
gdjs.PingPongCode.GDRightObjects2.length = 0;
gdjs.PingPongCode.GDRightObjects3.length = 0;
gdjs.PingPongCode.GDTopObjects1.length = 0;
gdjs.PingPongCode.GDTopObjects2.length = 0;
gdjs.PingPongCode.GDTopObjects3.length = 0;
gdjs.PingPongCode.GDScorePongObjects1.length = 0;
gdjs.PingPongCode.GDScorePongObjects2.length = 0;
gdjs.PingPongCode.GDScorePongObjects3.length = 0;
gdjs.PingPongCode.GDRestartObjects1.length = 0;
gdjs.PingPongCode.GDRestartObjects2.length = 0;
gdjs.PingPongCode.GDRestartObjects3.length = 0;
gdjs.PingPongCode.GDBGObjects1.length = 0;
gdjs.PingPongCode.GDBGObjects2.length = 0;
gdjs.PingPongCode.GDBGObjects3.length = 0;

gdjs.PingPongCode.eventsList4(runtimeScene);
return;

}

gdjs['PingPongCode'] = gdjs.PingPongCode;
