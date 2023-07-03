function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
  }
  
function draw() {
    image(video, 10, 10, 640, 480);
    
    fill(128, 0, 0);
    rect(100, 30, 500, 50)
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(100, 50, 70);

    fill(128, 0, 0);
    rect(550, 30, 50, 400)
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(570, 420, 70);

    fill(128, 0, 0);
    rect(70, 40, 50, 400)
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(570, 50, 70);

    fill(128, 0, 0);
    rect(550, 30, 50, 400)
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(570, 50, 70);

    fill(128, 0, 0);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(95, 420, 70);

    fill(128, 0, 0);
    rect(80, 400, 480, 50)
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(95, 420, 70);

    fill(128, 0, 0);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(570, 420, 70);

    fill(128, 0, 0);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(100, 50, 70);

    fill(128, 0, 0);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(570, 420, 70);
  
}

function take_snapshot() {
  save('student_name.png');
}