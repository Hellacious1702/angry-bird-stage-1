const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var pig1 , pig2;
var engine, world;
var box1 , box2 , box3 , box4 , box5;
var wood1 , wood2 , wood3 , wood4;
var bird1 ;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig (810 , 350);
    wood1 = new Wood (810 , 260 , 300 , PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2  = new Pig(810 , 220);
    wood2 = new Wood(810 , 180 , 300 , PI/2);
    
    box5 = new Box(810 , 160 , 70 ,70);
    wood3 = new Wood (760 , 120 , 150 , PI/7);
    wood4 = new Wood (870 , 120 , 150 , -PI/7)

    bird1 = new Bird(200, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    wood1.display();
    wood2.display();
    wood3.display();
    wood4.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
}