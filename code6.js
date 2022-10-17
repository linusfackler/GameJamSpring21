gdjs.FootballCode = {};
gdjs.FootballCode.GDBigGuyObjects1= [];
gdjs.FootballCode.GDBigGuyObjects2= [];
gdjs.FootballCode.GDBigGuyObjects3= [];
gdjs.FootballCode.GDScoreObjects1= [];
gdjs.FootballCode.GDScoreObjects2= [];
gdjs.FootballCode.GDScoreObjects3= [];
gdjs.FootballCode.GDInvisibleObjects1= [];
gdjs.FootballCode.GDInvisibleObjects2= [];
gdjs.FootballCode.GDInvisibleObjects3= [];
gdjs.FootballCode.GDCoinObjects1= [];
gdjs.FootballCode.GDCoinObjects2= [];
gdjs.FootballCode.GDCoinObjects3= [];
gdjs.FootballCode.GDPortalObjects1= [];
gdjs.FootballCode.GDPortalObjects2= [];
gdjs.FootballCode.GDPortalObjects3= [];
gdjs.FootballCode.GDBGScrollObjects1= [];
gdjs.FootballCode.GDBGScrollObjects2= [];
gdjs.FootballCode.GDBGScrollObjects3= [];
gdjs.FootballCode.GDSoccer_95FieldObjects1= [];
gdjs.FootballCode.GDSoccer_95FieldObjects2= [];
gdjs.FootballCode.GDSoccer_95FieldObjects3= [];
gdjs.FootballCode.GDballObjects1= [];
gdjs.FootballCode.GDballObjects2= [];
gdjs.FootballCode.GDballObjects3= [];
gdjs.FootballCode.GDBGObjects1= [];
gdjs.FootballCode.GDBGObjects2= [];
gdjs.FootballCode.GDBGObjects3= [];
gdjs.FootballCode.GDJeremyObjects1= [];
gdjs.FootballCode.GDJeremyObjects2= [];
gdjs.FootballCode.GDJeremyObjects3= [];
gdjs.FootballCode.GDPassosObjects1= [];
gdjs.FootballCode.GDPassosObjects2= [];
gdjs.FootballCode.GDPassosObjects3= [];
gdjs.FootballCode.GDGriffinObjects1= [];
gdjs.FootballCode.GDGriffinObjects2= [];
gdjs.FootballCode.GDGriffinObjects3= [];
gdjs.FootballCode.GDJohnsonObjects1= [];
gdjs.FootballCode.GDJohnsonObjects2= [];
gdjs.FootballCode.GDJohnsonObjects3= [];
gdjs.FootballCode.GDAimerObjects1= [];
gdjs.FootballCode.GDAimerObjects2= [];
gdjs.FootballCode.GDAimerObjects3= [];
gdjs.FootballCode.GDBlackObjects1= [];
gdjs.FootballCode.GDBlackObjects2= [];
gdjs.FootballCode.GDBlackObjects3= [];
gdjs.FootballCode.GDblackleftObjects1= [];
gdjs.FootballCode.GDblackleftObjects2= [];
gdjs.FootballCode.GDblackleftObjects3= [];

gdjs.FootballCode.conditionTrue_0 = {val:false};
gdjs.FootballCode.condition0IsTrue_0 = {val:false};
gdjs.FootballCode.condition1IsTrue_0 = {val:false};


gdjs.FootballCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.FootballCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.FootballCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDScoreObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\GameSound.mp3", false, 50, 1);
}}

}


};gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDInvisibleObjects2Objects = Hashtable.newFrom({"Invisible": gdjs.FootballCode.GDInvisibleObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects1});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDInvisibleObjects1Objects = Hashtable.newFrom({"Invisible": gdjs.FootballCode.GDInvisibleObjects1});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJeremyObjects2Objects = Hashtable.newFrom({"Jeremy": gdjs.FootballCode.GDJeremyObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDPassosObjects2Objects = Hashtable.newFrom({"Passos": gdjs.FootballCode.GDPassosObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDGriffinObjects2Objects = Hashtable.newFrom({"Griffin": gdjs.FootballCode.GDGriffinObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJohnsonObjects2Objects = Hashtable.newFrom({"Johnson": gdjs.FootballCode.GDJohnsonObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.FootballCode.GDballObjects1});gdjs.FootballCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Jeremy"), gdjs.FootballCode.GDJeremyObjects2);
gdjs.copyArray(gdjs.FootballCode.GDballObjects1, gdjs.FootballCode.GDballObjects2);


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJeremyObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.FootballCode.GDInvisibleObjects1, gdjs.FootballCode.GDInvisibleObjects2);

/* Reuse gdjs.FootballCode.GDballObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, 287, 350, "");
}{for(var i = 0, len = gdjs.FootballCode.GDballObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.FootballCode.GDInvisibleObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDInvisibleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Passos"), gdjs.FootballCode.GDPassosObjects2);
gdjs.copyArray(gdjs.FootballCode.GDballObjects1, gdjs.FootballCode.GDballObjects2);


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDPassosObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.FootballCode.GDInvisibleObjects1, gdjs.FootballCode.GDInvisibleObjects2);

/* Reuse gdjs.FootballCode.GDballObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, 287, 350, "");
}{for(var i = 0, len = gdjs.FootballCode.GDballObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.FootballCode.GDInvisibleObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDInvisibleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Griffin"), gdjs.FootballCode.GDGriffinObjects2);
gdjs.copyArray(gdjs.FootballCode.GDballObjects1, gdjs.FootballCode.GDballObjects2);


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDGriffinObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.FootballCode.GDInvisibleObjects1, gdjs.FootballCode.GDInvisibleObjects2);

/* Reuse gdjs.FootballCode.GDballObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, 287, 350, "");
}{for(var i = 0, len = gdjs.FootballCode.GDballObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.FootballCode.GDInvisibleObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDInvisibleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Johnson"), gdjs.FootballCode.GDJohnsonObjects2);
gdjs.copyArray(gdjs.FootballCode.GDballObjects1, gdjs.FootballCode.GDballObjects2);


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJohnsonObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.FootballCode.GDInvisibleObjects1, gdjs.FootballCode.GDInvisibleObjects2);

/* Reuse gdjs.FootballCode.GDballObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(2);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects2Objects, 287, 350, "");
}{for(var i = 0, len = gdjs.FootballCode.GDballObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.FootballCode.GDInvisibleObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDInvisibleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
/* Reuse gdjs.FootballCode.GDInvisibleObjects1 */
/* Reuse gdjs.FootballCode.GDballObjects1 */
{for(var i = 0, len = gdjs.FootballCode.GDInvisibleObjects1.length ;i < len;++i) {
    gdjs.FootballCode.GDInvisibleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.FootballCode.GDballObjects1.length ;i < len;++i) {
    gdjs.FootballCode.GDballObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects1Objects, 287, 350, "");
}}

}


};gdjs.FootballCode.eventsList2 = function(runtimeScene) {

{


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
gdjs.FootballCode.GDInvisibleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDInvisibleObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 50, "");
}{for(var i = 0, len = gdjs.FootballCode.GDInvisibleObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDInvisibleObjects2[i].setZOrder(-(2));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Invisible"), gdjs.FootballCode.GDInvisibleObjects2);
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.FootballCode.GDballObjects2);
{for(var i = 0, len = gdjs.FootballCode.GDballObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDballObjects2[i].addForceTowardObject((gdjs.FootballCode.GDInvisibleObjects2.length !== 0 ? gdjs.FootballCode.GDInvisibleObjects2[0] : null), 700, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Invisible"), gdjs.FootballCode.GDInvisibleObjects1);
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.FootballCode.GDballObjects1);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDballObjects1Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDInvisibleObjects1Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FootballCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJeremyObjects2Objects = Hashtable.newFrom({"Jeremy": gdjs.FootballCode.GDJeremyObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects2Objects = Hashtable.newFrom({"blackleft": gdjs.FootballCode.GDblackleftObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJeremyObjects2Objects = Hashtable.newFrom({"Jeremy": gdjs.FootballCode.GDJeremyObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects = Hashtable.newFrom({"Black": gdjs.FootballCode.GDBlackObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJohnsonObjects2Objects = Hashtable.newFrom({"Johnson": gdjs.FootballCode.GDJohnsonObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects = Hashtable.newFrom({"Black": gdjs.FootballCode.GDBlackObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJohnsonObjects2Objects = Hashtable.newFrom({"Johnson": gdjs.FootballCode.GDJohnsonObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects2Objects = Hashtable.newFrom({"blackleft": gdjs.FootballCode.GDblackleftObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDPassosObjects2Objects = Hashtable.newFrom({"Passos": gdjs.FootballCode.GDPassosObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects = Hashtable.newFrom({"Black": gdjs.FootballCode.GDBlackObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDPassosObjects2Objects = Hashtable.newFrom({"Passos": gdjs.FootballCode.GDPassosObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects2Objects = Hashtable.newFrom({"blackleft": gdjs.FootballCode.GDblackleftObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDGriffinObjects2Objects = Hashtable.newFrom({"Griffin": gdjs.FootballCode.GDGriffinObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects = Hashtable.newFrom({"Black": gdjs.FootballCode.GDBlackObjects2});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDGriffinObjects1Objects = Hashtable.newFrom({"Griffin": gdjs.FootballCode.GDGriffinObjects1});gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects1Objects = Hashtable.newFrom({"blackleft": gdjs.FootballCode.GDblackleftObjects1});gdjs.FootballCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Griffin"), gdjs.FootballCode.GDGriffinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Jeremy"), gdjs.FootballCode.GDJeremyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Johnson"), gdjs.FootballCode.GDJohnsonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Passos"), gdjs.FootballCode.GDPassosObjects2);
{for(var i = 0, len = gdjs.FootballCode.GDGriffinObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDGriffinObjects2[i].addForce(-(100), 0, 0);
}
}{for(var i = 0, len = gdjs.FootballCode.GDPassosObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDPassosObjects2[i].addForce(80, 0, 0);
}
}{for(var i = 0, len = gdjs.FootballCode.GDJohnsonObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDJohnsonObjects2[i].addForce(-(60), 0, 0);
}
}{for(var i = 0, len = gdjs.FootballCode.GDJeremyObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDJeremyObjects2[i].addForce(40, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jeremy"), gdjs.FootballCode.GDJeremyObjects2);
gdjs.copyArray(runtimeScene.getObjects("blackleft"), gdjs.FootballCode.GDblackleftObjects2);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJeremyObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDJeremyObjects2 */
{for(var i = 0, len = gdjs.FootballCode.GDJeremyObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDJeremyObjects2[i].addForce(40, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.FootballCode.GDBlackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Jeremy"), gdjs.FootballCode.GDJeremyObjects2);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJeremyObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDJeremyObjects2 */
{for(var i = 0, len = gdjs.FootballCode.GDJeremyObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDJeremyObjects2[i].addForce(-(40), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.FootballCode.GDBlackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Johnson"), gdjs.FootballCode.GDJohnsonObjects2);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJohnsonObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDJohnsonObjects2 */
{for(var i = 0, len = gdjs.FootballCode.GDJohnsonObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDJohnsonObjects2[i].addForce(-(60), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Johnson"), gdjs.FootballCode.GDJohnsonObjects2);
gdjs.copyArray(runtimeScene.getObjects("blackleft"), gdjs.FootballCode.GDblackleftObjects2);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDJohnsonObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDJohnsonObjects2 */
{for(var i = 0, len = gdjs.FootballCode.GDJohnsonObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDJohnsonObjects2[i].addForce(60, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.FootballCode.GDBlackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Passos"), gdjs.FootballCode.GDPassosObjects2);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDPassosObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDPassosObjects2 */
{for(var i = 0, len = gdjs.FootballCode.GDPassosObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDPassosObjects2[i].addForce(-(80), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Passos"), gdjs.FootballCode.GDPassosObjects2);
gdjs.copyArray(runtimeScene.getObjects("blackleft"), gdjs.FootballCode.GDblackleftObjects2);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDPassosObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDPassosObjects2 */
{for(var i = 0, len = gdjs.FootballCode.GDPassosObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDPassosObjects2[i].addForce(80, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.FootballCode.GDBlackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Griffin"), gdjs.FootballCode.GDGriffinObjects2);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDGriffinObjects2Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDBlackObjects2Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDGriffinObjects2 */
{for(var i = 0, len = gdjs.FootballCode.GDGriffinObjects2.length ;i < len;++i) {
    gdjs.FootballCode.GDGriffinObjects2[i].addForce(-(100), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Griffin"), gdjs.FootballCode.GDGriffinObjects1);
gdjs.copyArray(runtimeScene.getObjects("blackleft"), gdjs.FootballCode.GDblackleftObjects1);

gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDGriffinObjects1Objects, gdjs.FootballCode.mapOfGDgdjs_46FootballCode_46GDblackleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FootballCode.GDGriffinObjects1 */
{for(var i = 0, len = gdjs.FootballCode.GDGriffinObjects1.length ;i < len;++i) {
    gdjs.FootballCode.GDGriffinObjects1[i].addForce(100, 0, 1);
}
}}

}


};gdjs.FootballCode.eventsList4 = function(runtimeScene) {

{


gdjs.FootballCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Aimer"), gdjs.FootballCode.GDAimerObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.FootballCode.GDAimerObjects1.length ;i < len;++i) {
    gdjs.FootballCode.GDAimerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


{


gdjs.FootballCode.eventsList2(runtimeScene);
}


{


gdjs.FootballCode.eventsList3(runtimeScene);
}


{


gdjs.FootballCode.condition0IsTrue_0.val = false;
{
gdjs.FootballCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.FootballCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.FootballCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FootballCode.GDBigGuyObjects1.length = 0;
gdjs.FootballCode.GDBigGuyObjects2.length = 0;
gdjs.FootballCode.GDBigGuyObjects3.length = 0;
gdjs.FootballCode.GDScoreObjects1.length = 0;
gdjs.FootballCode.GDScoreObjects2.length = 0;
gdjs.FootballCode.GDScoreObjects3.length = 0;
gdjs.FootballCode.GDInvisibleObjects1.length = 0;
gdjs.FootballCode.GDInvisibleObjects2.length = 0;
gdjs.FootballCode.GDInvisibleObjects3.length = 0;
gdjs.FootballCode.GDCoinObjects1.length = 0;
gdjs.FootballCode.GDCoinObjects2.length = 0;
gdjs.FootballCode.GDCoinObjects3.length = 0;
gdjs.FootballCode.GDPortalObjects1.length = 0;
gdjs.FootballCode.GDPortalObjects2.length = 0;
gdjs.FootballCode.GDPortalObjects3.length = 0;
gdjs.FootballCode.GDBGScrollObjects1.length = 0;
gdjs.FootballCode.GDBGScrollObjects2.length = 0;
gdjs.FootballCode.GDBGScrollObjects3.length = 0;
gdjs.FootballCode.GDSoccer_95FieldObjects1.length = 0;
gdjs.FootballCode.GDSoccer_95FieldObjects2.length = 0;
gdjs.FootballCode.GDSoccer_95FieldObjects3.length = 0;
gdjs.FootballCode.GDballObjects1.length = 0;
gdjs.FootballCode.GDballObjects2.length = 0;
gdjs.FootballCode.GDballObjects3.length = 0;
gdjs.FootballCode.GDBGObjects1.length = 0;
gdjs.FootballCode.GDBGObjects2.length = 0;
gdjs.FootballCode.GDBGObjects3.length = 0;
gdjs.FootballCode.GDJeremyObjects1.length = 0;
gdjs.FootballCode.GDJeremyObjects2.length = 0;
gdjs.FootballCode.GDJeremyObjects3.length = 0;
gdjs.FootballCode.GDPassosObjects1.length = 0;
gdjs.FootballCode.GDPassosObjects2.length = 0;
gdjs.FootballCode.GDPassosObjects3.length = 0;
gdjs.FootballCode.GDGriffinObjects1.length = 0;
gdjs.FootballCode.GDGriffinObjects2.length = 0;
gdjs.FootballCode.GDGriffinObjects3.length = 0;
gdjs.FootballCode.GDJohnsonObjects1.length = 0;
gdjs.FootballCode.GDJohnsonObjects2.length = 0;
gdjs.FootballCode.GDJohnsonObjects3.length = 0;
gdjs.FootballCode.GDAimerObjects1.length = 0;
gdjs.FootballCode.GDAimerObjects2.length = 0;
gdjs.FootballCode.GDAimerObjects3.length = 0;
gdjs.FootballCode.GDBlackObjects1.length = 0;
gdjs.FootballCode.GDBlackObjects2.length = 0;
gdjs.FootballCode.GDBlackObjects3.length = 0;
gdjs.FootballCode.GDblackleftObjects1.length = 0;
gdjs.FootballCode.GDblackleftObjects2.length = 0;
gdjs.FootballCode.GDblackleftObjects3.length = 0;

gdjs.FootballCode.eventsList4(runtimeScene);
return;

}

gdjs['FootballCode'] = gdjs.FootballCode;
