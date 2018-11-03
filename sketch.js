var myFont;
var fontTwo;
var n=0;
function preload() {
  myFont = loadFont('assets/SharpSansNo1-BoldItalic.otf');
  fontTwo = loadFont('assets/agipo_bold.otf');
}

function setup() {
 createCanvas(1200,600);
}

function draw() {
  n++;
  if (n> 125) {
    n=0;
  }
  fill('#ED225D');
  textFont(myFont);
  textSize(36);

    //tree
  fill(0);
  var sentence = "Two roads diverged in a yellow wood";
  var yellow = "yellow";
  var sorry = "sorry";
  var both = "both";

  if(mouseX > width/4){
    fill(255);
    sentence = "And sorry I couldn't travel both";
    fill(21,9,124);
    rect(mouseX-50, mouseY-50, 600, 50);
    yellow ="";
      fill(255, 255, 0, 255-n*2);
      text(both, mouseX  + 415 , mouseY+n);
      text(both, mouseX  + 75 , mouseY+n);
      text(both, mouseX  + 200 , mouseY+n);
      text(both, mouseX  + 300 , mouseY+n);
      text(both, mouseX  + 75 , mouseY-100+n);
      text(both, mouseX  + 200 , mouseY-100+n);
      text(both, mouseX  + 300 , mouseY-100+n);
      text(both, mouseX  + 400 , mouseY-100+n);
      text(both, mouseX  -15 , mouseY-100+n);

  } else if(mouseY > height/2) {
    background(255);
    fill(21,9,124);
    textFont(fontTwo);
    text("And be one traveler, LONG I STOOD", 500,300);
    stroke(21,9,124);
    line(500, 310, 700+n*4, 310);
    yellow ="";
    sentence="";
  }
   else {
    //road
  background(21,9,124);
  fill(255);
  noStroke();
  quad(mouseX + 90, mouseY+20, mouseX+130, mouseY+20, 300, 600, 150, 600);
  quad(mouseX + 128, mouseY+20, mouseX+170, mouseY+20, 500, 600, 350, 600);

  }
  fill(255);
  text(sentence, mouseX, mouseY);
  fill(255, 255, 0);
  text(yellow, mouseX+401, mouseY);
   quad(289, 260, 416, 200, 416, 810, 544, 980);
  quad(189, 60, 216, 100, 216, 410, 144, 480);
  quad(100, 160, 116, 180, 216, 410, 144, 480);
  quad(0, 90, 0, 590, 0, 600, 100, 500);
}

