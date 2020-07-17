var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{isStatic:true, restitution:0});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{restitution:0.5, isStatic:true});
 	World.add(world, ground);
	
     
	  box1 = new box(packageSprite.x-100,600,20,100);
	  box2 = new box(packageSprite.x+100,600,20,100);
	  box3 = new box(packageSprite.x,650,200,20)
  
}


function draw() {
	background(0);
	Engine.update(engine)
  rectMode(CENTER);
  box1.display();
  box2.display();
  box3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody,false);

}
}




