
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var Boy;
var ground;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var sling;

function preload()
{
	BoyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,675,800,10)
	stone = new Stone(95,580,15)
	mango1 = new Mango(600,360,30);
	mango2 = new Mango(535,395,30);
	mango3 = new Mango(620,270,30);
	mango4 = new Mango(490,345,30);
	mango5 = new Mango(740,380,30);
	mango6 = new Mango(670,320,30);
	mango7 = new Mango(660,380,30);
	mango8 = new Mango(550,310,30);
	mango9 = new Mango(700,350,10);
	mango10 = new Mango(570,260,10);
	sling = new Sling(stone.body,{x:95,y:580});
	mango11 = new Mango(640,230,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(BoyImage,60,525,200,200);
image(treeImage,420,185,350,500);
ground.display();
sling.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
ColisionDetect(stone,mango1);
ColisionDetect(stone,mango2);
ColisionDetect(stone,mango3);
ColisionDetect(stone,mango4);
ColisionDetect(stone,mango5);
ColisionDetect(stone,mango6);
ColisionDetect(stone,mango7);
ColisionDetect(stone,mango8);
ColisionDetect(stone,mango9);
ColisionDetect(stone,mango10);
ColisionDetect(stone,mango11);


  drawSprites();
 
}

function mouseDragged(){
   
Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
    sling.fly();
}

function ColisionDetect(stone,mango){
stonePosition = stone.body.position
mangoPosition = mango.body.position
var distance  = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
if(distance<= stone.radius + mango.radius){
	Matter.Body.setStatic(mango.body,false)
}
}