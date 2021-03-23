var x, y;
var speedX,
    speedY;



let lArm1 = 30;
let lArm2 = 20;
let rArm1 = 30;
let rArm2 = 40;
let body1 = 30;
let body2 = 30;
let lLeg1 = 30;
let lLeg2 = 20;
let rLeg1 = 30;
let rLeg2 = 40;
let head = 30;

function setup() {
  createCanvas(windowWidth, 500);
  x = 0;
  y = 0;
  speedX = 1;
  speedY = 1
}

function draw() {
  resetPerson();

  head = head + 1;
  body1 = body1 + 1;
  body2 = body2 + 1;
  lArm1 = lArm1 + 1;
  lArm2 = lArm2 + 1;
  rArm1 = rArm1 + 1;
  rArm2 = rArm2 + 1;
  lLeg1 = lLeg1 + 1;
  lLeg2 = lLeg2 + 1;
  rLeg1 = rLeg1 + 1;
  rLeg2 = rLeg2 + 1;


  background("lightblue");
  x = x +
  speedX;
  y = y +
  speedY;
  fill("yellow");
  ellipse(x, y, 150, 150);

  fill("green");
  rect(0, height - 70, width, height);


  fill(255);
  //this line draws the:head
  ellipse(head, height - 100, 30, 35);

  //this line draws the:body
  line(body1, height - 85, body2, height - 50);

  //this line draws the:left arm
  line(lArm1, height - 75, lArm2, height - 55);

  //this line draws the:right arm
  line(rArm1, height - 75, rArm2, height - 55);

  //this line draws the:left leg
  line(lLeg1, height - 50, lLeg2, height - 30);

  //this line draws the:right leg
  line(rLeg1, height - 50, rLeg2, height - 30);
textSize(76);
text('Rut Moe', 40, 70);
fill(0, 110, 185);
}

function resetPerson() {
  if (head > width) {
    lArm1 = 30;
    lArm2 = 20;
    rArm1 = 30;
    rArm2 = 40;
    body1 = 30;
    body2 = 30;
    lLeg1 = 30;
    lLeg2 = 20;
    rLeg1 = 30;
    rLeg2 = 40;
    head = 30;
  }
}