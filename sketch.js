const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,string,pole,ground; 
var options_s,options_ball,options_pole,options_gr;


function setup() {
  createCanvas(innerWidth,innerHeight);
  engine = Engine.create();
  world = engine.world;


  options_ball ={
    "density":1.0,
    "restitution": 0.8
}
  ball = Bodies.rectangle(1000,200,50,50,options_ball);

  World.add(world,ball);

  options_pole ={
    isStatic: true
  }

  pole = Bodies.rectangle(1000,50,100,20,options_pole);
  World.add(world,pole);

   options_s ={
    bodyA: pole,
    bodyB: ball,
    length: 500,
    stiffness: 0.004
}
    string = Constraint.create(options_s)
  World.add(world,string);

  options_gr ={
    isStatic: true
  }
 ground = Bodies.rectangle(1000,1000,1500,40,options_gr)
World.add(world,ground);
}

function draw() {
  background(255,255,255)
  Engine.update(engine);
  
  background(0,100);  


fill("gray");    
rectMode(CENTER);
rect(pole.position.x,pole.position.y,400,50);

fill(0,0,255);
rect(ground.position.x,ground.position.y,2000,100);

fill("red")
ellipse(ball.position.x,ball.position.y,100);

stroke(255);
strokeWeight(10) 
line(ball.position.x,ball.position.y,pole.position.x,pole.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 1000;

}

}