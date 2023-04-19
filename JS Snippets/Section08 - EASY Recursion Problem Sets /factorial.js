/*
Write a function factorial which accepts a number and returns the factorial of that number. 
A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, 
because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1

    1) create a recursive function that takes in a number and returns its factorial
        - input = num
        - output = num * (num - 1) ** n
    2) use cases
    Examples:
        //factorial(1) // 1
        // factorial(2) // 2
        // factorial(4) // 24
        // factorial(7) // 5040

*/

var counter = 0;

function factorial(num) {
    // create a base case for when the factorial integer has reached 1
    if (num < 1) { 
        console.log("You have reached the base case");
        return 1; // zero factorial is ALWAYS 1
    }

    console.log("Recursive loop: " + counter++);
    // return
    return num * factorial(num - 1);
}

console.log(factorial(4));