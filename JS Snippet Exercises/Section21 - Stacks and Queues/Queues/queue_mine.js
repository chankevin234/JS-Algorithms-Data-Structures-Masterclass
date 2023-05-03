/*
Queue Class
- utilize Linked Lists to implement this data structure
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        // accept a value
        // create a new node 
        let newNode = new Node(value);
        // if no nodes in the queue, set newNode = this.first and this.last
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else { 
            // set current this.last's .next as newNode 
            this.last.next = newNode;
            // set this.last to be the newNode
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue() {
        // if no this.first, return null
        if (!this.first) {
            return null;
        }
        // store this.first in a var
        let dequeueNode = this.first;
        // check if there is only 1 node (first = last)
        if (this.first === this.last) {
            // if true, set first and last = null
            this.first = null;
            this.last = null;
        } else {
            // if more than 1 node,
            // set this.first = this.first.next
            this.first = dequeueNode.next; // sets the next node (to the right) as the new first
        }
        // decrement
        this.size--;
        // return value of dequeued Node
        return dequeueNode.value;
    }
}