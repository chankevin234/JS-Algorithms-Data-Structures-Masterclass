/* 
First Basic Hash Function

Logic:
    "a".CharCodeAt(0) --> will produce the character code at str[0]
    let total = 0;
    total += "hello".charCodeAt(0) - 96;

*/

function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

hash("pink", 10) // idx0
hash("orangered", 10) // idx7
hash("cyan", 10) // idx3

