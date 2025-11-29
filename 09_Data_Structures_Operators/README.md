# Section 9: Data Structures & Operators - Quick Reference Guide

This guide explains destructuring, spread operator, and rest parameters in JavaScript with examples and outputs.

---

## 1. Array Destructuring

**What it does:** Extract values from arrays and assign them to variables in a single line.

### Basic Example:

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);
// Output: 1 2 3
```

### Skipping Elements:

```javascript
const arr = [1, 2, 3, 4, 5];
const [first, , third] = arr; // Skip the 2nd element
console.log(first, third);
// Output: 1 3
```

### Nested Destructuring:

```javascript
const nested = [1, [2, 3], 4];
const [a, [b, c], d] = nested;
console.log(a, b, c, d);
// Output: 1 2 3 4
```

### Default Values:

```javascript
const arr = [1, , 3];
const [x = 10, y = 20, z = 30] = arr;
console.log(x, y, z);
// Output: 1 20 3
```

### Swapping Variables (without temp variable):

```javascript
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);
// Output: 10 5
```

---

## 2. Object Destructuring

**What it does:** Extract properties from objects and assign them to variables.

### Basic Example:

```javascript
const person = {
  name: "Aman",
  age: 24,
  city: "Dhaka",
};

const { name, age, city } = person;
console.log(name, age, city);
// Output: Aman 24 Dhaka
```

### Renaming Properties:

```javascript
const person = {
  name: "Aman",
  age: 24,
};

const { name: fullName, age: years } = person;
console.log(fullName, years);
// Output: Aman 24
```

### Default Values:

```javascript
const person = { name: "Aman" };
const { name, age = 30, city = "Unknown" } = person;
console.log(name, age, city);
// Output: Aman 30 Unknown
```

### Nested Object Destructuring:

```javascript
const restaurant = {
  name: "Italiano",
  hours: {
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },
};

const {
  hours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);
// Output: 11 23
```

### Mutating Existing Variables:

```javascript
let x = 100;
let y = 200;
const obj = { x: 1, y: 2 };

({ x, y } = obj); // Note: Parentheses required!
console.log(x, y);
// Output: 1 2
```

---

## 3. Destructuring in Function Parameters

### Array Destructuring in Functions:

```javascript
function getFood(idx) {
  const menu = ["Pizza", "Pasta", "Risotto"];
  return menu[idx];
}

// Without destructuring
const [item1, item2] = [getFood(0), getFood(1)];
console.log(item1, item2);
// Output: Pizza Pasta
```

### Object Destructuring in Functions:

```javascript
const order = {
  item: "Pizza",
  quantity: 2,
  address: "Dhaka",
};

function deliverOrder({ item, quantity, address }) {
  console.log(`Delivering ${quantity} ${item} to ${address}`);
}

deliverOrder(order);
// Output: Delivering 2 Pizza to Dhaka
```

### With Default Values:

```javascript
function deliverOrder({ item, quantity = 1, address = "City" } = {}) {
  console.log(`Delivering ${quantity} ${item} to ${address}`);
}

deliverOrder({ item: "Pasta" });
// Output: Delivering 1 Pasta to City
```

---

## 4. Spread Operator (...)

**What it does:** Spread elements of an array or object across multiple values.

### Array Spreading:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
// Output: [1, 2, 3, 4, 5, 6]
```

### Adding Elements:

```javascript
const menu = ["Pizza", "Pasta"];
const newMenu = ["Risotto", ...menu, "Salad"];
console.log(newMenu);
// Output: ['Risotto', 'Pizza', 'Pasta', 'Salad']
```

### Copying Arrays (Shallow Copy):

```javascript
const original = [1, 2, 3];
const copy = [...original];
copy[0] = 999;
console.log(original, copy);
// Output: [1, 2, 3] [999, 2, 3]
```

### Object Spreading:

```javascript
const person = { name: "Aman", age: 24 };
const newPerson = { ...person, city: "Dhaka" };
console.log(newPerson);
// Output: {name: 'Aman', age: 24, city: 'Dhaka'}
```

### Merging Objects:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);
// Output: {a: 1, b: 2, c: 3, d: 4}
```

### Overriding Properties:

```javascript
const person = { name: "Aman", age: 24 };
const updated = { ...person, age: 25 };
console.log(updated);
// Output: {name: 'Aman', age: 25}
```

---

## 5. Rest Parameters (...)

**What it does:** Collect multiple function arguments into an array.

### Collecting Arguments:

```javascript
function sum(...numbers) {
  console.log(numbers); // It's an array!
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(2, 3, 4, 5));
// Output:
// [2, 3, 4, 5]
// 14
```

### Rest with Other Parameters:

```javascript
function printInfo(firstName, lastName, ...hobbies) {
  console.log(`${firstName} ${lastName} likes: ${hobbies.join(", ")}`);
}

printInfo("Aman", "Shah", "coding", "gaming", "reading");
// Output: Aman Shah likes: coding, gaming, reading
```

### Rest in Destructuring:

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest);
// Output: 1 2 [3, 4, 5]
```

### Rest in Object Destructuring:

```javascript
const person = { name: "Aman", age: 24, city: "Dhaka", job: "Developer" };
const { name, age, ...details } = person;
console.log(name, age, details);
// Output: Aman 24 {city: 'Dhaka', job: 'Developer'}
```

---

## Key Differences: Spread vs Rest

| Spread                            | Rest                                              |
| --------------------------------- | ------------------------------------------------- |
| Used to **expand** elements       | Used to **collect** elements                      |
| Appears on right side: `[...arr]` | Appears on left side: `function(...args)`         |
| Works with arrays and objects     | Mainly with function parameters and destructuring |
| Creates a new array/object        | Gathers values into an array                      |

### Side-by-Side Comparison:

```javascript
// SPREAD - Expanding
const arr = [1, 2, 3];
const expanded = [...arr, 4, 5];
console.log(expanded);
// Output: [1, 2, 3, 4, 5]

// REST - Collecting
function collectAll(a, b, ...rest) {
  console.log(a, b, rest);
}
collectAll(1, 2, 3, 4, 5);
// Output: 1 2 [3, 4, 5]
```

---

## Quick Cheat Sheet

```javascript
// ARRAY DESTRUCTURING
const [a, b] = [1, 2];
const [x, , z] = [1, 2, 3]; // Skip element
const [p = 10] = []; // Default value

// OBJECT DESTRUCTURING
const { name, age } = { name: "Aman", age: 24 };
const { name: n, age: a } = obj; // Rename
const { x = 5 } = {}; // Default value

// SPREAD OPERATOR
const arr2 = [...arr1, 4, 5]; // Expand array
const obj2 = { ...obj1, x: 10 }; // Expand object

// REST PARAMETERS
function func(a, b, ...rest) {}
const [first, ...others] = [1, 2, 3];

// IN FUNCTION PARAMETERS
function func({ name, age }) {}
function func(...args) {}
```

---

## Real-World Examples

### Example 1: Extracting restaurant menu

```javascript
const restaurant = {
  categories: ["Italian", "Pizzeria"],
  starterMenu: ["Focaccia", "Bruschetta"],
  mainMenu: ["Pizza", "Pasta"],
};

const { categories, starterMenu } = restaurant;
console.log(categories, starterMenu);
// Output: ['Italian', 'Pizzeria'] ['Focaccia', 'Bruschetta']
```

### Example 2: Combining arrays

```javascript
const italianFoods = ["pasta", "pizza"];
const mexicanFoods = ["tacos", "burrito"];
const allFoods = [...italianFoods, ...mexicanFoods];
console.log(allFoods);
// Output: ['pasta', 'pizza', 'tacos', 'burrito']
```

### Example 3: Function with flexible parameters

```javascript
function orderFood(mainItem, ...sides) {
  console.log(`Main: ${mainItem}, Sides: ${sides.join(", ")}`);
}

orderFood("Pizza", "Salad", "Fries", "Drink");
// Output: Main: Pizza, Sides: Salad, Fries, Drink
```

---

## Common Mistakes to Avoid

❌ **Wrong:** Trying to use object destructuring with array notation

```javascript
const {[0]} = [1, 2, 3];  // This won't work as expected
```

✅ **Right:** Use array destructuring for arrays

```javascript
const [first] = [1, 2, 3]; // Correct
```

---

❌ **Wrong:** Forgetting parentheses when mutating existing variables

```javascript
let x = 1;
{x} = {x: 5};  // Error: Invalid syntax
```

✅ **Right:** Use parentheses

```javascript
let x = 1;
({ x } = { x: 5 }); // Correct
```

---

This guide should help you understand and recall these concepts whenever you need them! 📚

---

# Complete Script Files Reference

## Script 1: Destructuring & Spread Operator Basics (script.js)

Covers destructuring arrays and objects, spread operator usage, and rest parameters.

```javascript
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

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
const newArr = [1, 2, ...arr2];
console.log(newArr);

// print using spread operator
console.log(...newArr); // it just print the numbers without the array brackets

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
console.log(...newMenu);

// copy array
const mainMenyCopy = [...restaurant.mainMenu];

// join 2 arrays
const menuAll = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menuAll);

// iterables are arrays, string , maps, sets but not the objects.
const str = "AmanUllahShah";
const letters = [...str, " ", "S."];
console.log(letters);

console.log(...str);

// real world example
// multiple arguments in function call

// const ingredients = [prompt("let's make pasta!Ingredients 1"),
//   prompt("Ingredients 2"),
//   prompt("Ingredients 3")];

//   restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = {
  ...restaurant,
  founder: "AmanUllah Shah",
  foundedIn: 2024,
};
console.log(newRestaurant);

newRestaurant.name = "AMAN Restaurant";
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

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// for objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x1 = [23, 5, 7];
console.log(...x1);
add(...x1);
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
```

---

## Script 2: Logical Operators & For-Of Loop (script2.js)

Covers for-of loop, logical operators (||, &&), nullish coalescing (??), and logical assignment operators.

```javascript
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
```

---

## Script 3: Optional Chaining, Object Methods & Sets (script3.js)

Covers optional chaining (?.), looping over objects, and Sets data structure.

```javascript
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// with optoinal chaining

console.log(restaurant.openingHours?.thu?.open); // the "?" checks if "thu" exists or not
console.log(restaurant.openingHours?.mon?.open); // mon does not exist

// example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  console.log(restaurant.openingHours?.[day]?.open ?? "closed"); // using optional chaining in bracket notation
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method Does not exist");
console.log(restaurant.orderPasta?.(0, 1) ?? "Method Does not exist");

// optional chaining on arrays
const users = [{ name: "Aman", email: "aman@gmail.com" }];
console.log(users[0]?.name ?? "User array empty");
console.log(users[1]?.name ?? "User array empty");

// loop over objects
// loop over properties names

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

console.log(`we are oepn on ${properties.length} days`);

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

// property values
const values = Object.values(restaurant.openingHours);
console.log(values);

// entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

// sets
console.log(`Sets:\n`);

const orderSet = new Set([
  "pasta",
  "pitha",
  "halua",
  "pasta",
  "burger",
  "pitha",
]);
console.log(orderSet);
console.log(new Set("Amanullah"));

console.log(orderSet.size);
console.log(orderSet.has("bread"));
console.log(orderSet.has("burger"));
orderSet.add("garlic bread");
orderSet.add("garlic bread");
orderSet.add("garlic bread");
console.log(orderSet);
orderSet.delete("pitha");
console.log(orderSet);

// retrieve values from set
console.log(`-- Retrieving values from set --`);
for (const order of orderSet) {
  console.log(order);
}

// orderSet.clear();
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)]; // converting set to array using spread operator
console.log(staffUnique.length);

console.log(new Set("Amanullah Shah").size);
```

---

## Script 4: Maps Data Structure (script4.js)

Covers Maps, including creation, setting values, getting values, and converting objects to Maps.

```javascript
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set(
    "categories",
    new Set([
      "Italian",
      "Pizzeria",
      "Vegetarian",
      "Organic",
      "Vegetarian",
      "Organic",
    ])
  )
  .set("Open", 11)
  .set("Close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get("Open"));
console.log(rest.get("categories"));
console.log(rest.get("categories").size);

const time = 1;
console.log(rest.get(time > rest.get("Open") && time < rest.get("Close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear(); // removees all the properties

const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest);

console.log(rest.get(arr));

rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Anwer ${key} : ${value}`);
}

let answer = 3;
// const answer = Number(prompt('Enter your answer'));
console.log(`your answer is: ${answer}`);

console.log(question.get(question.get("correct") === answer));

// convert map to array
console.log([...question]); // using spread operator

console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
```

---

This complete reference guide includes theory, practical examples, and all four script implementations for comprehensive learning! 📚
