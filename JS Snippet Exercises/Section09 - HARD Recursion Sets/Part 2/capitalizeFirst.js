/*
CapitalizeFirst

Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.

1. Write a recursive function to take in an array of strings and then capitalize each string
2. Use Cases
    - Array is empty, return []


*/

function capitalizeFirst(stringArray) {
    // create a new capitalizedArray = []

    let capitalizedArray = [];
    // foreach loop 
    for (let string of stringArray) {
        //string.charAt(0).toUpperCase() + string.slice(1)
        capitalizedArray.push(string.charAt(0).toUpperCase() + string.slice(1));
    }    
    // base case is when the for loop ends

    return capitalizedArray;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
