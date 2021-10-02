var iss,issImage;
var spaceCraft,spaceImg1,spaceImg2,spaceImg3,spaceImg4;
var hasDocked=false;
var scene,scenery;
function preload()
{
issImage=loadImage("iss.png");
spaceImg1=loadImage("spacecraft1.png");
spaceImg2=loadImage("spacecraft2.png");
spaceImg3=loadImage("spacecraft3.png");
spaceImg4=loadImage("spacecraft4.png");
scenery=loadImage("spacebg.jpg");
}
function setup() 
{
  createCanvas(800,400);
  iss=createSprite(800,300,50,50);
  iss.addImage("issImg",issImage);
 iss.scale=0.5;
 spaceCraft=createSprite(400,95,50,50);
 spaceCraft.addImage("craft",spaceImg1);
 spaceCraft.addImage("craft1",spaceImg2);
 spaceCraft.addImage("craft2",spaceImg3);
 spaceCraft.addImage("craft3",spaceImg4);
 scene=createSprite(800,400,20,20);
 scene.addImage("space",scenery);
}

function draw()
 {
  background(255,255,255,255);  
  drawSprites();
}