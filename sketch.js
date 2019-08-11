let bubbles = [];
function setup() {
  createCanvas(400, 400);
  /*for (let i = 0; i < 5; i++) {
    let x = 100 + i * 20
    let r = random(10, 60);
    bubbles.push(new Bubble(x, height/2 , r))
  }*/
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
   bubbles[i].show();
   bubbles[i].move(); 
  }
}

function mousePressed() {
  let r = random(10, 60);
  bubbles.push(new Bubble(mouseX, mouseY, r))
}

class Bubble {
 constructor(x, y, r) {
   this.x = x;
   this.y = y;
   this.r = r;
 }
  
 show() {
   strokeWeight(2);
   stroke(255);
   noFill();
   ellipse(this.x, this.y, this.r, this.r);
 }
  
 move() {
   this.x = this.x + random(-1,1);
   this.y = this.y + random(-1,1);
 }
}