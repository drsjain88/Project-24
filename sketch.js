const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(800,500);
    rubber1 = new Rubber(500,445,30);
    sand1 = new Sand(150,200,30,40);
    sand2 = new Sand(200,200,20,20);
    sand3 = new Sand(250,200,10,10);
    sand4 = new Sand(300,200,35,35);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber1.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();


    
 
}