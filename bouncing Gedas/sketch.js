let x;
let y;

let xspeed;
let yspeed;

let dvd;

function preload() {
  dvd = loadImage("Gedas.png");
  
}

function setup() {
  createCanvas(800,600);
  x=400;
  y=100;
  xspeed = 4;
  yspeed = 4;
}

function draw() {
 background(0);
 //rect(x, y, 80, 60)
  // Draw the Dvd logo
  image(dvd, x, y, 200, 120)

 
 

  x = x + xspeed;
  y = y + yspeed;
  
  if (x + 100 == width || x == 0) {
 xspeed = -xspeed;
  
  }
    if (y + 60 == height || y == 0) {
 yspeed = -yspeed;
    }
  

}