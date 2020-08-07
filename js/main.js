let player;
let camera;
let entities = [];
let state = "menu"; // "menu" or "game"

// Deltatime.
// Difference in seconds to previous frame.
let DT = 0.0;

function switchState(newState) {
    switch (newState) {
        case "game":
            state = "game";
            hideMenu();
            loadLevel();
            break;
        case "menu":
            state = "menu";
            showMenu();
            break;
        default:
            console.error(`Invalid state: ${newState}`);
    }
}

function hideMenu() {
    document.getElementById("menu").classList.add("hide");
}

function showMenu() {
    document.getElementById("menu").classList.remove("hide");
}

function setup() {
    frameRate(30);
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);
    rectMode(CENTER);

    document.getElementById("start-btn").onclick = function() {
        switchState("game");
    };
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
