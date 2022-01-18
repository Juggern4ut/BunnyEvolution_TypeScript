"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Drawable {
    constructor(context, x, y) {
        this.width = 10;
        this.height = 10;
        this.color = "#000000";
        this.x = x;
        this.y = y;
        this.context = context;
    }
    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}
exports.default = Drawable;
