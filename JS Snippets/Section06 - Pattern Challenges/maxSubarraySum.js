/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700

    1) Given array of ints and a subarray size, fidn the max sum of a subarray of a specific size
    2) Use cases
        - array is smaller than subarray size = false
        - array  

*/

function maxSubarraySum(arr, size) {
    // if array < size
    if (arr.length < size) {
        return null;
    }

    // create maxSum
    let maxSum = 0;
    for (let i = 0; i < size; i++) {
        maxSum += arr[i];
    }
    console.log("Initial max: " + maxSum);
    // create tempSum
    let tempSum = maxSum;

    // loop through the next set of numbers
    // ensure that the loop doesn't loop past the length of the array based on given size
    for (let i = size; i < arr.length; i++) {
        tempSum = tempSum + (arr[i] - arr[i - size]);
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
        console.log(tempSum, maxSum);
        // if the value of tempSum > maxSum, maxSum = tempSum
    }    
    return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2));