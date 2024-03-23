
class AVLnode {
    mark: number;
    right: AVLnode | null;
    left: AVLnode | null;
    height: number;
    private static count : number;
    constructor(mark: number) {
        this.height = 1;
        this.right = null;
        this.left = null;
        this.mark = mark;
        AVLnode.count ++;

    }
    public getNodeCount(): number{
        return AVLnode.count;
    }
}
export default AVLnode;

