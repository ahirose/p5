var video;
var button;
var snapshots = [];
var counter=0;
var total=35;

function setup() {
  createCanvas(640, 240);
  background(51);
  video = createCapture(VIDEO, ready);
  video.size(320,240);
  //video.hide();
//  button=createButton('snap');
//  button.mousePressed(takesnap);
}

var go = false;

function ready(){
  go=true;
}

//function takesnap(){
//  snapshots.push(video.get());
//  //image(video,0,0);
//}

function draw() {
  if(go){
    snapshots[counter]=video.get();
    counter++;
    if(counter==total){
      counter=0;
    }
  }
  var w=80;
  var h=60;
  var x=0;
  var y=0;
  for (var i = 0; i<snapshots.length; i++){
    //tint(255,50);
    //image(snapshots[i],x,y,w,h);
    var index = (i+frameCount) % snapshots.length;
    image(snapshots[index],x,y,w,h);
    x = x + w;
    if(x>width){
      x=0;
      y=y+h;
    }
  }
}
