/*

Insertion Sort - Solution

*/

function insertionSort(arr) {
    // this loop checks for the items moving to the right
    for (var i = 1; i < arr.length; i++) {
        var currentValue = arr[i]; // value to compare to the sorted half

        // this loop checks the currentVal compared to the sorted items in the bottom half
        for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
            // is the currentVal > than the value in the sorted half?
            // keep swapping till then
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue; // at the end of the first looping, j = -1, so arr[0] = currentVal
        console.log(arr);             
    }
    // console.log(arr);
    return arr;
}

// insertionSort([1,2,9,76, 20]);
insertionSort([20,14,89,76,22]);


// [1, 2, 9, 76, 4] 4 