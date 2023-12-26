// Array Challenge 
// Challenge 1 \\
const arr = [1, 2, 3, 4, 5]
// Make the output = [6, 5, 4, 3, 2 , 1, 0]

arr.push(6), arr.unshift(0), arr.reverse()
console.log(arr)


// Challenge 2 \\
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]
// Make arr3 outputt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const arr3 = [...arr1, ...arr2]
arr3.splice(4, 1)
console.log(arr3)