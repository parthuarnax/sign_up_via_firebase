let flag1, flag2;
let score = 0;

function setup() {
  flag1 = false;
  createCanvas(400, 400);
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(50);
  fill(255);
  text(score,width/2,height/2);

  console.log("flag1 : " + flag1);
  console.log("flag2 : " + flag2);

  noStroke();
  if(flag1 != flag2){
    background(255);
  }
  flag2 = flag1;
}

function mouseReleased(){
  score++;
  flag1 = !flag1;
}