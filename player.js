class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.w = 32;
        this.h = 32;
        this.speed = 5;
        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += 0.2;

    }

    draw() {
        rect(player.x, player.y, player.w, player.h);
    }
}