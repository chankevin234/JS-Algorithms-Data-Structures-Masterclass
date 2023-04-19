/*
Radix Helpers:
1) getDigit(num, place)
2) digitCount(num) 
3) mostDigits(arr)

*/

export function getDigit(num, i) {
    let digitValue = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    // Math.abs --> makes neg values into pos

    return digitValue;
    // ex. 7234 / 100 % 10
}

export function digitCount(num) {
    if (num == 0) {
        return 1;
    }
    let count = Math.floor(Math.log10(Math.abs(num))) + 1;

    return count; 
}

export function mostDigits(numArray) {
    let maxDigits = 0;

    for (let i = 0; i < numArray.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(numArray[i]));
    }

    return maxDigits;
}