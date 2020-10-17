const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70); 
    box5 = new Box(800,10,70,70); 
    log1 = new Log(810,260,300, PI/2);
    pig1 = new Pig(810,350);
    bird1 = new Bird(150,150);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
    pig1.display();
    ground.display();
}