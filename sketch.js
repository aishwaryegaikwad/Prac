 var n=1;
 var c=6;

function setup() {
  createCanvas(1200,1200);
  angleMode(DEGREES);
  colorMode(RGB);
  background(0);
}

function draw() {
  
  // for(var n=0; n<windowWidth*3.326; n++) {
  let a = n * 137.5;
  let r = c * sqrt(n);
  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;
  fill(255);
  noStroke();
  
  ellipse(x,y,9.708,9.708);
  
 n++;
 //   if(r>=width/3) {
 //     noLoop();
 //     // save("Phyllotaxis.jpg");
 // }
 
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
