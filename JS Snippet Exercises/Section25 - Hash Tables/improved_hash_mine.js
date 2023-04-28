/* 
First Hash Function

Logic:
    "a".CharCodeAt(0) --> will produce the character code at str[0]
    let total = 0;
    total += "hello".charCodeAt(0) - 96;

*/

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME  = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

hash("pink", 10) // idx0
hash("orangered", 10) // idx7
hash("cyan", 10) // idx3

