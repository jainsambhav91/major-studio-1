var x = [];
var y = [];


function setup() {
 createCanvas(windowWidth, windowHeight);
// rectMode(CENTER);
}

function draw() {
   background(200);
  // rect(mouseX, mouseY, 100, 100, 20);

    // beginShape();
    // vertex(30, 20);
    // vertex(85, 20);
    // vertex(85, 75);
    // vertex(30, 75);
    // endShape(CLOSE);

    
    beginShape();
    for(var i = 0; i< x.length; i++) {
    vertex(x[i], y[i]);
    text( x[i] + ", " + y[i], x[i], y[i]);
    }
    endShape();
}


function mouseReleased() {
    if (x.length < 10) {
  x.push(mouseX);
  y.push(mouseY);
}
}