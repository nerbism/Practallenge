// Worrking With Strings

// String Concat

let x;

const name = 'Bren'
const age = 25

x = 'Hello my name is ' + name + ' and I am ' + age + 'years old'
console.log(x)






// Template Literals / Template Strings

let y;

y = `Hello my name is ${name} and I am ${age} years old!`
console.log(y)
// A cleaner and easier way.




// String properties and Method
let s;

s = 'Hello World'

x = s.length;
// Shows the number of characters (length) in a string.
console.log(x)




x = s.indexOf('H');
// Shows the index of the inputted letter (First it encounters)
console.log(x)

x = s.toUpperCase()
// Capitalizes the strirng as a whole.
console.log(x)


x = s.toLowerCase()
// Lower cases the sting as a whole.
console.log(x)

x = s.trim()
// Removes white space from a string (Non neeed spaces.)
