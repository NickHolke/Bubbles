let bubbles = [], x, y, r;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
   bubbles[i].show();
   bubbles[i].move(); 
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
   }
}

function keyTyped() {
  if (key ===' ') {
    r = random(10, 60);
    x = random(0, width);
    y = random(0, height);
    bubbles.push(new Bubble(x, y, r))
  }
}

class Bubble {
 constructor(x, y, r) {
   this.x = x;
   this.y = y;
   this.r = r;
   this.display = true;
 }
  
 show() {
   if (this.display) {
    strokeWeight(2);
    stroke(255);
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d <= this.r) {
      fill(255, 255, 255, 220);
    } else {
     noFill();
    }
    
    ellipse(this.x, this.y, this.r, this.r);
   }
 }

 clicked() {
  let d = dist(mouseX, mouseY, this.x, this.y)
  if (d <= this.r) {
    this.display = false;
  }
 }

  
 move() {
   this.x = this.x + random(-1,1);
   this.y = this.y + random(-1,1);
 }
}