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

if( restaurant.openingHours  && restaurant.openingHours.mon)
{
    console.log(restaurant.openingHours.mon.open);

}
// with optoinal chaining

console.log(restaurant.openingHours?.thu?.open); // the "?" checks if "thu" exists or not
console.log(restaurant.openingHours?.mon?.open); // mon does not exist

// example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for(const day of days)
{
    console.log(day);
    console.log(restaurant.openingHours?.[day]?.open ?? 'closed'); // using optional chaining in bracket notation
}

// Methods
console.log(restaurant.order?. (0,1) ?? 'Method Does not exist');
console.log(restaurant.orderPasta?. (0,1) ?? 'Method Does not exist');

// optional chaining on arrays
const users = [
    {name: 'Aman',
        email: 'aman@gmail.com'
    }
]
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');

// loop over objects
// loop over properties names

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

console.log(`we are oepn on ${properties.length} days`);

for(const day of Object.keys(restaurant.openingHours))
{
    console.log(day);
}

// property values
const values = Object.values(restaurant.openingHours);
console.log(values);

// entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// [key, value]
for(const [key, {open, close}] of entries)
{
    console.log(`on ${key} we open at ${open} and close at ${close}`);
}


// sets
console.log(`Sets:\n`);

const orderSet = new Set([
  
    'pasta',
    'pitha',
    'halua',
    'pasta',
    'burger',
    'pitha'
  
])
console.log(orderSet);
console.log(new Set('Amanullah'));

console.log(orderSet.size);
console.log(orderSet.has('bread'));
console.log(orderSet.has('burger'));
orderSet.add('garlic bread');
orderSet.add('garlic bread');
orderSet.add('garlic bread');
console.log(orderSet);
orderSet.delete('pitha');
console.log(orderSet);

// retrieve values from set
console.log(`-- Retrieving values from set --`);
for(const order of orderSet)
{
    console.log(order);
}

// orderSet.clear();
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // converting set to array using spread operator
console.log(staffUnique.length);

console.log(new Set('Amanullah Shah').size);