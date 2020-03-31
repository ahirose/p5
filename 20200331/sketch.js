s = (sketch) => {
  
  let bug; // Declare object

  sketch.setup =()=>{
    sketch.createCanvas(710, 400);
    // Create object
    bug = new Jitter();
  }

  sketch.draw = () => {
    sketch.background(50, 89, 100);
    bug.move();
    bug.display();
  };


	class Jitter {
		constructor() {
		  this.x = sketch.random(sketch.width);
		  this.y = sketch.random(sketch.height);
		  this.diameter = sketch.random(10, 30);
		  this.speed = 1;
		}

		move() {
		  this.x += sketch.random(-this.speed, this.speed);
		  this.y += sketch.random(-this.speed, this.speed);
		}

		display() {
		  sketch.ellipse(this.x, this.y, this.diameter, this.diameter);
		}
	}

};
let myp5 = new p5(s);

