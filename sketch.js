var snowflake,snowflakeImg
var backgroundImg

function preload() {
  snowflakeImg = loadImage("snow5.webp");
  backgroundImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}