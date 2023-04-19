function sumRange(num) {
    if (num === 1) {
        console.log("Done: Reached BASE CASE!");
        return 1;
    }
    return num + sumRange(num-1); // THE RECURSIVE CALL
}

console.log(sumRange(4));