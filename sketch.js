
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var tree1;
var stone1;
var boy1;
var mango1,mango2,mango3,mango4,mango5,mango6,elastic1;
var stone1;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(700,550,1400,10);
	mango1 = new Mango(1100,250,70)
	mango2 = new Mango(1130,150,60)
	mango3 = new Mango(1060,130,80)
	mango4 = new Mango(1040,220,60)
	mango5 = new Mango(1160,210,40)
	mango6 = new Mango(1180,270,50)
  stone1 = new Stone(150,350,10);
  tree1 = new Tree(1100,280,100,100);
  boy1 = new Boy(200,490,50,50);
  elastic1 = new Elastic(stone1.body,{x:155,y:445})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  ground1.display();
  tree1.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  elastic1.display();
  
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
 
}

function mouseDragged(){

  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
  
  }
  
  function mouseReleased(){
  
      elastic1.fly()
  
  }



  function detectCollision(lstone,lmango){

stoneBodyPosition = lstone.body.position;
mangoBodyPosition = lmango.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){

      Matter.Body.setStatic(lmango.body,false)
    }
  }
  function keyPressed(){

if(keyCode===32){
Matter.Body.setPosition(stone1.body,{x:150,y:350})
elastic1.attach(stone1.body)

}


  }
  function attach(){

var BodyA = body;

  }