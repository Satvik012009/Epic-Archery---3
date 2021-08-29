const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob1_options={
		isStatic : false  
	}	

	bob1 = Bodies.circle(400,50,20,20,bob1_options);
	World.add(world,bob1);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,10);s
  

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
