var fixedRect , movingRect;
var o1,o2,o3;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,40,40);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  fixedRect.debug = true;
  o1 = createSprite(300,200,60,60);
  o2 = createSprite(700,100,60,60);
  o3 = createSprite(100,300,60,60);
  o1.shapeColor = "magenta";
  o2.shapeColor = "cyan";
  o3.shapeColor = "green";
}

function draw() {
  
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,o3)){
   movingRect.shapeColor = "red";
   o3.shapeColor = "red";
  
 }else{
   movingRect.shapeColor = "blue";
   o3.shapeColor = "green";
   
 }
  drawSprites();
}







