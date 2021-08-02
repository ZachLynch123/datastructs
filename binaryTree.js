// js binary search tree


class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        // checks to see if root node is null, if it is the data passed into method is now root node
        if (node === null) {
            this.root = new Node(data);
            return;
        }
        else {
            // 
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    }
                    else if (node.left !== null) {
                        return searchTree(node.left)
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        return;
                    }
                    else if (node.right !== null) {
                        return searchTree(node)
                    }
                }
            }
        }
    }


}
