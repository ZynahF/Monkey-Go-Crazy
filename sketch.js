
var monkey, monkey_running;
var bananaImage, obstacleImage;
var BananaGroup, obstacleGroup;
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  BananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,325,20,20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(200,369,400,50)
  ground.velocityX = -4
  ground.x = ground.width /2;
  
  console.log(monkey.y)
  
}


function draw() {

  background("white")
  
   if (ground.x < 200){
    
      ground.x = ground.width/2;
    
    }
  
  
  
  if (keyDown("space") && monkey.y >= 300) {
    
    monkey.velocityY = -12
    
  }
  

  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground);
  
  
  BananaGroup = new Group()
  obstacleGroup = new Group()
  
  
  if (frameCount % 80 == 0) {
    
    var banana = createSprite (300,20,10,10)
    banana.y = Math.round (random(200,300))
    banana.addImage (BananaImage)
    banana.scale = 0.1
    banana.velocityX = -5
    banana.lifetime = 55
    
    BananaGroup.add(banana)
    
  }
  
  if (frameCount % 300 == 0) {
    
    var obstacle = createSprite (300,325,10,10)
    obstacle.addImage (obstacleImage)
    obstacle.scale = 0.2
    obstacle.velocityX = -5
    obstacle.lifetime = 55
    
    obstacleGroup.add(obstacle)
    
  }
  
    var SurvivalTime = 0;
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+ score, 500,50)
  
  var score
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ SurvivalTime, 100, 50)
  
  
  drawSprites()
  
}




