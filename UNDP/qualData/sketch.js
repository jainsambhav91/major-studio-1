// =============================================
// UNDP - Qualitative Data Assignment
// =============================================

// WORD TREE
// article link: https://www.brookings.edu/opinions/too-little-access-not-enough-learning-africas-twin-deficit-in-education/

var keyWord = "education"; // key word based on which the tree cloud is generated

var stopWords; // array of words that need to be removed from the article as they are irrelevant. ex - from, to, if, the
var cleanArticle = []; 
var succeeding = []; // array of words succeeding the key word
var preceeding = []; // array of words preceeding the key word

var hashS = []; // succeeding words with sum of counts. Format: hashS[education] = 3
var hashOpenS = []; // succeedding words with sum of counts. Format: hashS[1] = [education, 3] 

var hashP = []; // preceeding words with sum of counts. Format: hashS[education] = 3
var hashOpenP = []; // preceeding words with sum of counts. Format: hashS[education] = 3


function preload(){
    stopWords = loadStrings('stopwords.txt');
}


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  loadStrings('article.txt', callback); // load the UNDP article on Africa's education condition
}


function callback(article){
    
    console.log(article); // check if the article has been loaded properly
    
    for(var i in article){
        console.log(i + " : " + article[i]); // check the array structure of the article
    }
    
    
    // loop through the article words and remove all the stopwords; store the remaining words in the array - cleanArticle[]
    for (i in article) {
         var li = article[i].split(' ');
         for(var k in li){
             var clean = li[k].replace(/[.,-?~!@#$%^&*()_{}]/g, '').toLowerCase();
             for(var j in stopWords){
                 if(clean === stopWords[j]){
                     clean = " ";
                     break;
                 }
             }
            if(clean !== " "){
                cleanArticle.push(clean);
            }
        }
    }


    // loop through the clean article and push preceding and succeeding words in separate arrays
    for(var n = 0; n < cleanArticle.length; n++){
        //console.log(cleanArticle[n]);
        if(cleanArticle[n] == keyWord){
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
        var m1 = random((windowWidth/3)*2, windowWidth - 50);
        var n1 = windowHeight/20 + ((18*windowHeight/20)/hashOpenS.length)*(i+1);
        var m2 = windowWidth/2;
        var n2 = windowHeight/2;
        
        fill(200/hashOpenS[i][1]);
        textSize(hashOpenS[i][1]*12);
        text(hashOpenS[i][0], m1, n1);
        var txt = hashOpenS[i][0];
        
        stroke(220);
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
        
        
        var x1 = random(50, windowWidth/3);
        var y1 = windowHeight/20 + ((18*windowHeight/20)/hashOpenP.length)*(i+1);
        var x2 = windowWidth/2;
        var y2 = windowHeight/2;
        
        textSize(hashOpenP[i][1]*12);
        // noStroke();
        fill(200/hashOpenP[i][1]);
        text(hashOpenP[i][0], x1, y1);
        var txt = hashOpenP[i][0];

        stroke(220);
        strokeWeight(0.50);
        line(x1 + textWidth(txt), y1, x2, y2);
    }
    
    
    // ---------- Display key word ----------------------------------
    fill(20);
    textSize(30);
    textAlign(CENTER);
    text(keyWord, windowWidth/2, windowHeight/2);
    
    
} // callback




    
    // for (var m in hash){
    //     textSize(hash[m]*1.5);
    //     text(m, random(0, windowWidth), random(0, windowHeight));
    //     var p = createP(m);
    //     p.id(m);
    // }
    
    
    // id.select(education);
    // id.mouseReleased(release);
    
    // function release(){
    // id.style('color', 'blue');
// }
    
    
    // console.log("SUCCEEDING WORDS ---------------------------------");
    // for (var m = 0; m < succeeding.length; m++){
    //     console.log(succeeding[m]);
    //     var m1 = random((windowWidth/3)*2, windowWidth - textWidth(succeeding[n]));
    //     var n1 = (windowHeight/succeeding.length)*(m+1);
    //     var m2 = windowWidth/2;
    //     var n2 = windowHeight/2;
    //     textSize(succeedingSize(succeeding[m]));
    //     text(succeeding[m], m1, n1);
    //     stroke(200, 200, 200);
    //     strokeWeight(0.50);
    //     line(m1, n1, m2, n2);
    //     // curve(1.5*m1, n2, m1, n1, m2, n2, m2*0.5, n1);
    // }
    
    
    // console.log("PRECEEDING WORDS ---------------------------------");
    // for (var n = 0; n < preceeding.length; n++){
    //     textAlign(RIGHT);
    //     console.log(preceeding[n]);
    //     var x1 = random(textWidth(preceeding[n]), windowWidth/3);
    //     var y1 = (windowHeight/preceeding.length)*(n+1);
    //     var x2 = windowWidth/2;
    //     var y2 = windowHeight/2;
    //     stroke(200, 200, 200);
    //     strokeWeight(0.50);
    //     line(x1, y1, x2, y2);
    //     // curve(0.5*x1, y2, x1, y1, x2, y2, x2*1.50, y1);
    //     text(preceeding[n], x1 , y1);
    // }
    