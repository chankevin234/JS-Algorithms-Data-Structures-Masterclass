/*

Binary Search Tree - Methods of Tree Traversal Implemenation

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
    insert(value) { // insert a new node into the Binary Search Tree
        // create a new node
        let newNode = new Node(value);
        // check if a root exists, if not, root = newNode
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            // start at the root node (set root node)
            let currentNode = this.root;
            // if there is a root, check if the new node > or < root value
            while (true) {
                // if value < root value 
                if (value < currentNode.value) {
                    // check to the root's left for node
                    if (currentNode.left === null) {
                        currentNode.left = newNode // if not, set new Node as root's left prop, break
                        return this;
                    }
                    // if there is, check it to see how value compares 
                    currentNode = currentNode.left;
                } 
                else if (value > currentNode.value) { // if value > root value
                    // check to see if root has a right node
                    if (currentNode.right === null) { // if not, add node as the root's right prop, break
                        currentNode.right = newNode;
                        return this;
                    }
                    // if there is, move to that node and repeat
                    currentNode = currentNode.right;
                }
                else { // if the value = the root's value or inserting duplicates, return undefined
                    return undefined;
                }
            }
        }
    }
    search(value) {
        // start at the root and check if there is a root or not
        if (this.root === null) {
            return false;
        } else { // if there is a root, check if the value of the current node is the value of the one we are looking for 
            let currentNode = this.root;
            while(true) {
                if (currentNode.value === value) {
                    return currentNode;
                } // if current node != value, check if it is > or less than 
                else if (value > currentNode.value)  { // if value > currentNode.value, check node to the right 
                    // if it doesn't exist, done search
                    if (currentNode.right === null) {
                        return false;
                    } else { // else, keep searching
                        currentNode = currentNode.right;
                    }
                } 
                else { // if value < currentNode.value, check node to the left  
                    if (currentNode.left === null) {
                        return false;
                    } else { // else, keep searching
                        currentNode = currentNode.left;
                    }            
                }
            }
        }
    }
    BFS() { // Breadth First Search
        // create a queue (ex. an array) 
        // create another array/var that stores the values of nodes we have already visited
        
        // place the root node into the queue
        // loop while the queue has values in it
            // dequeue node from the queue and push into its value into visited array
                // if there is a .left prop on the node dequeued
                    // add the left node into the queue
                // if this is a .right prop on the node dequeued
                    // add the right node into the queue
        // end loop
        // return the visited array
    }
}

var myBST = new BinarySearchTree();
myBST.root = new Node(10);
myBST.root.right = new Node(15);
myBST.root.left = new Node(7);
myBST.root.left.right = new Node(9);

