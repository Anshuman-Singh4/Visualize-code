var moving,fixed;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(600,200,50,50);
fixed.shapeColor = "green";
moving.shapeColor = "green";

}

function draw() {
  background(0);  
moving.x = World.mouseX;
moving.y = World.mouseY;

if(moving.x - fixed.x < moving.width/2 + fixed.width/2){
  fixed.shapeColor = "red";
  moving.shapeColor = "red";

}
else{
fixed.shapeColor = "green";
moving.shapeColor = "green";
}

  drawSprites();
}