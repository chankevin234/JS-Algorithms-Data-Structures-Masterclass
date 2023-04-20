/* write a function called same which takes 2 arrays. 
the function returns true if every value of array1 has a corresponding value squared in array2. 
length of arrays must be the same
*/

function same(array1, array2) {
    if (array1.length !== array2.length) { return false; }

    for (var i = 0; i < array1.length; i++) {
        let correctIndex = array2.indexof(array1[i] ** 2); //checks if the array has a value = to that

        if (correctIndex === -1) { //-1 is the same as 'false'
            return false;
        }
        array2.splice(correctIndex, 1); //remove the value from the array2 now that it is found
    }
    return true;
}

