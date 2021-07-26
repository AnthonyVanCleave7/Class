var ship, ship_sailing, edges;
var seaImg;
var sea;

function preload(){
ship_sailing = loadAnimation("ship-1.png", "ship-2.png")
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  ship = createSprite (201,200);
  ship.addAnimation("sailing", ship_sailing);
  //sea = createSprite(200,200)
  edges = createEdgeSprites()

  sea.scale = 0.24;
  ship.scale = 0.2;
  sea.x = 50
  ship.x = 50
}

//sea.addImage(seaImg);

//sea.velocityX = sea.velocityX - 0.5

//if(sea.x < 0){
 // sea.x = sea.width/2;
//}
function draw() {
  background("blue");
  console.log(sea.x)
  sea.addImage(seaImg);
  sea.velocityX = sea.velocityX - 0.1

  if(sea.x < 0)
    sea.x = sea.width/2;
  drawSprites();
}