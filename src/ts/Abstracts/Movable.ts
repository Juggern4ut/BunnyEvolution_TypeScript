import Drawable from "./Drawable";

export default class Movable extends Drawable {
  speed: number;
  target: { x: number; y: number } = { x: 0, y: 0 };

  constructor(context: CanvasRenderingContext2D, x: number = 0, y: number = 0) {
    super(context, x, y);
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
