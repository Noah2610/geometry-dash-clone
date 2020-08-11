let player;
const entities = [];

function setup() {
    createCanvas(SCREEN_SIZE.width, SCREEN_SIZE.height);
    rectMode(CENTER);

    player = new Player();
    entities.push(player);

    //entities.push(new Block(96, 0)); //
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
    entities.push(new Block(352, 288)); //
    entities.push(new Block(384, 320));
    entities.push(new Block(416, 320));
    entities.push(new Block(448, 320));
    //entities.push(new Block(448, 288)); //
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
    for(let i = 0; i < entities.length; i++) {
        player.update();
        applyGravity();
        moveEntity(entities[i]);
    }
}

function draw() {
    update();

    background(BG_COLOR);

    drawEntities();
}