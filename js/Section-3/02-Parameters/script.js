// Params and Arguments



// Params are placeholders where data will be passedd through
function chatEnter(user) {
    return user + ' has entered the chat'
}

// In this case, the Arguemnt is Bren which is the data we are passing through to the params.
console.log(chatEnter('Bren'))


// More examples:


 function shipment(user, user2) {
    return user + ' & ' + user2 + ' has been shipped!'
 }

console.log(shipment('Bren', 'D'))