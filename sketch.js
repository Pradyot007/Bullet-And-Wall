var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(230,230,230)
  bullet.shapeColor=color("white")
  bullet.velocityX=speed;
  
}

function draw() {
  background(0);  
  if(hasCollided(bullets,wall))

{
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(deformation>10) 
  {
    wall.shapeColor=color(255,0,0)
  }
  if(deformation<10)
  {
    wall.shapeColor=color(0,255,0);
  }
   
}
}
funtion hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return
}