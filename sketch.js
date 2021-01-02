const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  tree;
var backgroundImg,platform;
var boy, chain;
var ground;
var stone,stoneWidth;
var mangoRadius;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
function preload(){
    
}
function setup(){
    var canvas = createCanvas(1360,621);
    engine = Engine.create();
    world = engine.world;

    tree = new Tree(650, 0);
    mango1 = new Mango(880,230,40);
    mango2 = new Mango(1000,220,40);
    mango3 = new Mango(1080,200,40);
    mango4 = new Mango(1030,130,40);
    mango5 = new Mango(920,100,40);
    mango6 = new Mango(800,250,40);
    mango7 = new Mango(1150,150,40);
    mango8 = new Mango(1250,250,40);
    mango9 = new Mango(1120,250,40);
    mango10 = new Mango(1000,300,40);
    mango11 = new Mango(900,300,40);

    boy = new Boy(280,455);
    stone=new Stone(200,300,50,50);
    chain = new Chain({x: 200,y: 400},stone.body);
    ground=new Ground(680,611);

    
}

function draw(){
    background(200);
    Engine.update(engine);
    strokeWeight(1);
    textSize(20);
    stroke(100);
    text("Press Space To Get A Second Chance To Play!!",300,100);
    tree.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();

    boy.display();
    chain.display();  
    stone.display();
    ground.display();
    detectcollision(stone,mango1);
    detectcollision(stone,mango2);
    detectcollision(stone,mango3);
    detectcollision(stone,mango4);
    detectcollision(stone,mango5);
    detectcollision(stone,mango6);
    detectcollision(stone,mango7);
    detectcollision(stone,mango8);
    detectcollision(stone,mango9);
    detectcollision(stone,mango10);
    detectcollision(stone,mango11);

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});

}
function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode===32){
        chain.attach(stone.body);
    }
}
function detectcollision(bodyA,bodyB){
    bodyAPosition=bodyA.body.position;
    bodyBPosition=bodyB.body.position;
    
    var distance=dist(bodyAPosition.x,bodyAPosition.y,bodyBPosition.x,bodyBPosition.y)
    if(distance<=mangoRadius+stoneWidth)
    {
        Matter.Body.setStatic(bodyB.body,false);
        console.log(bodyBPosition.y);
    }
}