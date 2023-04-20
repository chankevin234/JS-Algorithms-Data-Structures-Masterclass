/*

Selection Sort
    Sorts values based on smallest values

*/

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;  
}

function selectionSort(arr) {
    // store the first element as the smallest value currently
    let smallestValue = arr[0];
    // store the first element's index
    let smallestValueIndex = 0;

    // compare this item to the adjacent items until you find a smaller number
    for (var i = 0; i < arr.length; i++) {
        // create a temp smallest value
        let tempSmallestValue = arr[i];
        let noSwap = false;
        
        console.log("This is the intial smallestValue: " + tempSmallestValue);

        for (var j = i + 1; j < arr.length; j++) {
            // if found, set the NEW smallest number as "minimum" 
            if (arr[j] < tempSmallestValue) {
                tempSmallestValue = arr[j];
                smallestValueIndex = j;
                noSwap = true;
            }
        }// continue through the array till the end
        
        // if the minimum is not the same value you initially had, swap the values
        if (noSwap) {
            swap(arr, i, smallestValueIndex);
        }
        

    } // end loop until you have reached the end of the array
    console.log(arr);
    return arr;
}

selectionSort([5,4,3,2,1]);
selectionSort([12, 5, 43, 24, 9]);
