/*

Binary Search Algorithm

Write a function called binarySearch which accepts a sorted array and a value and 
returns the index at which the value exists. Otherwise, return -1.

1. Create a function that goes through a sorted array and returns the index at which the target exists (if it does)
2. Use Cases:
    - The array is empty, return -1
    - The array only has 1 value, return -1 or index 0
    - The array contains the target value, return index n
    - The array doesn't contain the target value, return -1

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1

*/

function binarySearch(sortedArr, targetValue) {
    // if arr is empty, return -1
    if (sortedArr.length < 1) {
         return -1;
    }
    // if arr only has 1 value, return -1 or 0
    if (sortedArr.length == 1 && targetValue == sortedArr[0]) {
        return 0;
    }
    // create left pointer, start of the array
    let leftPoint = 0; //index 0
    // create right pointer, end of the array (index n-1)
    let rightPoint = sortedArr.length - 1;
    
    // while left pointer != right pointer position
    while (leftPoint <= rightPoint) {
        // create a middle pointer (length of arr / 2, rounded down)
        let middlePoint = Math.floor((leftPoint + rightPoint) / 2);
        
        // if the middle pointer == targetValue, return index
        if (sortedArr[middlePoint] === targetValue) {
            console.log("Found the target, returning the index!");
            return middlePoint;
        } 

        // if the targetValue > middle pointer, move left pointer down to index below middle pointer        
        else if (targetValue < sortedArr[middlePoint]) {
            console.log("The target is less than the middle point, moving rightPoint down");
            rightPoint = middlePoint - 1; // if the targetValue < middle pointer, move right pointer down to index below middle pointer

        } 
        // if the targetValue > middle pointer, move right pointer up to index above middle pointer
        else {
            console.log("The target is greater than the middle point, moving leftPoint up");
            leftPoint = middlePoint + 1; 
        }
    
    } // end loop
    return -1
}

console.log(binarySearch([1,2,3,4,5],5)); // 1