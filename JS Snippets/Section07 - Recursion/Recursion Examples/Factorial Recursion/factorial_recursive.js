function factorialR(num) {
    if (num === 1) {
        console.log("You've reached the BASE CASE!");
        return 1;
    }
    
    return num * factorialR(num - 1);
}
// 5 * 4 * 3 * 2 * 1
// s1  s2  s3  s4  s5
console.log(factorialR(5));