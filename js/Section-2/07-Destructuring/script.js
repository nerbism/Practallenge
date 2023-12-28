// Destructuring and Naming
const coolestPerson = {
    id: 999,
    name: 'Bren',
    height: `6'3`,
    weight: '200lbs',
    hobbies: ['Bodybuilding', 'Coding', 'Reading']
}

// Now, instead of writing something like: id = coolestPerson.id I can extract or destructure the information inside the objecct:

    const { id, name } = coolestPerson
    console.log(id)
    console.log(name)