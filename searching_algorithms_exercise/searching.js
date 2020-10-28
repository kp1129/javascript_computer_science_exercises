// This function should accept an array and value and 
// return the index at which the value exists or `-1` 
// if the value can not be found. Do **not** use 
// `indexOf` to solve this!  This function should use 
// iteration not recursion.

const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// test cases
console.log('linearSearch');
console.log(linearSearch([1,2,3,4],4)) //3
console.log(linearSearch([1,2],1)) //0
console.log(linearSearch([1,2,3,4,5,6,7],6)) //5
console.log(linearSearch([1,3,4],2)) //-1

// This function should accept an array and value and 
// return the index at which the value exists or `-1` 
// if the value can not be found. Do **not** use `indexOf` 
// to solve this! This function should use iteration not recursion. 
// Make sure that your algorithm runs in _O(log(n))_ and not _O(n)_.
const binarySearch = (arr, val) => {
    let first = 0;
    let last = arr.length - 1;
    
    while (first <= last) {
        let middle = Math.floor((first + last) / 2);

        if (arr[middle] === val) {
            return middle
        } else {
            if (arr[middle] < val) {
                first = middle + 1;
            } else {
                last = middle - 1;
            }
        }
    }

    return -1 // not found
}

// test cases
console.log('binarySearch');
console.log(binarySearch([1,2,3,4],4)) //3
console.log(binarySearch([1,2],1)) //0
console.log(binarySearch([1,2,3,4,5,6,7],6)) //5
console.log(binarySearch([1,2,3,4],0)) //-1
console.log(binarySearch([1,3,4],2)) //-1
console.log(binarySearch([1,2],11)) //-1
