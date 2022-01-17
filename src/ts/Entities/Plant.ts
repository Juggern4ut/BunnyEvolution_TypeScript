import Drawable from "../Abstracts/Drawable";
import DrawableOptions from "../interfaces/DrawableOptions";

export default class Plant extends Drawable {
  constructor(context: CanvasRenderingContext2D, options: DrawableOptions) {
    super(context, options);
    this.color = "#0F0";
  }
}
