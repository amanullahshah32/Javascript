"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

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
// opening hours object
const openingHours = {
  [weekDays[3]]: {
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
};


// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
};

// for of loop
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const item of menus) console.log(item);

for (const item of menus.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); // item is an array [index, element]
}
for (const [index, element] of menus.entries()) {
  console.log(`${index + 1}: ${element}`); // item is an array [index, element]
}

// console.log([...menus.entries()]);
// console.log(item);

// logical operators
// use any data type, return any data type, short-circuiting
console.log("--- or ---");
console.log(undefined || "Aman ");
console.log(3 || "Aman ");
console.log(true || 0);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// restaurant.numGuests = 40;
const guest2 = restaurant.numGuests ? restaurant.numGuests : 20;
console.log(guest2);

const guest3 = restaurant.numGuests || 15;
console.log(guest3);

console.log("--- and ---\n");

console.log(0 && "Aman"); // falsy value will return in case of and
console.log(7 && "Aman"); // truthy value will return in case of and

console.log("hello  " && 23 && null && "Aman"); // null will return

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach", "olives");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// nullish coalescing operator
console.log("--- nullish coalescing operator ---\n");
// nullish: null and undefined (not 0 and emplty string )

const guest4 = restaurant.numGuests ?? 10;
console.log(guest4);

// logical assignemnt oeparator
console.log(`--- logical assignment operator ---\n`);
const rest1 = {
  name: "Chillox",
  numGuests: 0,
};

// making rest2 object by spread operator
const rest2 = { ...rest1, owner: "Aman", name: "Hakaluku" };
console.log(rest2);
console.log(rest1);

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// or assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//
rest2.owner = rest2.owner &&= "<ANONYMOUS>"; // rest2. owner is a truty value
rest1.owner = rest1.owner &&= "<ANONYMOUS>"; // rest1. owner is a truty value
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

// enhanced object literals
console.log(restaurant.openingHours);