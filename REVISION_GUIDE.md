# JavaScript Revision Guide

## Variables and Data Types

### Variable Declaration

```javascript
let variableName = value; // Can be reassigned later
const constantName = value; // Cannot be reassigned
```

### Data Types

- **Number**: `23`, `3.14`
- **String**: `'text'`, `"text"`, or `` `template string` ``
- **Boolean**: `true`, `false`
- **Undefined**: Variable declared but not assigned a value
- **Null**: Empty value
- **Object**: Collections of related data
- **Symbol**: Unique and immutable value (ES6)

### Checking Type

```javascript
typeof variable; // Returns the type as a string
```

## Operators

### Arithmetic Operators

```javascript
+    // Addition
-    // Subtraction
*    // Multiplication
/    // Division
%    // Modulus (remainder)
**   // Exponentiation (power)
++   // Increment
--   // Decrement
```

### Assignment Operators

```javascript
=     // Assignment
+=    // Addition assignment (x += y is same as x = x + y)
-=    // Subtraction assignment
*=    // Multiplication assignment
/=    // Division assignment
```

### Comparison Operators

```javascript
==    // Equal to (loose equality, with type conversion)
===   // Strict equal (no type conversion)
!=    // Not equal to
!==   // Strict not equal
>     // Greater than
<     // Less than
>=    // Greater than or equal to
<=    // Less than or equal to
```

### Logical Operators

```javascript
&&    // Logical AND
||    // Logical OR
!     // Logical NOT
```

## Type Conversion and Coercion

### Type Conversion (explicit)

```javascript
Number("23"); // Converts string to number
String(23); // Converts number to string
Boolean(0); // Converts to boolean (falsy)
Boolean("text"); // Converts to boolean (truthy)
```

### Type Coercion (implicit)

```javascript
"I am " + 23 + " years old"; // Results in string: "I am 23 years old"
"23" - "10" - 3; // Results in number: 10
"10" + 1; // Results in string: "101"
```

## Conditional Statements

### If/Else Statement

```javascript
if (condition) {
  // code to execute if condition is true
} else if (anotherCondition) {
  // code to execute if anotherCondition is true
} else {
  // code to execute if all conditions are false
}
```

### Ternary Operator

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

## Truthy and Falsy Values

### Falsy Values (convert to false)

- `0`
- `''` (empty string)
- `undefined`
- `null`
- `NaN`
- `false`

### Truthy Values

- Everything else not falsy

## Functions

### Function Declaration

```javascript
function functionName(parameter1, parameter2) {
  // code to be executed
  return result;
}
```

### Function Expression

```javascript
const functionName = function (parameter1, parameter2) {
  // code to be executed
  return result;
};
```

### Arrow Functions

```javascript
// Simple arrow function
const add = (a, b) => a + b;

// Multi-line arrow function
const calculate = (a, b) => {
  const result = a + b;
  return result;
};
```

## Arrays

### Creating Arrays

```javascript
// Array literal
const arrayName = [element1, element2, element3];

// Array constructor
const arrayName = new Array(element1, element2, element3);
```

### Accessing Array Elements

```javascript
arrayName[0]; // First element
arrayName[arrayName.length - 1]; // Last element
```

### Basic Array Methods

```javascript
arrayName.push(element); // Add element to end, returns new length
arrayName.pop(); // Remove last element, returns removed element
arrayName.length; // Number of elements in array
```

### More Array Methods

```javascript
arrayName.unshift(element); // Add element to beginning, returns new length
arrayName.shift(); // Remove first element, returns removed element
const newArray = array1.concat(array2); // Combine arrays
array.indexOf(element); // Find index of element
array.includes(element); // Check if element exists (returns boolean)
```

### Array Destructuring

```javascript
const numbers = [1, 2, 3];
const [first, second, third] = numbers; // first=1, second=2, third=3

// Skipping elements
const [a, , c] = numbers; // a=1, c=3

// With default values
const [x = 0, y = 0] = [5]; // x=5, y=0
```

## Objects

### Creating Objects

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  job: "developer",
};
```

### Accessing Object Properties

```javascript
// Dot notation
console.log(person.firstName);

// Bracket notation
console.log(person["firstName"]);

// Dynamic property access
const property = "age";
console.log(person[property]);
```

### Adding/Modifying Properties

```javascript
person.location = "New York"; // Add new property
person["email"] = "john@example.com"; // Add using bracket notation
person.age = 31; // Modify existing property
```

### Object Methods

```javascript
const calculator = {
  value: 0,

  // Method using function expression
  add: function (num) {
    this.value += num;
    return this.value;
  },

  // Method shorthand (ES6)
  multiply(num) {
    this.value *= num;
    return this.value;
  },
};
```

### The `this` Keyword

```javascript
const person = {
  name: "John",
  birthYear: 1990,

  calcAge: function () {
    this.age = 2025 - this.birthYear; // 'this' refers to the person object
    return this.age;
  },
};
```

## Loops

### For Loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Looping through arrays
const array = ["a", "b", "c"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`${i}-${j}`);
  }
}
```

### While Loop

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Example: Random dice roll
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`Rolled: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
```

### Loop Control Statements

```javascript
// Continue - skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Skip when i is 2
  console.log(i); // Prints: 0, 1, 3, 4
}

// Break - exit the loop
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Stop when i is 3
  console.log(i); // Prints: 0, 1, 2
}
```

### Looping Backwards

```javascript
const array = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]); // Prints: 5, 4, 3, 2, 1
}
```

## Math Object Methods

```javascript
Math.random(); // Random number between 0 and 1
Math.trunc(4.9); // Remove decimal part: 4
Math.round(4.5); // Round to nearest integer: 5
Math.ceil(4.1); // Round up: 5
Math.floor(4.9); // Round down: 4
Math.max(1, 5, 3); // Find maximum: 5
Math.min(1, 5, 3); // Find minimum: 1

// Generate random integer between min and max (inclusive)
const randomInt = Math.trunc(Math.random() * (max - min + 1)) + min;
```

## Advanced String Operations

```javascript
// Template literals with expressions
const name = "John";
const age = 25;
const message = `Hello, I'm ${name} and I'm ${age} years old.`;

// Multi-line strings
const multiLine = `This is line 1
This is line 2
This is line 3`;

// String methods
"hello".length; // 5
"hello".toUpperCase(); // 'HELLO'
"HELLO".toLowerCase(); // 'hello'
```

## Tips for Effective JavaScript Coding

1. Always use descriptive variable names
2. Use 'use strict' for safer code
3. Prefer `===` (strict equality) over `==` (loose equality)
4. Use template literals for better string concatenation
5. Comment your code appropriately
6. Use `const` for values that won't change, `let` for variables that will change
7. Use meaningful function and variable names
8. Keep functions small and focused on a single task
9. Use template literals for better string concatenation
10. Comment your code appropriately

## Common JavaScript Patterns

```javascript
// Function that calls another function
function mainFunction() {
  const result = helperFunction();
  return result;
}

// Processing array elements
const ages = years.map((year) => 2025 - year);
```

## Problem-Solving Patterns

```javascript
// Calculate averages
function calcAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// Conditional calculations (like tip calculator)
function calculateTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Processing arrays with conditions
function processItems(items) {
  const results = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] >= someCondition) {
      results.push(processedValue);
    }
  }
  return results;
}

// Object method with calculations
const person = {
  birthYear: 2001,
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `Person is ${this.calcAge()} years old`;
  },
};

// Random number generation
const randomDiceRoll = Math.trunc(Math.random() * 6) + 1; // 1-6
const randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min; // min-max
```

Remember: JavaScript is case-sensitive and uses camel case for variable names (e.g., `myVariableName`).
