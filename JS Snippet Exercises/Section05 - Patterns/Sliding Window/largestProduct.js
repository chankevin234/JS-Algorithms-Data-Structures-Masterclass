function solution(inputArray) {
    /* Given an array of integers, find the pair of adjacent elements that has the largest product    and return that product.*/
    
    let maxProduct = 0;
    let tempProduct = 0;
    let adjacent = 2;
    
    // if (inputArray.length < 0) {
    //     return null;
    // }
    
    //initial maxProduct
    maxProduct = inputArray[0] * inputArray[1];
    console.log("maxProduct: " + maxProduct);
    
    tempProduct = maxProduct;
    console.log("tempProduct: " + tempProduct);
    
    for (let i = adjacent; i < inputArray.length; i++) {
        tempProduct = ((tempProduct / inputArray[i - adjacent]) * inputArray[i] || 0);
        maxProduct = Math.max(maxProduct, tempProduct);
        console.log(tempProduct, maxProduct);
    }
    
    return maxProduct;
}


inputArray = [1, 2, 3, 0]
solution(inputArray);