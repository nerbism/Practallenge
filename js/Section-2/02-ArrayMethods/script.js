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

// Information Grabbing from Arrays \\

let x;

// (6)
x = favLifts.includes('Chest')
// Checks to see if the inputted variable is inside the Array. Gives true or false statements.
console.log('Example 6', x)

// (7)
x = favLifts.slice(1,2)
// Returns the inbetween of selected indexes. "Slicing" them out of the Array. (Does not change Array)
console.log('Example 7', x)

// (8)
x = favLifts.splice(1,2)
// Plucks out of the Array just like slice. But changes Array permanently.