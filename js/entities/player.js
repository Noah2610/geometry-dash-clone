class Player {
    constructor(x = 0.0, y = 0.0) {
        this.SPEED = 20.0;

        this.position = {
            x: x,
            y: y,
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

        // TODO: don't do this here
        camera.x = this.position.x - width / 2.0;
        camera.y = this.position.y - height / 2.0;

        // DEBUG MOVEMENT
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
