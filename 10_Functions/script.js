"use strict";

const booking = [];
const createBooking = function (flightNum, numPassengers = 1, price = 200) {
  const bookingObj = {
    flightNum,
    numPassengers,
    price: price || 199 * numPassengers,
  };
  console.log(bookingObj);
  booking.push(bookingObj);
};

createBooking("LH123");
console.log(booking);

createBooking("lh32", undefined, 800);
createBooking("lh354");

// how passing arguments works: value vs reference

console.log(`-----Passing Arguments: Value vs Reference-----`);

const flight = "LH234";
const Aman = {
  name: "Aman Ullah",
  passport: 345324342342,
};

const checkIn = function (flightNum = 343, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  // check the passport validity
  if (passenger.passport === 345324342342) {
    console.log("Checked In");
  } else {
    console.log("Wrong Passport!");
  }
};

checkIn(flight, Aman);
console.log(flight);
console.log(Aman);

// is the same as doing...
const flightNum = flight;
const passenger = Aman;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
  console.log(person);
};

newPassport(Aman);
checkIn(flight, Aman);

// functions accepting callback functions

console.log(`-----Functions Accepting Callback Functions-----`);

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)} `);
  console.log(`transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("👋");
};

// document.body.addEventListener('click', high5); // when clicked, it will call high5 function

["AMan", "Noshin", "SHarmila"].forEach(high5); // for each element in the array, it will call high5 function

// functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet("hello"); // wont work since it wants another function to return

const greetHey = greet("hey");
greetHey("Aman");
greetHey("Noshin");

greet("Assalamaualikum")("Amanullah");

// challenge: functions returning functions using arrow functions

const greetArrow = (greeting) => (name) =>
  console.log(`using arrow functions: ${greeting} ${name}`); // the greeting is the first function that
// // returns another function which takes name as parameter

greetArrow("Salam")("Noshin");

// the call and apply methods

console.log(`-----The Call and Apply Methods-----`);

const lufthansa = {
  airline: "lufthansa",
  iatacode: "LH",
  bookings: [],
  book: function (flightNum = 124, passengerName) {
    console.log(`${passengerName} booked a seat on ${this.airline} flight  
            ${this.iatacode}${flightNum}`);

    this.bookings.push({
      flight: `${this.iatacode}${flightNum}`,
      name: passengerName,
    });
  },
};

lufthansa.book(164, "Aman Ullah");
lufthansa.book(undefined, "Aman Ullah"); // to skip flightNum and use default value
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iatacode: "EW",
  bookings: [],
};

const book = lufthansa.book; // extracting book method from lufthansa object

// call method for setting 'this' keyword manually
book.call(eurowings, 24, "Noshin Akter"); // using call method to set 'this' keyword to eurowings object
console.log(eurowings);

// book(lufthansa, 23, 'SHarmila'); // this will not work as expected since 'this' keyword will be undefined in strict mode
book.call(lufthansa, 26, "SHarmila");

// book.call(eurowings, 45, 'Tarik Anam');

const swiss = { ...eurowings }; // using spread operator to copy eurowings object
swiss.bookings = []; // resetting bookings array
swiss.airline = "Swiss Air Lines";
swiss.iatacode = "LX";

book.call(swiss, 567, "Aman Swiss");
book.call(swiss, 567, "Aman Noshin");
console.log(swiss);

// apply method

// apply doesnt recieve list of arguments after 'this' keyword, instead it takes an array of arguments
const flightData = [583, "Mary Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.apply(swiss, [345, "John Wick"]); // using apply method with array literal
// modern way of using apply method is to use call method with spread operator
book.call(lufthansa, ...flightData); // using spread operator to pass array elements as individual arguments
console.log(lufthansa);

// bind method
// bind method returns a new function where 'this' keyword is bound to the object passed as argument

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Noshin Sharmila");
bookLH(45, "Aman Ullah");
bookLX(67, `'Tarik Anam'`);

// bind method with preset arguments
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Refakatullah Shah");
console.log(eurowings);

// with event listeneres
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // binding 'this' keyword to lufthansa object
console.log(`number of planes of: ${lufthansa.airline} is ${lufthansa.planes}`);

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(
  `rate: ${0.1} and value is: ${200} and total tax: ${addTax(0.1, 200)}`
);

// using bind to create a new function with preset rate argument
const addVat = addTax.bind(1, 0.23); // 'this' keyword is not used in addTax function, so we can pass null
// addVat = value => value + value * 0.23
console.log(addVat); // currently empty
console.log(addVat(100)); // 100 + 23 = 123

// challenge: using closures to create a function that adds tax
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxRate(0.4)(400)); // 400 + 160 = 560
const addVat2 = addTaxRate(0.15); // 15% vat

console.log(addVat2(200)); // 200 + 30 = 230
console.log(addVat2(1000)); // 1000 + 150 = 1150

// const addVat3 = addTaxRate.bind(null, 0.18); // using bind to create a new function with preset rate argument
// console.log(addVat3(500)); // 500 + 90 = 590

// immediately invoked function expressions (IIFE)

console.log(`-----Immediately Invoked Function Expressions (IIFE)-----`);

const runOnce = function () {
  console.log("This will never run again");
};
runOnce(); // normal function call

(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})(); // IIFE this will never run again. it call once only.
// console.log(isPrivate); // error: isPrivate is not defined
(() => {
  console.log("this is arrow function and it will never run again;");
})(); // IIFE arrow function

// variable declared inside IIFE are not accessible from outside

{
  console.log("This is block scope");
  const isBlock = 45;
  var notBlock = 67;
}
// console.log(isBlock); // error: isBlock is not defined
console.log(notBlock); // this can run coz it was declared as var

// closures

console.log(`-----Closures-----\n`);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} total passengers`);
  };
};

const booker = secureBooking(); // booker is now a closure
booker(12); // parameter wont work as the function doesnt taking any parameter
booker();
booker();
booker();

console.dir(booker); // to see the closure in console