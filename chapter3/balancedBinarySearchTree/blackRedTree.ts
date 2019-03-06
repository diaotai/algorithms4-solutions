class BRTreeNode {
    public key: number;
    public value: any;
    public leftNode: BRTreeNode = null;
    public rightNode: BRTreeNode = null;
    public isRed: boolean = true;

    public constructor(key: number, value: any) {
        this.key = key;
        this.value = value;
    }
    
    public get size(): number {
        let leftNodeSize = 0, rightNodeSize = 0;
        if (this.leftNode) { 
            leftNodeSize = this.leftNode.size;
        }
        if (this.rightNode) {
            rightNodeSize = this.rightNode.size;
        }
        return leftNodeSize + rightNodeSize + 1;    
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }
}


class BRTree {
    public root: BRTreeNode;

    public select(key: number): BRTreeNode {
        let node = this.root;
        while (node) {
            if (node.key < key) {
                node = node.rightNode;
            } else if (node.key > key) {
                node = node.leftNode; 
            } else {
                return node;
            }
        }
        return null;
    }

    public insert(key: number, value: any) {
        this.root = this.put(this.root, key, value);
        this.root.isRed = false;
    }

    private put(node: BRTreeNode, key: number, value: any): BRTreeNode {
        if(!node) return new BRTreeNode(key, value);
        if (node.key > key) {
            node.leftNode = this.put(node.leftNode, key, value);
        } else if (node.key < key) {
            node.rightNode = this.put(node.rightNode, key, value);
        } else {
            node.value = value;
        }
     
        if (!this.isNodeRed(node.leftNode) && this.isNodeRed(node.rightNode)) {
            node = this.leftRoate(node);
        }
        if (this.isNodeRed(node.leftNode) && this.isNodeRed(node.leftNode.leftNode)) {
            node = this.rightRoate(node);
        }
        if (this.isNodeRed(node.leftNode) && this.isNodeRed(node.rightNode)) {
            this.flipColors(node);
        }
        return node;
    }

    private isNodeRed(node: BRTreeNode): boolean {
        if (!node) return false;
        return node.isRed;
    }

    private leftRoate(node: BRTreeNode): BRTreeNode {
        const newRoot = node.rightNode;
        node.rightNode = newRoot.leftNode;
        newRoot.leftNode = node;
        newRoot.isRed = node.isRed;
        node.isRed = true;
        return newRoot;
    }

    private rightRoate(node: BRTreeNode): BRTreeNode {
        const newRoot = node.leftNode;
        node.leftNode = newRoot.rightNode;
        newRoot.rightNode = node;
        newRoot.isRed = node.isRed;
        node.isRed = true;
        return newRoot;
    }

    private flipColors(node: BRTreeNode): BRTreeNode {
        node.leftNode.isRed = false;
        node.rightNode.isRed = false;
        node.isRed = true;
        return node;
    }
}

(function() {
    const tree = new BRTree();
    tree.insert(3,3);
    console.log(tree.root);
    tree.insert(5, 5);
    console.log(tree.root);
    tree.insert(1, 1);
    console.log(tree.root);
})()