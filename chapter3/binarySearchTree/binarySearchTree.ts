/**
 * 二叉搜索树实现
 */

class TreeNode {
    public key: number;
    public value: any;
    public leftNode: TreeNode = null;
    public rightNode: TreeNode = null;

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

class BinarySearchTree {
    public root: TreeNode;

    public constructor(key: number, value: number) {
        this.root = new TreeNode(key, value);
    }

    public get size(): number {
        return this.root.size;
    }

    public addNode(key: number, value: number) {
        const node = new TreeNode(key, value);
        this.addNodeTo(this.root, node);
    }

    public deleteNode(key: number, node: TreeNode = this.root): TreeNode {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.leftNode = this.deleteNode(key, node.leftNode);
        } else if (key > node.key) {
            node.rightNode = this.deleteNode(key, node.rightNode);
        } else {
            if (node.leftNode === null) {
                return node.rightNode;
            }
            if (node.rightNode === null ) {
                return node.leftNode;
            }
            let nodeBack = node;
            node = this.getMinNode(node.rightNode);
            node.rightNode = this.deleteNode(node.key, nodeBack.rightNode);
            node.leftNode = nodeBack.leftNode;
        }

        return node;
    }

    public print() {
        this.printNodeSubtrees(this.root);
    }

    public rank(key: number, node: TreeNode = this.root): number {

        if (node === null) {
            return 0;
        }

        const leftNodeSize = node.leftNode ? node.leftNode.size : 0;

        if (key === node.key) {
            return leftNodeSize;
        } else if (key < node.key) {
            return this.rank(key, node.leftNode)
        } else {
            return leftNodeSize + 1 + this.rank(key, node.rightNode);
        }
    }

    public select(index: number, node: TreeNode = this.root) : TreeNode {
        if (node === null) {
            return null;
        }

        let leftNodeSize = node.leftNode ? node.leftNode.size : 0;
        let rightNodeSize = node.rightNode ? node.rightNode.size : 0;

        if (index >= leftNodeSize + rightNodeSize + 1) {
            return null;
        }

        if (index < leftNodeSize) {
            return this.select(index, node.leftNode);
        } else if (index === leftNodeSize) {
            return node;
        } else {
            return this.select(index - leftNodeSize - 1, node.rightNode);
        }
    }

    public getMaxNode(node = this.root): TreeNode {
        while (node.rightNode) {
            node = node.rightNode;
        }
        return node;
    }

    public  getMinNode(node = this.root): TreeNode {
        while (node.leftNode) {
            node = node.leftNode;
        }
        return node;
    }

    private printNodeSubtrees(node: TreeNode) {
        if(!node) return;
        console.log(node.key, node.value);
        this.printNodeSubtrees(node.leftNode);
        this.printNodeSubtrees(node.rightNode);
    }

    private addNodeTo(targetNode: TreeNode, newNode: TreeNode):  TreeNode {
        if (targetNode.key > newNode.key) {
            if(targetNode.leftNode) {
                targetNode.leftNode = this.addNodeTo(targetNode.leftNode, newNode);
            } else {
                targetNode.leftNode = newNode;
            }
        } else if(targetNode.key < newNode.key) {
            if (targetNode.rightNode) {
                targetNode.rightNode = this.addNodeTo(targetNode.rightNode, newNode);
            } else {
                targetNode.rightNode = newNode;
            }
        } else {
            targetNode.value = newNode.value;
        }
        return targetNode; 
    } 
    
}


(function () {
    const tree = new  BinarySearchTree(4,5);
    tree.addNode(7,7);
    tree.addNode(2,9);
    tree.addNode(6,6);
    tree.addNode(1, 1);
    console.log(tree.root);
    console.log(tree.size);

    console.log(tree.getMinNode() === tree.select(0));
    console.log(tree.select(4) === tree.getMaxNode());

    console.log(tree.rank(7) === 4);

    tree.deleteNode(1);
    tree.deleteNode(7);

    console.log('~~~~~~~~~~~~~');

    console.log(tree.root);
})()