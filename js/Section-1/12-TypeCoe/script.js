// Type Coercion 

let x;
 
    x = 5 + '5';
    // This comes out to aa string. 

    x = 5 * '5'; 
    // This turns inta a number. Why? Because, multiplcation into a string literally makes no sense. It makes sense to be a number because multiplcation has nothing to do with strings.

     
console.log(x, typeof x )