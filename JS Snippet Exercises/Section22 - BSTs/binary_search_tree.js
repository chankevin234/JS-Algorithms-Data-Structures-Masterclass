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
    insert(value) { // insert a new node into the Binary Search Tree
        // create a new node
        let newNode = new Node(value);

        // check if a root exists, if not, root = newNode
        if (this.root === null) {
            this.root = newNode;
            console.log("Added a new TOP root: " + newNode.value);
            return this;
        } else {
            // start at the root node (set root node)
            let currentNode = this.root;
            let counter = 1;            
            // if there is a root, check if the new node > or < root value
            while (true) {
                // if value < root value 
                if (value < currentNode.value) {
                    // check to the root's left for node
                    if (currentNode.left === null) {
                        currentNode.left = newNode // if not, set new Node as root's left prop, break
                        console.log("Added a node at the root/currentNode's left: " + newNode.value);
                        return this;
                    }
                    // if there is, check it to see how value compares 
                    currentNode = currentNode.left;
                    console.log("Searching next level... \n" + counter++);
                } 
                else if (value > currentNode.value) { // if value > root value
                    // check to see if root has a right node
                    if (currentNode.right === null) { // if not, add node as the root's right prop, break
                        currentNode.right = newNode;
                        console.log("Added a node at the root/currentNode's right: " + newNode.value);
                        return this;
                    }
                    // if there is, move to that node and repeat
                    currentNode = currentNode.right;
                    console.log("Searching next level... \n" + counter++);
                }
                else { // if the value = the root's value or inserting duplicates, return undefined
                    console.log("Invalid Value...");
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
                    console.log("Found " + value);
                    return currentNode;
                } // if current node != value, check if it is > or less than 
                else if (value > currentNode.value)  { // if value > currentNode.value, check node to the right 
                    // if it doesn't exist, done search
                    if (currentNode.right === null) {
                        console.log("Couldn't find the value");
                        return false;
                    } else { // else, keep searching
                        currentNode = currentNode.right;
                    }
                } 
                else { // if value < currentNode.value, check node to the left  
                    if (currentNode.left === null) {
                        console.log("Couldn't find the value");
                        return false;
                    } else { // else, keep searching
                        currentNode = currentNode.left;
                    }            
                }
            }
        }
    }
}

var myBST = new BinarySearchTree();
myBST.root = new Node(10);
myBST.root.right = new Node(15);
myBST.root.left = new Node(7);
myBST.root.left.right = new Node(9);

myBST.insert(6);
myBST.insert(20);
myBST.insert(18);
myBST.insert(18);

myBST.search(6);
myBST.search(18);
myBST.search(14);



console.log(myBST);
