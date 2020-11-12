var wall,car,speed,mass,deformation;

function setup() 
{
  createCanvas(800,400);
  
  car = createSprite(100,200,50,20);
  car.shapeColor = "blue"
  wall= createSprite(700,200,75,100);
  wall.shapeColor = "red"

  speed = randomNumber(55,99);
  mass = randomNumber(400,1500);

  car.velocityX= speed
}
  
function draw() 
{
  background(255,255,255);  

  if(wall.x-car.x<=wall.width/2+car.width/2 &&
  car.x-wall.x<=wall.width/2+car.width/2 &&
  wall.y-car.y<=wall.height/2+car.height/2 &&
  car.y-wall.y<=wall.height/2+car.height/2)
  {
    car.velocityX = 0;
      
    deformation = (0.5*mass*speed*speed)/22500
    if(deformation>180)
    {
      Text(deformation + " Not Safe",400,50);
    }
    else if(deformation<180 && deformatio>80)
    {
      Text(deformation + " Avrage",400,50);
    }
    else if(deformation<80)
    {
      Text(deformation + " Good!",400,50);
    }
  }

  drawSprites();
}