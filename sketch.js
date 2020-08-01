var M_rect,F_rect;

function setup() {
  createCanvas(800,400);
  M_rect = createSprite(400, 200, 50, 50);
  F_rect = createSprite(100, 200, 50, 50);
  M_rect.shapeColor = "red";
  F_rect.shapeColor = "red";

  M_rect.debug = true;
  F_rect.debug = true;


}

function draw() {
  background(255,255,255);  
M_rect.y = World.mouseY;
M_rect.x = World.mouseX;

  if((F_rect.x - M_rect.x < F_rect.width /2 + M_rect.width/2) && (M_rect.x - F_rect.x < F_rect.width /2 + M_rect.width/2 )
  && (F_rect.y - M_rect.y< F_rect.width /2 + M_rect.width/2) && (M_rect.y - F_rect.y < F_rect.width /2 + M_rect.width/2 ))
  {
    M_rect.shapeColor = "green";
  F_rect.shapeColor = "green";
  }

  else
  {
    M_rect.shapeColor = "red";
  F_rect.shapeColor = "red";
  }
  drawSprites();
}