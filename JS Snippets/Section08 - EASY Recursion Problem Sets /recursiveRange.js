/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed 
to the function 

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

    1) create a recursive function that takes a number and adds all the numbers between it and 0

*/

function recursiveRange(num) {
    // create a base case
    if (num < 1) {
        return 0;
    }

    return num + recursiveRange(num - 1)
}
