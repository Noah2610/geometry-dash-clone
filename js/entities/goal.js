class Goal {
    constructor(posX, posY) {
        this.position = {
            x: posX,
            y: posY,
        };
        this.size = {
            w: 32,
            h: 32,
        };
        this.color = [0, 0, 0];
        this.goal = true;
        this.img = assets.goalImg;
    }
}