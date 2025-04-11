let input;
let button;
let MAX = 0;
let currentLevel = 1;

function setup() {
  createCanvas(500, 570);
  angleMode(DEGREES);
  noStroke();
  noLoop();

  input = createInput();
  input.position(10, height + 10);
  input.attribute('placeholder', 'Introdu nivelul');

  button = createButton('Generează');
  button.position(input.x + input.width + 10, height + 10);
  button.mousePressed(startGeneration);
}

function startGeneration() {
  let value = int(input.value());
  if (value > 0) {
    currentLevel = 1;
    MAX = value;
    generateImage();
  } else {
    alert('Te rog să introduci un număr mai mare decât 0.');
  }
}

function generateImage() {
  background(30);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Fulgul lui Koch", width/2,20);
  
  let r= map(currentLevel, 1, MAX, 255, 100);
  let g= map(currentLevel, 1, MAX, 180, 0);
  let b= map(currentLevel, 1, MAX, 0, 100);

  fill(r, g, b);
  triangle(250, 76.8, 50, 423.2, 450, 423.2);

  push();
  translate(150, 250);
  rotate(-60);
  paint(133.3, 1);
  pop();

  push();
  translate(250, 423.2);
  rotate(180);
  paint(133.3, 1);
  pop();

  push();
  translate(350, 250);
  rotate(60);
  paint(133.3, 1);
  pop();

  if (currentLevel === MAX) {
    saveCanvas('desen-max-' + MAX, 'png');
  } else {
    currentLevel++;
    setTimeout(generateImage, 500); 
  }
}

function paint(len, it) {
  if (it > currentLevel) return; 

  triangle(0, -0.86 * len, -len / 2, 0, len / 2, 0);


  push();
  translate(-len, 0);
  paint(len / 3, it + 1);
  pop();

  push();
  translate(-len / 4, -0.43 * len);
  rotate(-60);
  paint(len / 3, it + 1);
  pop();

  push();
  translate(len / 4, -0.43 * len);
  rotate(60);
  paint(len / 3, it + 1);
  pop();

  push();
  translate(len, 0);
  paint(len /3, it + 1);
  pop();
}