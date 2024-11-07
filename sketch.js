let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r= 15   //增加上下幅度
let angle=0  //角度
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的NotoSansTC-Medium.ttf字型
    font = loadFont("fonts/ChocolateClassicalSans-Regular.ttf") 
}
//===================================================


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fefae0")
  points = font.textToPoints("Gino", -300, 80  , 200, {
    sampleFactor:0.06
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小(點數密度，數字越小點數越少)
  angleMode(DEGREES)
  
}


function draw() {
  translate(mouseX,mouseY)
  rotate(angle/2)
  strokeWeight(3)
  stroke("#c1121f")
  fill("#a2d2ff")
  background("#fefae0");
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y)
    
    ellipse(points[i].x+r*sin(angle+i*10),points[i].y,30)
    //rect(points[i].x,points[i].y,10)
   line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
 } 
 angle=angle+10 //每畫圖一次就要調整角度+
}
