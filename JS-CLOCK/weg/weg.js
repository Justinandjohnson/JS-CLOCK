
function setup () {
  createCanvas (600, 400);
  angleMode(DEGREES);
  
}

function draw() {
  if (frameCount < 60){
  capturer.capture(canvas);
}  
  else if (frameCount == 60) {
  capturer.save();
  capturer.stop();
}
  background(0);
  translate(200,200);
  rotate(-90);
  

let hr = hour();
let mn = minute();
let sc = second();


  
strokeWeight(8);
stroke (255, 100, 150);
noFill();
let end1 = map(sc, 0, 60, 0, 360);
arc(0, 0, 300, 300, 0, end1);  
  
stroke (150, 100, 255);
let end2 = map(mn, 0, 60, 0, 360);
arc(0, 0, 280, 280, 0, end2);

stroke (150, 255, 100);
let end3 = map(hr % 12, 0, 12, 90, 360);
arc(0, 0, 260, 260, 0, end3);

  
//seconds line 
push();
rotate(end1);
stroke (255, 100, 150);
line(0, 0, 100, 0);
pop();
 
//minutes line 
push();
rotate(end2);
stroke (150, 100, 255);
line (0, 0, 100, 0);
pop();
  
//hours line
push();
rotate(end3);
stroke (150, 255, 100);
line (0, 0, 50, 0);
pop();
//take out arc to get rid of circles. 
noLoop();
save("Clockword_Justin.png");



}
