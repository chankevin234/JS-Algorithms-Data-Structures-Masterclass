/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
Ex:
    productOfArray([1,2,3]) // 6
    productOfArray([1,2,3,10]) // 60

    1) Take in an array of numbers and return the product of all those numbers


*/

function productOfArray(arr) {
    // define a product to return at the end
    let product = 1;
    let counter = 0;

    function helper(helperInputArray) {
        // helperInput is the array

        // create a base case
        if (helperInputArray.length == 0) {
            console.log("You have reached the base case!");
            return;
        }

        console.log("Recursion Loop: " + counter++);
        product = product * helperInputArray[0]; 
        
        helper(helperInputArray.splice(1));

        // return the value of 
    }

    helper(arr); // start the helper function
    
    return product;

}

console.log(productOfArray([1,2,3]));