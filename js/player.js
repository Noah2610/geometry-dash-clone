class Player {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        };
        this.size = {
            w: 32,
            h: 32,
        };
        this.velocity = {
            x: 0.5,
            y: 0,
        };
        this.color = [200, 50, 50];
        this.speed = 5;
        this.gravity = 0.05;
        this.solid = true;
        this.canJump = true;
    }

    update() {}
}
