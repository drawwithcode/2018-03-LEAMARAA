function preload(){

}

var x = 0, y = 0, z=0, c=0, v=0, b=0;
function setup() {
  // put setup code here
  createCanvas  (500,500);
  background('#12131B');
}

function draw() {


//diamo un colore alla cosa
  strokeWeight(random(3,7));
  noFill();
  z= '#BFA1CC';
  c= '#3C64AD';
  b++;
  v=(lerpColor(color(z), color(c), b/100));
  stroke(v);
  if(b>100){
b=0;
}

//disegno della curva
  var sen = map(sin(x), -1, 1, height, 0);
  point(y, sen);
  x += 0.07;
  y += 5;



  //qua si fanno i punti
  if (y > width) {
    y = 0;
  }
  //si ferma la texture
  if (frameCount>808){
  noLoop();
}



}
