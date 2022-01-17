"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bunny_1 = __importDefault(require("./Entities/Bunny"));
const Plant_1 = __importDefault(require("./Entities/Plant"));
class BunnyEvolution {
    constructor(selector, gridSize = 10) {
        this.bunnies = [];
        this.plants = [];
        this.canvas = document.querySelector(selector);
        this.context = this.canvas.getContext("2d");
        for (let i = 0; i < 10; i++)
            this.addBunny(Math.random() * this.canvas.width, Math.random() * this.canvas.height);
        for (let i = 0; i < 10; i++)
            this.addPlant(Math.random() * this.canvas.width, Math.random() * this.canvas.height);
        this.draw();
    }
    /**
     * Adds a new Bunny to the simulation
     * @param x X-Coordinate of the Bunny
     * @param y Y-Coordinate of the Bunny
     */
    addBunny(x, y) {
        this.bunnies.push(new Bunny_1.default(this.context, { x, y }));
    }
    /**
     * Adds a new Plant to the simulation
     * @param x X-Coordinate of the Plant
     * @param y Y-Coordinate of the Plant
     */
    addPlant(x, y) {
        this.plants.push(new Plant_1.default(this.context, { x, y }));
    }
    /**
     * Clears the context and draws each entity
     */
    draw() {
        this.clear();
        this.bunnies.forEach((b) => b.draw());
        this.plants.forEach((p) => p.draw());
    }
    /**
     * Clear the context
     */
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
exports.default = BunnyEvolution;
