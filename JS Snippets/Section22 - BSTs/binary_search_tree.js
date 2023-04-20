/*

Binary Search Tree Implemenation

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert a new node into the Binary Search Tree
    insert(value) {
        // create a new node

        // while (true)
        // start at the root node (set root node)
            // check if a root exists, if not, root = newNode
            // if there is a root, check if the new node > or < root value
                // if value > root value
                    // check to see if root has a right node
                        // if there is, move to that node and repeat 
                        // if not, add node as the root's right prop, break
                // if value < root value 
                    // check to the root's left for node
                        // if there is, check it to see how value compares 
                        // if not, set new Node as root's left prop, break
    }
}

var myBST = new BinarySearchTree();
myBST.root = new Node(10);
myBST.root.right = new Node(15);
myBST.root.left = new Node(7);
myBST.root.left.right = new Node(9);
