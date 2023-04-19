// Add Faster (CONSTANT) f(n) = 1
function addUpToFaster(n) {
    return n * (n + 1) / 2
}

let t1a = performance.now();
console.log(addUpToFaster(1000000000));
let t2a = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`);