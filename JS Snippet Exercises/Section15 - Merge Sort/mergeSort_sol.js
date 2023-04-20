/*

Final MergeSort Algorithm - 2 Parts

1) Summary:
    - Part 1: break apart array in half, into smaller arrays. Do this till the little arrays
    are 1 or 0 elements in size
    - Part 2: merge 2 small arrays together. as you merge, sort them.
    merge until the small arrays are back together as 1 

*/



// Merges two already sorted arrays
function merge(arr1, arr2){
    // merge-sorted final array
    let results = [];

    // individual pointers for each of 2 arrays
    let i = 0;
    let j = 0;

    // while at there are still values in one of the arrays, compare!
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    } // end loop once one of the arrays is empty

    // goes through and checks which of the two arrays ran out of values, 
    // then add the remaining values from the array which still has values
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr) {
    // base case
    if (arr.length <= 1) {
        return arr;
    }

    // determine the mid-point of the array to cut
    let middle = Math.floor(arr.length / 2);

    // two pieces (builds up here!)
    let leftSlicedArray = mergeSort(arr.slice(0, middle));
    let rightlicedArray = mergeSort(arr.slice(middle));

    return merge(leftSlicedArray, rightlicedArray);
}

function main(arr) {
    console.log(mergeSort(arr));
}

main([10,24,76,73]); 
                   