// Object Spread

const todo = new Object();

let x;
x = todo

todo.id = 1
todo.job = 'Software Engineer'
todo.task = 'Homework'
todo.completed = false


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