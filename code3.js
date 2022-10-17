gdjs.WaterWorldCode = {};
gdjs.WaterWorldCode.forEachIndex2 = 0;

gdjs.WaterWorldCode.forEachObjects2 = [];

gdjs.WaterWorldCode.forEachTemporary2 = null;

gdjs.WaterWorldCode.forEachTotalCount2 = 0;

gdjs.WaterWorldCode.GDBigGuyObjects1= [];
gdjs.WaterWorldCode.GDBigGuyObjects2= [];
gdjs.WaterWorldCode.GDBigGuyObjects3= [];
gdjs.WaterWorldCode.GDBigGuyObjects4= [];
gdjs.WaterWorldCode.GDScoreObjects1= [];
gdjs.WaterWorldCode.GDScoreObjects2= [];
gdjs.WaterWorldCode.GDScoreObjects3= [];
gdjs.WaterWorldCode.GDScoreObjects4= [];
gdjs.WaterWorldCode.GDInvisibleObjects1= [];
gdjs.WaterWorldCode.GDInvisibleObjects2= [];
gdjs.WaterWorldCode.GDInvisibleObjects3= [];
gdjs.WaterWorldCode.GDInvisibleObjects4= [];
gdjs.WaterWorldCode.GDCoinObjects1= [];
gdjs.WaterWorldCode.GDCoinObjects2= [];
gdjs.WaterWorldCode.GDCoinObjects3= [];
gdjs.WaterWorldCode.GDCoinObjects4= [];
gdjs.WaterWorldCode.GDPortalObjects1= [];
gdjs.WaterWorldCode.GDPortalObjects2= [];
gdjs.WaterWorldCode.GDPortalObjects3= [];
gdjs.WaterWorldCode.GDPortalObjects4= [];
gdjs.WaterWorldCode.GDBGScrollObjects1= [];
gdjs.WaterWorldCode.GDBGScrollObjects2= [];
gdjs.WaterWorldCode.GDBGScrollObjects3= [];
gdjs.WaterWorldCode.GDBGScrollObjects4= [];
gdjs.WaterWorldCode.GDBGObjects1= [];
gdjs.WaterWorldCode.GDBGObjects2= [];
gdjs.WaterWorldCode.GDBGObjects3= [];
gdjs.WaterWorldCode.GDBGObjects4= [];
gdjs.WaterWorldCode.GDAObjects1= [];
gdjs.WaterWorldCode.GDAObjects2= [];
gdjs.WaterWorldCode.GDAObjects3= [];
gdjs.WaterWorldCode.GDAObjects4= [];
gdjs.WaterWorldCode.GDJObjects1= [];
gdjs.WaterWorldCode.GDJObjects2= [];
gdjs.WaterWorldCode.GDJObjects3= [];
gdjs.WaterWorldCode.GDJObjects4= [];
gdjs.WaterWorldCode.GDblackObjects1= [];
gdjs.WaterWorldCode.GDblackObjects2= [];
gdjs.WaterWorldCode.GDblackObjects3= [];
gdjs.WaterWorldCode.GDblackObjects4= [];
gdjs.WaterWorldCode.GDTopObjects1= [];
gdjs.WaterWorldCode.GDTopObjects2= [];
gdjs.WaterWorldCode.GDTopObjects3= [];
gdjs.WaterWorldCode.GDTopObjects4= [];
gdjs.WaterWorldCode.GDShooterDownObjects1= [];
gdjs.WaterWorldCode.GDShooterDownObjects2= [];
gdjs.WaterWorldCode.GDShooterDownObjects3= [];
gdjs.WaterWorldCode.GDShooterDownObjects4= [];
gdjs.WaterWorldCode.GDPlant2Objects1= [];
gdjs.WaterWorldCode.GDPlant2Objects2= [];
gdjs.WaterWorldCode.GDPlant2Objects3= [];
gdjs.WaterWorldCode.GDPlant2Objects4= [];
gdjs.WaterWorldCode.GDPlantObjects1= [];
gdjs.WaterWorldCode.GDPlantObjects2= [];
gdjs.WaterWorldCode.GDPlantObjects3= [];
gdjs.WaterWorldCode.GDPlantObjects4= [];
gdjs.WaterWorldCode.GDPlant3Objects1= [];
gdjs.WaterWorldCode.GDPlant3Objects2= [];
gdjs.WaterWorldCode.GDPlant3Objects3= [];
gdjs.WaterWorldCode.GDPlant3Objects4= [];
gdjs.WaterWorldCode.GDShotObjects1= [];
gdjs.WaterWorldCode.GDShotObjects2= [];
gdjs.WaterWorldCode.GDShotObjects3= [];
gdjs.WaterWorldCode.GDShotObjects4= [];
gdjs.WaterWorldCode.GDSmallObjects1= [];
gdjs.WaterWorldCode.GDSmallObjects2= [];
gdjs.WaterWorldCode.GDSmallObjects3= [];
gdjs.WaterWorldCode.GDSmallObjects4= [];
gdjs.WaterWorldCode.GDShooterHorObjects1= [];
gdjs.WaterWorldCode.GDShooterHorObjects2= [];
gdjs.WaterWorldCode.GDShooterHorObjects3= [];
gdjs.WaterWorldCode.GDShooterHorObjects4= [];
gdjs.WaterWorldCode.GDSmall2Objects1= [];
gdjs.WaterWorldCode.GDSmall2Objects2= [];
gdjs.WaterWorldCode.GDSmall2Objects3= [];
gdjs.WaterWorldCode.GDSmall2Objects4= [];
gdjs.WaterWorldCode.GDBubbleObjects1= [];
gdjs.WaterWorldCode.GDBubbleObjects2= [];
gdjs.WaterWorldCode.GDBubbleObjects3= [];
gdjs.WaterWorldCode.GDBubbleObjects4= [];
gdjs.WaterWorldCode.GDFireObjects1= [];
gdjs.WaterWorldCode.GDFireObjects2= [];
gdjs.WaterWorldCode.GDFireObjects3= [];
gdjs.WaterWorldCode.GDFireObjects4= [];
gdjs.WaterWorldCode.GDJumpObjects1= [];
gdjs.WaterWorldCode.GDJumpObjects2= [];
gdjs.WaterWorldCode.GDJumpObjects3= [];
gdjs.WaterWorldCode.GDJumpObjects4= [];
gdjs.WaterWorldCode.GDPortalOrangeObjects1= [];
gdjs.WaterWorldCode.GDPortalOrangeObjects2= [];
gdjs.WaterWorldCode.GDPortalOrangeObjects3= [];
gdjs.WaterWorldCode.GDPortalOrangeObjects4= [];
gdjs.WaterWorldCode.GDFireTextObjects1= [];
gdjs.WaterWorldCode.GDFireTextObjects2= [];
gdjs.WaterWorldCode.GDFireTextObjects3= [];
gdjs.WaterWorldCode.GDFireTextObjects4= [];
gdjs.WaterWorldCode.GDPortalGreenObjects1= [];
gdjs.WaterWorldCode.GDPortalGreenObjects2= [];
gdjs.WaterWorldCode.GDPortalGreenObjects3= [];
gdjs.WaterWorldCode.GDPortalGreenObjects4= [];

gdjs.WaterWorldCode.conditionTrue_0 = {val:false};
gdjs.WaterWorldCode.condition0IsTrue_0 = {val:false};
gdjs.WaterWorldCode.condition1IsTrue_0 = {val:false};
gdjs.WaterWorldCode.condition2IsTrue_0 = {val:false};
gdjs.WaterWorldCode.condition3IsTrue_0 = {val:false};


gdjs.WaterWorldCode.eventsList0 = function(runtimeScene) {

{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Shoot");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootHor");
}}

}


};gdjs.WaterWorldCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.WaterWorldCode.GDBigGuyObjects1.length !== 0 ? gdjs.WaterWorldCode.GDBigGuyObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (50), "", 0);
}}

}


};gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects = Hashtable.newFrom({"BigGuy": gdjs.WaterWorldCode.GDBigGuyObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDFireObjects2Objects = Hashtable.newFrom({"Fire": gdjs.WaterWorldCode.GDFireObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects = Hashtable.newFrom({"BigGuy": gdjs.WaterWorldCode.GDBigGuyObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDPortalObjects2Objects = Hashtable.newFrom({"Portal": gdjs.WaterWorldCode.GDPortalObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.WaterWorldCode.GDBigGuyObjects1});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDPortalGreenObjects1Objects = Hashtable.newFrom({"PortalGreen": gdjs.WaterWorldCode.GDPortalGreenObjects1});gdjs.WaterWorldCode.eventsList2 = function(runtimeScene) {

{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].setAnimation(12);
}
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].flipX(false);
}
}}

}


{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].setAnimation(12);
}
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].flipX(true);
}
}}

}


{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].setAnimation(8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WaterWorldCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( !(gdjs.WaterWorldCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.WaterWorldCode.condition0IsTrue_0.val = true;
        gdjs.WaterWorldCode.GDBigGuyObjects2[k] = gdjs.WaterWorldCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.WaterWorldCode.GDBigGuyObjects2.length = k;}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WaterWorldCode.GDBigGuyObjects2 */
{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].setAnimation(4);
}
}}

}


{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].getBehavior("PlatformerObject").setLadderClimbingSpeed(80);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.WaterWorldCode.GDFireObjects2);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects, gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDFireObjects2Objects, false, runtimeScene, false);
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.WaterWorldCode.GDPortalObjects2);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects, gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDPortalObjects2Objects, false, runtimeScene, false);
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WaterWorldCode.GDBigGuyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PortalOrange"), gdjs.WaterWorldCode.GDPortalOrangeObjects2);
{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].setPosition((( gdjs.WaterWorldCode.GDPortalOrangeObjects2.length === 0 ) ? 0 :gdjs.WaterWorldCode.GDPortalOrangeObjects2[0].getPointX("")),(( gdjs.WaterWorldCode.GDPortalOrangeObjects2.length === 0 ) ? 0 :gdjs.WaterWorldCode.GDPortalOrangeObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PortalGreen"), gdjs.WaterWorldCode.GDPortalGreenObjects1);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects1Objects, gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDPortalGreenObjects1Objects, false, runtimeScene, false);
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Vroom", false);
}}

}


};gdjs.WaterWorldCode.userFunc0x97a050 = function(runtimeScene, objects) {
"use strict";
objects.forEach((shooter)=>{
    let shot = runtimeScene.createObject('Shot');
    shot.setPosition(shooter.getX()+32, shooter.getY()+10);
    shot.addForce(0, 150, 1);
    shot.setZOrder(1);
});
};
gdjs.WaterWorldCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ShooterDown"), gdjs.WaterWorldCode.GDShooterDownObjects2);

var objects = [];
objects.push.apply(objects,gdjs.WaterWorldCode.GDShooterDownObjects2);
gdjs.WaterWorldCode.userFunc0x97a050(runtimeScene, objects);

}


};gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects = Hashtable.newFrom({"BigGuy": gdjs.WaterWorldCode.GDBigGuyObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDShotObjects2Objects = Hashtable.newFrom({"Shot": gdjs.WaterWorldCode.GDShotObjects2});gdjs.WaterWorldCode.userFunc0x97a978 = function(runtimeScene, objects) {
"use strict";
objects.forEach((shooter)=>{
    let shot = runtimeScene.createObject('Shot');
    shot.setPosition(shooter.getX()+32, shooter.getY()+20);
    shot.addForce(-180, 0, 1);
    shot.setZOrder(1);
});
};
gdjs.WaterWorldCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.WaterWorldCode.GDShooterHorObjects3 */

var objects = [];
objects.push.apply(objects,gdjs.WaterWorldCode.GDShooterHorObjects3);
gdjs.WaterWorldCode.userFunc0x97a978(runtimeScene, objects);

}


};gdjs.WaterWorldCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects3);
gdjs.copyArray(gdjs.WaterWorldCode.GDShooterHorObjects2, gdjs.WaterWorldCode.GDShooterHorObjects3);


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
gdjs.WaterWorldCode.condition1IsTrue_0.val = false;
gdjs.WaterWorldCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WaterWorldCode.GDBigGuyObjects3.length;i<l;++i) {
    if ( gdjs.WaterWorldCode.GDBigGuyObjects3[i].getX() > 0 - 1000 ) {
        gdjs.WaterWorldCode.condition0IsTrue_0.val = true;
        gdjs.WaterWorldCode.GDBigGuyObjects3[k] = gdjs.WaterWorldCode.GDBigGuyObjects3[i];
        ++k;
    }
}
gdjs.WaterWorldCode.GDBigGuyObjects3.length = k;}if ( gdjs.WaterWorldCode.condition0IsTrue_0.val ) {
{
gdjs.WaterWorldCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "ShootHor");
}if ( gdjs.WaterWorldCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WaterWorldCode.GDBigGuyObjects3.length;i<l;++i) {
    if ( gdjs.WaterWorldCode.GDBigGuyObjects3[i].getX() < (( gdjs.WaterWorldCode.GDShooterHorObjects3.length === 0 ) ? 0 :gdjs.WaterWorldCode.GDShooterHorObjects3[0].getPointX("")) + 200 ) {
        gdjs.WaterWorldCode.condition2IsTrue_0.val = true;
        gdjs.WaterWorldCode.GDBigGuyObjects3[k] = gdjs.WaterWorldCode.GDBigGuyObjects3[i];
        ++k;
    }
}
gdjs.WaterWorldCode.GDBigGuyObjects3.length = k;}}
}
if (gdjs.WaterWorldCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootHor");
}
{ //Subevents
gdjs.WaterWorldCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.WaterWorldCode.eventsList6 = function(runtimeScene) {

{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Shoot");
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Shoot");
}
{ //Subevents
gdjs.WaterWorldCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shot"), gdjs.WaterWorldCode.GDShotObjects2);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects, gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDShotObjects2Objects, false, runtimeScene, false);
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WaterWorldCode.GDBigGuyObjects2 */
/* Reuse gdjs.WaterWorldCode.GDShotObjects2 */
{for(var i = 0, len = gdjs.WaterWorldCode.GDShotObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDShotObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBigGuyObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBigGuyObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShooterHor"), gdjs.WaterWorldCode.GDShooterHorObjects1);

for(gdjs.WaterWorldCode.forEachIndex2 = 0;gdjs.WaterWorldCode.forEachIndex2 < gdjs.WaterWorldCode.GDShooterHorObjects1.length;++gdjs.WaterWorldCode.forEachIndex2) {
gdjs.WaterWorldCode.GDShooterHorObjects2.length = 0;


gdjs.WaterWorldCode.forEachTemporary2 = gdjs.WaterWorldCode.GDShooterHorObjects1[gdjs.WaterWorldCode.forEachIndex2];
gdjs.WaterWorldCode.GDShooterHorObjects2.push(gdjs.WaterWorldCode.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.WaterWorldCode.eventsList5(runtimeScene);} //Subevents end.
}
}

}


};gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects = Hashtable.newFrom({"BigGuy": gdjs.WaterWorldCode.GDBigGuyObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.WaterWorldCode.GDCoinObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects = Hashtable.newFrom({"BigGuy": gdjs.WaterWorldCode.GDBigGuyObjects2});gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBubbleObjects2Objects = Hashtable.newFrom({"Bubble": gdjs.WaterWorldCode.GDBubbleObjects2});gdjs.WaterWorldCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bubble"), gdjs.WaterWorldCode.GDBubbleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.WaterWorldCode.GDCoinObjects2);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
gdjs.WaterWorldCode.condition1IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects, gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDCoinObjects2Objects, false, runtimeScene, false);
}if ( gdjs.WaterWorldCode.condition0IsTrue_0.val ) {
{
gdjs.WaterWorldCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBigGuyObjects2Objects, gdjs.WaterWorldCode.mapOfGDgdjs_46WaterWorldCode_46GDBubbleObjects2Objects, false, runtimeScene, false);
}}
if (gdjs.WaterWorldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WaterWorldCode.GDBubbleObjects2 */
/* Reuse gdjs.WaterWorldCode.GDCoinObjects2 */
{for(var i = 0, len = gdjs.WaterWorldCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\coin.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.WaterWorldCode.GDBubbleObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDBubbleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


};gdjs.WaterWorldCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.WaterWorldCode.GDJumpObjects2);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WaterWorldCode.GDBigGuyObjects2.length;i<l;++i) {
    if ( gdjs.WaterWorldCode.GDBigGuyObjects2[i].getX() > (( gdjs.WaterWorldCode.GDJumpObjects2.length === 0 ) ? 0 :gdjs.WaterWorldCode.GDJumpObjects2[0].getX()) - 150 ) {
        gdjs.WaterWorldCode.condition0IsTrue_0.val = true;
        gdjs.WaterWorldCode.GDBigGuyObjects2[k] = gdjs.WaterWorldCode.GDBigGuyObjects2[i];
        ++k;
    }
}
gdjs.WaterWorldCode.GDBigGuyObjects2.length = k;}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WaterWorldCode.GDJumpObjects2 */
{for(var i = 0, len = gdjs.WaterWorldCode.GDJumpObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDJumpObjects2[i].setZOrder(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.WaterWorldCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireText"), gdjs.WaterWorldCode.GDFireTextObjects1);

gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WaterWorldCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.WaterWorldCode.GDBigGuyObjects1[i].getX() > (( gdjs.WaterWorldCode.GDFireTextObjects1.length === 0 ) ? 0 :gdjs.WaterWorldCode.GDFireTextObjects1[0].getX()) - 100 ) {
        gdjs.WaterWorldCode.condition0IsTrue_0.val = true;
        gdjs.WaterWorldCode.GDBigGuyObjects1[k] = gdjs.WaterWorldCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.WaterWorldCode.GDBigGuyObjects1.length = k;}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
}

}


};gdjs.WaterWorldCode.eventsList9 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.WaterWorldCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.WaterWorldCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.WaterWorldCode.GDScoreObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\GameSound.mp3", false, 50, 1);
}}

}


};gdjs.WaterWorldCode.eventsList10 = function(runtimeScene) {

{


gdjs.WaterWorldCode.eventsList0(runtimeScene);
}


{


gdjs.WaterWorldCode.eventsList1(runtimeScene);
}


{


gdjs.WaterWorldCode.eventsList2(runtimeScene);
}


{


gdjs.WaterWorldCode.eventsList6(runtimeScene);
}


{


gdjs.WaterWorldCode.eventsList7(runtimeScene);
}


{


gdjs.WaterWorldCode.eventsList8(runtimeScene);
}


{


gdjs.WaterWorldCode.condition0IsTrue_0.val = false;
{
gdjs.WaterWorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if (gdjs.WaterWorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


{


gdjs.WaterWorldCode.eventsList9(runtimeScene);
}


{


{
}

}


};

gdjs.WaterWorldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WaterWorldCode.GDBigGuyObjects1.length = 0;
gdjs.WaterWorldCode.GDBigGuyObjects2.length = 0;
gdjs.WaterWorldCode.GDBigGuyObjects3.length = 0;
gdjs.WaterWorldCode.GDBigGuyObjects4.length = 0;
gdjs.WaterWorldCode.GDScoreObjects1.length = 0;
gdjs.WaterWorldCode.GDScoreObjects2.length = 0;
gdjs.WaterWorldCode.GDScoreObjects3.length = 0;
gdjs.WaterWorldCode.GDScoreObjects4.length = 0;
gdjs.WaterWorldCode.GDInvisibleObjects1.length = 0;
gdjs.WaterWorldCode.GDInvisibleObjects2.length = 0;
gdjs.WaterWorldCode.GDInvisibleObjects3.length = 0;
gdjs.WaterWorldCode.GDInvisibleObjects4.length = 0;
gdjs.WaterWorldCode.GDCoinObjects1.length = 0;
gdjs.WaterWorldCode.GDCoinObjects2.length = 0;
gdjs.WaterWorldCode.GDCoinObjects3.length = 0;
gdjs.WaterWorldCode.GDCoinObjects4.length = 0;
gdjs.WaterWorldCode.GDPortalObjects1.length = 0;
gdjs.WaterWorldCode.GDPortalObjects2.length = 0;
gdjs.WaterWorldCode.GDPortalObjects3.length = 0;
gdjs.WaterWorldCode.GDPortalObjects4.length = 0;
gdjs.WaterWorldCode.GDBGScrollObjects1.length = 0;
gdjs.WaterWorldCode.GDBGScrollObjects2.length = 0;
gdjs.WaterWorldCode.GDBGScrollObjects3.length = 0;
gdjs.WaterWorldCode.GDBGScrollObjects4.length = 0;
gdjs.WaterWorldCode.GDBGObjects1.length = 0;
gdjs.WaterWorldCode.GDBGObjects2.length = 0;
gdjs.WaterWorldCode.GDBGObjects3.length = 0;
gdjs.WaterWorldCode.GDBGObjects4.length = 0;
gdjs.WaterWorldCode.GDAObjects1.length = 0;
gdjs.WaterWorldCode.GDAObjects2.length = 0;
gdjs.WaterWorldCode.GDAObjects3.length = 0;
gdjs.WaterWorldCode.GDAObjects4.length = 0;
gdjs.WaterWorldCode.GDJObjects1.length = 0;
gdjs.WaterWorldCode.GDJObjects2.length = 0;
gdjs.WaterWorldCode.GDJObjects3.length = 0;
gdjs.WaterWorldCode.GDJObjects4.length = 0;
gdjs.WaterWorldCode.GDblackObjects1.length = 0;
gdjs.WaterWorldCode.GDblackObjects2.length = 0;
gdjs.WaterWorldCode.GDblackObjects3.length = 0;
gdjs.WaterWorldCode.GDblackObjects4.length = 0;
gdjs.WaterWorldCode.GDTopObjects1.length = 0;
gdjs.WaterWorldCode.GDTopObjects2.length = 0;
gdjs.WaterWorldCode.GDTopObjects3.length = 0;
gdjs.WaterWorldCode.GDTopObjects4.length = 0;
gdjs.WaterWorldCode.GDShooterDownObjects1.length = 0;
gdjs.WaterWorldCode.GDShooterDownObjects2.length = 0;
gdjs.WaterWorldCode.GDShooterDownObjects3.length = 0;
gdjs.WaterWorldCode.GDShooterDownObjects4.length = 0;
gdjs.WaterWorldCode.GDPlant2Objects1.length = 0;
gdjs.WaterWorldCode.GDPlant2Objects2.length = 0;
gdjs.WaterWorldCode.GDPlant2Objects3.length = 0;
gdjs.WaterWorldCode.GDPlant2Objects4.length = 0;
gdjs.WaterWorldCode.GDPlantObjects1.length = 0;
gdjs.WaterWorldCode.GDPlantObjects2.length = 0;
gdjs.WaterWorldCode.GDPlantObjects3.length = 0;
gdjs.WaterWorldCode.GDPlantObjects4.length = 0;
gdjs.WaterWorldCode.GDPlant3Objects1.length = 0;
gdjs.WaterWorldCode.GDPlant3Objects2.length = 0;
gdjs.WaterWorldCode.GDPlant3Objects3.length = 0;
gdjs.WaterWorldCode.GDPlant3Objects4.length = 0;
gdjs.WaterWorldCode.GDShotObjects1.length = 0;
gdjs.WaterWorldCode.GDShotObjects2.length = 0;
gdjs.WaterWorldCode.GDShotObjects3.length = 0;
gdjs.WaterWorldCode.GDShotObjects4.length = 0;
gdjs.WaterWorldCode.GDSmallObjects1.length = 0;
gdjs.WaterWorldCode.GDSmallObjects2.length = 0;
gdjs.WaterWorldCode.GDSmallObjects3.length = 0;
gdjs.WaterWorldCode.GDSmallObjects4.length = 0;
gdjs.WaterWorldCode.GDShooterHorObjects1.length = 0;
gdjs.WaterWorldCode.GDShooterHorObjects2.length = 0;
gdjs.WaterWorldCode.GDShooterHorObjects3.length = 0;
gdjs.WaterWorldCode.GDShooterHorObjects4.length = 0;
gdjs.WaterWorldCode.GDSmall2Objects1.length = 0;
gdjs.WaterWorldCode.GDSmall2Objects2.length = 0;
gdjs.WaterWorldCode.GDSmall2Objects3.length = 0;
gdjs.WaterWorldCode.GDSmall2Objects4.length = 0;
gdjs.WaterWorldCode.GDBubbleObjects1.length = 0;
gdjs.WaterWorldCode.GDBubbleObjects2.length = 0;
gdjs.WaterWorldCode.GDBubbleObjects3.length = 0;
gdjs.WaterWorldCode.GDBubbleObjects4.length = 0;
gdjs.WaterWorldCode.GDFireObjects1.length = 0;
gdjs.WaterWorldCode.GDFireObjects2.length = 0;
gdjs.WaterWorldCode.GDFireObjects3.length = 0;
gdjs.WaterWorldCode.GDFireObjects4.length = 0;
gdjs.WaterWorldCode.GDJumpObjects1.length = 0;
gdjs.WaterWorldCode.GDJumpObjects2.length = 0;
gdjs.WaterWorldCode.GDJumpObjects3.length = 0;
gdjs.WaterWorldCode.GDJumpObjects4.length = 0;
gdjs.WaterWorldCode.GDPortalOrangeObjects1.length = 0;
gdjs.WaterWorldCode.GDPortalOrangeObjects2.length = 0;
gdjs.WaterWorldCode.GDPortalOrangeObjects3.length = 0;
gdjs.WaterWorldCode.GDPortalOrangeObjects4.length = 0;
gdjs.WaterWorldCode.GDFireTextObjects1.length = 0;
gdjs.WaterWorldCode.GDFireTextObjects2.length = 0;
gdjs.WaterWorldCode.GDFireTextObjects3.length = 0;
gdjs.WaterWorldCode.GDFireTextObjects4.length = 0;
gdjs.WaterWorldCode.GDPortalGreenObjects1.length = 0;
gdjs.WaterWorldCode.GDPortalGreenObjects2.length = 0;
gdjs.WaterWorldCode.GDPortalGreenObjects3.length = 0;
gdjs.WaterWorldCode.GDPortalGreenObjects4.length = 0;

gdjs.WaterWorldCode.eventsList10(runtimeScene);
return;

}

gdjs['WaterWorldCode'] = gdjs.WaterWorldCode;
