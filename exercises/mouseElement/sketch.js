var id;
var slider;
var sq;

function setup() {
  id = select('#kafka');
  id.mousePressed(click);
  id.mouseReleased(release);
  rect(30, 20, 55, 55);
  slider = createSlider(0, windowWidth, 0);
  slider.position(windowWidth/2, windowHeight/2);
  slider.changed(change);
  //noCanvas();
}

function click(){
    console.log('click');
    id.style('color', 'orange');
}

function release(){
    id.style('color', 'blue');
    id.style('font-size', '90pt');
}

function change(){
    id.position(  slider.value(), windowHeight/2 );
}