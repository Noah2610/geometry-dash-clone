let player;
let entities = [];
let camera = {
    x: 0,
    y: 0,
};
let img;
let state = "menu";
let assets = {
    blockImg: null,
    playerImg: null,
    goalImg: null,
    levelOne: null,
};

// Deltatime, where 1.0 is the target frame rate.
let dt = 1.0;

function preload() {
    assets.blockImg = loadImage("images/Block.png");
    assets.playerImg = loadImage("images/Player.png");
    assets.goalImg = loadImage("images/Goal.png");
    assets.levelOne = loadStrings("level/level1.txt");
}

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);
    rectMode(CENTER);
    imageMode(CENTER);
    angleMode(DEGREES);
    frameRate(FPS);

    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", startGame);
    document.addEventListener("keyup", (e) => {
        if (state === "menu") {
            if (String.fromCharCode(e.keyCode) === " ") {
                startGame();
            }
        }
    });
}

function startGame() {
    loadLevel(assets.levelOne);
    state = "running";

    const menu = document.getElementById("menu");
    menu.classList.add("hidden");
}

function startMenu() {
    entities = [];
    state = "menu";

    const menu = document.getElementById("menu");
    menu.classList.remove("hidden");
}

function update() {
    dt = deltaTime / (1000.0 / FPS);

    if (state === "running") {
        if (player) {
            player.update();
            camera.x = player.position.x - width / 2;
            camera.y = player.position.y - height / 2;
        } else {
            throw new Error("Player doesn't exist");
        }

        for (let i = 0; i < entities.length; i++) {
            applyGravity(entities[i]);
            moveEntity(entities[i]);
            checkJump(entities[i]);
            checkPlayerRotate(entities[i]);
            handleSpike(entities[i]);
            checkCollisionRight(entities[i]);
            checkGoal(entities[i]);
        }
    } else if (state === "gameover") {
        startMenu();
    }
}

function draw() {
    update();

    background(BG_COLOR);

    drawEntities();
}
