class Spike {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
            z: (x + y) / 2 + this.size.h,
        };
        this.size = {
            w: 32,
            h: 32,
        };
        this.color = [255, 0, 0];
        this.solid = new Solid();
        this.enemy = true;
        //this.img = assets.blockImg;
    }
}