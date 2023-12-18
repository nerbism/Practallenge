/* What is a Variable?
        Imagine a a container that holds data and needs tto be given a name.
        That is a variable.
*/

// Ways to declare Variables:
    // var firstName = 'Bren'
    // let firstName = 'Bren'
    // const firstName = 'Bren'

        // Var is not really used anymore. 

        // let is for vairables that you can later on re-assign if needed

        // const is not allowedd tto bee reeassigned, the variable name is forever 

    let firstName = 'Bren';
    let lastName = 'Cowe';
    let age = 25;
    console.log(firstName, lastName, age) 
        // Since I used let, I can now change any of the above:
        age = 27
        console.log(age)
        // The age is now 27 instead of 25.

    // Now if we tried the same with const, it would not work ofcourse.
    const favCar = 'GT3RS'
    console.log(favCar)
    favCar = 'BMW M3'
    console.log(favCar)
    // The above code will now throw an error because const cannot be changed