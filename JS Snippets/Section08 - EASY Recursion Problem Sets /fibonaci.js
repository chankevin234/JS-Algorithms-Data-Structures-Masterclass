/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
and where every number thereafter is equal to the sum of the previous two numbers.

Examples:
    fib(4) // 3
    fib(10) // 55
    fib(28) // 317811
    fib(35) // 9227465

*/

function fib(nthNum) {
    // create a value
    var fibValue = 0;

    function helper(helperInput) {
        // create a base case
        if (helperInput <= 2) {
            console.log("You have reached the base case!");
            return 1; 
        }
        fibValue = helper(helperInput - 1) + helper(helperInput - 2);
        //fib(x) = fib(n-1) + fib(n-2);

    }

    helper(nthNum);

    return fibValue;
}

console.log(fib(4)); // 3