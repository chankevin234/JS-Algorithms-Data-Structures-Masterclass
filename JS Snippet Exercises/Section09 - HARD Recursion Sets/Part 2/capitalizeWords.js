/*

capitalizeWords
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.

1. Take in an array of strings and capitalize all the letters
    - Input: string array
    - Output: new array of capitalized letters

2. Use Cases:
    - Array is empty, return []
    - 

*/

function capitalizedWords(arr) { 
    upperCaseArr = [];
    
    // for loop to go through each string
    for (var value of arr) {
        upperCaseArr.push(value.toUpperCase());
    }
    console.log(upperCaseArr);
    return upperCaseArr;
    
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/*

Solution:

function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
 
}

*/