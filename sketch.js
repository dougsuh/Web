let x,y;
function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
}

function draw() {
  background(220);
  ellipse(x,y,150,100);
}
function keyPressed() {
  if (key === 'w') y -= 5;
  else if (key === 'a') x -= 5;
  else if (key === 's') y += 5;
  else x += 5;
}
function mousePressed(){
  x = mouseX;
  y = mouseY;
}
