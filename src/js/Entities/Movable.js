"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Drawable_1 = __importDefault(require("./Drawable"));
class Movable extends Drawable_1.default {
    constructor(context, options) {
        super(context, options);
    }
}
exports.default = Movable;
