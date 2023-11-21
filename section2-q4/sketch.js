// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
  
   fill(255);  
   rect(0,i*d,width,(i+1)*d); 
   fill(blue);
   rect(d*5,0, d*9,d);
   rect(d*5,d*2,d*9,d);
   rect(d*5, d*4,d*9,d);
   rect(0, d*6, d*14,d);
   rect(0, d*8, d*14,d);
   }  // Brect(0, i * d, width, (i + 1) * d);
   
  
  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(d*1.65,0,d*1.75,d*5);
  rect(0,d*1.65,d*5,d*1.75);

  
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}

