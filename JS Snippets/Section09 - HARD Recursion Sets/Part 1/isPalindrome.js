/*

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.

1. Write a recursive function that:
    - Input: string
    - Output: boolean
        - True if it reads the same forward and backwards
2. Use cases:
    - The string is empty = false
    - The string is the same forward and back

Examples:

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false

*/
function isPalindrome(str){
    // create a variable to store the initial string
    let initialString = str;

    // create a variable to store the reversed string
    let reverseString = "";

    // create helper function (helperInput of str)
    function helper(helperInput) {
        // create a base case to stop the string reversing
        if (helperInput <= 1) {
            console.log("Reached base case! This is your string: " + helperInput);
            return helperInput;
        }

        return helper(helperInput.slice(1)) + helperInput[0]; // this will produce the reversed string
    }

    // initial call for the recursion
    reverseString = helper(initialString); 
    console.log("Reversed String: " + reverseString);
    
    // for loop to compare the indices of initial string to reversed string
    for (let i = 0; i< reverseString.length; i++) {
        // if something doesn't line up, return false
        if (reverseString[i] !== initialString[i]) {
            console.log("This is not a Palindrome");
            return false;
        }

    }
    console.log("This is a Palindrome");
    return true

}

isPalindrome("hello"); //false
isPalindrome("bannab"); //true

/*
Solution:

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
*/