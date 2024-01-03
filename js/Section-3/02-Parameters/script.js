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