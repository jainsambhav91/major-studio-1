//==========================================
// UNDP QUANTITATIVE DATA ASSIGNMENT:
//==========================================

var rowCount = 40;

function setup() {
    //background(10);
    createCanvas(windowWidth, windowHeight);
    noLoop();
    //noFill();
    textSize(10);
    rectMode(CENTER);
    // load the "tsv" formatted data from the undp sourc
    // the data structure is "csv" and we have a "header" in the file
    loadTable("undp-top40-finalData.csv", "csv", "header", showData1);
    loadTable("undp-bottom40-finalData.csv", "csv", "header", showData2);
    //mouseOver(returnCountry);
}


    // Function for the top resource dependent countries data
    
    function showData1(data) {
    background(20);
    //Fill(200, 200, 20);
    for(var i = 0; i<rowCount; i++){

        //declaring base rectangle heights again
        var boxHeight = (windowHeight - 150)/8;
        var boxWidth = boxHeight;
    
        //parsing table values into variables
        var country = data.getString(i,0);
        
        var primary = data.getString(i, 1);
        primary = parseFloat(primary);
        
        var secondary = data.getString(i, 2);
        secondary = parseFloat(secondary);
        
        var tertiary = data.getString(i, 3);
        tertiary = parseFloat(tertiary);
        
        var continent = data.getString(i,5);
        
        var subRegion = data.getString(i,4);
        
        //declaring individual heights
        var boxHeightPri = ((boxHeight*primary)/100)*0.80;
        var boxHeightSec = ((boxHeight*secondary)/100)*0.80;
        var boxHeightTer = ((boxHeight*tertiary)/100)*0.80;
        
        //declaring individual widths (all widths equal to heights)
        var boxWidthPri = boxHeightPri
        var boxWidthSec = boxHeightSec;
        var boxWidthTer = boxHeightTer;
        
        
        if(i<5){
            var recty = (100 + boxHeight/2);
            var rectx = ((boxHeight)*(i+1) + (boxHeight/2));
        } else if(i>=5 && i<10){
            recty = (100 + boxHeight/2) + boxHeight;
            rectx = ((boxHeight)*(i+1 - 5) + (boxHeight/2));
        } else if(i>=10 && i<15){
            recty = (100 + boxHeight/2) + boxHeight*2;
            rectx = ((boxHeight)*(i+1 - 10) + (boxHeight/2));
        } else if(i>=15 && i<20){
            recty = (100 + boxHeight/2) + boxHeight*3;
            rectx = ((boxHeight)*(i+1 - 15) + (boxHeight/2));
        }  else if(i>=20 && i<25){
            recty = (100 + boxHeight/2) + boxHeight*4;
            rectx = ((boxHeight)*(i+1 - 20) + (boxHeight/2));
        }  else if(i>=25 && i<30){
            recty = (100 + boxHeight/2) + boxHeight*5;
            rectx = ((boxHeight)*(i+1 - 25) + (boxHeight/2));
        }  else if(i>=30 && i<35){
            recty = (100 + boxHeight/2) + boxHeight*6;
            rectx = ((boxHeight)*(i+1 - 30) + (boxHeight/2));
        }  else if(i>=35 && i<40){
            recty = (100 + boxHeight/2) + boxHeight*7;
            rectx = ((boxHeight)*(i+1 - 35) + (boxHeight/2));
        }  
        
            
            
            noStroke();
            if(continent === "Africa")
            {
                fill(0, 230, 200, 30);
            }else{
                fill(200, 230, 0, 30);
            }
            ellipse(rectx, recty, boxWidthPri, boxHeightPri);
            
            if(continent === "Africa")
            {
                fill(0, 230, 200, 70);
            }else{
            fill(200, 230, 0, 70);
            }
            ellipse(rectx, recty, boxWidthSec, boxHeightSec);
            
            if(continent === "Africa")
            {
            fill(0, 230, 200, 120);
            }else{
            fill(200, 230, 0, 120);
            }
            ellipse(rectx, recty, boxWidthTer, boxHeightTer);
            
            fill(70);
            textAlign(CENTER);
            text(country, rectx, (recty + boxHeight/2 + 3)) ;
            
            //textSize(40);

            // console.log(secondary[i]);
            //console.log(country[i]);

            
        }
        
    }
    
    
    
    // Function for bottom 40 countries
    
     function showData2(data) {
    //Fill(200, 200, 20);
    for(var i = 0; i<rowCount; i++){

        //declaring base rectangle heights again
        var boxHeight = (windowHeight - 150)/8;
        var boxWidth = boxHeight;
    
        //parsing table values into variables
        var country = data.getString(i,0);
        
        var primary = data.getString(i, 1);
        primary = parseFloat(primary);
        
        var secondary = data.getString(i, 2);
        secondary = parseFloat(secondary);
        
        var tertiary = data.getString(i, 3);
        tertiary = parseFloat(tertiary);
        
        var continent = data.getString(i,5);
        
        //declaring individual heights
        var boxHeightPri = ((boxHeight*primary)/100)*0.80;
        var boxHeightSec = ((boxHeight*secondary)/100)*0.80;
        var boxHeightTer = ((boxHeight*tertiary)/100)*0.80;
        
        //declaring individual widths (all widths equal to heights)
        var boxWidthPri = boxHeightPri
        var boxWidthSec = boxHeightSec;
        var boxWidthTer = boxHeightTer;
        
            
        if(i<5){
            var recty = (100 + boxHeight/2);
            var rectx = ((boxHeight)*(i+1) + (boxHeight/2) + (5*boxHeight) + 16);
        } else if(i>=5 && i<10){
            recty = (100 + boxHeight/2) + boxHeight;
            rectx = ((boxHeight)*(i+1 - 5) + (boxHeight/2) + (5*boxHeight) + 16);
        } else if(i>=10 && i<15){
            recty = (100 + boxHeight/2) + boxHeight*2;
            rectx = ((boxHeight)*(i+1 - 10) + (boxHeight/2) + (5*boxHeight) + 16);
        } else if(i>=15 && i<20){
            recty = (100 + boxHeight/2) + boxHeight*3;
            rectx = ((boxHeight)*(i+1 - 15) + (boxHeight/2) + (5*boxHeight) + 16);
        }  else if(i>=20 && i<25){
            recty = (100 + boxHeight/2) + boxHeight*4;
            rectx = ((boxHeight)*(i+1 - 20) + (boxHeight/2) + (5*boxHeight) + 16);
        }  else if(i>=25 && i<30){
            recty = (100 + boxHeight/2) + boxHeight*5;
            rectx = ((boxHeight)*(i+1 - 25) + (boxHeight/2) + (5*boxHeight) + 16);
        }  else if(i>=30 && i<35){
            recty = (100 + boxHeight/2) + boxHeight*6;
            rectx = ((boxHeight)*(i+1 - 30) + (boxHeight/2) + (5*boxHeight) + 16);
        }  else if(i>=35 && i<40){
            recty = (100 + boxHeight/2) + boxHeight*7;
            rectx = ((boxHeight)*(i+1 - 35) + (boxHeight/2) + (5*boxHeight) + 16);
        }  
            
            
             noStroke();
            
            if(continent === "Africa")
            {
                fill(0, 230, 200, 30);
            }else{
                fill(200, 230, 0, 30);
            }
            ellipse(rectx, recty, boxWidthPri, boxHeightPri);
            
            if(continent === "Africa")
            {
                fill(0, 230, 200, 70);
            }else{
            fill(200, 230, 0, 70);
            }
            ellipse(rectx, recty, boxWidthSec, boxHeightSec);
            
            if(continent === "Africa")
            {
            fill(0, 230, 200, 120);
            }else{
            fill(200, 230, 0, 120);
            }
            ellipse(rectx, recty, boxWidthTer, boxHeightTer);
            
            fill(70);
            textAlign(CENTER);
            text(country, rectx, (recty + boxHeight/2 + 3)) ;
            
        }
            // create a line to seperate the two data sets
            stroke(70);
            strokeWeight(0.5);
            line((boxHeight*6 + 8), 100, (boxHeight*6 + 8), (boxHeight*8 + 130));
            
            // create a line to add resource dependence not-dependent text
            stroke(70);
            strokeWeight(1);
            line(boxHeight, (100 + boxHeight*8 + 10), (boxHeight*6 + 8) ,(100 + boxHeight*8 + 10));
            line( (boxHeight*6 + 8) ,(100 + boxHeight*8 + 10), (boxHeight*11 + 16), (100 + boxHeight*8 + 10));
            
            line(boxHeight, 100, (boxHeight*6 + 8) , 100);
            line( (boxHeight*6 + 8) , 100, (boxHeight*11 + 16), 100);
            
            // create a box to add legends
            noStroke();
            fill(35);
            rect((boxHeight*11 + 16 + boxHeight + boxHeight*2), 100 + boxHeight*4, boxHeight*4, boxHeight*8);
            
            // "LEGEND"
            fill(150);
            textFont("Geneva");
            textAlign(LEFT);
            textSize(16);
            text("Legend:", (boxHeight*12 + 16 + 10), (100 + 25));
            
            
            textAlign(CENTER);
            textSize(12);
            fill(200, 230, 0, 30);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4), (125 + 50), boxHeight/2, boxHeight/2 );
            fill(150);
            text("Primary Enrollment Rate", (boxHeight*12 + 16 + 10 + boxHeight/4 + 100), (125 + 50))
            
            
            fill(200, 230, 0, 70);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4), (125 + 50 + boxHeight/2 + 10), boxHeight/2, boxHeight/2 );
            fill(150);
            text("Secondary Enrollment Rate", (boxHeight*12 + 16 + 10 + boxHeight/4 + 100 + 8), (125 + 100));
    
            
            fill(200, 230, 0, 120);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4), (125 + 50 + boxHeight/2*2 + 20), boxHeight/2, boxHeight/2 );
            fill(150);
            text("Tertiary Enrollment Rate", (boxHeight*12 + 16 + 10 + boxHeight/4 + 100), (125 + 150));
            
            
            // "COLORS:"
            fill(150);
            textFont("Geneva");
            textAlign(LEFT);
            textSize(14);
            text("Colors:", (boxHeight*12 + 16 + 10), (125 + 225)); //225
            
            fill(0, 230, 200, 30);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4), (125 + 275), boxHeight/2, boxHeight/2 );
            fill(0, 230, 200, 70);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4 + boxHeight/4), (125 + 275), boxHeight/2, boxHeight/2 );
            fill(0, 230, 200, 120);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4 + boxHeight/2), (125 + 275), boxHeight/2, boxHeight/2 );

            
            fill(200, 230, 0, 30);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4), (125 + 325), boxHeight/2, boxHeight/2 );
            fill(200, 230, 0, 70);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4 + boxHeight/4), (125 + 325), boxHeight/2, boxHeight/2 );
            fill(200, 230, 0, 120);
            ellipse((boxHeight*12 + 16 + 10 + boxHeight/4 + boxHeight/2), (125 + 325), boxHeight/2, boxHeight/2 );


            textSize(14);
            fill(150);
            text("African Nations", (boxHeight*12 + 16 + 10 + boxHeight/4 + 100), (125 + 275));
            
            fill(150);
            text("Rest of the World", (boxHeight*12 + 16 + 10 + boxHeight/4 + 100), (125 + 325));
            
            
            // "Data Sources:"
            fill(150);
            textFont("Geneva");
            textAlign(LEFT);
            textSize(14);
            text("Data Sources:", (boxHeight*12 + 16 + 10), (125 + 400));
            textSize(10);
            text("Net Enrollment Ratio By Level of Education:", (boxHeight*12 + 16 + 10), (125 + 425));
            text("UNESCO Institute of Statistics (2004-2014)", (boxHeight*12 + 16 + 10), (125 + 435));
            
            text("World Development Indicators (2014): ", (boxHeight*12 + 16 + 10), (125 + 460));
            text("Contribution of natural resources to GDP", (boxHeight*12 + 16 + 10), (125 + 470));
            
            // Add the title 
            fill(200);
            textAlign(LEFT);
            textSize(33);
            text("Education Enrollment & Resource Dependence", boxHeight, 50);
            
            fill(150);
            textSize(11);
            text("Education Enrollment Rates:  Primary  ->  Secondary  ->  Tertiary", boxHeight*4, 90);
            
            textAlign(CENTER);
            textSize(10);
            text("40 most resource dependent countries", boxHeight*3.5, (100 + boxHeight*8 + 25));
            
            textAlign(CENTER);
            textSize(10);
            text("40 least resource dependent countries", boxHeight*8.5 + 16, (100 + boxHeight*8 + 25));
            
            
        
    }
    
    