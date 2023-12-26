// Date Methods
let x;
let d = new Date();
console.log(d)

x = d.getDate()
console.log(x)
// Grabs the day of the Month 


x = d.getFullYear()
console.log(x)
// Grabs the year of the current date.

x = d.getMonth()
console.log(x)
// Grabs the month of the current date.

x = d.getDay()
console.log(x)
// Gives the day of the week.

x = d.getHours()
console.log(x)
// Grabs the current hours.

x = d.getMinutes()
console.log(x)
// Grabs the current minutes of the day.


x = d.getSeconds()
console.log(x)
// Grabs current seconds.


x = Intl.DateTimeFormat('en-US').format(d)
console.log(x)
// Displays time in US format