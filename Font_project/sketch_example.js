var myFont;
function preload() {
  myFont = loadFont('assets/SharpSansNo1-Bold.otf');
}

function setup() {
 createCanvas(900, 900);
}

function draw() {
  background(255);
  fill('#ED225D');
  textFont(myFont);
  textSize(36);

  var greetings = "hello";

  if(mouseX > width/2){
    greetings = "stranger";
  }

  text(greetings, 10, 50);
}
