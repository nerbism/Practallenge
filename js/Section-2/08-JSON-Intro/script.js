// JSON Intro

// JavaScript Object Notation



const crush = {
    id: 1,
    name : 'D',
    height: `5'3`,
    beauty: 10
}


// Turns a JavaScript Object into JSON 
const jsonCrush = JSON.stringify(crush)
console.log(jsonCrush)


// Turns JSON into a JavaScript Object.
const objCrush = JSON.parse(jsonCrush)
console.log(objCrush)



// Practice
const perfectPair = [
    {
        id:1,
        name: 'Bren',
        height: `6'3`,
        attribute: 'Romantic'
    },
    {
        id:2,
        name: 'D',
        height: `5'3`,
        attribute: 'wholesome'
    }
]


const ppJson = JSON.stringify(perfectPair)
console.log(ppJson)
