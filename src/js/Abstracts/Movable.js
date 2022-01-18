"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Drawable_1 = __importDefault(require("./Drawable"));
class Movable extends Drawable_1.default {
    constructor(context, x = 0, y = 0) {
        super(context, x, y);
        this.target = { x: 0, y: 0 };
        this.target = { x, y };
        this.speed = 10;
    }
    /**
     * Calculate the hypothenuse from the position to the target
     * and move towards it on the most direct way
     */
    update() {
        const deltaX = this.target.x - this.x;
        const deltaY = this.target.y - this.y;
        const dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        const steps = Math.round(dist / this.speed);
        if (steps !== 0) {
            this.x += deltaX / steps;
            this.y += deltaY / steps;
        }
    }
}
exports.default = Movable;
