"use strict";

// // function calcAge(birthYear) {
// //   const age = 2025 - birthYear;
// //   console.log(firstName);
// //   function printAge() {
// //     const output = `You are ${age}, born in ${birthYear}`;
// //     console.log(output);
// //     if (birthYear >= 1981 && birthYear <= 1996) {
// //       var millenial = false;
// //       const str = `Oh, and you're a millenial, ${firstName}`;
// //       console.log(str);
// //     } else {
// //       // var millenial = true;
// //       const str2 = `You are not a millenial ${firstName}`;
// //       console.log(str2);
// //     }
// //   }
// //   printAge();
// //   console.log(millenial);
// //   // console.log(str);
// //   // console.log(str2);
// //   return age;
// // }

// // const firstName = "AmanUllahShah";
// // calcAge(1986);
// // console.log(age);
// // console.log(`turned off git warning`);

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "aman";
// let job = "developer";
// const year = 1986;

// // // functions
// // console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// // function addDecl(a, b) {
// //   return a + b;
// // }

// // const addExpr = function (a, b) {
// //   return a + b;
// // };

// // const addArrow = (a, b) => a + b;

// //example
// console.log(typeof undefined);
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// var x = 1;
// let y = 22;
// const z = 245;

// console.log(x === window.x);
// console.log(y === window.x);
// console.log(z === window.x);


// // this keyword
// console.log('--- this keyword ---');
// // // console.log(this);

// // const calAge = function(birthYear){
// //   console.log(2025 - birthYear);
// //   console.log(this);
// // }
// // calAge(1998)

// // const calAgeArrow = (birthYear) => {
// //   console.log(2025 - birthYear);
// //   console.log(this);
// // }
// // calAgeArrow(2001);

// const aman = {
//   year: 2001,
//   name: 'Aman Ullah Shah',
//   calcAge: function()
//   {
//     console.log(this);
//     console.log(2025 - this.year);
//     console.log(this.name);
//   }
// }

// console.log(aman);
// aman.calcAge();

// const matilda = {
//   year: 2017,

// };
// matilda.calcAge = aman.calcAge; // here i can copy a method from one object to another object

// matilda.calcAge();

// const f  = aman.calcAge;
// console.log(f);
// // f();

const aman = {
  year: 1990,
  name: 'Aman Ullah Shah',
  calcAge: function()
  {
    console.log(this);
    console.log(2025 - this.year);
    console.log(this.name);

    const self  = this; // workaround
    const isMillenial = function() {
      console.log(self.year >= 1981 && self.year <= 1996);

    };
    isMillenial();
  },
  great: () => {
    console.log(`hey ${this.name}`);
  }
}
// aman.great();
aman.calcAge();
// console.log(this.name);

// arguments keyword
const addExpr = function (a, b )
{
  let sum = 0;
  console.log(arguments);
  for(let i=0; i<arguments.length; i++)
  {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(addExpr(2,5,4,5,5));
addExpr(2,5,4,5,5);

// arguments not available in arrow functions
const addArrow = (a,b) => {
  console.log(arguments);
  return a + b;
}
console.log(addArrow(2,5,4));