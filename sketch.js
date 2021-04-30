var bg,bg_img;
var astronaut,astronaut_img;
var gameState="PLAY";
function preload(){

  bg_img=loadImage("images/stars.gif")
  astronaut_img=loadAnimation("images/a1.png","images/a2.png","images/a3.png","images/a4.png","images/a5.png","images/a6.png")
  ufo_Image=loadImage("images/alienUfo.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(bg_img)
  bg.scale=3.5;
  bg.velocityX=-4

  astronaut=createSprite(200, 400, 50, 50);
  astronaut.addAnimation("walking",astronaut_img)

  
}

function draw() {
  background("white");  
  drawSprites();
if(gameState==="PLAY"){
  if(bg.x<600){
    bg.x=670
  }

  if(frameCount%200===0){
    gameState="TASK 1"
    
  }
}

if(gameState==="TASK 1"){
  gameState="PLAY"
  ufo=createSprite(windowWidth/2+140,windowHeight/2)
  ufo.addImage(ufo_Image)
  ufo.scale=1.5

  fill("white")
  textSize(30)
  text("Hi!",180,120)
  if(keyDown(RIGHT_ARROW)){
   fill("white")
    textSize(30)
    text("DECODE THE ALIEN'S MESSAGE: ",180,120)
  }
}
 
}