const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  stand = new Ground(100, 500, 100, 20);
//1rst layer
  block1 = new Box(330, 235, 30, 40);
  block2 = new Box(360, 235, 30, 40);
  block3 = new Box(390, 235, 30, 40);
  block4 = new Box(420, 235, 30, 40);
  block5 = new Box(450, 235, 30, 40);
  
//2nd layer
  block6 = new Box(360, 195, 30, 40);
  block7 = new Box(390, 195, 30, 40);
  block8 = new Box(420, 195, 30, 40);
//top
  block9 = new Box(390, 155, 30, 40);
  createSprite(400, 200, 195, 50);

  polygon = new box(160, 195, 30, 40);
  slingShot = new SlingShot(polygon.body, {x:200,y:260});
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
launcher.fly();
}

function keyPressed(){
if(keyCode === UP_ARROW){
    Matter.Body.applyForce(polygon.body, polygon.body.position, {x: 1400, y: 3000});
  }
}