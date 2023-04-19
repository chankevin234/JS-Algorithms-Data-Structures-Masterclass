/*

Quick Sort - Final
1) 2 Parts:
    - Call the pivot helper function
    - Recursively call the pivot helper on the subarrays on the left/right sides of the 
        returned pivot index

*/
  
function pivot(arr, start=0, end=arr.length-1){
    // SWAP!
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // set the pivot value as index0's value
    var pivot = arr[start];
    // store the current pivot index in a var (tracks where the pivot will end up)
    var swapIdx = start;

    // loop through the array until the startIndex == endIndex
    for(var i = start + 1; i < arr.length; i++){
        // if the value of the pivot > current element, swap the value 
        if(pivot > arr[i]){
            // increment the swapIdx
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    // at the end, swap the pivot (arr[0]) with the swapIdx : swap the starting element (pivot) with the pivot index's element 
    swap(arr,start,swapIdx);

    return swapIdx; // return the pivot index
}

// console.log(pivot([4,6,9,1,2,5,3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
    // base case: when 1 subarray only has 1 element in it?
    // this occurs when left side = right side
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // produces the index of (3) if the array is length 6

        // left side subarray
        quickSort(arr, left, pivotIndex - 1);
    
        // right side subarray
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([4,6,9,1,2,5,3]));