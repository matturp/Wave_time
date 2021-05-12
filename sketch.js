var xoff = 0;
var start = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0);
}

function draw() {
  background(0,10);
  stroke(255);
  noFill();

  var timeS = map(second(),0,59,0,0.01);
  var timeM = map(minute(),0,59,0,0.01);
  var timeH = map(hour(),0,24,0,0.01);

  var amountx = map(mouseX,0,width,0,0.1);
  var amounty = map(mouseY,0,height,0,0.01);
  var inc = amountx;
  start += inc;

  // SECONDS

  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(255,0,0);
    var y = noise(xoff)*height;
   vertex(x,y); 
   xoff += timeS ;
  }
  endShape();

    // MINUTES

    beginShape();
    var xoff = start;
    for (var x = 0; x < width; x++) {
      stroke(0,255,0);
      var y = noise(xoff)*height;
     vertex(x,y); 
     xoff += timeM ;
    }
    endShape();

        // HOURS

        beginShape();
        var xoff = start;
        for (var x = 0; x < width; x++) {
          stroke(0,0,255);
          var y = noise(xoff)*height;
         vertex(x,y); 
         xoff += timeH ;
        }
        endShape();

  }


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
