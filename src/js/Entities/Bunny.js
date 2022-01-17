"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movable_1 = __importDefault(require("../Abstracts/Movable"));
class Bunny extends Movable_1.default {
    constructor(context, options) {
        super(context, options);
        this.color = "#F00";
    }
}
exports.default = Bunny;
