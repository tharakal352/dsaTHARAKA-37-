"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AVLnode {
    constructor(mark) {
        this.height = 1;
        this.right = null;
        this.left = null;
        this.mark = mark;
        AVLnode.count++;
    }
    getNodeCount() {
        return AVLnode.count;
    }
}
exports.default = AVLnode;
