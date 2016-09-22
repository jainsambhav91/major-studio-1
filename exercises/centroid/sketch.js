var x = [];
var y = [];
var cX = 0; 
var cY = 0; // centroid x and y coordinates
var a = 0; // area of the polygon


function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(255, 0, 0, 100);
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

    // polygon
    beginShape();
    for(var i = 0; i< x.length; i++) {
    vertex(x[i], y[i]);
    text( x[i] + ", " + y[i], x[i], y[i]);
    }
    endShape();

    //centroid formula
    for(var i=0; i<x.length - 1; i++) {
        // enumerate
        cX += (x[i] + x[i+1]) * (x[i] * y[i+1] - x[i+1] * y[i]);
        cY += (y[i] + y[i+1]) * (x[i] * y[i+1] - x[i+1] * y[i]);
        a += x[i] * y[i+1] - x[i+1] * y[i];
    }
    
    a = 0.5 * a;
    cX = cX / (6 * a);
    cY = cY / (6 * a);
    
    ellipse(10, 10, 10, 10);
}


function mouseReleased() {
    if (x.length < 10) {
  x.push(mouseX);
  y.push(mouseY);
}
}