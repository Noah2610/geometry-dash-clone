class Player {
    constructor(posX, posY) {
        this.position = {
            x: posX,
            y: posY,
        };
        this.size = {
            w: 32,
            h: 32,
        };
        this.velocity = {
            x: 5,
            y: 0,
        };
        this.color = [200, 50, 50];
        this.speed = 5;
        this.gravity = 0.2;
        this.solid = new Solid();
        this.canJump = true;
        this.img = assets.playerImg;
        this.rotate = 0;
    }

    update() {
        this.velocity.x = 5;
    }
}