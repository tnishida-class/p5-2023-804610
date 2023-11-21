// テキスト「リサイズするプログラムを作る」
let x, y;
function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width/2;
  y=height/2;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  ellipse(x,y,30);
  x +=2;
  y -=2;
  for(let i = 0; i < 10; i++){
    ellipse(width * i / 10, height * (10 - i) / 10, 20);
  }
  text("center!", width * 0.5, height * 0.5);
}
