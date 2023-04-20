/*

Pivot Helper Solution

*/

//SWAP Function
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function pivot(arr, start=0, end=arr.length+1){
  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    // if the value of the pivot > current element, swap the value 
    if(pivot > arr[i]){
      // increment the swapIdx
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }

  // at the end, swap the pivot (arr[0]) with the swapIdx
  swap(arr,start,swapIdx);

  return swapIdx;
}

console.log(pivot([4,8,2,1,5,7,6,3]));


