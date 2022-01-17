import Bunny from "./Entities/Bunny";
import Plant from "./Entities/Plant";

export default class BunnyEvolution {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  bunnies: Bunny[] = [];
  plants: Plant[] = [];

  constructor(selector: string, gridSize: number = 10) {
    this.canvas = document.querySelector(selector) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    for (let i = 0; i < 10; i++)
      this.addBunny(
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height
      );

    for (let i = 0; i < 10; i++)
      this.addPlant(
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height
      );

    this.draw();
  }

  /**
   * Adds a new Bunny to the simulation
   * @param x X-Coordinate of the Bunny
   * @param y Y-Coordinate of the Bunny
   */
  addBunny(x: number, y: number) {
    this.bunnies.push(new Bunny(this.context, { x, y }));
  }

  /**
   * Adds a new Plant to the simulation
   * @param x X-Coordinate of the Plant
   * @param y Y-Coordinate of the Plant
   */
  addPlant(x: number, y: number) {
    this.plants.push(new Plant(this.context, { x, y }));
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
