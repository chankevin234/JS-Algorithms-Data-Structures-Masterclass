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
 
    insert(val) {
        this.root = (function recursiveInsert(root) {
            if (!root) return new Node(val);
            if (val < root.value) root.left = recursiveInsert(root.left);
            else if (val > root.value) root.right = recursiveInsert(root.right);
            return root;
        })(this.root);
        return this;
    }
 
    find(val) {
        return (function recursiveFind(root) {
            if (!root) return undefined;
            if (val === root.value) return root;
            if (val < root.value) return recursiveFind(root.left);
            if (val > root.value) return recursiveFind(root.right);
        })(this.root);        
    }
 
    contains(val) {
        return (function recursiveContains(root) {
            if (!root) return false;
            if (val === root.value) return true;
            if (val < root.value) return recursiveContains(root.left);
            if (val > root.value) return recursiveContains(root.right);
        })(this.root);
    }
}