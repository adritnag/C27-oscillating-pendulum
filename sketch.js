const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,string,pole,ground; 
var options_string,options_ball,options_pole,options_gr;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

   options_pole={
    isStatic:true
  }

  pole = Bodies.rectangle(400,25,700,20,options_pole);
  World.add(world,pole);

   options_ball={
     restitution:0.5,
     friction:0.5,
     density:0.4
   }

  ball = Bodies.rectangle(400,400,700,20,options_ball);
  World.add(world,ball);

  options_string={
    bodyA:pole,
    bodyB:ball,
    length:500,
    stiffness: 0.04
  }
  string = Constraint.create(options_string)
  World.add(world,string);

  }





function draw() {
  background("yellow");
  Engine.update(engine);
  
   

 


fill("green");    
rectMode(CENTER);
rect(pole.position.x,pole.position.y,600,35,options_pole);

/*fill(0,0,255);
rect(ground.position.x,ground.position.y,2000,100);*/

fill("red")
ellipse(ball.position.x,ball.position.y,100);

stroke("blue");
strokeWeight(10) 
line(ball.position.x,ball.position.y,pole.position.x,pole.position.y)




if(keyCode===ENTER){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 1000;

}

}