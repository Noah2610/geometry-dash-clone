let player;
let entities = [];
let camera;

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);
    rectMode(CENTER);

    camera = {
        x: 0,
        y: 0
    }

    loadLevel();

    
}

function update() {
    player.update();
    camera.x = player.position.x - width / 2;
    camera.y = player.position.y - height / 2;

    for(let i = 0; i < entities.length; i++) {
        applyGravity(entities[i]);
        moveEntity(entities[i]);
        checkJump(entities[i]);
    }
}

function draw() {
    update();

    background(BG_COLOR);

    drawEntities();
}