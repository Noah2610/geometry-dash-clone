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
            x: 5,
            y: 0,
        };
        this.color = [200, 50, 50];
        this.speed = 5;
        this.gravity = 0.2;
        this.solid = new Solid();
        this.canJump = true;
    }

    update() {
        
    }
}
