"use strict";

const Person = function (firstName, birthYear) {
//    console.log(this);
   this.firstName = firstName; 
    this.birthYear = birthYear;
};

const aman = new Person('Aman', 2001); 
console.log(aman);

const noshin = new Person('Noshin', 2000);
console.log(noshin);


// 1. a new empty object {} is created
// 2. function is called, this = nwe emplty object {}
// 3. {} linked to prototype
// 4. function automatically return empty object {}
