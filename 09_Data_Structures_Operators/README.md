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
