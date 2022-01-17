import DrawableOptions from "../interfaces/DrawableOptions";
import Drawable from "./Drawable";

export default class Movable extends Drawable {
  constructor(context: CanvasRenderingContext2D, options: DrawableOptions) {
    super(context, options);
  }
}
