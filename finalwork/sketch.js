// 最終課題を制作しよう

let x,y;


function setup(){

  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    //let theta = TWO_PI * i * 1 / 5
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    noStroke();
    fill (255,242,56);
    vertex(x,y);
  }
  endShape(CLOSE);
}

function draw(){
  background(160, 192, 255);
  star(x, y, 50);
  y += 8;
  // ここから下が画面外に行ったら反対側から出てくるようにする処理
  if(y > height){ y = 0; }
  if(y < 0){ y = height;}
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
}
