// Object Literal Challenge 

// Step 1:
// Create an Array of objects called library.
// 3 objects with a property of title, author, and status
// Title & Author should be strings
// Statuts should be a nested object with the properties of own, reading ,and read: all booleans
// Own to True and reading and read to false


const library = [
    {
        title: 'Think & Grow Rich',
        author: 'Napolean Hill',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Thinking Clearly',
        author: 'Rolf Dobelli',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
]

// Step 2:
// Edit the above read to true using dot notation.

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true
// console.log(library[0].status.read)
// console.log(library[1].status.read)
// console.log(library[2].status.read)

// Step 3:
// Deestructuree the title from thee first book and rename the variable to firstBook
const { title: firstBook } = library[0]
console.log(firstBook)



// Step 4 
// Turn the library into JSON Data

const libJson = JSON.stringify(library)
console.log(libJson)