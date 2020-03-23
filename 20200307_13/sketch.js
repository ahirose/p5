//https://www.youtube.com/watch?v=m1G6WBvrOBE

var capture;
var vScale = 16;
var slider;

var cols =40;
var rows =30;

var boxes = [];

function setup(){
	 createCanvas(640,480);
	 pixelDensity(1);
	 capture = createCapture(VIDEO);
	 capture.size(cols,rows);
	 slider = createSlider(0,255,77);

	//put chechboxes to use as the screen pixels
	for(var y=0;y<rows; y++){
		for (var x=0; x<cols; x++){
			var box = createCheckbox();
			box.style('display','inline'); // to remove div on each check box
			box.parent('mirror'); //mirror container is on html
			boxes.push(box);
		}
	  var linebreak = createSpan('<br/>'); 
	  linebreak.parent('mirror');
	}
}

function draw(){
  background(51);
  capture.loadPixels();
//  loadPixels();

  for(var y = 0; y<capture.height; y++){
    for(var x=0; x<capture.width; x++){
      //each one pixel has 4 elements.
      //var index=(x+y*capture.width)*4;
      var index=(capture.width - x + 1 + (y*capture.width))*4;

      var r = capture.pixels[index+0];
      var g = capture.pixels[index+1];
      var b = capture.pixels[index+2];
      var bright =  (r+g+b)/3;

      var threshold = slider.value();
	  var checkIndex = x + y * cols;

      if(bright>threshold){
        fill(255);
		boxes[checkIndex].checked(false);
      }else{
        fill(0);
		boxes[checkIndex].checked(true);
      }

      var w = map(bright,0,255,0,vScale);
      noStroke();
      rectMode(CENTER);
//      fill(bright);
      rect(x*vScale, y*vScale,vScale,vScale);
    }
  }  
}