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

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', new Set(['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'Vegetarian', 'Organic']))
    .set('Open', 11)
    .set('Close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get('Open'));
console.log(rest.get('categories'));
console.log(rest.get('categories').size);

const time = 1; 
console.log(rest.get(time > rest.get('Open') && time< rest.get('Close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear(); // removees all the properties

const arr =[1,2];
rest.set(arr, 'Test');
console.log(rest);

console.log(rest.get(arr)); 

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct 🎉' ],
  [false, 'Try again!']
  
])
console.log(question);

// convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for(const [key, value] of question)
{
  if(typeof key === 'number') 
    console.log(`Anwer ${key} : ${value}`);
}

let answer = 3;
// const answer = Number(prompt('Enter your answer'));
console.log(`your answer is: ${answer}`);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]); // using spread operator

console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());


// working with string
console.log(`--- Working with String ---`);

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());

console.log(airline.toUpperCase());

console.log(airline[1]);
console.log(airline[2]);
console.log(airline[3]);

console.log('aman'[2]);
console.log('aman'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // start and end index
console.log(airline.slice(0, airline.indexOf(' '))); // first word
console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2)); // last two characters
console.log(airline.slice(1, -1)); // remove first and last character

const checkMiddleSeat = function(seat)
{
  // B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'? 
  console.log(`You got the middle seat 😥`): console.log('You are lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('aman')); // returns object
console.log(typeof new String('aman')); // returns object
console.log(typeof new String('aman').slice(1)); // returns primitive string