# Section 9: Data Structures & Operators - Complete Revision Guide

A comprehensive reference guide covering all concepts from script1, script2, script3, script4, and coding challenges.

---

## 📋 Table of Contents

1. [Destructuring](#destructuring)
2. [Spread Operator](#spread-operator)
3. [Rest Parameters](#rest-parameters)
4. [For-Of Loop](#for-of-loop)
5. [Logical Operators](#logical-operators)
6. [Nullish Coalescing & Assignment](#nullish-coalescing--assignment)
7. [Optional Chaining](#optional-chaining)
8. [Object Methods](#object-methods)
9. [Sets](#sets)
10. [Maps](#maps)
11. [String Methods](#string-methods)

---

# DESTRUCTURING

## Array Destructuring

### Basic Pattern

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr; // a=1, b=2, c=3
```

### Skipping Elements

```javascript
const [first, , third] = [1, 2, 3]; // first=1, third=3
```

### Nested Destructuring

```javascript
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested; // i=2, j=5, k=6
```

### Default Values

```javascript
const [x = 10, y = 20, z = 30] = [, 9]; // x=10, y=9, z=30
```

### Variable Swapping

```javascript
let a = 5,
  b = 10;
[a, b] = [b, a]; // a=10, b=5
```

### From Function Return

```javascript
const [starter, main] = restaurant.order(2, 0);
```

---

## Object Destructuring

### Basic Pattern

```javascript
const { name, age } = { name: "Aman", age: 24, city: "Dhaka" };
```

### Renaming Properties

```javascript
const { name: fullName, age: years } = person;
```

### Default Values

```javascript
const { name, age = 30, city = "Unknown" } = person;
```

### Nested Objects

```javascript
const {
  fri: { open: o, close: cc },
} = restaurant.openingHours;
```

### Mutating Variables

```javascript
let x = 100,
  y = 200;
({ x, y } = { x: 1, y: 2 }); // NOTE: Parentheses required!
```

### Rest in Objects

```javascript
const { name, age, ...details } = person; // details contains remaining properties
```

---

# SPREAD OPERATOR (...)

## Array Spreading

### Basic Usage

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]
```

### Adding Elements

```javascript
const newMenu = ["Risotto", ...restaurant.mainMenu, "Salad"];
```

### Copy Array (Shallow)

```javascript
const copy = [...original]; // Original is not affected
```

### Spread Strings

```javascript
const letters = [..."AmanUllah", " ", "S."]; // Converts string to array of chars
console.log(..."Aman"); // Prints: A m a n (without array brackets)
```

---

## Object Spreading

### Copying Objects

```javascript
const newRestaurant = { ...restaurant };
```

### Adding/Overriding Properties

```javascript
const updated = { ...person, age: 25 }; // Override age
const extended = { ...restaurant, founder: "Aman", foundedIn: 2024 };
```

### Merging Objects

```javascript
const merged = { ...obj1, ...obj2 };
```

---

# REST PARAMETERS (...)

## Rest in Functions

```javascript
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

add(2, 3); // Works
add(5, 3, 7, 2); // Works
add(...[23, 5, 7]); // Spread converts array to individual arguments
```

## Rest in Destructuring

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]
```

## Rest in Object Destructuring

```javascript
const { name, age, ...details } = person;
// Details contains all remaining properties
```

---

# FOR-OF LOOP

## Basic For-Of

```javascript
for (const item of menus) {
  console.log(item);
}
```

## For-Of with .entries()

```javascript
for (const item of menus.entries()) {
  console.log(item[0] + 1, item[1]); // item is [index, element]
}
```

## For-Of with Destructuring

```javascript
for (const [index, element] of menus.entries()) {
  console.log(`${index + 1}: ${element}`);
}
```

---

# LOGICAL OPERATORS

## OR Operator (||)

- Returns first **truthy** value
- Returns last value if all falsy

```javascript
console.log(undefined || "Aman"); // "Aman"
console.log(3 || "Aman"); // 3
console.log(0 || 5); // 5

const guest = numGuests || 10; // Default value pattern
```

**Falsy values:** `false, 0, "", null, undefined, NaN`

---

## AND Operator (&&)

- Returns first **falsy** value
- Returns last value if all truthy

```javascript
console.log(0 && "Aman"); // 0
console.log(7 && "Aman"); // "Aman"
console.log("hello" && 23 && "Aman"); // "Aman"

// Conditional execution
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms");
}

// Shorter way:
restaurant.orderPizza && restaurant.orderPizza("mushrooms");
```

---

# NULLISH COALESCING & ASSIGNMENT

## Nullish Coalescing Operator (??)

- Only considers `null` and `undefined` as nullish
- Treats `0` and `""` as valid values (unlike ||)

```javascript
const guest1 = 0 ?? 10; // 0 (not replaced)
const guest2 = undefined ?? 10; // 10
const guest3 = null ?? 10; // 10
```

---

## Logical Assignment Operators

### OR Assignment (||=)

```javascript
rest1.numGuests ||= 10; // Assigns only if value is falsy
// rest1.numGuests = rest1.numGuests || 10
```

### Nullish Assignment (??=)

```javascript
rest1.numGuests ??= 10; // Assigns only if null or undefined
```

### AND Assignment (&&=)

```javascript
rest1.owner &&= "<ANONYMOUS>"; // Assigns only if truthy
```

---

# OPTIONAL CHAINING (?)

## Property Access

```javascript
console.log(restaurant.openingHours?.thu?.open); // Safe access
console.log(restaurant.openingHours?.mon?.open); // Returns undefined (no error)
```

## Bracket Notation

```javascript
for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? "closed";
  console.log(`${day}: ${open}`);
}
```

## Method Calls

```javascript
console.log(restaurant.order?.(0, 1)); // Checks if method exists
console.log(restaurant.wrongMethod?.()); // Returns undefined (no error)
```

## Array/Object Checking

```javascript
const users = [{ name: "Aman" }];
console.log(users[0]?.name); // "Aman"
console.log(users[1]?.name); // undefined (safe, no error)
```

---

# OBJECT METHODS

## Object.keys()

- Returns array of property names

```javascript
const keys = Object.keys(restaurant.openingHours);
// ['thu', 'fri', 'sat']
```

## Object.values()

- Returns array of property values

```javascript
const values = Object.values(restaurant.openingHours);
// [{ open: 12, close: 22 }, ...]
```

## Object.entries()

- Returns array of [key, value] pairs

```javascript
const entries = Object.entries(restaurant.openingHours);
// [['thu', {...}], ['fri', {...}], ...]

for (const [day, hours] of entries) {
  console.log(`${day}: ${hours.open}-${hours.close}`);
}
```

## Looping Over Objects

```javascript
// Property names
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

// [key, value] pairs
for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
```

---

# SETS

## Creating Sets

```javascript
const orderSet = new Set(["pasta", "pitha", "pasta", "burger"]);
// Set(3) { 'pasta', 'pitha', 'burger' } - duplicates removed!

const charSet = new Set("Amanullah");
// Set(7) { 'A', 'm', 'a', 'n', 'u', 'l', 'h' }
```

## Set Methods

### .size

```javascript
console.log(orderSet.size); // 3
```

### .has()

```javascript
console.log(orderSet.has("burger")); // true
console.log(orderSet.has("pizza")); // false
```

### .add()

```javascript
orderSet.add("garlic bread");
orderSet.add("garlic bread"); // No change (already exists)
```

### .delete()

```javascript
orderSet.delete("pitha");
```

### .clear()

```javascript
orderSet.clear(); // Removes all items
```

## Iterating Over Set

```javascript
for (const order of orderSet) {
  console.log(order);
}
```

## Converting Set to Array

```javascript
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
const staffUnique = [...new Set(staff)];
// ['Waiter', 'Chef', 'Manager']

console.log(staffUnique.length); // 3
```

---

# MAPS

## Creating Maps

### Empty Map

```javascript
const rest = new Map();
```

### Map with Data

```javascript
const question = new Map([
  ["question", "What is the best language?"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
```

---

## Map Methods

### .set(key, value)

```javascript
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(true, "We are open");

// Chaining
rest
  .set("categories", new Set(["Italian", "Pizzeria"]))
  .set("Open", 11)
  .set("Close", 23);
```

### .get(key)

```javascript
console.log(rest.get("name")); // 'Classico Italiano'
console.log(rest.get(true)); // 'We are open'
console.log(rest.get("missing")); // undefined
```

### .has(key)

```javascript
console.log(rest.has("name")); // true
console.log(rest.has(1)); // true
```

### .delete(key)

```javascript
rest.delete(2);
```

### .size

```javascript
console.log(rest.size); // Number of entries
```

### .clear()

```javascript
rest.clear(); // Removes all entries
```

---

## Map with Any Type of Key

```javascript
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr)); // 'Test'

rest.set(document.querySelector("h1"), "Heading");
```

---

## Iterating Over Maps

### For-Of Loop

```javascript
for (const [key, value] of question) {
  console.log(`${key}: ${value}`);
}
```

### Filtering

```javascript
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
```

### .entries()

```javascript
console.log(...question.entries());
```

### .keys()

```javascript
console.log(...question.keys());
```

### .values()

```javascript
console.log(...question.values());
```

---

## Converting Objects to Maps

```javascript
const hoursMap = new Map(Object.entries(restaurant.openingHours));
```

## Converting Maps to Arrays

```javascript
const arr = [...question]; // Using spread operator
```

---

# STRING METHODS

## Case Conversion

### .toLowerCase()

```javascript
"HELLO".toLowerCase(); // 'hello'
```

### .toUpperCase()

```javascript
"hello".toUpperCase(); // 'HELLO'
```

---

## Accessing Characters

### Index Access

```javascript
const str = "Hello";
console.log(str[0]); // 'H'
console.log(str[1]); // 'e'
console.log(str.length); // 5
```

---

## Finding Substrings

### .indexOf(substring)

```javascript
"JavaScript".indexOf("Script"); // 4
"JavaScript".indexOf("Python"); // -1 (not found)
```

### .lastIndexOf(substring)

```javascript
"hello hello".lastIndexOf("hello"); // 6 (last occurrence)
```

### .includes(substring)

```javascript
"JavaScript".includes("Script"); // true
"JavaScript".includes("Python"); // false
```

### .startsWith(substring)

```javascript
"JavaScript".startsWith("Java"); // true
```

### .endsWith(substring)

```javascript
"JavaScript".endsWith("Script"); // true
```

---

## Extracting Parts

### .slice(start, end)

```javascript
const str = "JavaScript";
str.slice(0, 4); // 'Java'
str.slice(4); // 'Script'
str.slice(-6); // 'Script' (last 6 chars)
str.slice(1, -1); // 'avaScrip' (remove first and last)
str.slice(-2); // 'pt' (last 2 chars)
```

---

## Splitting & Joining

### .split(separator)

```javascript
"hello world".split(" "); // ['hello', 'world']
"Aman Ullah".split(" "); // ['Aman', 'Ullah']
"a-b-c".split("-"); // ['a', 'b', 'c']
"abc".split(""); // ['a', 'b', 'c']
```

### .join(separator)

```javascript
["Mr.", "Aman", "Shah"].join(" "); // 'Mr. Aman Shah'
["a", "b", "c"].join("-"); // 'a-b-c'
```

### Combined: Destructuring from Split

```javascript
const [firstName, lastName] = "Amanullah Shah".split(" ");
```

---

## Padding

### .padStart(length, fill)

- Pads string at the **start**

```javascript
"5".padStart(3, "0"); // '005'
"hello".padStart(10, "*"); // '*****hello'
"go to gate 23!".padStart(25, "+"); // '++++++++++++go to gate 23!'
```

### .padEnd(length, fill)

- Pads string at the **end**

```javascript
"hello".padEnd(10, "*"); // 'hello*****'
"go to gate 23!".padEnd(35, "+"); // 'go to gate 23!+++++++++++++++++++'
```

### Use Case: Masking Credit Card

```javascript
const maskedCard = function (num) {
  const str = String(num);
  const last = str.slice(-4);
  const hidden = last.padStart(str.length, "*");
  console.log(hidden); // '****3456' for 16-digit card
};
```

---

## Repeating

### .repeat(count)

```javascript
"Ha".repeat(3); // 'HaHaHa'
"✈".repeat(5); // '✈✈✈✈✈'
("Bad weather... "); // Repeat message multiple times
```

---

## Replacing

### .replace(old, new)

- Replaces **first** occurrence only

```javascript
"288,97£".replace("£", "$"); // '288,97$'
"hello hello".replace("hello", "hi"); // 'hi hello'
```

### .replaceAll(old, new)

- Replaces **all** occurrences

```javascript
"All passengers come to boarding door 23. Boarding door 23!".replaceAll(
  "door",
  "gate"
);
// 'All passengers come to boarding gate 23. Boarding gate 23!'
```

---

## Trimming

### .trim()

- Removes whitespace from both ends

```javascript
"  hello world  ".trim(); // 'hello world'
```

---

## Advanced: String Processing

### Fixing Capitalization

```javascript
const passenger = "aMaNuLlaH sHaH";
const fixed = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
// 'Amanullah shah'
```

### Email Normalization

```javascript
const email = "AmanUllah@GMAIL.com";
const normalized = email.toLowerCase().trim();
// 'amanullah@gmail.com'
```

### Flight Data Parsing

```javascript
for (const flight of flightData.split("+")) {
  let [type, from, to, time] = flight.split(";");

  type = type.replaceAll("_", " ").trim();
  from = from.slice(0, 3).toUpperCase();
  to = to.slice(0, 3).toUpperCase();

  console.log(
    `${type.startsWith("Delayed") ? "🔴 Delayed" : type}
     from ${from} to ${to.padStart(4)} at ${time.replace(":", "h")}`
  );
}
```

---

# QUICK REFERENCE CHEAT SHEET

## Spread vs Rest

| Spread                   | Rest                            |
| ------------------------ | ------------------------------- |
| Expands elements         | Collects elements               |
| Right side: `[...arr]`   | Left side: `function(...args)`  |
| Arrays/Objects           | Function params & destructuring |
| Creates new array/object | Gathers into array              |

## Operators Comparison

| Operator | Use Case                       | Example              |
| -------- | ------------------------------ | -------------------- |
| `\|\|`   | Any data, returns truthy       | `value \|\| 10`      |
| `&&`     | All truthy?, returns last      | `value && execute()` |
| `??`     | Nullish only (null, undefined) | `value ?? 10`        |
| `\|\|=`  | Assign if falsy                | `x \|\|= 10`         |
| `??=`    | Assign if nullish              | `x ??= 10`           |
| `&&=`    | Assign if truthy               | `x &&= 5`            |

## String Methods Summary

| Method                  | Purpose              | Example                                |
| ----------------------- | -------------------- | -------------------------------------- |
| `.toLowerCase()`        | Convert to lowercase | `'HELLO'.toLowerCase()` → 'hello'      |
| `.toUpperCase()`        | Convert to uppercase | `'hello'.toUpperCase()` → 'HELLO'      |
| `.slice(a, b)`          | Extract substring    | `'hello'.slice(1, 4)` → 'ell'          |
| `.split(sep)`           | Split into array     | `'a-b-c'.split('-')` → `['a','b','c']` |
| `.join(sep)`            | Join array to string | `['a','b'].join('-')` → 'a-b'          |
| `.includes(str)`        | Check if contains    | `'hello'.includes('ell')` → true       |
| `.startsWith(str)`      | Check start          | `'hello'.startsWith('he')` → true      |
| `.endsWith(str)`        | Check end            | `'hello'.endsWith('lo')` → true        |
| `.padStart(len, fill)`  | Pad at start         | `'5'.padStart(3, '0')` → '005'         |
| `.padEnd(len, fill)`    | Pad at end           | `'5'.padEnd(3, '0')` → '500'           |
| `.repeat(n)`            | Repeat string        | `'ha'.repeat(3)` → 'hahaha'            |
| `.replace(old, new)`    | Replace first        | `'aa'.replace('a', 'b')` → 'ba'        |
| `.replaceAll(old, new)` | Replace all          | `'aa'.replaceAll('a', 'b')` → 'bb'     |
| `.trim()`               | Remove whitespace    | `'  hi  '.trim()` → 'hi'               |
| `.indexOf(str)`         | Find position        | `'hello'.indexOf('l')` → 2             |

---

# CODING CHALLENGES SUMMARY

## Challenge 1: Destructuring & Spread

- Extract arrays from objects using destructuring
- Merge arrays using spread operator
- Use rest parameters in functions
- Combine spread and destructuring

## Challenge 2: For-Of & Object Methods

- Loop with for-of and .entries()
- Use Object.keys(), .values(), .entries()
- Use destructuring in loops
- Apply logical operators for conditions

## Challenge 3: Sets & Maps

- Create Sets and remove duplicates
- Map operations (set, get, delete)
- Convert objects to maps
- Iterate over maps with for-of

## Challenge 4: String Methods & DOM

- Parse and transform strings
- Use string methods for validation
- Handle input from textarea
- Apply case conversion and padding

---

This guide covers everything from script1, script2, script3, script4, and all coding challenges! Use it for quick revision and reference. 📚
