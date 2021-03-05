var helicopter, helicopterIMG, package, packageBody, packageIMG, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function preload() {

	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");

}

function setup() {
	createCanvas(800, 800);

	package = createSprite(400, 200, 50, 50);
	package.addImage(packageIMG);
	package.scale = 0.2;

	helicopter = createSprite(400, 100, 50, 50);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.8;

	groundSprite = createSprite(400, 700, 800, 20);
	groundSprite.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	var options = {
		restitution: 0.8,
		isStatic: true
	}

	packageBody = Bodies.rectangle(400, 100, 80, 80, options);
	World.add(world, packageBody);

	box1 = new Box(300,630,20,100);
	box2 = new Box(500,630,20,100);
	box3 = new Box(400,680,200,20);


	ground = Bodies.rectangle(400, 700, 800, 10, { isStatic: true });
	World.add(world, ground);
	Engine.run(engine);
}


function draw() {
	background("black");


	package.x = packageBody.position.x
	package.y = packageBody.position.y

	box1.display();
	box2.display();
	box3.display();

	drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
	if (keyCode === RIGHT_ARROW){
		helicopter.x=helicopter.x+20;
		packageBody.position.x=helicopter.x;
		packageBody.position.y=helicopter.y;
	}
	if (keyCode === LEFT_ARROW){
		helicopter.x=helicopter.x-20;
		packageBody.position.x=helicopter.x;
		packageBody.position.y=helicopter.y;
	}

}

