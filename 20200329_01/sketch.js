s = function( sketch ) {
	var x = 100;
	var y = 100;

  sketch.setup = function(){
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
};

let myp5 = new p5(s);