var video;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(160,120);
  video.hide();
}

function draw() {
  tint(mouseX,mouseY,mouseX+mouseY);
  image(video,0,0,mouseX,mouseY);
  image(video,160,0,mouseX,mouseY);
  image(video,0,120,mouseX,mouseY);
  image(video,160,120,mouseX,mouseY);
}
