// SINGLY LINKED LIST CLASS

/*
Node Class
    - piece of data -> value
    - references the next node -> next
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    toString() {
        console.log(
            "Selected Node: \n Value: " + 
                this.value + 
            "\n Next: " + 
                this.next
        );
    }
}

class SinglyLinkedList {
    constructor() {
        // SLL needs head, tail, length
        this.head = null;
        this.tail = null;
        this.length = 0;        
    }
    toString() {
        console.log(
            "Singly Linked List: \n Head: " + 
                this.head.value + 
            "\n Tail: " + 
                this.tail.value + 
            "\n Length: " + 
                this.length
        );
    }
    /* 
    void methods
        - PUSH() creates a new node at the end (tail)
        - POP()
        - SHIFT()
        - UNSHIFT()
        - GET()
        - SET()
        - INSERT()
        - REMOVE()
        - REVERSE()
    */
    push(value) { // creates a new node at the end (tail)
        // accept a value
        // create a new node using the value passed to the function
        let newNode = new Node(value);
        
        // if the SLL doesn't have a head/NULL
        if (!this.head) {
            // set new node as head and tail
            this.head = newNode;
            this.tail = this.head;
        }
        // else 
        else {
            // set the new node as the 'next' property on the tail node
            this.tail.next = newNode;
            // set the new node as the 'tail' property of the SLL
            this.tail = newNode;
        }
        // increment this.length++
        this.length++;
        console.log("Added new Node: " + newNode.value);
        return this;
    }

    pop() {
        // return undefined if the list is empty
        if (!this.head) {
            return undefined;
        }
        // loop through the list from the head until you reach the node before tail
        let currentNode = this.head;
        let newTail = currentNode;

        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        // set the value of 'oldTail' = currentNode
        let oldTail = currentNode;
        // set the value of this.tail to be the 2nd last node (newTail)
        this.tail = newTail;
        // set the this.next property of the 2nd to last node to be 'null'
        this.tail.next = null;
        // this.length--;
        this.length--;
        // if the SLL is empty, set the head and tail should be null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // return this.value of the removed node
        console.log("This is the value of the removedNode: " + oldTail.value);
        return oldTail;
    }

    shift() { //remove node from the beginning
        // if no nodes, return undefined
        if (this.length == 0 || !this.head) {
            return undefined;
        }
        // store the current head property in a var
        let oldHead = this.head;

        // set the this.head property to the current head's next property (2nd node)
        this.head = oldHead.next;

        // decrement length by 1
        this.length--;

        // since the tail is the new head, set the old tail to null
        if (this.length === 0) {
            this.tail = null;
        }

        // return the value of the node removed
        console.log("This was the old head: " + oldHead.value);
        return oldHead.value;
    }

    unshift(value) { // add a new node at the beginning 
        // accept a value (for new node)
        // create a new node with the value passed in
        let newNode = new Node(value);

        // if this.head == null, set head and tail = new node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            // set new node's .next to be current head property
            newNode.next = this.head;
            // set the head property on the list = new node
            this.head = newNode;
        } 
        // increment length
        this.length++;
        // return the linked list
        return this;
    }

    get(index) { // retreive a node by its index
        // if the index < 0 or > this.length, return null
        if (index < 0 || index >= this.length) {
            console.log("Invalid Index");
            return null;
        }
        // loop through the list until you reach that index
        let currentIndex = 0;
        let currentNode = this.head;
        while(currentIndex < index) {
            currentNode = currentNode.next;        
            currentIndex++;
        }
        console.log("The node at index " + index + " is " + currentNode.value);
        // return the node at that index
        return currentNode;
    }

    set(value, index) {
        // accept a value and an index
        // use get() to find the node at the index
        // if get() returns null, return false;
        let foundNode = this.get(index);

        // if node is found, set the value of that node to be the passed in value, then return true;
        if (foundNode) {
            foundNode.value = value;        
            return true;
        }
        // else false        
        return false;
    }

    insert(index, value) { //add a new node at a specific position
        // if the index given is < 0 or > this.length, return false
        if (index < 0 || index > this.length) {
            return false;
        }        
        // if the index == this.length, use push() -> add the new node to the end of the list
        if (index == this.length) {
            this.push(value);
            return true;
        }
        // if the index == 0, use unshift(), add new node at the beginning
        if (index == 0) {
            this.unshift(value);
            return true;
        }
         
        // use the get() to access node at (index - 1) -> 1 before the index you want
        let newNode = new Node(value);
        let prevNode = this.get(index - 1);

        // set the .next of new ndoe to be the previous .next
        newNode.next = prevNode.next;

        // set the .next of existing node to the new node
        prevNode.next = newNode;
        
        console.log("Inserted new node at Index: " + index + "\nValue: " + newNode.value);

        // increment this.length
        this.length++;
        return true;
    }

    remove(index) { // remove a node at a specific index in the SLL
        // if the index < 0 || index > this.length, return undefined
        if (index < 0 || index > this.length) {
            return undefined;
        }
        // if the index == this.length - 1 (tail of SLL), use pop()
        if (index == this.length - 1) {
            this.pop();
            return true;
        }
        // if the index == 0 (head), use shift()
        if (index == 0) {
            this.shift();
            return true;
        }
        // else, use get() to access the node at index - 1 (prevNode)
        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;

        // set prevNode.next = the removeNode.next
        prevNode.next = removedNode.next;
        this.length--;

        console.log(removedNode.value);
        return removedNode.value;
    }

    reverse() {
        // create a variable called currNode = this.head
        let currentNode = this.head;

        // swap the head and tail
        this.head = this.tail;
        this.tail = currentNode;

        // create a variable called nextNode
        let nextNode;
        // create a variable called prevNode
        let prevNode = null;

        // loop through the Linked List
        for (let i = 0; i < this.length; i++) {
            // set nextNode (leftside) = .next of currentNode
            nextNode = currentNode.next;
            // set the .next (to the left) of current to be the prevNode 
            currentNode.next = prevNode;

            // move over by 1 node
            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this;            
    }

    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
    }
}

// MAIN
var mySinglyLinkedList = new SinglyLinkedList();

// push example
mySinglyLinkedList.push("hello");
mySinglyLinkedList.push("goodbye");
mySinglyLinkedList.push("next");
mySinglyLinkedList.push("thanks");


// pop example
mySinglyLinkedList.pop();

// shift()
// mySinglyLinkedList.shift();

// unshift() 
mySinglyLinkedList.unshift("UNSHIFT");

// get() 
mySinglyLinkedList.get(3);

// set() 
mySinglyLinkedList.set("new!", 2);

// insert()
mySinglyLinkedList.insert(2, "INSERT");

// remove()
mySinglyLinkedList.remove(2);

// toString
mySinglyLinkedList.print();
mySinglyLinkedList.reverse();
mySinglyLinkedList.print();

mySinglyLinkedList.toString();



