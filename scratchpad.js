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
