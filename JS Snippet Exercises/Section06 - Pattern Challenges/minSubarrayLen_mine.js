/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

    1) Takes in 2 inputs:
        - 1 Array of positive integers
        - 1 positive integer
        return the minimal length of a subarray which sum is >= the integer input, else return 0
    2) Use Cases:
        - Array is empty, return 0
        - there is no subarray that equals or is greater than the integer passed, return 0
        - there is a subarray that >= integer passed

*/

function minSubArrayLen(arr, num) {
    // if arr's length == 0, return 0
    if (arr.length == 0) {
        return 0;
    }

    // create tempSum 
    // let tempSum = arr[0];

    // nested loop1 to go through the array. inc. subarray size until the subarray length > array length
    for (let i = 1; i < arr.length; i++) { // subarray size 
        // nested loop2, inc. the net by the loop1
        
        let tempSum = 0;

        //gives the initial tempSum
        for (let j = 0; j < i; j++) {
            tempSum += arr[j];
        }

        //sliding window for loop
        for (let x = i; x < arr.length; x++){
            tempSum = tempSum - arr[x - i] + arr[x];

            // if a pair summed >= the passed integer, return length of loop1
            if (tempSum >= num) {
                console.log()
                return i; 
            }
        }
        //end loop2
    }
    // end loop1
    return 0;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1