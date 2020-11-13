var fixedRect, movingRect, movingBox, notMovingBox;

function setup() 
{
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  movingBox = createSprite(400, 700, 50, 80);
  movingBox.shapeColor = "yellow";
  movingBox.debug = true;
  notMovingBox = createSprite(400, 300, 50, 80);
  notMovingBox.shapeColor = "purple";
  notMovingBox.debug = true;

 // movingRect.velocityY = random(4,9);
 // movingRect.velocityX = random(4,9);
  fixedRect.velocityY = random(-4,-9);
  //fixedRect.velocityX = random(-4,-9);
  //movingBox.velocityY = random(6,8);
 // movingBox.velocityX = random(6,8);
  notMovingBox.velocityY = random(4,9);
  //notMovingBox.velocityX = random(4,9);

  edges = createEdgeSprites();
}

function draw()
 {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(movingRect,movingBox);
  bounceOff(movingRect,notMovingBox);
  movingRect.bounceOff(edges);

  bounceOff(fixedRect,movingRect);
  bounceOff(fixedRect,movingBox);
  bounceOff(fixedRect,notMovingBox);
  fixedRect.bounceOff(edges);

  bounceOff(movingBox,fixedRect);
  bounceOff(movingBox,movingRect);
  bounceOff(movingBox,notMovingBox);
  movingBox.bounceOff(edges);

  bounceOff(notMovingBox,fixedRect);
  bounceOff(notMovingBox,movingRect);
  bounceOff(notMovingBox,movingBox);
  notMovingBox.bounceOff(edges);

  drawSprites();
}