// Array Methods

const favLifts = ['Squats', 'Incline Bench', 'Chest Flies']

// Manipulating the Array \\

//  (1)
favLifts.push('Sissy Squats')
// Method that adds to the end of the Array
console.log('(Example 1)',favLifts)


//  (2)
favLifts.pop()
// Removes from the end of the Array
console.log('Example 2)',favLifts)


//  (3)
favLifts.unshift('Calve Raises')
// Adds to the 0 index of the Array.
console.log('(Example 3)',favLifts)


//  (4)
favLifts.shift()
// Removes the current 0 index.
console.log('(Example 4)',favLifts)



//  (5)
favLifts.reverse()
// Reverses the Array. 
console.log('Example 5', favLifts)

console.log(favLifts)