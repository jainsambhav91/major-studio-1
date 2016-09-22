var score = 0;
var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];


function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  for(var i = 0; i < 10; i++) {
      x[i] = random(width);
      y[i] = random(height);
      xSpeed[i] = random(-5,5);
      ySpeed[i] = random(-5,5);
  }
}

function draw() {
    background(220, 240, 0);
    rect(mouseX, height - 50, 110, 20, 10);
    //ellipse(x[i], y[i], 20, 20);
    for(var i = 0; i < 10; i++) {
        x[i] += xSpeed[i];
        y[i] += ySpeed[i];
        ellipse(x[i], y[i], 20, 20);
        
        if(y[i] < 0){
            ySpeed[i] *= -1;
        }
        if(x[i] < 0){
            xSpeed[i] *= -1;
        }
        if(x[i] > 500){
            xSpeed[i] *= -1;
        }
        if(y[i] > 430 && ( x[i] < mouseX + 55 && x[i] > mouseX - 55)){
            // xSpeed[i] *= -1;
            ySpeed[i] *= -1;
        }
    }
  
}