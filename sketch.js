var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running;
var ground, invisibleGround, groundImage;



function preload(){
  trex_running =   loadAnimation("images/trex1.png","images/trex3.png","images/trex4.png");
  groundImage = loadImage("images/ground2.png");

}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  
  if (gameState===PLAY){
    ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") && trex.y >= 159) {
      trex.velocityY = -12;
    }
  
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
  
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  } 
  
  drawSprites();
}