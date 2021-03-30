
var x = 350;
var y = 500;

//x and y shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// shape when mouse clicked
var mouseShapeX;
var mouseShapeY

function setup() 
{ 
  createCanvas(500, 600);

} 
function draw ()
{
  background(0, 0, 0);
  textSize(24);
  fill(0, 185, 110);
  text('EXIT', 05, 20);

// character
  fill(0, 185, 110);
  ellipse(x,y,25,25);

//enemy
  fill(10,140,85);
  triangle(shapeX, shapeY, 20);

  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   

  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;

  if(shapeX > width)
  {
    shapeX = 0;
  }
  
    if(shapeX < 0);
  
  {
      shapeX = width;
  }
    if(shapeY > height)
  {  
    shapeY = 0;
  }  
    if(shapeY < 0)
    {
      shapeY = height;
    }

    if(charcterX > width && characterY > width-50);
    {
      fill(0, 185, 110);
      stroke(5);
      textSize(36);
      text("You Win", width/2-50, height/2-50)
    }

  

// shape mouse click
fill(120, 130, 140,);
circle(mouseShapeX, mouseShapeY, 25);
  }

  function mouseClicked()
  {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
  }

function keyPressed() 
{
  if (keyCode === UP_ARROW) {
    y = y - 10;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
}