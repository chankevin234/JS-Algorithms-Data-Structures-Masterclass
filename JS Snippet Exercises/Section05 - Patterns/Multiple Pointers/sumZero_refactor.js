function sumZero(arr) {
    // NOTE: only works if the array is already sorted least to greatest
    // Works as a pincer
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        let sum = arr[leftIndex] + arr[rightIndex];

        // return the two values
        if(sum === 0) {
            return [arr[leftIndex], arr[rightIndex]];
        }

        // move the right pointer towards the middle <--
        else if (sum > 0) {
            rightIndex -= 1;
        }

        // move the left pointer towards the middle -->
        else {
            leftIndex += 1;
        }
    }
    return false;
}