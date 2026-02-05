"use strict";

const Person = function (firstName, birthYear) {
//    console.log(this);
// Instance properties
   this.firstName = firstName; 
    this.birthYear = birthYear;

    // // adding methods
    // this.calcAge = function(){
    //     console.log( 2026 - this.birthYear);
    // }
};

const aman = new Person('Aman', 2001); 
console.log(aman);

const noshin = new Person('Noshin', 2000);
console.log(noshin);


// 1. a new empty object {} is created
// 2. function is called, this = nwe emplty object {}
// 3. {} linked to prototype
// 4. function automatically return empty object {}


console.log(aman instanceof Person);