"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// logical operators
// use any data type, return any data type, short-circuiting
console.log('--- or ---');
console.log( undefined || 'Aman ');
console.log( 3 || 'Aman ');
console.log( true || 0);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// restaurant.numGuests = 40;
const guest2 = restaurant.numGuests ? restaurant.numGuests : 20;
console.log(guest2);

const guest3 = restaurant.numGuests || 15;
console.log(guest3);

console.log('--- and ---\n');

console.log(0 && 'Aman'); // falsy value will return in case of and
console.log(7 && 'Aman'); // truthy value will return in case of and

console.log('hello  ' && 23 && null && 'Aman'); // null will return

if(restaurant.orderPizza)
{
    restaurant.orderPizza('mushrooms', 'spinach', 'olives');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// nullish coalescing operator
console.log('--- nullish coalescing operator ---\n');
// nullish: null and undefined (not 0 and emplty string )

const guest4 = restaurant.numGuests ?? 10;
console.log(guest4);