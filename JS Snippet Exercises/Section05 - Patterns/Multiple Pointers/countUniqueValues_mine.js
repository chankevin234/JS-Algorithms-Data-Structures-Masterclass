/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.

1) Summarize: take in a sorted array and count how many unique values are in the array
2) Input/Outputs
- Input = sorted arr
- Output = integer of unique values (value of pointer1)
3) Write out the psuedo code

*/
function countUniqueValues(arr){
    // if arr is empty, return 0
    if (arr.length == 0) {
        return 0;
    }

    // create 2 pointers
    let anchor = arr[0]; // set pointer1 = index of 0
    let scout = arr[1]; // set pointer2 = index of 1

    // set a scoutPosition
    let anchorPosition = 0;
    let scoutPosition = 1;

    // while loop (pointer2 < length of arr)...
    while (scoutPosition < arr.length) {
        // if value at pointer2 == pointer1, move pointer2 right by 1
        if (scout == anchor) {
            scoutPosition += 1;
            scout = arr[scoutPosition]; // moves to the right
            // console.log(scout);
        }                
        // if value at pointer2 != pointer1, move pointer1 right by 1
        else {
            anchorPosition += 1;
            arr[anchorPosition] = scout;
            anchor = scout;
            // console.log(anchor);
        }
    }
    // return the value of pointer1 + 1
    return anchorPosition + 1;
}

case1 = [1,1,1,1,2,3,4,5,5,6,7]
console.log("The # of unique values = " + countUniqueValues(case1));