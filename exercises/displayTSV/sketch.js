// store extrema in global variables
var minVal = 10000;
var maxVal = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noFill();
  textSize(10);
// load the tsv formatted data from the undp source 
// the data structure is tsv and we have a header in the file
  
  loadTable("LaborInNonAgricultSector.txt", "tsv", "header", showData);
  colorMode(HSB, 360, 1.0, 1.0);
}

// callback function when table is loaded

function showData(data) {
    // count the rows in our table
    var count = data.getRowCount();
    
    // parse the data returned by loadStrings()
    var rowHeight = 30;
    
    // loop through all rows to determine global minimum and maximum
    for(var row = 0; row< count; row++)
    {
        // loop through all the columns
        for(var col = 3; col < 26; col++) {
            var val = data.getString(row, col);
            // display the text on the canvas
            val = parsefloat(val);
            if (minval > val)
            minVal = val;
            if(maxVal < val)
            maxVal = val;
        }
    }
}

console.log("minimum: " + minVal + " | maximum: " + maxVal);
//display
for(row = 0; row < count; row++){
    beginShape();
    //loop through all the columns 
    for (val col = 3; col < 26; col++){
        val = data.getString(row, col);
        //display the text on the canvas
        val = parseFloat(val);
        // display the text on canvas
    }
}
