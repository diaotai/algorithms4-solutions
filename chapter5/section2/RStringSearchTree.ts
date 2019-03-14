class RStringSearchTree {
    public root = new RStringSearchTreeNode();

    public find(key: string): number {
        return this.searchWithKeyAndNode(key, this.root, 0);
    }

    public setKeyValue(key: string, value: number) {
        this.putNode(key, value, this.root, 0);
    }

    public delete(key: string) {
        this.deleteNode(key, this.root, 0);
    }

    private searchWithKeyAndNode(key: string, node: RStringSearchTreeNode, depth: number): number {
        if (!node || !node.value) return -1;
        if (depth === key.length) return node.value;
        const k = key.charCodeAt(depth - 1);
        return this.searchWithKeyAndNode(key, node.next[k], depth + 1);
    }

    private putNode(key: string, value: number, node: RStringSearchTreeNode, depth: number) {
        if (!node) {
            node = new RStringSearchTreeNode();        
        }
        if (key.length === depth) {
            node.value = value;
            return node;
        };
        const k = key.charCodeAt(depth - 1);
        node.next[k] = this.putNode(key, value, node.next[k], depth + 1);
        return node;
    }

    private deleteNode(key: string, node: RStringSearchTreeNode, depth: number) {
        if (!node) return null;
        if (key.length === depth) {
            node.value = -1;
        } else {
            const k = key.charCodeAt(depth - 1);
            node.next[k] = this.deleteNode(key, node.next[k], depth + 1);
        }
        
        if (node.value !== -1) return null;
        
        for (let i = 0; i < 256; i++) {
            if (node.next[i]) return node;
        }

        return null;

    }

}


class RStringSearchTreeNode {
    private static R = 256;
    public value: number = -1;
    public next: RStringSearchTreeNode[] = [];

    constructor () {
        for(let i = 0; i < RStringSearchTreeNode.R; i++) {
            this.next.push(null);
        }
    }
}

(function() {
    const tree = new RStringSearchTree();
    tree.setKeyValue('abc', 3);
    tree.setKeyValue('abcd', 4);
    console.log(tree.find('abc'));
    console.log(tree.find('abcd'));
    tree.delete('abc');
    console.log(tree.find('abc'));
    console.log(tree.find('abcd'));
})()