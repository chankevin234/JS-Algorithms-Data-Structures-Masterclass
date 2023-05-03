/*
Stack Class
- utilize Linked Lists to implement this data structure
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class Stack {
    constructor() {
        // similar to SLL's tail and head
        this.first  = null;
        this.last = null;
        this.size = 0;
    }

    push(value) { // accept a value
        // create a new node(item) with that value
        let newNode = new Node(value);
        // if no nodes in the stack,
        if (!this.first || this.size === 0) {
            // set the this.first and this.last to = new node
            this.first = newNode;
            this.last = newNode;
        } else { // if more than 1 node,
            // create a var that stores the current first prop on the stack
            let previousNode = this.first;
            // reset the first property to be the new node
            this.first = newNode;
            // set the .next prop on the new node to the previously created node 
            newNode.next = previousNode;
        }
        // increment size
        this.size++;
        console.log(this.size);
        return this.size;
    }

    pop() {
        // if no nodes in the stack, return null
        if (this.size === 0) {
            return null;
        }
        // create a temp var to store the first prop of the stack in
        let removedNode = this.first;
        // if only 1 node, set this.first and this.last = null
        if (this.first === this.last) {
            // this.first = null;
            this.last = null;
        } else { // else (more than 1 node)
            // set this.first = currentFirstNode.next -> current first node = removedNode
            this.first = removedNode.next;
        }
        // Decrement size
        this.size--;
        // Return removedNode.value
        console.log(removedNode.value);
        return removedNode.value;
    }
}

// var myStack = new Stack();
// myStack.push("FIRST");
// myStack.push("SECOND");
// myStack.push("THIRD");

// myStack.pop();
// myStack.pop();
// myStack.pop();


