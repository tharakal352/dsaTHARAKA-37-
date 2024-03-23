import AVLnode from "./AVLnode";


class AVLtree {
    public root: AVLnode | null;


    constructor() {
        this.root = null;

    }
    private getHeight(node: AVLnode | null): number {
        return node ? node.height : 0;
    }
    private updateHeight(node: AVLnode): void {
        node.height = 1 + Math.max(this.getHeight(node.right), this.getHeight(node.left));
    }
    private getBalaceFactor(node: AVLnode): number {
        return this.getHeight(node.left) - this.getHeight(node.right)
    }


    public insert(mark: number): void {
        this.root = this.insertData(this.root, mark)

    }
    private insertData(node: AVLnode | null, mark: number): AVLnode {
        if (!node) {
            return new AVLnode(mark);
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
        let balance: number = this.getBalaceFactor(node);

        if (balance > 1) {
            let select = node.left as AVLnode;
            if (mark < select.mark) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left as AVLnode);
                return this.rightRotate(node);
            }}

        else if (balance < -1) {
                let select = node.left as AVLnode;
                if (mark > select.mark) {
                    return this.leftRotate(node);
                } else {
                    node.right = this.rightRotate(node.left as AVLnode);
                    return this.leftRotate(node);
                }
            }
            return node;
        }
            private rightRotate(node: AVLnode): AVLnode {
        let x: AVLnode = node.left as AVLnode;
        let T2 = x.right as AVLnode;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    private leftRotate(node: AVLnode): AVLnode {
        let x: AVLnode = node.right as AVLnode;
        let T2 = x.left as AVLnode;
        node.right = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    public inOrderTraversal(node: AVLnode | null): void {
        if (node) {
        this.inOrderTraversal(node.left);
        console.log(node.mark);
        this.inOrderTraversal(node.right);
        }
        }
    public search(node : AVLnode) : boolean
    {
        let bool = false ;
        if (node) {
            this.inOrderTraversal(node.left);
            if(node.mark == node.mark)
            {
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

export default AVLtree;