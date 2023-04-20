/*
Radix Sort
1) This sorting algorithm focuses on the digits of the numbers it is trying to sorting
    as it places these numbers into buckets based on the individual values of its digits
        - ex. 1234, check each digit and group into buckets
    It repeats this process in order to exploit the integer sorting 

*/

import { getDigit, mostDigits } from './radixHelpers.js';

function radixSort(arr) { // define a function that accepts a list of numbers
    // figure out how many digits the larget number has
    let maxDigitCount = mostDigits(arr);

    console.log("maxDigits: " + maxDigitCount);

    // for loop from k = 0 till this largest number of digits (the # of possible digits)
    for (let k = 0; k < maxDigitCount; k++) {
        // create a bucket for each digit (0-9) --> an array of arrays 

        let buckets = Array.from({length: 10}, () => []);
        
        // for each loop to check the values in the original array
        for (let num of arr) {
            // place each number in the corresponding bucket based on its kth digit
            let digit = getDigit(num, k); // checks the num's digit value at kth position

            buckets[digit].push(num); // push the number into the corresponding digit bucket
            console.log("The number was: " + num + " and its digit at "+ k + "th is: " + digit);
            
        }
        console.log(buckets);

        // replace the existing array with values in each bucket (0-9)
        // use .concat so that order of values going in is followed (FIFO)
        arr = [].concat(...buckets);
        
        console.log(arr);

    } // end loop
        
    return arr;            
}

radixSort([200, 2, 1]);