/*
Multiple Pointers:

Write a function called isSubsequence which takes in two strings and 
checks whether the characters in the first string form a subsequence of the characters 
in the second string. 
In other words, the function should check whether the characters in the first string 
appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

    1) check 2 strings to see if the first string appear somewhere in the second string
        without their order changing
    2) Use Cases
        - two strings do not start with the same character = false
        - string2 is shorter than string1 = false
        - string1 shows up in string2 in order

*/

function isSubsequence(string1, string2) {
    // create 2 pointers, one as an anchor (for str1) and one as a scout (for str2) 
    let anchor = 0;
    // let scout = 0;

    // for loop until the scout goes through str2 fully
    for (let i = 0; i < string2.length; i++) {
        // if the anchor's value = scout's value, move both anchor and scout to next letter
        if (string2[i] === string1[anchor]) {
            anchor += 1;
        }

        // if the anchor has reached the end of str1, it means it did exist in str2
        if (anchor === string1.length) {
            console.log("This is true");
            return true;
        }
    }
    // end loop
    return false
}

console.log(isSubsequence('abc', 'abc'));