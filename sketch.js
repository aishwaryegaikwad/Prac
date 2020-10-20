 var n=1;
 var c=6;

function setup() {
  var canvasDiv = document.getElementById("myCanvas");
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(width, height);
  console.log(sketchCanvas);
  sketchCanvas.parent("myCanvas");
 
  angleMode(DEGREES);
  colorMode(RGB);
  background(0);
}

function draw() {
 
  var canvasDiv = document.getElementById("myCanvas");
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(width, height);
  sketchCanvas.parent("myCanvas");
  resizeCanvas(width, height);
  
  // for(var n=0; n<windowWidth*3.326; n++) {
  let a = n * 137.5;
  let r = c * sqrt(n);
  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;
  fill(255);
  noStroke();
  
  ellipse(x,y,9.708,9.708);
  
 n++;
   if(r>=width/3) {
     noLoop();
     // save("Phyllotaxis.jpg");
 }
 
  
}

function windowResized() {
  var canvasDiv = document.getElementById("myCanvas");
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(width, height);
  sketchCanvas.parent("myCanvas");
  resizeCanvas(width, height);
}
