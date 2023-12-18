// Data Types

    // Primitive Data Types:
        /*
            Strings - 'Bren'
            Numbers - 100
            Booleans - True 
            Null - (empty)
            Undefined  - Variables that have yet to be assigned.
            Symbol -
            BigInt - Numbers that are extremely large.
        */
            // Strings
            const firstName = 'Bren';
            const nameOutput = firstName;
            console.log(nameOutput)
            console.log(nameOutput, typeof nameOutput)


            // Numbers
            const age = 25
            const ageOutputt = age
            console.log(ageOutputt)
            console.log(ageOutputt, typeof ageOutputt)


            // Booleans 
            const hasKids = false 
            const kidsOutput = hasKids
            console.log(kidsOutput)
            console.log(kidsOutput, typeof kidsOutput)


            // Undefined
            let bodyCount;
            console.log(bodyCount)


            // Symbol 
            const id = Symbol('id')
            console.log(id)
            console.log(typeof id)



    // Reference Data Types 
        /*
            Objects
            Arrays 
            Functions 

                Any refeerence type will output as an 'Object'
        */


            // Array 
            const numbers = [1,2,3,4,5]
            arrOutput = numbers 
            console.log(arrOutput, typeof arrOutput)


            // Object
            const brensBackpack = {
                CPU: 'Macbook Pro 13',
                Book: 'Cloud Architecture',
                Pens: 10,
                hasLunch: true
            }

            console.log( brensBackpack)
            console.log(typeof brensBackpack)


            // Functiton 
            function sayHi() {
                console.log('Hi')
            }
            sayHi()
            console.log(typeof sayHi)