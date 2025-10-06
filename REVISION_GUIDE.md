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

### Array Properties and Operations

```javascript
const newArray = array1.concat(array2); // Combine arrays
array.indexOf(element); // Find index of element
array.includes(element); // Check if element exists (returns boolean)
```

## Tips for Effective JavaScript Coding

1. Always use descriptive variable names
2. Use 'use strict' for safer code
3. Prefer `===` (strict equality) over `==` (loose equality)
4. Use template literals for better string concatenation
5. Comment your code appropriately

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

Remember: JavaScript is case-sensitive and uses camel case for variable names (e.g., `myVariableName`).
