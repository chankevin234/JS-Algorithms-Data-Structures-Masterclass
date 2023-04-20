// Add Slower
function addUpToSlow(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
let t1 = performance.now();
console.log(addUpToSlow(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`);



