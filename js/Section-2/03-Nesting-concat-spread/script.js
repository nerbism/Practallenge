// Nesting, Concat, Spread
let x;


// Array Nesting \\

cars = []
germanCars = ['BMW M3', 'Porsche GT3', 'Audi RS7', 'Mercedes GTR'];
japCars = ['Lexus LFA', 'Subaru BRZ', 'Honda S2000', 'Nissan GTR']

cars.push(germanCars, japCars)
console.log(cars)
// Now we have An Array inside of an Array.

// Grab BMW out of the cars Array.
x = cars[0][0]
console.log(x)


// Grab Nissan GTR out of the cars Array.
x = cars[1][3]
console.log(x)



// Concat Arrays \\
fruits = ['Banana', 'Pear', 'Kiwi']
berries = ['Blueberries', 'Strawberries', 'Raspberries']

let y;

y = fruits.concat(berries)
console.log(y)
// Concatting adds the Arrays togetther into a single Array.


// Spread Operator (...) \\
let f;
f = [...fruits, ...berries]
console.log(f)
// The Sprea operator lists everything in an Array or an Object, here I listed everything into a new Array.


// Flatten Arrays

let n;
numbers = [1, 2, 3, [4, 5], 6, [7, 8], 9]
 n = numbers.flat()
 console.log(n)
// Flat, turns nested Arrays into one singlular Array.

// Array Object Methods \\
let q;
q = Array.isArray(fruits)
console.log(q)
//  Checks if input is an array. Comes back True or False.


q = Array.from('123456789')
console.log(q)
// Creates an array with inputtted string.


const a = 'hi'
const b = 'im'
const c = 'bren'
q = Array.of(a,b,c)
console.log(q)
// Creates an array of defined variables.



