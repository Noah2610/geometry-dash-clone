let player;
const entities = [];

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);

    player = new Player();
    entities.push(player);

    entities.push(new Block(32, 32));
    entities.push(new Block(64, 32));
    entities.push(new Block(32, 64));
}

function update() {
    player.update();
    applyGravity();
    moveEntities();
}

function draw() {
    update();

    background(BG_COLOR);

    drawEntities();
}

// Moves all entities (Player, etc.) that,
// have a position and a velocity.
function moveEntities() {
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity.position && entity.velocity) {
            entity.position.x += entity.velocity.x;
            entity.position.y += entity.velocity.y;
        }
    }
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
                entity.position.x,
                entity.position.y,
                entity.size.w,
                entity.size.h,
            );
        }
    }
}

// Changes velocity on all entities, that
// have gravity and velocity.
// Simulates gravity.
function applyGravity() {
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity.gravity && entity.velocity) {
            entity.velocity.y += entity.gravity;
        }
    }
}
