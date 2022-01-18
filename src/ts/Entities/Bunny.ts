import Movable from "../Abstracts/Movable";

export default class Bunny extends Movable {
  constructor(context: CanvasRenderingContext2D, x: number = 0, y: number = 0) {
    super(context, x, y);
    this.speed = 1;
    this.color = "#F00";
  }
}
