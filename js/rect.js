class Rect {
    constructor(position, size) {
        this.top = position.y - size.h / 2.0;
        this.bottom = position.y + size.h / 2.0;
        this.left = position.x - size.w / 2.0;
        this.right = position.x + size.w / 2.0;
    }
}
