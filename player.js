class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.w = 32;
        this.h = 32;
    }

    draw() {
        rect(player.x, player.y, player.w, player.h);
    }
}
