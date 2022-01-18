"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movable_1 = __importDefault(require("../Abstracts/Movable"));
class Bunny extends Movable_1.default {
    constructor(context, x = 0, y = 0) {
        super(context, x, y);
        this.speed = 1;
        this.color = "#F00";
    }
}
exports.default = Bunny;
