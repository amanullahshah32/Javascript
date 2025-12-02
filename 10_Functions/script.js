'use strict';

const booking = [];
const createBooking = function(flightNum, numPassengers = 1, price = 200)
{
    
    const bookingObj ={
        flightNum,
        numPassengers,
        price: price || 199 * numPassengers,
    }
    console.log(bookingObj);
    booking.push(bookingObj);

}

createBooking("LH123");
console.log(booking);

createBooking('lh32', undefined, 800);
createBooking('lh354');


// how passing arguments works: value vs reference

console.log(`-----Passing Arguments: Value vs Reference-----`);

const flight = 'LH234';
const Aman= {
    name: 'Aman Ullah',
    passport: 345324342342,

}

const checkIn = function(flightNum=343, passenger)
{
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    // check the passport validity
    if(passenger.passport === 345324342342)
    {
        console.log('Checked In');
    }
    else{
        console.log('Wrong Passport!');
    }
}

checkIn(flight, Aman);
console.log(flight);
console.log(Aman);

// is the same as doing...
const flightNum = flight;
const passenger = Aman;

const newPassport = function(person)
{
    person.passport = Math.trunc(Math.random() * 100000000000);
    console.log(person);
}

newPassport(Aman);
checkIn(flight, Aman);

// functions accepting callback functions

console.log(`-----Functions Accepting Callback Functions-----`);

const oneWord = function(str)
{
    return str.replaceAll(' ', '').toLowerCase();
    
}

const upperFirstWord = function(str)
{

    const [first, ...others]=str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
}

// higher order function
const transformer = function(str, fn)
{
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)} `);
    console.log(`transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function()
{
    console.log('👋');
}

document.body.addEventListener('click', high5); // when clicked, it will call high5 function

['AMan', 'Noshin', 'SHarmila'].forEach(high5); // for each element in the array, it will call high5 function

// functions returning functions

const greet = function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`);
    }
}

greet('hello'); // wont work since it wants another function to return

const greetHey = greet('hey');
greetHey('Aman');
greetHey('Noshin');

greet('Assalamaualikum')('Amanullah');

// challenge: functions returning functions using arrow functions

const greetArrow = greeting => name => console.log(`using arrow functions: ${greeting} ${name}`); // the greeting is the first function that
// // returns another function which takes name as parameter

greetArrow('Salam')('Noshin');