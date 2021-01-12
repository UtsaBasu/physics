
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
var eng;
var world;
var object;

function setup() {
  createCanvas(400,400);
 eng = Engine.create();
 world = eng.world;
 var space = {
   isStatic:true
 }
 object = Bodies.rectangle(200,390,30,50,space);
 World.add(world,object);
 var prop={
   restitution:1
 }
 ball = Bodies.circle(100,100,10,prop);
 World.add(world,ball);
 console.log(ball);

}

function draw() {
  background(0);
  Engine.update(eng);

  rectMode(CENTER) ; 
  rect(object.position.x,object.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  drawSprites();
}