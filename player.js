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
            x: 0,
            y: 0,
        };
        this.speed = 5;
    }

    update() {
        this.velocity.y += 0.2;
    }
}
