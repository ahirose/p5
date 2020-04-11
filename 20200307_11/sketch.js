var capture;

var vScale = 16;

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

  for(var y = 0; y<height; y++){
    for(var x=0; x<width; x++){
      var index=(x+y*width)*4;
      var r = capture.pixels[index+0];
      var g = capture.pixels[index+1];
      var b = capture.pixels[index+2];
      var bright = (r+g+b)/3;
      
      pixels[index+0]=bright;
      pixels[index+1]=bright;
      pixels[index+2]=bright;
      pixels[index+3]=255;
    }
  }  
  updatePixels();
}