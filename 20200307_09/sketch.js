var capture;
var go = false;

function setup(){
 createCanvas(320,240);
 capture = createCapture(VIDEO,ready);
 capture.size(80,240);
 //pixelDensity(1);
}

function ready(){
  go = true;
}

function draw(){
  background(51);
  loadPixels();
  if(go){
    capture.loadPixels();
  }
 
  for(var y = 0; y<height; y++){
    for(var x=0; x<width; x++){
      var index=(x+y*width)*4;
      pixels[index+0]=capture.pixels[index+0];
      pixels[index+1]=capture.pixels[index+1];
      pixels[index+2]=capture.pixels[index+2];
      pixels[index+3]=255;
    }
  }  
  updatePixels();
}