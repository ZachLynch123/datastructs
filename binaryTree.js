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
            // recursive function that searches for null node in tree
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
                else {
                    return null;
                }
            };

            return searchTree(node);
        }
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                //if node has no children
                if  (node.left == null && node.right == null) {
                return null;
            }
            if (node.left == null) {
                return node.right;
            }
            if (node.right == null) {
                return node.left;
            }
            let tempNode = node.right;
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(this.root, data);
        }
    }

    }
}
