import Movable from "../Abstracts/Movable";
import DrawableOptions from "../interfaces/DrawableOptions";

export default class Bunny extends Movable {
  constructor(context: CanvasRenderingContext2D, options: DrawableOptions) {
    super(context, options);
    this.color = "#F00";
  }
}
