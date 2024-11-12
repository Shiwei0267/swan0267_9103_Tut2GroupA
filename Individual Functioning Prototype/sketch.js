class Pattern {
  constructor(side, colors) {
    this.side = side;
    this.colors = colors;
  }

  drawRect(x, y) {
    let randomColor = random(this.colors);
    fill(randomColor);
    rect(x, y, this.side, this.side);
  }

  drawVerticalPattern(xPositions, yPositions) {
    for (let i = 0; i < yPositions.length; i++) {
      let y = yPositions[i];
      for (let x = 0; x < width; x += this.side) {
        this.drawRect(x, y - this.side / 2);
      }
    }
  }

  drawHorizontalPattern(xPositions, yPositions) {
    for (let i = 0; i < xPositions.length; i++) {
      let x = xPositions[i];
      for (let y = 0; y < height; y += this.side) {
        this.drawRect(x - this.side / 2, y);
      }
    }
  }
}

let leftY = 0;
let grey;
let darkgery;
let yellow;
let blue;
let red;
let side;
function setup() {
  createCanvas(900, 900);
  strokeWeight(1.5);
  background(255);
  side = 30;

  yellow = color(236, 212, 42);
  blue = color(68, 104, 178);
  grey = color(217, 218, 212);
  red = color(165, 57, 45);
  darkgery = (114, 113, 113);

  let colors = [yellow, blue, grey, red];

  let yPositions = [105, 285, 405, 585, 765];
  let xPositions = [105, 225, 735, 855];

  let pattern = new Pattern(side, colors);

  pattern.drawVerticalPattern(xPositions, yPositions);
  pattern.drawHorizontalPattern(xPositions, yPositions);
}

function draw() {
  // Horizontal conveyor belt, the third row
  fill(grey);
  rect(0, 300, 900, 90);

  // Two parcel storage doors
  fill(darkgery);
    rect(90, 300, 30, 90);
    rect(210, 300, 30, 90);
    rect(720, 300, 30, 90);
    rect(840, 300, 30, 90);

  // Left parcel passageway
  fill(grey);
  rect(120, 0, 90, 900);

  // Building Columns
  fill(darkgery);
  rect(370, 300, 50, 90);
  rect(560, 300, 50, 90);

  // Package Movement
  push();
  translate(0, leftY);
  leftY -= 1;
  if (leftY < -900) {
    leftY = 900;
  }
  // Left package machines
  fill(darkgery);
  rect(120, 240, 90, 20);
  rect(120, 490, 90, 20);
  rect(120, 820, 90, 20);

  // Package colors
  fill(240, 210, 10);
  // Package 1
  rect(130, 175, 75, 65);
  rect(170, 140, 40, 35);
  // Package 2
  rect(120, 400, 87, 90);
  // Package 3
  rect(125, 750, 80, 70);

  // Package label
  fill(250, 250, 240);
  rect(170, 185, 30, 22); // 1
  rect(192, 145, 14, 10); // 1
  rect(135, 445, 40, 30); // 2
  rect(165, 760, 36, 26); // 3

  // MOvement
  pop();

  // Package 4 inside horizontal conveyor belt
  fill(240, 210, 10);
  rect(380, 310, 110, 80);
  fill(250, 250, 240);
  rect(410, 330, 40, 26); // 4
  // Tape on the second package
  fill(221, 195, 140);
  //rect(182, 400, 18, 90);

  // Right elevator passageway
  fill(grey);
  rect(750, 0, 90, 900);

  // Conveyor belt behind the elevator on the right
  fill(173, 173, 170);
  rect(785, 0, 20, 900);

  // Elevator control box
  fill(173, 173, 170);
  rect(760, 150, 70, 70);
  fill(68, 104, 178);
  rect(780, 170, 30, 30);

  // Elevator doors
  fill(68, 104, 178);
  rect(750, 775, 45, 125);
  rect(795, 775, 45, 125);

  fill(darkgery);
  rect(750, 540, 90, 20); // Elevator top
  rect(750, 700, 90, 20); // Elevator bottom

  fill(blue);
  rect(750, 560, 90, 140); // Elevator box

  rect(580, 520, 120, 50); //sofa
  rect(590, 500, 100, 40);
  fill(grey);
  rect(665, 512, 28, 28); //pillow
  rect(625, 520, 35, 20);

  //plant
  rect(650, 700, 40, 50); // flowerpot

  fill(yellow); // leaf
  rect(630, 680, 15, 15);
  rect(650, 660, 15, 15);
  fill(blue);
  rect(660, 680, 15, 15);
  fill(red);
  rect(680, 665, 15, 15);

  line(650, 700, 640, 690); //branch
  line(658, 700, 655, 670);
  line(670, 700, 670, 690);
  line(682, 700, 686, 675);

  //artwork
  fill(darkgery);
  rect(300, 630, 38, 48); // frame
  fill(grey);
  rect(304, 635, 30, 38); //canvas
  fill(yellow);
  rect(310, 640, 24, 25); //content
  fill(blue);
  rect(317, 635, 17, 15);
  fill(red);
  rect(304, 653, 12, 3);

  //table
  fill(yellow);
  rect(480, 225, 110, 10); //surface
  rect(490, 235, 10, 35); //leg right
  rect(570, 235, 10, 35); //leg left

  //chair
  rect(465, 245, 20, 25);
  rect(567, 245, 20, 25);

  //apple
  fill(red);
  rect(560, 212, 13, 13);
  line(565, 215, 565, 205);
  fill(blue);
  rect(565, 200, 5, 5);

  //package door
  fill(darkgery);
  rect(233, 155, 7, 105); //package door level4
  rect(233, 455, 7, 105); //package door level3
  rect(233, 635, 7, 105); //package door level2

  // Draw colors for the person
  let headColor = color(255, 224, 189); // Head color
  let packageColor = color(240, 210, 10); // Package color
  let catColor = color(0, 0, 0); // Cat color

  // Define the person1's position
  let personX = 340; // Starting X position of the person
  let personY = 150; // Starting Y position of the person

  // Draw the person4's head
  fill(headColor);
  rect(personX, personY, side, side);

  // Draw the person4's body
  fill(blue);
  rect(personX, personY + side, side, side * 2); //main body
  rect(personX - side / 2, personY + side, side / 2, side); //left arm
  rect(personX + side, personY + side, side / 2, side); //right arm

  // Draw the person4's leg
  fill(darkgery);
  rect(personX, personY + side * 3, side / 2, side); //left leg
  rect(personX + side / 2, personY + side * 3, side / 2, side); //right leg

  // Draw the package p4hold
  fill(packageColor);
  rect(personX + 3, personY + side + 5, side / 1.2, side);

  // Package label p4hold
  fill(250, 250, 240);
  rect(personX + 8, personY + side + 10, side / 3, side / 5);

  // Define the person3's position
  let personX3 = 460; // Starting X position of the person
  let personY3 = 450; // Starting Y position of the person

  // Draw the person3's head
  fill(headColor);
  rect(personX3 * 1.005, personY3, side / 1.2, side);

  // Draw the person3's body
  fill(blue);
  rect(personX3, personY3 + side, side, side * 2); //main body
  rect(personX3 - side / 3, personY3 + side, side / 3, side); //left arm
  rect(personX3 + side, personY3 + side, side / 3, side); //right arm

  // Draw the person3's leg
  fill(darkgery);
  rect(personX3, personY3 + side * 3, side / 2, side); //left leg
  rect(personX3 + side / 2, personY3 + side * 3, side / 2, side); //right leg

  // Define the cat2's position
  let catX2 = 350; // Starting X position of the cat
  let catY2 = 710; // Starting Y position of the cat

  // Draw the cat2's head
  fill(catColor);
  rect(catX2 * 0.983, catY2 * 0.993, side * 0.7, side * 0.7);

  // Draw the cat2's body
  rect(catX2, catY2, side * 1.6, side * 0.85);

  // Draw the cat2's leg
  rect(catX2, catY2 * 1.012, side / 8, side); //frontleg1
  rect(catX2 * 1.03, catY2 * 1.012, side / 8, side); //frontleg2
  rect(catX2 * 1.1, catY2 * 1.012, side / 8, side); //hindleg1
  rect(catX2 * 1.126, catY2 * 1.012, side / 8, side); //hindleg2

  // Draw the cat2's tail
  rect(catX2 * 1.1195, catY2 * 0.975, side * 0.2, side * 0.6);

  // Draw the cat2's ear
  fill(blue);
  triangle(
    catX2 * 1.01,
    catY2 * 0.993,
    catX2 * 0.983,
    catY2 * 0.998,
    catX2 * 0.985,
    catY2 * 0.983
  ); //left ear
  fill(yellow);
  triangle(
    catX2 * 1.05,
    catY2,
    catX2 * 1.03,
    catY2 * 0.993,
    catX2 * 1.05,
    catY2 * 0.983
  ); //right ear
}