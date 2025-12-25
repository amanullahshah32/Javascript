# 📚 JavaScript Arrays - Complete Revision Guide

> **Your go-to cheat sheet for JavaScript Array methods!**  
> Last-minute prep? You're in the right place! 🚀

---

## 📁 Files in This Folder

| File                      | Description                            |
| ------------------------- | -------------------------------------- |
| `script.js`               | Main array methods & Bankist app logic |
| `arrayMethodsPractice.js` | Advanced array exercises               |
| `codingChallenge.js`      | 4 coding challenges with solutions     |

---

## 🎯 Quick Navigation

1. [Basic Array Methods](#-basic-array-methods)
2. [Looping Arrays: forEach](#-looping-arrays-foreach)
3. [Data Transformation: map, filter, reduce](#-data-transformation-map-filter-reduce)
4. [Finding Elements](#-finding-elements)
5. [Testing Conditions: some, every, includes](#-testing-conditions-some-every-includes)
6. [Flattening Arrays: flat & flatMap](#-flattening-arrays-flat--flatmap)
7. [Sorting Arrays](#-sorting-arrays)
8. [Creating & Filling Arrays](#-creating--filling-arrays)
9. [Method Chaining](#-method-chaining)
10. [Coding Challenges Summary](#-coding-challenges-summary)
11. [Quick Reference Table](#-quick-reference-table)

---

## 🔧 Basic Array Methods

### `slice()` - Extract Without Mutating ✅

```javascript
const arr = ["a", "b", "c", "d", "e"];

arr.slice(); // ['a', 'b', 'c', 'd', 'e'] - shallow copy
arr.slice(2); // ['c', 'd', 'e'] - from index 2 to end
arr.slice(-2); // ['d', 'e'] - last 2 elements
arr.slice(1, 4); // ['b', 'c', 'd'] - index 1 to 4 (4 not included)
```

> 💡 **Remember:** `slice()` does NOT mutate the original array!

---

### `splice()` - Extract & Mutate ⚠️

```javascript
const arr = ["a", "b", "c", "d", "e"];

arr.splice(2); // Removes from index 2 → arr = ['a', 'b']
arr.splice(-1); // Removes last element
arr.splice(1, 2); // From index 1, remove 2 elements
```

> ⚠️ **Warning:** `splice()` MUTATES the original array!

---

### `reverse()` - Reverse & Mutate ⚠️

```javascript
const arr = ["a", "b", "c"];
arr.reverse(); // ['c', 'b', 'a'] - MUTATES original!
```

---

### `concat()` - Join Arrays

```javascript
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.concat(arr2)       // ['a', 'b', 'c', 'd']
[...arr1, ...arr2]      // Same result using spread operator
```

---

### `join()` - Array to String

```javascript
["a", "b", "c"].join(" - "); // "a - b - c"
```

---

### `at()` - Modern Element Access 🆕

```javascript
const arr = [23, 11, 64];

arr.at(0); // 23 - same as arr[0]
arr.at(-1); // 64 - last element (cleaner than arr[arr.length-1])
arr.at(-2); // 11 - second to last

// Also works on strings!
"hello".at(-1); // 'o'
```

> 💡 **Pro Tip:** Use `at(-1)` to get the last element - much cleaner!

---

## 🔄 Looping Arrays: forEach

### Basic forEach

```javascript
const movements = [200, 450, -400, 3000];

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
```

### forEach with Index & Array

```javascript
movements.forEach(function (movement, index, array) {
  console.log(`Movement ${index + 1}: ${movement}`);
});
```

> 📝 **Parameter Order:** `(element, index, array)` - different from `for...of`!

---

### forEach on Maps

```javascript
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// USD: United States dollar
// EUR: Euro
```

---

### forEach on Sets

```javascript
const uniqueValues = new Set(["USD", "EUR", "USD"]);

uniqueValues.forEach(function (value, _, set) {
  console.log(value); // Sets have no keys, so key === value
});
```

> 💡 Use `_` for throwaway parameters (no key in Sets)

---

### ⚡ forEach vs for...of

| Feature         | `forEach`       | `for...of`        |
| --------------- | --------------- | ----------------- |
| Break/Continue  | ❌ Not possible | ✅ Works          |
| Return value    | `undefined`     | N/A               |
| Access to index | ✅ Built-in     | Need `.entries()` |
| Async/await     | ⚠️ Tricky       | ✅ Works well     |

---

## 🔄 Data Transformation: map, filter, reduce

### `map()` - Transform Each Element

```javascript
const movements = [200, 450, -400, 3000];
const euroToUSD = 1.1;

const movementsUSD = movements.map((mov) => mov * euroToUSD);
// [220, 495, -440, 3300]
```

### With Index

```javascript
const descriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
```

---

### `filter()` - Keep Elements That Pass Test

```javascript
const movements = [200, 450, -400, 3000, -650];

const deposits = movements.filter((mov) => mov > 0);
// [200, 450, 3000]

const withdrawals = movements.filter((mov) => mov < 0);
// [-400, -650]
```

---

### `reduce()` - Boil Down to Single Value 🔥

#### Sum of Array

```javascript
const movements = [200, 450, -400, 3000];

const balance = movements.reduce((accumulator, current, index, array) => {
  return accumulator + current;
}, 0); // 0 is initial value
// balance = 3250
```

#### Arrow Function Version

```javascript
const balance = movements.reduce((acc, cur) => acc + cur, 0);
```

#### Find Maximum Value

```javascript
const max = movements.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  movements[0]
);
```

> 💡 **Visualize reduce:** Think of a snowball rolling down a hill, getting bigger!

---

### 🎨 Visual: map vs filter vs reduce

```
     Original Array: [200, 450, -400, 3000, -650]
              ↓
┌─────────────────────────────────────────────────────────┐
│  MAP: Transform each element                            │
│  [200, 450, -400, 3000, -650] → [220, 495, -440, ...]   │
│  Same length, different values                          │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│  FILTER: Keep elements that pass test                   │
│  [200, 450, -400, 3000, -650] → [200, 450, 3000]       │
│  Smaller or equal length                                │
└─────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────┐
│  REDUCE: Boil down to single value                      │
│  [200, 450, -400, 3000, -650] → 2600                   │
│  Returns single value (number, string, object, etc.)    │
└─────────────────────────────────────────────────────────┘
```

---

## 🔍 Finding Elements

### `find()` - First Element Matching Condition

```javascript
const movements = [200, 450, -400, 3000];

const firstWithdrawal = movements.find((mov) => mov < 0);
// -400 (returns element, not array!)

// Find object in array
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
```

> 💡 **find vs filter:** `find` returns first element, `filter` returns array

---

### `findIndex()` - Index of First Match

```javascript
const index = movements.findIndex((mov) => mov === -400);
// 2
```

---

## ✅ Testing Conditions: some, every, includes

### `includes()` - Check for Exact Value

```javascript
const movements = [200, 450, -400];

movements.includes(-400); // true (equality check)
```

---

### `some()` - At Least One Passes Test

```javascript
const movements = [200, 450, -400, 3000];

movements.some((mov) => mov > 0); // true (any positive?)
movements.some((mov) => mov > 5000); // false
```

---

### `every()` - All Elements Pass Test

```javascript
movements.every((mov) => mov > 0); // false (not all positive)

const allPositive = [430, 1000, 700, 50, 90];
allPositive.every((mov) => mov > 0); // true
```

---

### 🎯 Quick Comparison

| Method            | Returns | Use Case                 |
| ----------------- | ------- | ------------------------ |
| `includes(value)` | Boolean | Check exact value exists |
| `some(callback)`  | Boolean | At least one passes test |
| `every(callback)` | Boolean | All pass test            |

---

## 📦 Flattening Arrays: flat & flatMap

### `flat()` - Flatten Nested Arrays

```javascript
const nested = [[1, 2, 3], [4, 5, 6], 7, 8];
nested.flat(); // [1, 2, 3, 4, 5, 6, 7, 8]

// Deep nesting
const deep = [
  [1, [2, [3, 4]]],
  [5, 6],
];
deep.flat(1); // [1, [2, [3, 4]], 5, 6]
deep.flat(2); // [1, 2, [3, 4], 5, 6]
deep.flat(3); // [1, 2, 3, 4, 5, 6]
```

---

### `flatMap()` - map + flat (1 level only)

```javascript
const accounts = [{ movements: [200, -100] }, { movements: [500, -200] }];

// Using flat() separately
accounts.map((acc) => acc.movements).flat();
// [200, -100, 500, -200]

// Using flatMap() - more efficient!
accounts.flatMap((acc) => acc.movements);
// [200, -100, 500, -200]
```

> 💡 **Note:** `flatMap` only goes 1 level deep!

---

## 📊 Sorting Arrays

### Strings (Default Sort)

```javascript
const names = ["Jonas", "Alice", "Bob"];
names.sort(); // ['Alice', 'Bob', 'Jonas'] - alphabetical
```

> ⚠️ `sort()` MUTATES the original array!

---

### Numbers (Need Compare Function!)

```javascript
const movements = [200, 450, -400, 3000, -650];

// ❌ WRONG - sorts as strings!
movements.sort(); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// ✅ CORRECT - Ascending
movements.sort((a, b) => a - b); // [-650, -400, 200, 450, 3000]

// ✅ CORRECT - Descending
movements.sort((a, b) => b - a); // [3000, 450, 200, -400, -650]
```

### 🧠 How Compare Function Works

```
If return < 0 → a comes before b (keep order)
If return > 0 → b comes before a (switch)
If return = 0 → order unchanged
```

---

## 🏗️ Creating & Filling Arrays

### `new Array()` - Create Empty Array

```javascript
const x = new Array(7); // [empty × 7]
// Can only use fill() on empty arrays!
```

---

### `fill()` - Fill Array with Value

```javascript
const arr = new Array(7);

arr.fill(1); // [1, 1, 1, 1, 1, 1, 1]
arr.fill(2, 3, 5); // [1, 1, 1, 2, 2, 1, 1] - fill 2 from index 3 to 5
```

---

### `Array.from()` - Create Arrays Programmatically 🔥

```javascript
// Create array with values 1-10
Array.from({ length: 10 }, (_, i) => i + 1);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Generate 100 random dice rolls
Array.from({ length: 100 }, () => Math.floor(Math.random() * 6) + 1);

// Convert NodeList to Array
const movementElements = document.querySelectorAll(".movement__value");
const movementsArray = Array.from(movementElements, (el) =>
  Number(el.textContent)
);
```

---

## ⛓️ Method Chaining

### Pipeline Pattern

```javascript
const totalDepositsUSD = accounts
  .flatMap((acc) => acc.movements) // Get all movements
  .filter((mov) => mov > 0) // Keep only deposits
  .map((mov) => mov * 1.1) // Convert to USD
  .reduce((acc, mov) => acc + mov, 0); // Sum all
```

> 💡 **Tips for Chaining:**
>
> - Only chain methods that return arrays
> - Don't chain `reduce()` in the middle (returns single value)
> - Use `flatMap` instead of `map().flat()` when possible
> - Debugging: Use `console.log` inside callbacks

---

## 💻 Coding Challenges Summary

### Challenge 1: Dog Age Checker

```javascript
// Check if dogs are puppies or adults
const checkDogs = (dogsJulia, dogsKate) => {
  const corrected = dogsJulia.slice(1, -2); // Remove cats
  const allDogs = [...corrected, ...dogsKate];

  allDogs.forEach((age, i) => {
    const type = age >= 3 ? "adult" : "puppy";
    console.log(`Dog ${i + 1} is an ${type}`);
  });
};
```

---

### Challenge 2 & 3: Calculate Human Age

```javascript
// Convert dog years to human years & calculate average
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
```

---

### Challenge 4: Dog Food Analysis

```javascript
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  // ... more dogs
];

// 1. Calculate recommended food
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2. Find owner's dog
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));

// 3. Filter by eating habits
const eatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
```

---

## 📋 Quick Reference Table

| Method        | Mutates? | Returns        | Use Case            |
| ------------- | -------- | -------------- | ------------------- |
| `slice()`     | ❌       | New array      | Extract portion     |
| `splice()`    | ✅       | Removed items  | Remove/insert       |
| `reverse()`   | ✅       | Reversed array | Reverse order       |
| `concat()`    | ❌       | New array      | Join arrays         |
| `join()`      | ❌       | String         | Array to string     |
| `at()`        | ❌       | Element        | Access element      |
| `forEach()`   | ❌       | undefined      | Loop/side effects   |
| `map()`       | ❌       | New array      | Transform           |
| `filter()`    | ❌       | New array      | Filter by condition |
| `reduce()`    | ❌       | Any value      | Accumulate          |
| `find()`      | ❌       | Element        | Find first match    |
| `findIndex()` | ❌       | Number         | Find index          |
| `includes()`  | ❌       | Boolean        | Check value exists  |
| `some()`      | ❌       | Boolean        | Any passes test     |
| `every()`     | ❌       | Boolean        | All pass test       |
| `flat()`      | ❌       | New array      | Flatten nested      |
| `flatMap()`   | ❌       | New array      | Map + flatten       |
| `sort()`      | ✅       | Sorted array   | Sort elements       |
| `fill()`      | ✅       | Modified array | Fill with value     |

---

## 🧠 Memory Tips

1. **Mutating Methods (Change Original):** `splice`, `reverse`, `sort`, `fill`  
   → 💡 Think: "**S**plice **R**everses **S**ort **F**ills" = SRSF mutates!

2. **forEach vs map:**

   - `forEach` = Just loop (returns `undefined`)
   - `map` = Loop + transform (returns new array)

3. **find vs filter:**

   - `find` = First match (single element)
   - `filter` = All matches (array)

4. **some vs every:**

   - `some` = || (OR) - at least one
   - `every` = && (AND) - all must pass

5. **flat vs flatMap:**
   - `flatMap` = `map` + `flat(1)` (only 1 level!)
   - Need deeper? Use `flat(depth)` separately

---

## 🎓 Key Takeaways

✅ Use `map`, `filter`, `reduce` for data transformation  
✅ Use `find` for single element, `filter` for multiple  
✅ Chain methods for clean, readable code  
✅ Remember which methods mutate!  
✅ `Array.from()` is powerful for creating arrays programmatically  
✅ Always use compare function when sorting numbers!

---

> **Happy Coding! 🚀**  
> _Go ace that JavaScript interview!_
