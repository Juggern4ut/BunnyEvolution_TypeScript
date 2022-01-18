import Drawable from "../Abstracts/Drawable";

export default class Plant extends Drawable {
  constructor(context: CanvasRenderingContext2D, x: number = 0, y: number = 0) {
    super(context, x, y);
    this.color = "#0F0";
  }
}
