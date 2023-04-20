// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){

  // this shrinks as we sort through the array (the whole array)
  for(var i = arr.length; i > 0; i--){  

    // this compares two indices against each other, as i shrinks, so does the comparators
    // because we can assume that the most recently sorted value doesn't need to be checked again
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      
      // compares the index (n) with it's adjacent index (n+1)
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// // ES2015 Version
// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

// bubbleSort([8,1,2,3,4,5,6,7]);