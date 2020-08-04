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


    for(let i = 0; i < entities.length; i++) {
        entities[i].id = i;
    }
}

function update() {
    player.update();
    //applyGravity();
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
        if (entity.position && entity.velocity && entity.solid) {
            let canMove = true;
            const newposition = {
                x: entity.position.x,
                y: entity.position.y,
            };
            newposition.x += entity.velocity.x;
            newposition.y += entity.velocity.y;
            const tmpEntity = {
                position: newposition,
                size: entity.size,
            };
            for(let j = 0; j < entities.length; j++) {
                const entity2 = entities[j];
                if(entity.id !== entity2.id) {
                    if (doEntitiesCollide(tmpEntity, entity2)) {
                        canMove = false;
                        entity.velocity.y = 0;
                        jump();
                                //hier ist kein gravity
                        break;
                    }
                }
            }
            if (canMove) {
                entity.position = newposition;
                applyGravity();
            }
        } else if (entity.position && entity.velocity) {
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

//Player jumps when the button "j" is pressed
function jump() {
    if(keyIsDown(74)) { // 74 ... j
        entities[0].velocity.y -= 4;
    }
}