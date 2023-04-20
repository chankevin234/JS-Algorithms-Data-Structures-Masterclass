function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    // USES 2 Objects to count the values
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //these two for loops are used to check the frequency of certain values appearing
    // ex. how many times does 1 show up in array1? or how many times does 5 show up in array2?
    for(let val of arr1){ //(FOREACH)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 // either the current # of that value or 0
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    //print out the two obj containing freq. a value pops up
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            // CHECKS: does the value of the key^2 in obj1 exist in obj2 
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            // CHECKs: if the first statement is true, how many times does value occur?
            // Frequency of the value
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]));