// Doubly Linked List

class Node {
    // Value, next, previous
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    // tail, head, length
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        // create a new node with the value passed to the function
        let newNode = new Node(value);
        
        // if the this.head = null
        if (!this.head) {
            // set the head and tail = new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // set the next property on the old tail node = new node
            let oldTail = this.tail;
            oldTail.next = newNode;
            // set the prev property of the new node = to the old tail
            newNode.prev = oldTail;
            // set the new tail = new node
            this.tail = newNode;
        }
        // increment this.length
        this.length++;
        return this;
    }
    pop() {
        // check if no head
        if (!this.head || this.length === 0) {
            return undefined;
        }
        // store the current tail (removeNode) in a var to return
        let removeNode = this.tail;
        // if this.length = 1, set head and tail = null
        if (this.length === 1) {
            this.head = null;
            this.tail = null; 
        } else {
            // update the tail to be previous node
            this.tail = removeNode.prev;
            // set the newTail's next to null
            this.tail.next = null;
            removeNode.prev = null; // lingering connect
        }
        this.length--;
        return removeNode;
    }
    shift() {
        // if this.length = 0, return undefined
        if (this.length === 0) {
            return undefined;
        }
        // store the current head in oldHead var
        let oldHead = this.head;
        // if length = 1
        if (this.length === 1) {
            // set the head and tail = null
            this.head = null;
            this.tail = null;
        } else {
            // update the head to the this.head.next
            this.head = oldHead.next;
            // set the new head's .prev = null
            this.head.prev = null;
            // set old head.next = null
            oldHead.next = null;
        }
        // decrement
        this.length--;
        // return oldhead
        return oldHead;
    }
    unshift(val) {
        // create a new node with value passed in
        let newNode = new Node(val);
        // if the length === 0
        if (this.length === 0) {
            // set head = newNode, set tail = newNode
            this.head = newNode;
            this.tail = newNode;            
        } else {
            // create oldHead var
            let oldHead = this.head;
            // set .prev property of oldHead = newNode
            oldHead.prev = newNode;
            // set .next property of newNode = oldHead
            newNode.next = oldHead;
            // set this.head = newNode
            this.head = newNode;
        }
        // increment
        this.length++;
        // return this
        return this;
    }
    get(index) {
        // if index < 0 or >= this.length, return null
        if (index < 0 || index >= this.length) {
            return null;
        }
        // if the index <= length/2
        if (index <= this.length/2) {
            // loop through list starting at head towards the middle
            let currentNode = this.head;
            for (let i = 0; i < this.length - 1; i++) {
                if (i === index) {
                    // return node
                    console.log(currentNode.val);
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        } else {
            // loop through list starting at tail towards middle
            let currentNode = this.tail;
            for (let i = this.length - 1; i >= 0; i--) {
                if (i === index) {
                    console.log(currentNode.val);
                    return currentNode;
                }
                currentNode = currentNode.prev;
            }
        } 
    }
    set(index, val) {
        // create a var = result of get method at given index
        let foundNode = this.get(index);
        // if get() is true
        if (foundNode != null) {
            // set value of that node = value passed in
            foundNode.val = val;
            console.log("New value: " + foundNode.val);
            return true;
        } 
        // else return false
        return false;
    }
    insert(index, val) {
        // if index < 0 || index >= length
        if (index < 0 || index >= this.length) {
            return false
        }
        // if index = 0, unshift(), return true
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        // if index == length - 1, push(), return true 
        if (index === this.length - 1) {
            this.push(val);
            return true;
        }
        // use get() to access (index - 1) = prevNode (aka beforeNode)
        let foundNode = this.get(index - 1);
        let newNode = new Node(val);
        let nextNode = foundNode.next;

        // set the .next of prevNode (found) = newNode
        foundNode.next = newNode;
        // set the .prev of newNode = prevNode
        newNode.prev = foundNode;
        // set the .next of newNode = prevNode's old .next
        newNode.next = nextNode;
        // set the .prev of prevNode's old .next = newnode
        nextNode.prev = newNode;
        
        this.length++;
        return true;
    }
    remove(index) {
        // if index < 0 || index >= length, return undefined
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        // if index === 0, shift()
        if (index === 0) {
            this.shift();
            return true;
        }
        // if the index = length - 1, pop()
        if (index === this.length - 1) {
            this.pop();
            return true;
        }
        // use get() to retrueve removeNode
        let removeNode = this.get(index);
        let beforeNode = removeNode.prev;
        let afterNode = removeNode.next;
        
        // update .next and .prev of beforeNode and afterNode to disconnect removeNode
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // set .next and .prev of removeNode = null
        removeNode.next = null;
        removeNode.prev = null;

        this.length--;
        return removeNode;
    }
    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let nextNode = null;
        let prevNode = null;

        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            
            prevNode = currentNode;
            currentNode = nextNode; 
        }

        return this;
    }
}

function main() {
    let myDoublyLinkedList = new DoublyLinkedList();
    myDoublyLinkedList.push("Harry")
    myDoublyLinkedList.push("Ron")
    myDoublyLinkedList.push("Hermione")
    // console.log(myDoublyLinkedList.head.value);
    myDoublyLinkedList.get(2);
    myDoublyLinkedList.set(2, "Voldemort");

}

main();