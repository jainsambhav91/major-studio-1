// ==============================================
// Qualitative Data Assignment - World Cloud
// ==============================================

// WORD CLOUD
// article link: https://www.brookings.edu/opinions/too-little-access-not-enough-learning-africas-twin-deficit-in-education/

var words = []; // array of objects of the class - WordClass (the class contains details about all the words and the functions performed on the words)
var cleanArticle = []; 
var stopWords; // array of words that need to be removed from the article as they are irrelevant. ex - from, to, if, the
var hash = []; // words with sum of counts. Format: hash[education] = 3
var hashOpen = []; // words with sum of counts. Format: hash[1] = [education, 3]
var sorted = [];

var keyWord = "";
var main = true;

var succeeding = []; // array of words succeeding the key word
var preceeding = []; // array of words preceeding the key word

var hashS = []; // succeeding words with sum of counts. Format: hashS[education] = 3
var hashOpenS = []; // succeedding words with sum of counts. Format: hashS[1] = [education, 3] 

var hashP = []; // preceeding words with sum of counts. Format: hashP[education] = 3
var hashOpenP = []; // preceeding words with sum of counts. Format: hashP[1] = [education, 3] 


// load the file containing stop words into a variable.
function preload(){
    stopWords = loadStrings('stopwords.txt');
}


function setup() {
    
    textFont("Lato");
    fill(10, 10, 10);
    createCanvas(windowWidth, windowHeight);
    textLeading(18);
    loadStrings('article.txt', callback); // load the UNDP article on Africa's education condition
}

function callback(article){
    background(10, 10, 10);
    // textFont("Lato");
    // textSize(35/(windowHeight/900));
    // text("Word Cloud + Word Tree", windowWidth/14, windowHeight/10);
    console.log(article); // check if the article has been loaded properly
    for(var i in article){
        console.log(i + " : " + article[i]); // check the array structure of the article
    }
    
    
    // loop through the article words and remove all the stopwords; store the remaining words in the array - cleanArticle[]
    for (i in article) {
         var li = article[i].split(' ');
         for(var k in li){
             var clean = li[k].replace(/[.,'-?~!@#$%^&*()_{}]/g, '').toLowerCase();
             for(var j in stopWords){
                 if(clean === stopWords[j] || clean === '' || clean === '--'){
                     clean = " ";
                     break;
                 }
             }
            if(clean !== " "){
                cleanArticle.push(clean);
            }
        }
    }
    
    for(var n in cleanArticle){
        if(hash[cleanArticle[n]] >= 1)
        hash[cleanArticle[n]] += 1;
        else
        hash[cleanArticle[n]] = 1;
    }
    
   
    // for (var m in hash){
    //     hashOpen.push([m, hash[m]]); 
    //     console.log(m + " : " + hash[m]);
    // } 

    for (var key in hash) {
        sorted.push([key, hash[key]]);
        sorted.sort(function(a, b) {
            a = a[1];
            b = b[1];
            
            return a < b ? 1 : (a > b ? -1 : 0);
            });
    }

    for(var i=0; i<28; i++){
        
        if(i<4)
        var x = windowWidth/14 + i*(windowWidth/4);
        else if(i<8)
        x = windowWidth/14 + (i-4)*(windowWidth/4);
        else if(i<12)
        x = windowWidth/14 + (i-8)*(windowWidth/4);
        else if(i<16)
        x = windowWidth/14 + (i-12)*(windowWidth/4);
        else if(i<20)
        x = windowWidth/14 + (i-16)*(windowWidth/4);
        else if(i<24)
        x = windowWidth/14 + (i-20)*(windowWidth/4);
        else if(i<28)
        x = windowWidth/14 + (i-24)*(windowWidth/4);
        
        

        if(i/4 < 1){
            var y = windowHeight/3; 
        }else if(i/4 < 2){
            y = windowHeight/3 + windowHeight/10;
        }else if(i/4 < 3){
            y = windowHeight/3 + 2*windowHeight/10;
        }else if(i/4 < 4){
            y = windowHeight/3 + 3*windowHeight/10;
        }else if(i/4 < 5){
            y = windowHeight/3 + 4*windowHeight/10;
        }else if(i/4 < 6){
            y = windowHeight/3 + 5*windowHeight/10;
        }else{
            y = windowHeight/3 + 6*windowHeight/10;
        }   
            
        words.push(new WordClass(sorted[i][0], sorted[i][1], x, y));
    }
    
} // callback function ends.
    

function WordClass(txt, freq, xpos, ypos){
      this.x = xpos;
      this.y = ypos;
      this.size = freq;
      this.value = txt;
      this.width = textWidth(text(this.value));
        
      this.display = function() {
        noStroke();
        
        //fill(128 + sin(frameCount*0.1) * 128);
        if(dist(windowWidth/2, windowHeight/2 + windowHeight/4, mouseX, mouseY) < 40){
            if(mouseIsPressed){
                main = true;
                clear();
            }
        }  
        
        
        if(dist(this.x + this.width/2, this.y, mouseX, mouseY) < 40){
        fill(255, 34, 97);
        }
        
        
        if(main){
        textAlign(LEFT, CENTER);    
        textFont("Lato");
        
        push();
        fill(250);
        textSize(26);
        text("Word Cloud + Word Tree", windowWidth/14, windowHeight/14);
        fill(100)
        textSize(20);
        text("Article: Too Little Access, Not Enough Learning: Africa’s Twin Deficit in Education", windowWidth/14 , windowHeight/14 + 30);
        
        textSize(18);
        text("This visual provides a look into the most frequently used words in the Brookings article. Click on the individual words to understand the context behind their usage.", windowWidth/14 , windowHeight/3 - 100);
        
        stroke(126);
        line(0, windowHeight/3 - 80, windowWidth, windowHeight/3 - 80)
        pop();
        
        
        textSize(this.size/(windowHeight/900));
        text(this.value, this.x, this.y);
        
        fill(120);
        if(dist(this.x + this.width/2, this.y, mouseX, mouseY) < 40){
            if(mouseIsPressed){
                keyWord = this.value;
                // fill(80);
                clear();
                textSize(20);
                displayWordTree(keyWord);
                fill(120);
                push();
                noFill();
                stroke(150);
                rectMode(CENTER);
                rect(windowWidth/2, windowHeight/2 + windowHeight/4, 70, 20, 20);
                
                fill(180);
                textAlign(CENTER, CENTER);
                textSize(12);
                text("Go Back", windowWidth/2, windowHeight/2 + windowHeight/4);
                
                textAlign(CENTER, CENTER);
                text("Preceding Words >>", windowWidth/12, windowHeight/2);
                
                text("<< Succeeding Words", windowWidth - windowWidth/12, windowHeight/2);
                pop();
                
                line(windowWidth/6 - 10, 0, windowWidth/6 - 10, windowHeight);
                line(windowWidth - windowWidth/6 + 10, 0, windowWidth - windowWidth/6 + 10, windowHeight);
                // fill(255);
                main = false;
                }
            }  
        }
    };
} // class definition ends.


function displayWordTree(kw){
    
    for(var n = 0; n < cleanArticle.length; n++){
        //console.log(cleanArticle[n]);
        if(cleanArticle[n] == kw){
        //console.log(cleanArticle[n+1]);
        succeeding.push(cleanArticle[n+1]);
        preceeding.push(cleanArticle[n-1]);    
        }
    }
    
   
         
   
    // ----------- Display succeeding words ------------------
    
    for(var n in succeeding){
            if(hashS[succeeding[n]] >= 1)
            hashS[succeeding[n]] += 1;
            else
            hashS[succeeding[n]] = 1;
    }
        
       
    for (var m in hashS){
        hashOpenS.push([m, hashS[m]]); 
        //console.log(m + " : " + hashS[m]);
    } 
    
    
    textAlign(RIGHT);
    for(var i = 0; i< hashOpenS.length; i++){
        // var m1 = random((windowWidth/3)*2, windowWidth - 50);
        var m1 = windowWidth - windowWidth/6;
        var n1 = windowHeight/20 + ((18*windowHeight/20)/hashOpenS.length)*(i+1);
        // var n1 = windowHeight/20 + 20*(i+1);
        // n1 = windowHeight/20 + 20*(i+1) //+ hashOpenS[i][1]*12;
        //+ (hashOpenS[i][1]*12;
        var m2 = windowWidth/2;
        var n2 = windowHeight/2;
        
        noStroke();
        textFont("Helvetica");
        fill(200 - 100/hashOpenS[i][1]);
        textSize(hashOpenS[i][1]*12);
        text(hashOpenS[i][0], m1, n1);
        var txt = hashOpenS[i][0];
        
        stroke(80);
        strokeWeight(0.50);
        line(m1 - textWidth(txt), n1, m2, n2);
    }
    
    
    
    
    // -------- Display preceding words -----------------------------
    
    for(var n in preceeding){
            if(hashP[preceeding[n]] >= 1)
            hashP[preceeding[n]] += 1;
            else
            hashP[preceeding[n]] = 1;
    }
        
       
      for (var m in hashP){
        hashOpenP.push([m, hashP[m]]);        
        } 
    
    textAlign(LEFT);
    for(var i = 0; i< hashOpenP.length; i++){
        
        
        var x1 = windowWidth/6;
        var y1 = windowHeight/20 + ((18*windowHeight/20)/hashOpenP.length)*(i+1);
        var x2 = windowWidth/2;
        var y2 = windowHeight/2;
        
        textSize(hashOpenP[i][1]*12);
        noStroke();
        textFont("Helvetica");
        fill(200 - 100/hashOpenP[i][1]);
        text(hashOpenP[i][0], x1, y1);
        var txt = hashOpenP[i][0];

        stroke(80);
        strokeWeight(0.50);
        line(x1 + textWidth(txt), y1, x2, y2);
    }
    
    
    
    // ---------- Display key word ----------------------------------
    textFont("Helvetica");
    fill(200);
    textSize(30);
    textAlign(CENTER);
    text(kw, windowWidth/2, windowHeight/2);
    
    
    // empty all arrays
    succeeding = []; 
    preceeding = []; 
    
    hashS = []; 
    hashOpenS = []; 
    
    hashP = []; 
    hashOpenP = []; 

} // displayWordTree function ends.


fill(128);

function draw() {
    noStroke();
    
    for (var i=0; i<words.length; i++) {
    words[i].display();
    //translate(random(-1,1), random(-1,1));
    }
} // draw function ends.