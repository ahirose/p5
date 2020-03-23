function setup() {
  // put setup code here
  createCanvas(640,480);
}

function draw() {
  // put drawing code here
  //ellipse(50,50,80,80);
  if(mouseIsPressed){
    fill(0);
    ellipse(mouseX,mouseY,20,2);
  }else{
    fill(255);
  }
}