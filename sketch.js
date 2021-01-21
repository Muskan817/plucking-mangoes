
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var tree1,boy1,stone1;
var launcher1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(700,320);
    mango2 = new Mango(920,320);
	mango3 = new Mango(780, 330);
	mango4 = new Mango(810,260);
	mango5 = new Mango(660,370);
    mango6 = new Mango(750,200);
    mango7 = new Mango(870, 350);
	boy1 = new Boy(100,630);
	stone1 = new Stone(60,560,20,20);
	tree1 = new tree(750,400,400,600);
    launcher1 = new Launcher(stone1.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  boy1.display();
  stone1.display();
  launcher1.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  keyPressed();
  drawSprites();
  mouseDragged();
  mouseReleased();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher1.fly();
}

function detectCollision(lmango,lstone){
var pos = lmango.body.position
var pos1  = lstone.body.position

var distance = dist(pos.x,pos.y,pos1.x,pos1.y)

if(distance<=lmango.width+lstone.width){
Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
if (keyCode===32){
Matter.Body.setPosition(stone1.body,{x:60,y:560})
launcher1.attach(stone1.body);
}
}

