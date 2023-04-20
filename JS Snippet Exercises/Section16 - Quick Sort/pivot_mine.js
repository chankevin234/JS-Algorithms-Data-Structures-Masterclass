/*

Pivot Helper Function:
This function will choose a pivot value in an unsorted array and 
arrange values greater and less than the pivot so that the pivot is in between

Input: arr, startIndex (0), and endIndex(.length-1)
Output: pivot's index

*/

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
    // take in 3 arguments (arr, startIndex, endIndex), do not create a new array
    // set the pivot value as index0's value
    let pivot = arr[startIndex];

    // store the current pivot index in a var (tracks where the pivot will end up)
    let pivotIndex = startIndex;
    startIndex = 1;
    
    // while? loop through the array until the startIndex == endIndex
    while (startIndex <= endIndex) {
        // if the pivot > current element
        if (pivot > arr[startIndex]) {
            // increment the pivot index var
            pivotIndex++;
            // then swap the current element with the element at the pivot index
            var temp = arr[startIndex];
            arr[startIndex] = arr[pivotIndex];
            arr[pivotIndex] = temp;  
        }
        startIndex++;

        console.log(startIndex, pivotIndex, arr);
    }// end loop

    // swap the starting element (pivot) with the pivot index's element 
    var temp = arr[pivotIndex];
    arr[pivotIndex] = arr[0];
    arr[0] = temp;

    console.log(startIndex, pivotIndex, arr);

    return pivotIndex;

}

// console.log(pivot([5,4,6,1,7,2])); // [1,2,4,5,6,7]
console.log(pivot([9,8,2,1,5,7,6,3])); //