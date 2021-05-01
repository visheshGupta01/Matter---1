
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object1;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

object1 = Bodies.rectangle(400,100, 50, 50)
World.add(world, object1)

object2 = Bodies.circle(600,100, 50)
World.add(world, object2)
console.log(object2)


}
function draw()
{
  background(0);

Engine.update(engine)

  rectMode(CENTER);
    rect(object1.position.x, object1.position.y, 50, 50);

circle(object2.position.x, object2.position.y, object2.circleRadius)
  
}
