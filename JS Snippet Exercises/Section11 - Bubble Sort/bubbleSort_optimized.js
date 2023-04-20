/* 
Optimized Bublle Sort

This optimization basically stops sorting if 1 pass leads to no SWAPS.. means the sort is completed

*/
function bubbleSort(arr){
    // this shrinks as we sort through the array (the whole array)
    for(var i = arr.length; i > 0; i--){  
        
        // this CHECKS for whether a swap occurred
        var noSwaps = true;

        for(var j = 0; j < i - 1; j++){
          console.log(arr, arr[j], arr[j+1]);

            // compares the index (n) with it's adjacent index (n+1)
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;  

                // a swap happened
                noSwaps = false; 
            }
        }
        
        if (noSwaps) {
            break;
        }

    }
    return arr;
}