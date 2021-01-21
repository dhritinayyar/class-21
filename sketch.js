var fixedRect, movingRect;
var rect1, rect2 , rect3 ;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(200,200,40,20);
  rect1.shapeColor="blue";
  rect2=createSprite(700,200,40,20);
  rect2.shapeColor="white";
  rect3=createSprite(500,200,40,20);
  rect3.shapeColor="golden";
      

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,rect1)){
 movingRect.shapeColor = "pink";
  rect1.shapeColor = "pink";




}

else{

   movingRect.shapeColor = "green";
  rect1.shapeColor = "blue";






}



  
  drawSprites();
}
