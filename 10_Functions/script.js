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