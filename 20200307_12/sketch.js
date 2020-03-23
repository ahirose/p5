var capture;

var vScale = 4;

function setup(){
 createCanvas(320,240);
 pixelDensity(1);
 capture = createCapture(VIDEO);
 capture.size(width/vScale,height/vScale);
}


function draw(){
  background(51);
  capture.loadPixels();
  loadPixels();

  for(var y = 0; y<capture.height; y++){
    for(var x=0; x<capture.width; x++){
      //each one pixel has 4 elements.
      //var index=(x+y*capture.width)*4;
      var index=(capture.width - x + 1 + (y*capture.width))*4;

      var r = capture.pixels[index+0];
      var g = capture.pixels[index+1];
      var b = capture.pixels[index+2];
      var bright = 255 - (r+g+b)/3;

      var w = map(bright,0,255,0,vScale);
      noStroke();
//      rectMode(CENTER);
      fill(bright);
      ellipse(x*vScale, y*vScale,w,w);
    }
  }  
}