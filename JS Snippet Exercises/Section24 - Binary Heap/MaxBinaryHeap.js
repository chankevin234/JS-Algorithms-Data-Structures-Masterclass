/*

Binary Heap Implementation - Max Binary Heap

*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        // push the value onto the end of the values property array
        this.values.push(value);
        
        // bubble up function
        this.bubbleUp();
    }

    bubbleUp() {
        // create a variable called index which is the length of the values array - 1
        // determines where the newly inserted item is
        let currentIndex = this.values.length - 1;
        const element = this.values[currentIndex];

        // loop until (value at parentIndex < value at childIndex)
        while (currentIndex > 0) {
            // create a variable called parentIndex which is the floor of (index - 1)/2
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.values[parentIndex];

            // swap values of childIndex and parentIndex and break if element < parent
            if (element <= parentValue) {
                console.log("Finished Swapping...");
                console.log("Final Array after Insert: " + this.values);
                break;
            }

            // set index to be the parentIndex and start over 
            this.values[parentIndex] = element;
            this.values[currentIndex] = parentValue;
            currentIndex = parentIndex;

        }
    }

    extractMax() {
        // swap the first value (root) in values array with the last one (newly added element)
        const oldRoot = this.values[0]; // the MAX value
        const end = this.values.pop(); // pop of the end value
        
        if (this.values.length > 0) {
            // pop the root (new LAST element in array) return it at the end
            this.values[0] = end; // set the root as "end"
            // sink down
            this.sinkDown();
        }
        console.log(oldRoot, this.values);
        return oldRoot;
    }

    sinkDown() {
        let parentIdx = 0; // parentIndex is at idx0 (root) --> this is now the newest added element
        let element = this.values[parentIdx];

        while (true) {
            // find the idx of LEFT child (2*currentIdx + 1) 
            let leftChildIdx = (2 * parentIdx + 1);  
            // find the idx of RIGHT child (2*currentIdx + 2)
            let rightChildIdx = (2 * parentIdx + 2); // ensure that its not out of bounds (null exception) --> does it actually exist? 
            
            // create variables to store left and right child values
            let leftChild = null;
            let rightChild = null;

            // store the index of child you are swapping with 
            let swap = null;

            // ensure that leftChild is not out of bounds (null exception) --> does it actually exist?
            if (leftChildIdx < this.values.length) {
                leftChild = this.values[leftChildIdx];

                // check if the leftChild > parent (swap)
                if (leftChild > this.values[parentIdx]) {
                    swap = leftChildIdx;
                }
            }
            
            // check if there is a right child
            if (rightChildIdx < this.values.length) {
                rightChild = this.values[rightChildIdx];
                // check if the rightChild > parent || rightChild > leftChild
                if (swap === null && rightChild > this.values[parentIdx] || // either swap was never set at leftChild
                    swap !== null && rightChild > leftChild) // OR right > leftChild
                {  
                    swap = rightChildIdx;
                }
            }

            // if left or right child > current element, swap
            // this is the condition to break out of the loop (when there is no right or left child)
            if (swap === null) {
                console.log("Finished Swapping...");
                break;
            }

            // childIdx you swapped to, is the new parentIdx
            this.values[parentIdx] = this.values[swap]
            this.values[swap] = element;
            parentIdx = swap
        } // keep looping until no child is larger than element
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.values);
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(45);

heap.extractMax();
heap.extractMax();


