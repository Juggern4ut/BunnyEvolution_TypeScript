import DrawableOptions from "../interfaces/DrawableOptions";

export default class Drawable {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D, options: DrawableOptions) {
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.width = options.width ?? 10;
    this.height = options.height ?? 10;
    this.color = options.color ?? "#000000";
    this.context = context;
  }

  draw() {
    console.log(this.color);
    
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
