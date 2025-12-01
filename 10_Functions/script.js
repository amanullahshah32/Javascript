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
