// ================================================================
// UNDP - Assignment 3 - Dynamics, Interactivity and Narrative
// ================================================================

// ======== Topic =======================
// Education Enrollment Funnel - realtionship with Inequality, Productivity, Poverty & Resource Dependence
// ======================================


// ======== Data used ===================
// - Productivity (GDP Per Capita) : World Bank - World development indicators (2015) - http://data.worldbank.org/indicator/NY.GDP.PCAP.CD?end=2015&start=1960
// - Resource Dependence - World Development Indicators: Contribution of natural resources to gross domestic product - http://wdi.worldbank.org/table/3.14#
// - Poverty - Poverty and Equity Database http://data.worldbank.org/data-catalog/poverty-and-equity-database
// - Inequality  - Poverty and Equity Database http://data.worldbank.org/data-catalog/poverty-and-equity-database
// ======================================


var c = []; // multiple canvas array

function setup() {
    loadTable('quantData.csv', 'csv', 'header', showData);
}


function showData(data) {
    noCanvas();
    var canWidth = windowWidth/20; // canvas width
    var canHeight = windowWidth/20; // canvas height
    
    var graphWidth = 5*canWidth/6; // graph area with
    var graphHeight = 5*canHeight/6; // graph area height
    
    var count = data.getRowCount();
    // console.log("number of rows :" + count);
    
    for (var row = 0; row < count; row++) {
        // import primary education enrollment rates from data
        var primary;  
        if(data.getString(row, 3) == ""){ primary = 0; }else{ primary = data.getNum(row, 3); }
        
        // import secondary education enrollment rates
        var secondary; 
        if(data.getString(row, 4) == ""){ secondary = 0; }else{ secondary = data.getNum(row, 4); }
       
        // import tertiary education enrollment rates
        var tertiary;
        if(data.getString(row, 5) == ""){ tertiary = 0; }else{ tertiary = data.getNum(row, 5); }
        
        
        // create quadrilaterals based on enrollment rates
        var x = canWidth/2 - graphWidth/2;
        var y = canHeight/2 - graphHeight/2;
        
        var ax = x + graphWidth/2 - ((primary/100)*graphWidth)/2;
        var ay = y
        var bx = x + graphWidth/2 +  ((primary/100)*graphWidth)/2
        var by = y;
        
        var cx = x + graphWidth/2 - ((secondary/100)*graphWidth)/2;
        var cy = y + graphHeight/3;
        var dx = x + graphWidth/2 + ((secondary/100)*graphWidth)/2;
        var dy = cy;
        
        var ex = x + graphWidth/2 - ((tertiary/100)*graphWidth)/2;
        var ey = y + 2*graphHeight/3;
        var fx = x + graphWidth/2 + ((tertiary/100)*graphWidth)/2;
        var fy = ey;
        
        var gx = ex;
        var gy = ey + graphHeight/3;
        var hx = fx;
        var hy = fy + graphHeight/3;
        

        c[row] = function(p) {
        p.setup = function() {
          p.createCanvas(canWidth, canHeight);
          p.rectMode(CENTER);

          // primary enrollment funnel
          p.noStroke();
          p.fill('#f9b87d');
          p.quad(ax, ay, bx, by, dx, dy, cx, cy );
          
          // secondary enrollment funnel
          p.fill('#f79748');
          p.quad(cx, cy, dx, dy, fx, fy, ex, ey );
          
          // tertiary enrollment funnel
          p.fill('#f27d2f');
          p.quad(ex, ey, fx, fy, hx, hy, gx, gy );
          
          // canvas border
          p.noFill();
          p.strokeWeight(5);
          p.stroke(240);
          p.rect(canWidth/2, canHeight/2, canWidth -1, canHeight - 1);  
          
          // display country name
          p.noStroke();
          p.fill(100);
          p.textSize(10);
          // p.text(data.getString(row, 0), 5, 10);
          
        }
      };
    //   start canvases
    var canvas1 = new p5(c[row]);
    }
}










        //   p.text(data.getString(row, 0), 10, 20);
        //   p.beginShape();
        //   for (var col = 3; col < 26; col++) {
        //     var val = float(data.getString(row, col));
        //     p.vertex(map(col, 3, 25, 0, width), map(val, min, max, 0, height));
        //     p.ellipse(map(col, 3, 25, 0, width), map(val, min, max, 0, height), 5, 5);
        //   }
        //   p.endShape();



        //   p.noStroke();
        //   p.fill('#f9b87d');
        //   p.rect(canWidth/2, canHeight/2, (primary/100)*(canWidth - 3), (primary/100)*(canWidth - 3));
          
        //   p.fill('#f79748');
        //   p.rect(canWidth/2, canHeight/2, (secondary/100)*(canWidth - 3), (secondary/100)*(canWidth - 3));
          
        //   p.fill('#f46800');
        //   p.rect(canWidth/2, canHeight/2, (tertiary/100)*(canWidth - 3), (tertiary/100)*(canWidth - 3));
      
      
        //   p.noStroke();
        //   p.fill('#f9b87d');
        //   p.rect(canWidth/2, canHeight/2 - graphWidth/3  , (primary/100)*(graphWidth), graphHeight/3);
          
        //   p.fill('#f79748');
        //   p.rect(canWidth/2, canHeight/2, (secondary/100)*(graphWidth), graphHeight/3);
          
        //   p.fill('#f27d2f');
        //   p.rect(canWidth/2, canHeight/2 + graphWidth/3, (tertiary/100)*(graphWidth),  graphHeight/3);
          
        //   p.noFill();
        //   p.strokeWeight(3);
        //   p.stroke(240);
        //   p.rect(canWidth/2, canHeight/2, canWidth -1, canHeight - 1);
        
        // var ax = x + graphWidth/2 - (graphWidth - (primary/100)*graphWidth)/2;
        // var ay = y
        // var bx = x + graphWidth/2 + (graphWidth - (primary/100)*graphWidth)/2
        // var by = y;
        
        // var cx = x + graphWidth/2 - (graphWidth - (secondary/100)*graphWidth)/2;
        // var cy = y + graphHeight/3;
        // var dx = x + graphWidth/2 + (graphWidth - (secondary/100)*graphWidth)/2;
        // var dy = cy;
        
        // var ex = x + graphWidth/2 - (graphWidth - (tertiary/100)*graphWidth)/2;
        // var ey = y + 2*graphHeight/3;
        // var fx = x + graphWidth/2 + (graphWidth - (tertiary/100)*graphWidth)/2;
        // var fy = ey;
        
        // var gx = ex;
        // var gy = ey + graphHeight/3;
        // var hx = fx;
        // var hy = fy + graphHeight/3;
        