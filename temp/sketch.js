const s = p => {
  var x = 100;
  var y = 100;

  p.setup = function() {
    console.log("setup start");
    var canvas = p.createCanvas(700, 410);
    canvas.parent('sketchHolder');
    console.log("setup done");
    };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

new p5(s); // invoke p5
console.log("sketch is running?");