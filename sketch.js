const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var backgroundImage=""
var square
var slingshot
var ball
var engine,world;
var gameState="onSling"
function preload(){


  backgroundImage=loadImage("images/Basketball hoop.png")
    
}


function setup(){
    createCanvas(600,800)
    engine = Engine.create()
    world = engine.world;
  square=createSprite(20,30,20,10) 
  ball=new Basketball(300,800) 
  slingshot=new Slingshot(ball.body,{x:300,y:800})

}
function draw(){
drawSprites()
background("grey")
image(backgroundImage,0,0,600,800)
ball.display();
slingshot.display();
}
function mouseDragged(){
  if (gameState!=="fly")
      
      
      Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY})
     
}
function mouseReleased(){
        slingshot.fly()
        gameState="fly"

}
function keyPressed(){
  if (keyCode==32){
  Matter.Body.setPosition(ball.body,{x:400,y:800})
  slingshot.attach(ball.body)
  gameState="onSling"
  }   
  }

