class Player {
    constructor() {
        this.SPEED = 20.0;

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
        this.gravity = 3.0;
        this.solid = true;
        this.canJump = true;
    }

    update() {
        this.velocity.x = this.SPEED;

        const move = {
            x: +keyIsDown("D".charCodeAt(0)) - keyIsDown("A".charCodeAt()),
            y: +keyIsDown("S".charCodeAt(0)) - keyIsDown("W".charCodeAt()),
        };

        if (move.x !== 0) {
            this.velocity.x = this.SPEED * move.x;
        }
        if (move.y !== 0) {
            this.velocity.y = this.SPEED * move.y;
        }
    }
}
