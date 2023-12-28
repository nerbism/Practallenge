// Object Spread

const todo = new Object();

let x;
x = todo

todo.id = 1
todo.job = 'Software Engineer'
todo.task = 'Homework'
todo.completed = false


console.log(x)

// Logging keys from an Object -
   x = Object.keys(todo)
   console.log(x)

// Logging values from an Object -
   x = Object.values(todo)
   console.log(x)

// Logging key and value pairs from an Object -
    x = Object.entries(todo)
    console.log(x)


// Seeing if an objeect has a propertty
x = todo.hasOwnProperty('name')
console.log(x)

const obj = {
    a : 1,
    b : 2,

}

const obj2 = {
    c : 3,
    d : 4,

}


const obj3 = {
    ...obj,
    ...obj2
}

x = obj3
console.log(x)

// Objects in Arrays.

const todos = [
    {id:1, name: 'Milk'},
    {id:2, name: 'Ice Cream'},
    {id:3, name: 'Protein Powder'},
    {id:4, name: 'Egg Whites'},
]



x 