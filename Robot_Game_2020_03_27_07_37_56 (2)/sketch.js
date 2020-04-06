var body, head, handOne, handTwo, handThree, handFour;
var number;
function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  
  background(220);
  body = rect(mouseX, 120, 70, 150);
  head= ellipse(mouseX,100,80,80);
  handOne = rect(mouseX,130, 70, 20);
  handTwo = rect(mouseX, 130, 70, 20);
  handThree = rect(mouseX,200, 50, 10);
  handFour = rect(mouseX, 200, 50, 10);
  fill("pink");
  stroke("black");
  

}