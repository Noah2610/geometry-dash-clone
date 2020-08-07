let player;
let camera;
let entities = [];

// Deltatime.
// Difference in seconds to previous frame.
let DT = 0.0;

function setup() {
    frameRate(30);
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);
    rectMode(CENTER);

    loadLevel(LEVEL_RAW);

    // player = new Player();
    // createEntity(player);

    // camera = {
    //     x: player.position.x,
    //     y: player.position.y,
    // };

    // GROUND PLAIN
    // for (let i = 0; i < 200; i++) {
    //     createEntity(new Block(32.0 * i, 368.0));
    // }

    // createEntity(new Block(32, 320));
    // createEntity(new Block(64, 320));
    // createEntity(new Block(96, 320));
    // createEntity(new Block(128, 320));
    // createEntity(new Block(160, 320));
    // createEntity(new Block(192, 320));
    // createEntity(new Block(224, 320));
    // createEntity(new Block(256, 320));
    // createEntity(new Block(288, 320));
    // createEntity(new Block(320, 320));
    // createEntity(new Block(352, 320));
    // createEntity(new Block(352, 288));
    // createEntity(new Block(384, 320));
    // createEntity(new Block(416, 320));
    // createEntity(new Block(448, 320));
    // createEntity(new Block(480, 320));
    // createEntity(new Block(512, 320));
    // createEntity(new Block(544, 320));
    // createEntity(new Block(576, 320));
}

function createEntity(entity) {
    entity.id = entities.length;
    entities.push(entity);
}

function update() {
    DT = deltaTime / 100.0;

    if (player) {
        player.update();
    }

    // Loop through all entities and run functions for each.
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        applyGravity(entity);
        checkJump(entity);
        moveEntity(entity);
    }
}

function draw() {
    update();
    background(BG_COLOR);
    drawEntities();
}

// Draws all entities as rectangles,
// that have a position and a size.
// Draws the entity with a color,
// if the enity has a color.
function drawEntities() {
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity.position && entity.size) {
            if (entity.color) {
                fill(entity.color);
            }
            rect(
                entity.position.x - camera.x,
                entity.position.y - camera.y,
                entity.size.w,
                entity.size.h
            );
        }
    }
}
