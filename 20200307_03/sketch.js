let x=0;
let movePerFrame=10;
let direction = 1;
function setup() {
//  line(15,25,70,90);
  createCanvas(400,400);
//  background(100);
//createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(100);
  ellipse(x, x, 20,20);
  ellipse(x, width-x, 20,20);
  x = x + movePerFrame*direction;
  if(x==width){
    direction = -1;
  }else if(x==0){
    direction = 1;
  }
}
 