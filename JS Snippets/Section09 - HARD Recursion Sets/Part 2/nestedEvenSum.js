/*
Nested Even Sum

Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object which may contain nested objects.

1. create a recursive function that takes in an object that contains values. then add the objects' values if they are even
  - Input: 1 Object
  - Output: integer

2. Use Cases
  - Object is empty, return 0

*/

function nestedEvenSum (object) {
  // create a total variable
  let total = 0;

  // base case should end the for each key loop
  for (var key in object) {
    // if the value is an object,
    if (typeof object[key] === 'object') {
      // console.log(Object.values(object));

      // recurse till you find just a value
      total += nestedEvenSum(object[key]);      
    }
    else if (typeof object[key] === 'number' && object[key] % 2 == 0) {
      // if the value is even, add it to the total  
      // console.log("Found an even number!");
      total += object[key];
    }
    // else {
    //   console.log("This is an odd number!");
    // }
  }
  return total;
}

// Objects
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
nestedEvenSum(obj2); // 10