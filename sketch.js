
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj= new Roof (400,100,800,50);
	
	bobObject1=new Bob(200,500,50);
	bobObject2=new Bob(300,500,50);
	bobObject3=new Bob(400,500,50);
	bobObject4=new Bob(500,500,50);
	bobObject5=new Bob(600,500,50);

	rope1=new Rope(bobObject1.body,{x:200,y:127});
	rope2=new Rope(bobObject2.body,{x:300,y:127});
	rope3=new Rope(bobObject3.body,{x:400,y:127});
	rope4=new Rope(bobObject4.body,{x:500,y:127});
	rope5=new Rope(bobObject5.body,{x:600,y:127});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
              
  roofObj.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:50});
	   
	 }
   }

