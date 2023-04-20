/*

The final MergeSort Algorithm (2 Parts):
    - The breaker (splits array recursively into smaller 1 element arrays)
    - The merger (adds back the little arrays together)


*/




function breaker(arr) {
    // break the array into halves until you have arrays that are empty or have 1 element only
    // using recursion, base case is when the length of the array is < 1

    // create an array of arrays (testing)
    var arrayOfArrays = [];
    
    // where is the middle of the array?
    let middle = Math.floor(arr.length / 2);
    
    if (middle < 1) {
        console.log("Slicing is done now");
        return arrayOfArrays;
    }

    let upperSlicedArray = arr.slice(middle);
    // let lowerSlicedArray = arr.slice(0, middle);
    
    return arrayOfArrays.concat(breaker(upperSlicedArray));

    // return array of arrays (each index should be a 1 element array)   

}

console.log(breaker([1,2,3,4,5]));
