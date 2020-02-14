let player;
const entities = [];

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);

    player = new Player();
    entities.push(player);
}

function update() {
    player.update();
    moveEntities();
}

function draw() {
    update();

    background(BG_COLOR);

    player.draw();
}

// Moves all entities (Player, etc.) that
// have a position, and a velocity.
function moveEntities() {
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity.position && entity.velocity) {
            entity.position.x += entity.velocity.x;
            entity.position.y += entity.velocity.y;
        }
    }
}
