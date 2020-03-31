const s = p => {
    var video;
    var y = 1;
    
    p.setup = function() {
        p.createCanvas(320, 240);
        p.pixelDensity(1);
        video=p.createCapture(VIDEO);
        video.size(320,240);
        video.hide();
        background(0);
    }

  p.draw = function() {
    w = video.width;
    h = video.height;

	p.copy(video, 
         0, y, w, 1, 
         0, y, width, height);

    y = y + 1;
    if (y > height) {
        y = 0;
    };
};