
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var Sball_options = {
    restitution: 0.80,
    
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  flyingground = Bodies.rectangle(300,200,150,20,ground_options);
  World.add(world,flyingground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  secondball = Bodies.circle(350,10,20,Sball_options);
  World.add(world,secondball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("pink")
  ellipse(ball.position.x,ball.position.y,20);
  fill ("lightgreen")
  rect(ground.position.x,ground.position.y,400,20);
  fill ("#CBC3E3")
  ellipse(secondball.position.x,secondball.position.y,20);
  fill ("lightblue")
  rect(flyingground.position.x,flyingground.position.y,200,20);
 
}

