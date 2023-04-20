/*

Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.

    1. Create a function that takes in 1 array and 1 method (callback). then go thru the array to see if any values, 
        when plugged into the callback, return true, else return false
    2. Use Cases
        - the array is empty, return false
        - a value in the array returns true when plugged into the callback
            - go through the whole array, none of the values return true when plugged into the callback method, return false
      

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

*/



function someRecursive(arr, callback){
    // add whatever parameters you deem necessary - good luck!
    // use case 1: arr.length === 0
    if (arr.length === 0) {
        console.log("None of the values in the array returned true in the callback");
        return false;
    }

    // use case 2: arr[0], when plugged into callback, returns true
    if (callback(arr[0])) {
        console.log("A value in the array returned true in the callback");
        return true;
    }
    
    // use case 3: went through the whole array and none of the values returned true in callback, return false
    return someRecursive(arr.slice(1), callback);
}