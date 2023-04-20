/*

Binary Search Tree Implemenation - Recursive

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
    insert(value) {
        var newNode = new Node(value);
        if (traverse(this.root)) { // this is the initial function call
            this.root = newNode;
        }
        function traverse(current){
            if (current === null) return true;
        
            if (newNode.value > current.value) {
                if (traverse(current.right)) current.right = newNode;
            } else if (newNode.value < current.value) {
                if (traverse(current.left)) current.left = newNode;
            }
            console.log("Failed to Add Node");
            return false;
        }
        console.log("Added Node");
        return this;
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


console.log(myBST);