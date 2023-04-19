/*
Flatten:
Write a recursive function called flatten which accepts an array of arrays and 
returns a new array with all values flattened.

1. Create a recursive function that takes in an array of arrays and then flatten the array

2. Use cases: 
    - Array is empty, return []



Examples:
    flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]) // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

*/

function flatten(arr) {
    // base case: exit when the value at the index of the array is no longer an array
    let newArr = []; //creates an empty array that will be returned at the end

    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i])); // recursion is used to go through each individual subarray and adding it to the existing array
        }
        else {
            newArr.push(arr[i]); // pushes on a single element
        }
    }

    return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ]));