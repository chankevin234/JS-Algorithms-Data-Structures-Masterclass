/*

1) Summary: The "merge" part of MERGESORT, go through two sorted arrays and merge them into 1 sorted array 
    - Inputs: 2 sorted arrays
2) Use Cases:
    - one array is empty, while the other isn't = immediately concat
    - both arrays are empty = return empty array

*/
function merge(arr1, arr2) {
    console.log("Starting merge...");

    // create an empty array (results) and view the smallest values in each input array
    let results = [];

    // create two pointers, one for arr1 and one for arr2
    let pointerA = 0;
    let pointerB = 0;

    // create array lengths
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;

    // while (still values we haven't looked at) 
    while (pointerA < arr1Length && pointerB < arr2Length) {
        // if arr1[i] < arr2[j]
        if (arr1[pointerA] < arr2[pointerB]) {
            // push the value of arr1 onto the empty (results) array, 
            results.push(arr1[pointerA]);
            console.log("pushing on arr1 value");
            // then MOVE on to next value in arr1
            pointerA++;
        }
        // if arr1[i] > arr2[j]
        else if (arr1[pointerA] > arr2[pointerB]) {
            // push the value of arr2 onto the results array,
            results.push(arr2[pointerB]);
            console.log("pushing on arr2 value");
            // then MOVE on to the next value in arr2
            pointerB++;
        }
        // TECHNICALLY NOT NECCESSARY!
        else {
            results.push(arr1[pointerA]);
            results.push(arr2[pointerB]);
            pointerA++;
            pointerB++;
        }
    }
    // once we exhaust one array,
        // push all remaining values from other array into results

    while (pointerA < arr1.length) {
        results.push(arr1[pointerA]);
        pointerA++;
    }

    while (pointerB < arr2.length) {
        results.push(arr2[pointerB]);
        pointerB++;
    }


    console.log(results);
    return results;
}

function main() {
    merge([1,4,6], [1,3,5,7,10,11]);
}

main();