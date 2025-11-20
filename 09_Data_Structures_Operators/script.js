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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "22.23",
    address = "Dhaka",
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to you at ${time} to the address ${address}
    }`);
  },

  orderPasta: function(ing1, ing2, ing3)
  {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients)
  {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// calling the oderDelivery method under the restaurant object
restaurant.orderDelivery({
  time: "22.30",
  address: "Bashundhara R/A, Dhaka",
  starterIndex: 2, // garlic bread
  mainIndex: 2, // risotto
});

//calling the oderDelivery method without passing all the arguments
restaurant.orderDelivery({
  address: "Uttara, Dhaka",
  starterIndex: 1, // bruschetta
});

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//swapping using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
// destructuring the returned array
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j);

// default values
// [8,9]
const [p = 2, q, r = 1] = [, 9];
console.log(p, q, r);

// destructuring objects
console.log(`destructuring objects:`);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = ["default menu"], starterMenu: starters = ["default starter"] } =
  restaurant;
console.log(menu, starters);

// mutating variables
let aa = 111;
let bb = 999;
console.log(aa, bb);
const obj = { a: 23, b: 7, c: 14 };

({ a: aa, b: bb } = obj);
console.log(aa, bb);

// nested objects
const {
  fri: { open: o, close: cc },
} = openingHours;
console.log(o, cc);

// the spread operator ()

const arr2 = [7, 8, 9];
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);

// WITH SPREAD OPERATOR
const newArr = [1,2, ...arr2];
console.log(newArr);

// print using spread operator
console.log(...newArr ); // it just print the numbers without the array brackets

const newMenu = [...restaurant.mainMenu, 'Gnocci']; 
console.log(newMenu);
console.log(...newMenu);

// copy array
const mainMenyCopy = [...restaurant.mainMenu];

// join 2 arrays
const menuAll = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menuAll);

// iterables are arrays, string , maps, sets but not the objects.
const str = 'AmanUllahShah';
const letters = [...str, " ", 'S.'];
console.log(letters);

console.log(...str);

// real world example
// multiple arguments in function call

// const ingredients = [prompt("let's make pasta!Ingredients 1"), 
//   prompt("Ingredients 2"),
//   prompt("Ingredients 3")];

//   restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = {...restaurant, founder: 'AmanUllah Shah', foundedIn: 2024};
console.log(newRestaurant);

newRestaurant.name = 'AMAN Restaurant';
console.log(newRestaurant.name);
console.log(restaurant.name); // original object is not changed

// rest pattern and parameters
console.log(`rest pattern and parameters:\n`);


// destructuring
// spread, because on right side of = opearator
const arr3 = [1, 2, ...[3, 4]];
console.log(arr3);

const [aaa, bbbb, ...others] = [1, 2, 3, 4, 5];
console.log(aaa, bbbb, others);

const [pizza, , risotto, ...otherFood ] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// for objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// functions
const add = function(...numbers)
{ 
  let sum = 0;
  for(let i=0; i<numbers.length; i++)
  {
    sum += numbers[i];
  }
  console.log(sum);

}

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x1 = [23,5,7];
console.log(...x1);
add(...x1);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');