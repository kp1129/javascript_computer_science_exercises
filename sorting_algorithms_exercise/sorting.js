// Implement bubble sort. Your function should 
// accept an array and return an array of sorted values.
const bubbleSort = (arr) => {
    let swaps = true;
    
    while (swaps) {
        let swapsThisRound = 0;
        for(let i = 0; i < arr.length -1; i++){
            if (arr[i] > arr[i + 1]){
                swapsThisRound += 1;
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp
            }
        }

        if (swapsThisRound === 0) {
            swaps = false
        }
    }

    return arr;
}

// test cases
console.log('bubbleSort');
console.log(bubbleSort([4,5,1,21,2,9,10,15])) // [1,2,4,5,9,10,15,21]
console.log(bubbleSort([9,-2,0,35,4,-10,22,12])) //[-10,-2,0,4,9,12,22,35]

// Implement selection sort. Your function should 
// accept an array and return an array of sorted values.




// Implement insertion sort. Your function should 
// accept an array and return an array of sorted values.