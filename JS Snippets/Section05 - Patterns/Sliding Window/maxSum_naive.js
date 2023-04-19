function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null; // EDGE CASE
  }
  // var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){ // do a for loop, but insure that you don't loop into undefined
    temp = 0; //initial temp value
    for (let j = 0; j < num; j++){ // loop based on the desired adjacent nums
      temp += arr[i + j]; // add the subsequent values
    }
    if (temp > max) { //replace the max if the temp is bigger
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


