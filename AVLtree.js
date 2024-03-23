"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AVLnode_1 = __importDefault(require("./AVLnode"));
class AVLtree {
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        return node ? node.height : 0;
    }
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.right), this.getHeight(node.left));
    }
    getBalaceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    insert(mark) {
        this.root = this.insertData(this.root, mark);
    }
    insertData(node, mark) {
        if (!node) {
            return new AVLnode_1.default(mark);
        }
        else if (mark < node.mark) {
            node.left = this.insertData(node.left, mark);
            node;
        }
        else if (mark > node.mark) {
            node.right = this.insertData(node.right, mark);
            node;
        }
        else {
            return node;
        }
        this.updateHeight(node);
        let balance = this.getBalaceFactor(node);
        if (balance > 1) {
            let select = node.left;
            if (mark < select.mark) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            let select = node.left;
            if (mark > select.mark) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    rightRotate(node) {
        let x = node.left;
        let T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    leftRotate(node) {
        let x = node.right;
        let T2 = x.left;
        node.right = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.mark);
            this.inOrderTraversal(node.right);
        }
    }
    search(node) {
        let bool = false;
        if (node) {
            this.inOrderTraversal(node.left);
            if (node.mark == node.mark) {
                bool = true;
            }
            else {
                bool = false;
            }
            this.inOrderTraversal(node.right);
        }
        return bool;
    }
}
exports.default = AVLtree;
