export default class Drawable {
  x: number;
  y: number;
  width: number = 10;
  height: number = 10;
  color: string = "#000000";
  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.context = context;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
