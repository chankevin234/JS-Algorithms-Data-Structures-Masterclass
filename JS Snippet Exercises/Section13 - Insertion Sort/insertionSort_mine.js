/*

Insertion Sort - Build up a sorted left half. as you iterate through the array
    insert where the value is supposed to be 

*/

function insertionSort(arr) {
    // start by picking the second element in the array
    let compare = 1;

    // swap first if needed
    // if (arr[compare] < arr[0]) {
    //     var temp = arr[0];
    //     arr[0] = arr[compare];
    //     arr[1] = temp;
    // }

    // compare it to the left adjacent on to determine if a swap should occur
    for (var i = 1; i < arr.length; i++) {
        let compare = i;
        // if it is in the incorrect order iterate through the sorted portion and place element in the correct place
        if (arr[compare] < arr[i-1]) {
            // this loop will be the "sorted section"
            for (var j = 0; j < i - 1; j++ ) {
                // continue to the next element
                if (arr[compare] >= arr[j] && arr[compare] <= arr[j + 1]) {
                    arr.splice(j, 0, arr[compare]);
                }
                console.log(compare, j);

            }

        }
    } // repeat

    console.log(arr);
    return arr
}

insertionSort([5,4,3,2,1]);
