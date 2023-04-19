/*
Write a function called sameFrequency (frequency counter)
Given two positive integers, find out if the two numbers have the same frequency of digits. 

Ex. sameFrequency(182,281) // true
    sameFrequency(34,14) // false

    1) Take 2 positive integers and see if the two numbers have the same frequency of digits. 
        - Inputs = 2 integer values; Output = boolean
    2) Use Cases:
        - 2 integers are the same number = true
        - 2 integers have diff length = false
        - 2 integers have same frequency of digits and same length = true
*/

function sameFrequency(num1, num2) {
    // convert the integers to 2 string variables
    let numString1 = num1.toString();
    let numString2 = num2.toString();

    // if the length of the two strings != then return false
    if (numString1.length !== numString2.length) {
        return false;
    }

    // create 2 obj to store the frequency
    let obj1 = {};
    let obj2 = {};

    // for loop through string1 and add to obj1
    for (let i = 0; i < numString1.length; i++) {
        let letter = numString1[i];
        obj1[letter] = (obj1[letter] || 0) + 1;
    }
    // for loop through string2 and add to obj2
    for (let i = 0; i < numString2.length; i++) {
        let letter = numString2[i];
        obj2[letter] = (obj2[letter] || 0) + 1;
    }

    // for loop to compare the keys' frequency
    for (let key in obj1) {
        // if the key doesn't appear in the second obj, return false
        if (!obj2[key]) {
            return false;
        }
        // if the key's frequency is not the same, return false
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(100,100));

