/*
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

*/
var counter = 0;

function power(base, exponent) {
    // create base case to end the recursion
    // if exponent < 1 return;
    if (exponent < 1) {
        console.log("You have reached the base case!")
        return 1;
    }
    console.log("Recursion loop: " + counter++);
    return base * power(base, exponent - 1);
    // return base * power(exponent - 1)
}

console.log(power(2, 3));