/*

stringifyNumbers
Write a function called stringifyNumbers which takes in an object and 
finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!

1. Take in an object and search for keys that have values of type 'number', then convert to string
    - Input: object
    - Output: print object


*/

function stringifyNumbers(object) {
    let newObj = {};

    for (var key in object) {
        if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
            newObj[key] = stringifyNumbers(object[key]);
        }
        else if (typeof object[key] === 'number') { // if it's a number and not an array
            newObj[key] = object[key].toString(); 
        }
        else {
            newObj[key] = object[key];
        }
    }
    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

// Expected output
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
