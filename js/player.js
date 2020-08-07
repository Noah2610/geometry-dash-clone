class Player {
    constructor() {
        this.SPEED = 2.0;

        this.position = {
            x: 0,
            y: 0,
        };
        this.size = {
            w: 32,
            h: 32,
        };
        this.velocity = {
            x: this.SPEED,
            y: 0,
        };
        this.color = [200, 50, 50];
        this.gravity = 0.05;
        this.solid = true;
        this.canJump = true;
    }

    update() {
        this.velocity.x = this.SPEED;
    }
}
