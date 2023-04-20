// Merges two already sorted arrays
function merge(arr1, arr2){
    // merge-sorted final array
    let results = [];

    // individual pointers for each of 2 arrays
    let i = 0;
    let j = 0;

    // while at there are still values in one of the arrays, compare!
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    } // end loop once one of the arrays is empty

    // goes through and checks which of the two arrays ran out of values, 
    // then add the remaining values from the array which still has values
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

                   