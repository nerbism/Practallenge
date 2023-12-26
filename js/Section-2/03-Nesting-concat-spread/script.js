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


