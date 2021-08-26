
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobject = new Paper();
    groundObject = new Ground(width/2,670,width,20)
    dustbinObject = new Dustbin(1100,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperobject.display();
  
  groundObject.display()
  dustbinObject.display()
}

 function keyPressed() {
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paperobject.body,paperobject.body.position,{
			 x:85,
			 y:-85
			 
		 })
	 }
 }

