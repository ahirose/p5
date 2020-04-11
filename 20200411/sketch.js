const s = (sketch) => {
  
	let mic, fft;

	sketch.setup=()=> {
	  sketch.createCanvas(710, 400);
	  sketch.noFill();
	
	tteesstt = new p5();

	  mic = new p5.AudioIn();
	  mic.start();
	  fft = new p5.FFT();
	  fft.setInput(mic);
	}

	sketch.draw=()=> {
	  sketch.background(200);

	  let spectrum = fft.analyze();

	  sketch.beginShape();
	  for (i = 0; i < spectrum.length; i++) {
		sketch.vertex(i, sketch.map(spectrum[i], 0, 255, sketch.height, 0));
	  }
	  sketch.endShape();
	}
};

let myp5 = new p5(s);

