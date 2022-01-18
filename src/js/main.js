"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BunnyEvolution_1 = __importDefault(require("./BunnyEvolution"));
window.onload = (e) => {
    window["sim"] = new BunnyEvolution_1.default("#simulationCanvas", 10);
};
