// =============================================
// UNDP - Qualitative Data Assignment
// =============================================

// WORD TREE
// article link: https://www.brookings.edu/opinions/too-little-access-not-enough-learning-africas-twin-deficit-in-education/

var stopWords; // array of words that need to be removed from the article as they are irrelevant. ex - from, to, if, the
var cleanArticle = []; 
var keyWord = "education"; // key word based on which the tree cloud is generated
var succeeding = []; // array of words succeeding the key word
var preceeding = []; // array of words preceeding the key word
var hash = [];

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

    for(var n = 0; n < cleanArticle.length; n++){
        //console.log(cleanArticle[n]);
        if(cleanArticle[n] == keyWord){
            //console.log(cleanArticle[n+1]);
        succeeding.push(cleanArticle[n+1]);
        preceeding.push(cleanArticle[n-1]);    
        }
    }
    
    
    console.log("SUCCEEDING WORDS ---------------------------------")
    for (var m in succeeding){
        console.log(succeeding[m]);
    }
    
    
    console.log("PRECEEDING WORDS ---------------------------------")
    for (var m in preceeding){
        console.log(preceeding[m]);
    }

} // callback



function draw() {
    text("education", windowWidth/2, windowHeight/2);
    for(var i = 1; i <= preceeding.length; i++){
        var x1 = 50;
        var y1 = (windowHeight/preceeding.length)*(i);
        var x2 = windowWidth/2;
        var y2 = windowHeight/2;
        text(preceeding[i], x1, y1);
        stroke(200, 200, 200);
        strokeWeight(0.25);
        curve(0.5*x1, y2, x1, y1, x2, y2, x2*1.50, y1);
    }
    // var x1 = 50;
    // var y1 = 20;
    // var x2 = 400;
    // var y2 = 60;
    // curve(0.5*x1, y2, x1, y1, x2, y2, x2*1.50, y1);
}