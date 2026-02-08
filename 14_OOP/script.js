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

// Protypes
console.log(Person.prototype);
Person.prototype.calcAge = function()
{
    console.log(2026 - this.birthYear);
    // console.log();
}

aman.calcAge();
noshin.calcAge();

// console.log(aman.__proto__);
// console.log(aman.__proto__ === Person.prototype);
// console.log(Person.protototype.isPrototypeOf(aman));

// .prototypeOfLinkedObjects property.  

Person.prototype.species = 'Homo Sapiens';
console.log(aman,noshin);
console.log(aman.species, noshin.species);

console.log(aman.hasOwnProperty('firstName'));
console.log(aman.hasOwnProperty('birthYear'));
console.log(aman.hasOwnProperty('species'));

console.log(aman.__proto__);
console.log(aman.__proto__.__proto__);
console.log(aman.__proto__.__proto__.__proto__);
console.log(aman);

console.log(Person.prototype);
console.log(Person.prototype.constructor);

const arr = [2,5,6,87,45,4,6];
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function()
{
    return [...new Set(this)].sort((a,b) => a-b);
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir( x => x+1);