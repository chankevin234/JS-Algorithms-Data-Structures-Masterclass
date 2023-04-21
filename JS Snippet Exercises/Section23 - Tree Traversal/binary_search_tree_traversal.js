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
    // Breadth First Search
    BFS() { 
        // create a queue (ex. an array) 
        let queue = [];
        // create another array/var that stores the values of nodes we have already visited
        let visited = [];
        // place the root node into the queue
        let dequeuedNode = this.root;
        queue.push(dequeuedNode);

        // loop while the queue has values in it
        while (queue.length > 0) {
            // dequeue node from the queue at the start and push its value into visited array
            dequeuedNode = queue.shift();
            console.log("Dequeuing: " + dequeuedNode.value);

            visited.push(dequeuedNode.value);
            
            if (dequeuedNode.left) {
                // if there is a .left prop on the node dequeued, add the left node into the queue
                queue.push(dequeuedNode.left);
            } 
            if (dequeuedNode.right) {
                // if there is a .right prop on the node dequeued, add the right node into the queue
                queue.push(dequeuedNode.right); 
            }
            console.log("This is the current queue: " + queue);
            console.log("This is the current visited array: " + visited);
        }
        // end loop
        return visited; // return the visited array
    }
    // Pre-order Depth First Search
    DFSPreOrder() {
        // create a variable to store the values of the nodes visited
        let visited = [];
        // store the root of the BST in var currentNode
        let startNode = this.root;

        // helper funtion that accepts a node
        function traverseHelper(node) {
            // push value of the node into 'Visited Array'
            visited.push(node.value);
            // if node has .left, call the helper with the left prop
            if (node.left) {
                traverseHelper(node.left);
            }
            // if node has .right, call the helper with the right prop
            if (node.right) {
                traverseHelper(node.right);
            } 
        }
        // invoke helper with currentNode
        traverseHelper(startNode);

        // return visited array
        console.log("This is the final visited array: " + visited);
        return visited;
    }
    // Post-Order DFS
    DFSPostOrder() {
        let visited = [];
        let currentNode = this.root;

        function traverseHelper(node) {
            if (node.left) {
                traverseHelper(node.left);
            }
            if (node.right) {
                traverseHelper(node.right);
            }
            visited.push(node.value);
        }
        traverseHelper(currentNode);
        console.log("This is DFSPostOrder Visited: " + visited);
        return visited;
    }
    // In-order DFS
    DFSInOrder() {
        let visited = [];
        let currentNode = this.root;

        function traverseHelper(node) {
            if (node.left) {
                traverseHelper(node.left);
            }
            visited.push(node.value);
            if (node.right) {
                traverseHelper(node.right);
            }
        }
        traverseHelper(currentNode);
        console.log("This is DFSInOrder Visited: " + visited);
        return visited;
    }
}

var myBST = new BinarySearchTree();
myBST.root = new Node(10);
myBST.root.right = new Node(15);
myBST.root.left = new Node(7);
myBST.root.left.right = new Node(9);
myBST.root.left.left = new Node(6);


myBST.BFS();
myBST.DFSPreOrder();
myBST.DFSPostOrder();
myBST.DFSInOrder();

