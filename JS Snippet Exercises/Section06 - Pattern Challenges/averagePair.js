/* 

Multiple Pointers - averagePair
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

    1) go through an array and check if there are any pairs in the array which average 
        to the target value
    2) Use Cases
        - Array is empty     // if the average of a pair is > target, move the rightPointer toward middle
    // else if the avg of a pair is < target, move the leftPointer toward middle
    // else return true (found the pair)

*/

function averagePair(arr, target) {
    // ensure that the array is not len = 0
    if (arr.length === 0) {
        return false;
    }
    // create 2 pointers (right and left) for sides/ends of array
    let rightPointer = arr.length - 1;
    let leftPointer = 0;

    // while rightPointer < leftPointer, keep looping
    while (leftPointer < rightPointer) {
        // if the average of a pair is > target, move the rightPointer toward middle
        let avg = (arr[leftPointer] + arr[rightPointer]) / 2;
        if (avg > target) {
            rightPointer -= 1;
        }
        // else if the avg of a pair is < target, move the leftPointer toward middle
        else if (avg < target) {
            leftPointer += 1;
        }
        // else return true (found the pair)
        else {
            return true;
        }
    }
    return false;    
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));