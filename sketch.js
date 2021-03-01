
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grnd;
var hammerr;
var sand1,sand2,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var rubber1,rubber2;
var iron1,iron2;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	grnd=new ground(600,680,1200,50);
	hammerr=new hammer(600,150);

	sand1=new sand();
	sand2=new sand();
	sand3=new sand();
	sand4=new sand();
	sand5=new sand();
	sand6=new sand();
	sand7=new sand();
	sand8=new sand();

	rubber1=new rubber(900,50);
	rubber2=new rubber(400,50);

	iron1=new irony(900,50,100,150);
	iron2=new irony(300,50,100,50);
	



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();

  grnd.display();
  hammerr.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  rubber1.display();
  rubber2.display();

  iron1.display();
  iron2.display();
 
}



