// create a grid-like pattern using rectangles 
// and the pattern could be vertical or horizontal
class Pattern {
  constructor(side, colors) {
    this.side = side; // one side length
    this.colors = colors; // array of colors for each rectangle
  }

// draw rectangle at (x,y) with random color
  drawRect(x, y) {
    let randomColor = random(this.colors); // select random color
    fill(randomColor);
    rect(x, y, this.side, this.side); // draw rectangle at (x,y) with the specified side length
  }

// draws a vertical pattern by placing rectangles along each x, y position
  drawVerticalPattern(xPositions, yPositions) {
    for (let i = 0; i < yPositions.length; i++) {  // iterate y position
      let y = yPositions[i]; // current y position
      for (let x = 0; x < width; x += this.side) { // fill across the row with rectangles
        this.drawRect(x, y - this.side / 2); // draw each rectangle centered vertically on y
      }
    }
  }

// draws a horizontal pattern by placing rectangles along each x, y position.
  drawHorizontalPattern(xPositions, yPositions) {
    for (let i = 0; i < xPositions.length; i++) {  // iterate x position
      let x = xPositions[i]; // current x position
      for (let y = 0; y < height; y += this.side) { // fill down the column with rectangles
        this.drawRect(x - this.side / 2, y); //draw each rectangle centered horizontally on x
      }
    }
  }
}

// Initial variables
let leftY = 0;
let grey;
let darkgery;
let yellow;
let blue;
let red;
let side;

let song, analyzer;

// preload the sound file
function preload() {
  song = loadSound("assets/489851__prime45__boogie-woogie.wav");
}

function setup() {
  createCanvas(900, 900);

  // initialize amplitude analyzer and connect it to the loaded song
  analyzer = new p5.Amplitude();
  analyzer.setInput(song); // analyse amplitude
  
  // create a play/pause button and set it style
  let button = createButton("▶/⏸"); // use the Unicode triangle and pause symbols to represent the play/pause button
  button.style("background-color", "grey"); // set background-color of the button
  button.style("border-radius", "3px"); //set radius of the button
  button.style("font-size", "13px"); // set front-size of the button
  button.style("padding", "0px 1px"); // set padding of the button
  button.position(440,690); //set position of the button
  button.mousePressed(play_pause); //set the interact method of the button

  strokeWeight(1.5); //set weight of the stroke
  background(255); //set background colour
  side = 30; //set the size of each rectangle in the pattern

  // define colours
  yellow = color(236, 212, 42);
  blue = color(68, 104, 178);
  grey = color(217, 218, 212);
  red = color(165, 57, 45);
  darkgrey = color(114, 113, 113);

  // array of colors to randomly choose from for each pattern
  let colors = [yellow, blue, grey, red];

  // define y, x positions for pattern rows and columns
  let yPositions = [105, 285, 405, 585, 765];
  let xPositions = [105, 225, 735, 855];

  // create a Pattern object with side and color
  let pattern = new Pattern(side, colors);

  // draw rectangles in vertical and horizontal grid
  pattern.drawVerticalPattern(xPositions, yPositions);
  pattern.drawHorizontalPattern(xPositions, yPositions);
}

function draw() {
  fill(255); 
  rect(240,600,480,150); //basic white rectangle
  fill(yellow); 
  rect(435,650,120,65); //tv background

  // get the current amplitude level of the song
  let rms = analyzer.getLevel();

  // draw objects that respond to rms
  fill(0);
  rect(width/2.57+rms*5,height/1.27+rms*5, 48+rms*10, 24+rms*10); //cat body
  rect(width/2.57+rms*5,height/1.23+rms*5, 3+rms*5, 13+rms*10); //cat front leg1
  rect(width/2.5+rms*5,height/1.23+rms*5, 3+rms*5, 13+rms*10); //cat front leg2
  rect(width/2.34+rms*5,height/1.23+rms*5, 3+rms*5, 13+rms*10); //cat hind leg1
  rect(width/2.29+rms*5,height/1.23+rms*5, 3+rms*5, 13+rms*10); //cat hind leg2
  rect(width/2.29+rms*5,height/1.3+rms*5, 5+rms*5, 15+rms*10); //cat tail
  fill(yellow);
  rect(width/1.42,height/1.32, 12+rms*7, 12+rms*7); //leaf1
  rect(width/1.388,height/1.355, 12+rms*7, 12+rms*7); //leaf2
  circle(width/1.68,height/1.32, 20+rms*20, 20+rms*20); //shape in tv
  fill(blue);
  rect(width/1.355,height/1.32, 12+rms*7, 12+rms*7); //leaf3
  circle(width/1.8,height/1.3, 20+rms*30, 20+rms*30); //shape in tv
  fill(red);
  rect(width/1.321,height/1.35, 12+rms*7, 12+rms*7); //leaf4
  circle(width/1.98,height/1.34, 20+rms*20, 20+rms*20); //shape in tv

  fill(grey);
  rect(0, 300, 900, 90); // Horizontal conveyor belt, the third row

  // Two parcel storage doors
  fill(darkgrey);
    rect(90, 300, 30, 90);
    rect(210, 300, 30, 90);
    rect(720, 300, 30, 90);
    rect(840, 300, 30, 90);

  fill(grey);
  rect(120, 0, 90, 900); // Left parcel passageway

  // Building Columns
  fill(darkgrey);
  rect(370, 300, 50, 90);
  rect(560, 300, 50, 90);

  // Package Movement
  push(); // save the current drawing state
  translate(0, leftY); // move the package downwards by leftY
  leftY -= 1; // decreases leftY by 1 to make the package move up gradually

  // reset the package position to start again when it moves out of canvas
  if (leftY < -900) {
    leftY = 900;
  }

  // Left package machines
  fill(darkgrey);
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

  // restore the previous drawing state saved by push()
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

  fill(darkgrey);
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

  line(650, 700, 640, 690); //branch
  line(658, 700, 655, 670);
  line(670, 700, 670, 690);
  line(682, 700, 686, 675);

  //artwork
  fill(darkgrey);
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
  fill(darkgrey);
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
  fill(darkgrey);
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
  fill(darkgrey);
  rect(personX3, personY3 + side * 3, side / 2, side); //left leg
  rect(personX3 + side / 2, personY3 + side * 3, side / 2, side); //right leg

  // Define the cat2's position
  let catX2 = 350; // Starting X position of the cat
  let catY2 = 710; // Starting Y position of the cat

  // Draw the cat2's head
  fill(catColor);
  rect(catX2 * 0.983, catY2 * 0.993, side * 0.78, side * 0.7);

  // Draw the cat2's ear
  fill(blue);
  triangle(catX2 * 1.01, catY2 * 0.993, catX2 * 0.983, catY2 * 0.998, catX2 * 0.985, catY2 * 0.983); //left ear
  fill(yellow);
  triangle(catX2 * 1.05, catY2, catX2 * 1.03, catY2 * 0.993, catX2 * 1.05, catY2 * 0.983); //right ear
}

// change play and pause states for the song when called
function play_pause() {
  if (song.isPlaying()) {
    song.stop(); // stop the song if it is playing
  } else {
    song.loop(); // loop the song
  }
}
