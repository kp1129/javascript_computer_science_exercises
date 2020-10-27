const productOfArray = (numArray) => {      
    // base case
    if( numArray.length === 1) return numArray[0]
    else {
        // call the function recursively
        // pass it a shallow copy of the array minus the first element
        return numArray[0] * productOfArray(numArray.slice(1))
    }
}

// test cases
console.log('productOfArray')
console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
console.log(productOfArray([0,1,2,3])) // 0
console.log(productOfArray([1,-2,3])) // -6

const contains = (nestedObj, searchItem) => {
    // check each key for searchItem as value
   for (const [key, value] of Object.entries(nestedObj)){
    //    base case
       if (value === searchItem) return true
       else {
        //    call the function recursively
        //    pass it value as the new nestedObj to check 
           return contains(value, searchItem)
       }
   }
   // if searchItem is not found   
   return false
}

// test cases
console.log('contains')
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}
console.log(contains(nestedObject, 44)) // true
console.log(contains(nestedObject, "foo")) // false

const realSize = (arrays) => {
    let counter = 0;
    if (arrays.length > 0) {
        for (let i = 0; i < arrays.length; i++){
            if (Number.isInteger(arrays[i])) {
                counter += 1;
            }
            else {
                counter += realSize(arrays[i])
            }
        }
    }
    return counter;
}


//   test cases
console.log('realSize')
console.log(realSize([])) // 0
console.log(realSize([[[5], 3], 0, 2, [], [4, [5, 6]]])) // 7

const SumSquares = (arrays) => {
    // sum all squares here
    let counter = 0;    
    // square each int or float from input, 
    // recurse on any array
    arrays.forEach(elem => {
        if (Number.isInteger(elem)){
            counter += elem * elem;
        } else {
            counter += SumSquares(elem)
        }
    })
    return counter;      
}


// test cases
console.log('SumSquares')
console.log(SumSquares([])) // 0
console.log(SumSquares([1,2,3])) // 14
console.log(SumSquares([[1,2],3])) // 14
console.log(SumSquares([[[[[[[[[1]]]]]]]]])) // 1
console.log(SumSquares([10,[[10],10],[10]])) // 400