/*

Use Bubble Sort algorithm to sort array by smallest to largest

This will produce undefined

*/

function bubbleSort(arr) {
    // create a temp variable to store the swap
    let temp = arr[0];
    
    // loop with a variable called i at the end of the array
    for (var i = 0; i < arr.length; i++) {
        // inner loop with a varaible called j from beginning till i - 1
        console.log(arr, arr[i], arr[j]);

        for (var j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;   
            }
        }
    
    }
    console.log(arr);
    return arr;
}

bubbleSort([7, 6, 5, 4, 3, 2, 1]);
