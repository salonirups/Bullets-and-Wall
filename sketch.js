var bullet, wall;
var weight, speed, thickness;
var damage;
function setup() {
  createCanvas(1200,400);
  bullet=createSprite(10, 200, 80, 10);
  bullet.shapeColor=("white");
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background("black");  

  if(hascollided(bullet,wall)){

      bullet.velocityX=0;
      damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<10){
    wall.shapeColor=color(0,255,0);
   }

   if(damage>10){
   wall.shapeColor=color(255,0,0)
   }

   
    }
  drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false
}

