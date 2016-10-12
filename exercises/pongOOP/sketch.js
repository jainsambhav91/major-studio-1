var score = 0;
var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

var pongBalls = [];

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  for(var i = 0; i < 10; i++) {
      
      // add pongballs to the array
      // add instances of PongBall to the pongBalls[] array
      
      pongBalls.push(new PongBall(random(30, width-30), random(30, height-80)));
      
  }
}

 function draw() {
//     background(220, 240, 0);
//     rect(mouseX, height - 50, 110, 20, 10);
//     //ellipse(x[i], y[i], 20, 20);
//     for(var i = 0; i < 10; i++) {
//         x[i] += xSpeed[i];
//         y[i] += ySpeed[i];
//         ellipse(x[i], y[i], 20, 20);
        
//         if(y[i] < 0){
//             ySpeed[i] *= -1;
//         }
//         if(x[i] < 0){
//             xSpeed[i] *= -1;
//         }
//         if(x[i] > 500){
//             xSpeed[i] *= -1;
//         }
//         if(y[i] > 430 && ( x[i] < mouseX + 55 && x[i] > mouseX - 55)){
//             // xSpeed[i] *= -1;
//             ySpeed[i] *= -1;
//         }
//     }
  
 }

function PongBall(myX, myY) {
    this.x = myX;
    this.y = myY;
    this.speedX = random(-10, 10);
    this.speedY = random(-10, 10);
    
    console.log(this.x + ' | ' + this.y);
    
    this.display = function() {
        push();
        translate(this.x, this.y);
        ellipse(0, 0, 15, 15);
        pop();
    }
    
    this.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        
         if(this.y[i] < 0){
            this.ySpeed[i] *= -1;
        }
        if(this.x[i] < 0){
            this.xSpeed[i] *= -1;
        }
        if(this.x[i] > 500){
            this.xSpeed[i] *= -1;
        }
        if(this.y[i] > 430 && ( this.x[i] < this.mouseX + 55 && x[i] > this.mouseX - 55)){
            this.xSpeed[i] *= -1;
            this.ySpeed[i] *= -1;
        }
        
    }
}