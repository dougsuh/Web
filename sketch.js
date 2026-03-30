let x = 100, y = 200;
let inp;
let typedText = "";

function setup() {
  createCanvas(400, 300);

  inp = createInput('');
  inp.position(10, 320);
  inp.attribute('placeholder', '문자를 입력하세요');
  inp.input(() => {
    typedText = inp.value();
  });
}
function draw() {
  background(240);
  textSize(24);
  text("입력값: " + typedText, 20, 50);
  ellipse(x, y, 20, 20);
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
