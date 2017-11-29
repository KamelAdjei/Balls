//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates
let size = 50;
let x = 0;
let y = 0;
let r, g, b = 255;
let speedX = 0;
let speedY = 0;

function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window
  speedX = random (-5, 5);
  speedY = random (-5, 5);

}

function draw() {
  background(120);
  x = x + speedX;
  y = y + speedY;

  if (x > 425) {
    r= random (255);
    g= random (255);
    b= random (255);
    x = -25;
  }

  if (x < -25) {
    r= random (255);
    g= random (255);
    b= random (255);
    x = 425;
  }

  if (y > 425) {
    r= random (255);
    g= random (255);
    b= random (255);
    y = -25;
  }

  if (y < -25) {
    r= random (255);
    g= random (255);
    b= random (255);
    y = 425;
  }

  fill(r, g, b);
  ellipse (x, y, size, size);
}
