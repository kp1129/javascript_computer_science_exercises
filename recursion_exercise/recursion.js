export const productOfArray = (numArray) => {      
    // base case
    if( numArray.length === 1) return numArray[0]
    else {
        // call the function recursively
        // pass it a shallow copy of the array minus the first element
        return numArray[0] * productOfArray(numArray.slice(1))
    }
}

// test cases
console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

export const contains = (nestedObj, searchItem) => {
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
