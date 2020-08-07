let player;
const entities = [];

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);
    rectMode(CENTER);

    player = new Player();
    entities.push(player);

    //entities.push(new Block(96, 0));
    entities.push(new Block(32, 320));
    entities.push(new Block(64, 320));
    entities.push(new Block(96, 320));
    entities.push(new Block(128, 320));
    entities.push(new Block(160, 320));
    entities.push(new Block(192, 320));
    entities.push(new Block(224, 320));
    entities.push(new Block(256, 320));
    entities.push(new Block(288, 320));
    entities.push(new Block(320, 320));
    entities.push(new Block(352, 320));
    //entities.push(new Block(352, 288));
    entities.push(new Block(384, 320));
    entities.push(new Block(416, 320));
    entities.push(new Block(448, 320));
    entities.push(new Block(480, 320));
    entities.push(new Block(512, 320));
    entities.push(new Block(544, 320));
    entities.push(new Block(576, 320));
    /*
    const blockOne = new Block(0, 0);
    entities.push(blockOne);
    const blockTwo = new Block(16, 16);
    entities.push(blockTwo);

    console.log(doEntitiesCollide(blockOne, blockTwo));*/

    for (let i = 0; i < entities.length; i++) {
        entities[i].id = i;
    }
}

function update() {
    player.update();

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

// Moves all entities (Player, etc.) that,
// have a position and a velocity.
function moveEntity(entity) {
    if (entity.position && entity.velocity && entity.solid) {
        const velRem = {
            x: entity.velocity.x % 1.0,
            y: entity.velocity.y % 1.0,
        };
        const velSign = {
            x: Math.sign(entity.velocity.x),
            y: Math.sign(entity.velocity.y),
        };

        let inCollision = false;
        for (const otherEntity of entities) {
            if (inCollision) break;
            if (otherEntity.solid && entity.id !== otherEntity.id) {
                for (const axis of ["x", "y"]) {
                    if (inCollision) break;
                    for (
                        let i = 1;
                        i <= Math.floor(Math.abs(entity.velocity[axis]));
                        i++
                    ) {
                        const newPos = {
                            x: entity.position.x,
                            y: entity.position.y,
                        };
                        newPos[axis] += velSign[axis];
                        const tmpEntity = {
                            position: newPos,
                            size: entity.size,
                        };
                        if (doEntitiesCollide(tmpEntity, otherEntity)) {
                            inCollision = true;
                            break;
                        } else {
                            entity.position = newPos;
                        }
                    }
                    if (inCollision) break;
                    if (velRem[axis] > 0.0 || velRem[axis] < 0.0) {
                        const newPos = {
                            x: entity.position.x,
                            y: entity.position.y,
                        };
                        newPos[axis] += velRem[axis];
                        const tmpEntity = {
                            position: newPos,
                            size: entity.size,
                        };
                        if (doEntitiesCollide(tmpEntity, otherEntity)) {
                            inCollision = true;
                            break;
                        } else {
                            // if (keyIsDown(74)) debugger;
                            entity.position = newPos;
                        }
                    }
                }
            }
        }

        if (inCollision) {
            entity.velocity = {
                x: 0.0,
                y: 0.0,
            };
        }
    } else if (entity.position && entity.velocity) {
        entity.position.x += entity.velocity.x;
        entity.position.y += entity.velocity.y;
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
                entity.size.h
            );
        }
    }
}

// Changes velocity on all entities, that
// have gravity and velocity.
// Simulates gravity.
function applyGravity(entity) {
    if (entity.gravity && entity.velocity) {
        entity.velocity.y += entity.gravity;
    }
}

// Player jumps when the button "j" is pressed
function checkJump(entity) {
    if (entity.canJump && entity.velocity) {
        if (keyIsDown(74)) {
            // 74 ... j
            entity.velocity.y -= 4;
        }
    }
}
