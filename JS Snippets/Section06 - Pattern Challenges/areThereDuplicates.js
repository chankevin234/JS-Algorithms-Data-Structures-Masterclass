/* 
Frequency Counter: 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

    1) Go through array of incoming values and see if there are repeats
    2) Use Cases:
        - All the values are unique = false
        - there are repeats = true
*/

function areThereDuplicates() {
    // take in arguments
    let numbers = arguments; //array-like of incoming n values 

    // create obj for tracking frequency
    let obj = {};

    // for loop to add arguments to the obj
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        console.log(num);
        obj[num] = (obj[num] || 0) + 1;
    }

    // for each loop through the obj to see if there are any counters > 1
    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 2));