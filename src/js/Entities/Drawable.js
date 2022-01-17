"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Drawable {
    constructor(context, options) {
        var _a, _b, _c, _d;
        this.x = (_a = options.x) !== null && _a !== void 0 ? _a : 0;
        this.y = (_b = options.y) !== null && _b !== void 0 ? _b : 0;
        this.width = (_c = options.width) !== null && _c !== void 0 ? _c : 10;
        this.height = (_d = options.height) !== null && _d !== void 0 ? _d : 10;
        this.context = context;
    }
    draw() {
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}
exports.default = Drawable;
