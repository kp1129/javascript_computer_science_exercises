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
const selectionSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++){
        let currentIx = i;
        let smallestIx = currentIx;

        for (let j = currentIx; j < arr.length; j++){
            if (arr[j] < arr[smallestIx]){
                smallestIx = j;
            }
        }
        temp = arr[currentIx];
        arr[currentIx] = arr[smallestIx];
        arr[smallestIx] = temp;
    }
 
    return arr;
}

// test cases
console.log('selectionSort');
console.log(selectionSort([4,5,1,21,2,9,10,15])) // [1,2,4,5,9,10,15,21]
console.log(selectionSort([9,-2,0,35,4,-10,22,12])) //[-10,-2,0,4,9,12,22,35]


// Implement insertion sort. Your function should 
// accept an array and return an array of sorted values.

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let item = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > item){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = item;
    }
    return arr;
}

// test cases
console.log('insertionSort');
console.log(insertionSort([4,5,1,21,2,9,10,15])) // [1,2,4,5,9,10,15,21]
console.log(insertionSort([9,-2,0,35,4,-10,22,12])) //[-10,-2,0,4,9,12,22,35]