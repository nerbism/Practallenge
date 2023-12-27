// Object Literals
    // objct = {
    //     key: value 
    // }

    const me = {
        name: 'Bren',
        age: 25,
        crush: 'Dania',
        hobbies: ['Coding', 'Music', 'Gym'],
        backpack: {
            laptop: 'Macbook Pro 13',
            lunch: 'Overnight Oats'
        }

    }

let x;

x = me.name
// Grabs the name from the me object.
console.log(x)


x = me.age
// Grabs the age from the me object.
console.log(x)


x = me.crush
// Grabs the crush key and variable from the oobject above.
console.log(x)


x = me.hobbies[2]
// Grabs the Gym hobby out of the hobby Array.
console.log(x)


x = me.backpack.laptop
// Grabs the Laptop of ouf the back[ack object.
console.log(x)


delete me.age;
// Deletes the age off of the m Object.
console.log(me)


me.greet = function () {
    console.log(`Hello my namee is ${this.name} and my crush is ${this.crush}`)
}

me.greet();
