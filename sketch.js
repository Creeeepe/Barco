var barco, barco_running;
var sea, invisibleSea, seaImage;

function preload(){
  seaImage = loadImage("sea.png");

  barco_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1400,755);
  
  barco = createSprite(700,400,20,50);
  barco.addAnimation("running", barco_running);
  barco.scale = 0.5;

  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  invisibleSea = createSprite(1400,750,1400,10);
  invisibleSea.visible = false;

  var rand =  Math.round(random(1,100))
  console.log(rand)
}

function draw() {

  console.log (barco.y)

  if(keyDown("space")&& barco.y >= 150) {
    barco.velocityY = -10;
  }
  
  barco.velocityY = barco.velocityY + 0.8
  
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
  
  barco.collide(invisibleSea);

  sea.depth = sea.depth;
  barco.depth = barco.depth + 1;
  
    drawSprites();

 
}
