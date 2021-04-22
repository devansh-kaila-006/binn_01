
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var g1;
var b1,b2,b3;
var ball;
var aa,aaa,aaaa;
var a1,a2,a3;

function preload(){
	aa = loadImage("abcd.PNG");
	aaa = loadImage("abc.PNG");
	aaaa = loadImage("abb.PNG");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	g1 = new Ground(700,650,1400,20);
	b1 = new Bin(1050,530,10,225);
	b2 = new Bin(1200,640,300,10);
	b3 = new Bin(1330,395,30,465);
    ball = new Ball(200,500,28);

    a1 = createSprite(1200,530,300,150);
	a1.addImage(aa); 
	a2 = createSprite(1350,300,25,150);
	a2.addImage(aaa); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    
   g1.display();
   ball.display();

   keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-35})
	}
}



