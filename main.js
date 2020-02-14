let player;

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);

    player = new Player();
}

function update() {
    player.update();
}

function draw() {
    update();

    background(BG_COLOR);

    player.draw();
}