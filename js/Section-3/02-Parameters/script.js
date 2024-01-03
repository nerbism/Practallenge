// Params and Arguments



// Params are placeholders where data will be passedd through
function chatEnter(user) {
    return user + ' has entered the chat'
}

// In this case, the Arguemnt is Bren which is the data we are passing through to the params.
// console.log(chatEnter('Bren'))
// If a argument is not passedd into the param, the outcome would be undefined has entered the chat. To give the function a default value:
function chatEnter(user = 'Man') {
    return user + ' has entered the chat'
}
console.log(chatEnter())


// More examples:


 function shipment(user, user2) {
    return user + ' & ' + user2 + ' has been shipped!'
 }

console.log(shipment('Bren', 'D'))



// Rest Params 
 function numbrs(...nums) {
    return nums
 }
 console.log(numbrs(1,2,3,4,5,6))
//  Using Rest (...) puts everything into an Array.


// Object as Params 
const user = {
    id: 1,
    attribute: 'beautiful',
    name: 'Dania'
}

function userInfo(user) {
    return `The user ${user.name} with the ID of: ${user.id} is very ${user.attribute}.`
}

console.log(userInfo(user))


console.log(userInfo({
    id: 2,
    attribute: 'handsome',
    name: 'Bren'
}))