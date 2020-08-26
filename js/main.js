let player;
let entities = [];
let camera;
let img;
let assets = {
    blockImg: null,
    playerImg: null,
    goalImg: null,
    levelOne: null
};

function preload() {
    assets.blockImg = loadImage('images/Block.png');
    assets.playerImg = loadImage('images/Player.png');
    assets.goalImg = loadImage('images/Goal.png');    
    assets.levelOne = loadStrings('level/level1.txt');
}

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);
    rectMode(CENTER);
    imageMode(CENTER);
    angleMode(DEGREES);

    camera = {
        x: 0,
        y: 0
    }

    loadLevel(assets.levelOne);
}

function update() {
    if(player) {
        player.update();
        camera.x = player.position.x - width / 2;
        camera.y = player.position.y - height / 2;
    } else {
        throw new Error("Player doesn't exist");
    }

    for(let i = 0; i < entities.length; i++) {
        applyGravity(entities[i]);
        moveEntity(entities[i]);
        checkJump(entities[i]);
        checkPlayerRotate(entities[i]);
        checkGoal(entities[i]);
    }
}

function draw() {
    update();

    background(BG_COLOR);

    drawEntities();
}