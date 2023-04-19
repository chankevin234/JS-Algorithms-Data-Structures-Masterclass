/*
collectStrings

Write a function called collectStrings which accepts an object and 
returns an array of all the values in the object that have a typeof string

1. write a recursive function that takes in an object and returns new array of all values 
    in object with typeof 'string'
    - Input: object
    - Output: array

2. Use Cases
    - Object only has 1 value 

*/

function collectStrings(object) {
    // create a new array to store the collected strings
    let newStringArray = [];

    // for in loop to go through the keys of the object 
    for (var key in object) {
        // if the value at the key is an object, recurse
        if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
            newStringArray = newStringArray.concat(collectStrings(object[key]));
        }
        // if the value is typeof string, .push to array
        else if (typeof object[key] === 'string') {
            newStringArray.push(object[key]);
        }
    }
    // end loop

    return newStringArray;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])