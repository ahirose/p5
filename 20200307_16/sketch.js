var video;

var y = 1;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(51);
}

function draw() {
  video.loadPixels();
  //image(video, 10, 100);

  var w = video.width;
  var h = video.height;

copy(video, 
         0, y, w, 1, 
         0, y, width, height);

  y = y + 1;
  if (y > height) {
    y = 0;
  }
}