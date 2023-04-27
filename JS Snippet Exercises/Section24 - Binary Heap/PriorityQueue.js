/*

Priority Queue Implementation

*/

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        // create a new node (with a value and a priority)
        let newNode = new Node(val, priority);
        // push the new node onto the bottom of the heap (end of array)
        this.values.push(newNode);
        // bubble up the new node if it has a higher priority (lower num)
        this.bubbleUp();
    }

    bubbleUp() {
        // const length of values
        const length = this.values.length;
        // create a variable called index (length - 1) -> used to determine where the newly inserted node is
        let currIdx = length - 1;
        // create a const to store the value of the pushed element (priority level)
        const current = this.values[currIdx];

        // loop while currentIdx > 0 
        while (currIdx > 0) {
            // create a variable called parentIndex which is the floor of (index - 1)/2
            let parentIdx = Math.floor((currIdx - 1) / 2); // this is the newNode's current Parent
            // set the parentValue 
            let parent = this.values[parentIdx]; 
            // swap the childIdx and parentIdx (based on higher priority)
            if (current.priority >= parent.priority) {
                // break if newNode's priority > parent's
                console.log("Finished Swapping...");
                console.log("Final Array after Enqueuing new Node: " + this.values);
                break;
            } 

            // else SWAP - set the parentIdx as the value of the currIdx
            this.values[parentIdx] = current;
            // set the currIdx (starts at end of arr) as value of the parent
            this.values[currIdx] = parent;
            // set the currIdx = parentIdx
            currIdx= parentIdx;
        } 
    }
    dequeue() {
        // remove the root (highest priority node)
        const highestPriorityNode = this.values[0];
        // set the oldHead (Max Priority) item
        const bubbleDownNode = this.values.pop();
        // set the newest added node
        // check if the values array is empty
        if (this.values.length > 0) {
            // set the last item as the new head node
            this.values[0] = bubbleDownNode;
            // bubble down 
            this.bubbleDown();
        } 
        console.log("Removing: " + highestPriorityNode.val);
        return highestPriorityNode;
    }

    bubbleDown() {
        // create a variable for the HEAD node (parentIdx)
        let parentIdx = 0;
        // create a variable for the length of the values array
        const length = this.values.length;
        // create a const variable for the node we are bubbling down
        const bubbleDownNode = this.values[parentIdx];

        console.log("We are bubbling down: " + bubbleDownNode.val);

        // loop and check the left/right children (swap with the node we are bubbling down)
        while (true) {
            // find the idx of LEFT child
            let leftChildIdx = (2 * parentIdx + 1);
            // find the idx of RIGHT child (if exists)
            let rightChildIdx = (2 * parentIdx + 2);

            // create vars to store the left, right child values
            let leftChild, rightChild = null;

            // store the idx of swapped value 
            let swapIdx = null;

            // check if the LEFT child exists
            if (leftChildIdx < length) {
                // if yes, store the leftChild
                leftChild = this.values[leftChildIdx];
                
                // check if the leftChild has higher priority than parent/const node (node bubbling down)
                if (leftChild.priority < bubbleDownNode.priority) {
                    // if yes, store leftIdx as the idx you will swap at end
                    swapIdx = leftChildIdx;
                }
            }
            
            // check if the RIGHT child exists
            if (rightChildIdx < length) {
                // if yes, store rightChild
                rightChild = this.values[rightChildIdx];
                // check if rightChild higher priority than parent || rightChild higher priority than leftChild
                if (swapIdx === null && rightChild.priority < bubbleDownNode.priority ||
                    swapIdx !== null && rightChild.priority < leftChild.priority)
                {
                    // if yes, store rightIDx as the idx you will swap at end
                    swapIdx = rightChildIdx;
                }
            }
            // break if swap == null --> means no children
            if (swapIdx === null) {
                console.log("Finished Swapping...");
                break;
            }
            // if left/right higher priority than parent node, swap
            // set value of the parent = value of swap (child)
            this.values[parentIdx] = this.values[swapIdx];
            // set value at the swap idx = value of the bubble down node
            this.values[swapIdx] = bubbleDownNode;
            // set parentIdx = swap
            parentIdx = swapIdx;
        } // end loop
    }
}

// let priorityQ = new PriorityQueue();
// console.log(priorityQ.values);
// priorityQ.enqueue("a", 1);
// priorityQ.enqueue("b", 2);
// priorityQ.enqueue("c", 3);
// priorityQ.enqueue("d", 2);
// priorityQ.enqueue("e", 5);

// priorityQ.dequeue();
let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
