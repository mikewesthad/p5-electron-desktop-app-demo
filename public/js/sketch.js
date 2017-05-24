function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    fill(255)
    stroke(0);
    strokeWeight(1);
    ellipse(mouseX, mouseY, 20, 20);
}