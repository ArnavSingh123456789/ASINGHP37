const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload() {}

function setup() {
  createCanvas(800, 700);

  var ball_options = {
    isStatic: false,
    restitution: 0.0001,
    friction: 0,
    density: 1.2,
  };

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, 600, width, 20);
  leftSide = new Ground(700, 550, 20, 120);
  rightSide = new Ground(550, 550, 20, 120);

  //Create the Bodies Here.
  ball = Bodies.circle(200, 200, 15, ball_options);
  World.add(world, ball);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 20);

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 30, y: -30 });
  }
}
