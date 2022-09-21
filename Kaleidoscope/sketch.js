//number of sections we want, preferably an even number for symmetry
let symmetry = [2,4,5,6,8,12,15,20,42,222]; 
let strokeW = [10,3,7,4,8,15,6,8,20,10]; 
let index = 0

let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  colorMode(HSB, 360, 150, 100, 1);
  angleMode(DEGREES);
}

function draw() {
  //if symmetry is 6, angle of each section is 60 degrees
  let angle = 360 / symmetry[index]; 
  //changing origin to 0.0
  translate(width / 2, height / 2);

  //PART 3: LOOPING THE LINES AROUND THE ORIGIN
  //"i" is the number of times the line will be drawn.
  for (let i = 0; i <= 360; i += angle) {
    rotate(angle);

    //getting mouse location to draw relative to the center of the canvas
    // let mx = mouseX - width / 2;
    // let my = mouseY - height / 2;
    // let pmx = pmouseX - width / 2;
    // let pmy = pmouseY - height / 2;
  mountainNoise();
  lochNoise();
//     //PART 1: DRAWING A LINE
//     strokeWeight(strokeW[index]);
//     stroke(mouseX, 100, mouseX * mouseY, 0.7);
//     line(mx, my, pmx, pmy);

//     //PART 2: DRAWING A MIRRORED LINE
//     push(); //start a new draw state
//     scale(1, -1); //flipping on the X axis
//     line(mx, my, pmx, pmy);
//     pop(); //restore the previous draw state
//     //console.log(angle);
  }
}
function mousePressed() {
    index++;
  if (index == 9) {
    index = 0
  }
}

function mountainNoise() {
  push();
  translate(0, -25);
  stroke("lightgreen");
  noFill();
  beginShape();
  let xoff = start;
  for (var x = 0; x < width; x++) {
    y = noise(xoff) * height;

    vertex(x, y);
    xoff += inc;
  }
  endShape();

  start += inc;
  pop();
}

function lochNoise() {
  push();
  translate(0, 350);
  scale(1, -1);
  stroke("lightblue");
  noFill();
  beginShape();
  let xoff = start;
  for (var x = 0; x < width; x++) {
    y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();

  start += inc;
  pop();
}

//reference videos:
//Coding Train: [https://www.youtube.com/watch?v=R3C2giDfmO8]
//Computing Masterclass: [https://www.youtube.com/watch?v=KcHqRAM0sEU]
