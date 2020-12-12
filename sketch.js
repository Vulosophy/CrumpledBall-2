
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, bottomwall, leftwall, rightwall, ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new PaperClass(100,600,20);
	bottomwall = new CanClass(700, 680, 150, 20);
	leftwall = new CanClass(805, 650, 20, 100);
	rightwall = new CanClass(675, 650, 20, 100);
	ground = new Ground(800, 690, 1600, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();s
  bottomwall.display();
  leftwall.display();
  rightwall.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: - 85});
	}
}



