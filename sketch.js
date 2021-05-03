
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var score
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600 ,500)
monkey = createSprite(100 ,400 ,10 ,10);
monkey.addAnimation("moving" ,monkey_running);
monkey.scale = 0.2;
  
ground = createSprite(300 ,490 ,1200 ,50);
ground.velocityX = -4;
ground.x = ground.width/2;
  
score = 0;
}


function draw() {
  background("lightgreen");
  text ("survival time = " +score ,300 ,50);
  
  score = score + Math.round(getFrameRate()/60);
  
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
   
  if (keyDown ("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
 monkey.collide(ground);
  
  rocks();
  bananas();
 drawSprites();
  
}

function rocks(){
  if(frameCount % 100 ===0){
    obstacle = createSprite(600 ,427 ,10 ,10);
    obstacle.velocityX = -10; 
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    
    
  }
}

function bananas(){
  if(frameCount % 110 ===0){
    banana = createSprite(600 ,227 ,10 ,10);
    banana.velocityX = -10; 
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    
  }
}






