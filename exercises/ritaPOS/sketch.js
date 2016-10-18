var rs, input;

function setup() {
    noCanvas();
    rs = RiString('Hi');
    input = createInput();
    input.changed(rita);
}

function rita() {
    //var for the data
      var str = input.value();
      //analyse the data
      rs = RiString(str);
      console.log(rs);
      //this considers the words
      var words = rs.words();
      //console.log(words);
      //this looks at the type
      var pos = rs.pos();
      //console.log(pos);
  
          for( var i = 0; i< words.length; i++){
          var span = createElement('span', words[i]);
          if (pos[i] === 'nn'){
          span.style('background', 'orange');
      }
      
  }


  
}