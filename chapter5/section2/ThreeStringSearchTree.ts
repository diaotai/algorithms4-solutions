class ThreeStringSearchTree {
    public root: ThreeStringSearchTreeNode = null;

    public put(key: string, value: number) {
        this.root = this.putNode(key, value, this.root, 0);
    }

    public get(key: string): number {
        return this.getNode(key, this.root, 0);
    } 

    private getNode(key: string, node: ThreeStringSearchTreeNode, depth: number): number {
        if (!node) {
            return -1;
        }
        const k = key[depth];
        if (k > node.keyChar) {
            return this.getNode(key, node.rightNode, depth);
        } else if (k < node.keyChar) {
            return this.getNode(key, node.leftNode, depth);
        } else {
            if (depth === key.length - 1) {
                return node.value;
            }
            return this.getNode(key, node.midNode, depth + 1);
        }
    } 

    private putNode(key: string, value: number, node: ThreeStringSearchTreeNode, depth: number): ThreeStringSearchTreeNode {
        const c = key[depth];
        if (!node) {
            node = new ThreeStringSearchTreeNode();
            node.keyChar = c;
        }
        if (c < node.keyChar) {
            node.leftNode = this.putNode(key, value, node.leftNode, depth);
        } else if (c > node.keyChar) {
            node.rightNode = this.putNode(key, value, node.rightNode, depth);
        } else {
            if (key.length - 1 === depth) {
                node.value = value;
            } else {
                node.midNode = this.putNode(key, value, node.midNode, depth + 1); 
            }
        }
        return node;
    }
}

class ThreeStringSearchTreeNode {
    public keyChar: string;
    public leftNode: ThreeStringSearchTreeNode = null;
    public midNode: ThreeStringSearchTreeNode = null;
    public rightNode: ThreeStringSearchTreeNode = null;
    public value: number = -1;
}

(function() {
    const tree = new ThreeStringSearchTree();
    tree.put('abc', 3);
    tree.put('abcd', 4);
    console.log(tree.get('abc'));
    console.log(tree.get('abcd'));
    console.log(tree.root);
})()