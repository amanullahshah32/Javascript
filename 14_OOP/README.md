# OOP in JavaScript — The Complete Beginner's Study Guide

> **Hey! If you're reading this, OOP probably feels confusing right now. That's 100% normal.** This guide will walk you through every single concept in this folder, step by step, like I'm sitting next to you and explaining it on a whiteboard. No jargon without explanation. No skipping steps. Let's go.

---

## Table of Contents

1. [What Even IS OOP?](#1-what-even-is-oop)
2. [The `this` Keyword — Your Best Friend (and Enemy)](#2-the-this-keyword)
3. [Constructor Functions — The OG Way to Create Objects](#3-constructor-functions)
4. [The `new` Keyword — What Actually Happens Behind the Scenes](#4-the-new-keyword)
5. [Prototypes — The Secret Link Between Objects](#5-prototypes)
6. [The Prototype Chain — How JavaScript Finds Methods](#6-the-prototype-chain)
7. [ES6 Classes — The Modern & Cleaner Syntax](#7-es6-classes)
8. [Getters & Setters — Controlling How Properties Are Accessed](#8-getters--setters)
9. [Static Methods — Methods That Belong to the Class, Not the Object](#9-static-methods)
10. [Object.create() — The Simplest Way (But Rarely Used)](#10-objectcreate)
11. [Inheritance Between Classes — Making One Class Extend Another](#11-inheritance-between-classes)
12. [Encapsulation — Hiding Data & Protecting It](#12-encapsulation--private-fields)
13. [Method Chaining — Calling Methods Back-to-Back](#13-method-chaining)
14. [Summary Cheat Sheet](#14-summary-cheat-sheet)

---

## 1. What Even IS OOP?

OOP stands for **Object-Oriented Programming**. It's a way of writing code where you organize everything into **objects**.

Think of it like this:

> **Real life:** You are a **Person**. You have properties (name, age, height) and you can do things (walk, talk, eat).
>
> **In code:** You create a **Person** object. It has properties (`name`, `birthYear`) and methods (`calcAge()`, `greet()`).

**The 4 pillars of OOP:**

| Pillar            | What it means (plain English)                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| **Abstraction**   | Hide complex details, show only what's needed. (You use a TV remote without knowing the circuits inside.)     |
| **Encapsulation** | Keep some data private so outside code can't mess with it.                                                    |
| **Inheritance**   | A child class can get all the features of a parent class. (A Student IS a Person, so it gets Person's stuff.) |
| **Polymorphism**  | A child class can override a method from the parent to do its own thing.                                      |

We'll see ALL of these in action below. For now, just keep them in mind.

---

## 2. The `this` Keyword

Before OOP makes any sense, you NEED to understand `this`.

**`this` = the object that is calling the function.**

```js
const aman = {
  name: "Aman",
  greet() {
    console.log(this); // 👈 `this` = the `aman` object, because `aman` is calling greet()
  },
};

aman.greet(); // { name: 'Aman', greet: [Function] }
```

**Key rule:** `this` is NOT fixed. It changes depending on **who calls the function**.

| How the function is called        | What `this` is                                             |
| --------------------------------- | ---------------------------------------------------------- |
| `object.method()`                 | The object before the dot                                  |
| `new Constructor()`               | The brand new empty object being created                   |
| Standalone function (strict mode) | `undefined`                                                |
| Arrow function                    | `this` from the surrounding scope (it doesn't get its own) |

You'll see `this` everywhere in OOP. Whenever you're confused, ask yourself: **"Who is calling this function?"**

---

## 3. Constructor Functions

> 📁 **See:** `script.js` lines 3–14

A constructor function is just a **regular function** that we use to build objects. The only difference is:

- We call it with the `new` keyword.
- By convention, its name starts with a **capital letter**.

```js
const Person = function (firstName, birthYear) {
  // `this` = the new empty object that `new` creates
  this.firstName = firstName; // add a property called firstName
  this.birthYear = birthYear; // add a property called birthYear
};
```

Now you can create as many Person objects as you want:

```js
const aman = new Person("Aman", 2001);
const noshin = new Person("Noshin", 2000);

console.log(aman); // Person { firstName: 'Aman', birthYear: 2001 }
console.log(noshin); // Person { firstName: 'Noshin', birthYear: 2000 }
```

Each one is a **separate object** with its own `firstName` and `birthYear`. We call each one an **instance** of `Person`.

### Why NOT add methods inside the constructor?

You might think: "Let me just add a method inside too!"

```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // ❌ BAD — Don't do this!
  this.calcAge = function () {
    console.log(2026 - this.birthYear);
  };
};
```

**Why is this bad?** Because every single object you create will get its **own copy** of `calcAge`. If you create 1000 persons, you'd have 1000 copies of the exact same function floating around in memory. That's wasteful.

**The solution? Prototypes.** (Keep reading!)

---

## 4. The `new` Keyword

> 📁 **See:** `script.js` lines 22–26

When you write `const aman = new Person("Aman", 2001)`, JavaScript does **4 things** behind the scenes:

```
Step 1: A brand new empty object {} is created.
Step 2: The function is called, and `this` = that new empty object {}.
Step 3: The new object is linked to the constructor's prototype (we'll explain this next).
Step 4: The function automatically returns that object.
```

So `new` basically automates creating an object, setting it up, and giving it back to you.

```js
// This is what `new` does internally (simplified):
// 1. const obj = {};
// 2. Person.call(obj, "Aman", 2001);  → obj.firstName = "Aman", obj.birthYear = 2001
// 3. obj.__proto__ = Person.prototype; → links obj to Person's prototype
// 4. return obj;                       → aman = obj
```

You can verify an object was created by a constructor:

```js
console.log(aman instanceof Person); // true ✅
```

---

## 5. Prototypes

> 📁 **See:** `script.js` lines 29–36

This is the part that confuses most beginners. Let me make it dead simple.

### The Problem

We said we shouldn't put methods inside the constructor function (wastes memory). So where do we put them?

### The Solution: The Prototype

Every function in JavaScript automatically has a property called `.prototype`. It's just an object. We can stick methods on it, and **all instances will share that one copy**.

```js
Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};
```

Now:

```js
aman.calcAge(); // 25  ← aman doesn't have calcAge directly, but it finds it on the prototype
noshin.calcAge(); // 26  ← same function, not a copy!
```

### How does `aman` find `calcAge()` if it doesn't own it?

Because of the **prototype link**. When you created `aman` with `new Person(...)`, JavaScript secretly linked `aman` to `Person.prototype`:

```
aman.__proto__  ===  Person.prototype   // true ✅
```

So when you call `aman.calcAge()`:

1. JavaScript looks at `aman`: "Does `aman` have a `calcAge` property?" → **No.**
2. JavaScript follows the link to `Person.prototype`: "Does `Person.prototype` have `calcAge`?" → **Yes!**
3. It runs that function, with `this` = `aman`.

### Visual Diagram

```
  Person (constructor function)
    │
    ├── .prototype ──────────────► Person.prototype
    │                                  │
    │                                  ├── calcAge()
    │                                  │
  new Person(...)                      │
    │                                  │
    ▼                                  │
  aman { firstName, birthYear }        │
    │                                  │
    └── __proto__ ─────────────────────┘
         (hidden link)
```

### Key Terminology Trap ⚠️

`Person.prototype` is **NOT** the prototype of `Person`. It's the prototype of all the **objects created by `Person`** (like `aman`, `noshin`).

A better name would have been `Person.prototypeOfLinkedObjects` — but it's too late for that 😅.

---

## 6. The Prototype Chain

> 📁 **See:** `script.js` lines 52–56

The chain doesn't stop at `Person.prototype`. It keeps going up!

```js
aman.__proto__; // Person.prototype (has calcAge)
aman.__proto__.__proto__; // Object.prototype (has hasOwnProperty, toString, etc.)
aman.__proto__.__proto__.__proto__; // null (end of the chain)
```

```
aman  →  Person.prototype  →  Object.prototype  →  null
```

This is why EVERY object in JavaScript has methods like `.hasOwnProperty()` and `.toString()` — they're inherited from `Object.prototype` at the top of the chain.

**Arrays work the same way:**

```js
const arr = [2, 5, 6];
arr.__proto__ === Array.prototype; // true → has push, map, filter, etc.
arr.__proto__.__proto__ === Object.prototype; // true → has toString, etc.
```

That's why arrays have methods like `.push()`, `.map()`, `.filter()` — they live on `Array.prototype`.

---

## 7. ES6 Classes

> 📁 **See:** `script.js` lines 80–115

Classes are just a **nicer, cleaner way** to write constructor functions + prototypes. Under the hood, they work EXACTLY the same way. It's just **syntactic sugar** (same chocolate, prettier wrapper).

```js
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // same as this.fullName = fullName in a constructor function
    this.birthYear = birthYear;
  }

  // Methods written here are automatically put on PersonCL.prototype
  calcAge() {
    console.log(2026 - this.birthYear);
  }
}
```

Using it:

```js
const jessica = new PersonCL("Jessica Devis", 1998);
jessica.calcAge(); // 28
```

### Constructor Function vs. Class — Side by Side

| Constructor Function Way                        | ES6 Class Way                                      |
| ----------------------------------------------- | -------------------------------------------------- |
| `const Person = function(name, year) { ... }`   | `class Person { constructor(name, year) { ... } }` |
| `Person.prototype.calcAge = function() { ... }` | Just write `calcAge() { ... }` inside the class    |
| Manually attach methods to `.prototype`         | Methods auto-go to `.prototype`                    |

### Important Class Rules

1. **Classes are NOT hoisted** — you can't use them before they are declared.
2. **Classes are first-class citizens** — you can pass them into functions, return them from functions.
3. **Classes always run in strict mode** — even if you forget `"use strict"`.

---

## 8. Getters & Setters

> 📁 **See:** `script.js` lines 92–107 and 131–149

Getters and setters let you **define methods** that you access **like properties** (no parentheses needed).

### On a regular object:

```js
const account = {
  owner: "aman",
  movements: [200, 530, 120, 300],

  // GETTER — access like a property, but it's actually running a function
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // SETTER — assign a value, but it's actually running a function
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300  (looks like a property, but runs the getter function)

account.latest = 55; // looks like assignment, but runs the setter function
console.log(account.movements); // [200, 530, 120, 300, 55]
```

### Inside a class:

```js
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // ← This triggers the SETTER below!
    this.birthYear = birthYear;
  }

  get age() {
    return 2026 - this.birthYear; // now jessica.age works without ()
  }

  // SETTER for a property that already exists
  set fullName(name) {
    if (name.includes(" "))
      this._fullName = name; // uses _fullName to avoid infinite loop
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
```

### Wait, why `_fullName` instead of `fullName`? 🤔

This is a **critical gotcha**. Watch what would happen without the underscore:

```js
set fullName(name) {
  this.fullName = name;  // ❌ INFINITE LOOP! Setting fullName triggers the setter again!
}
```

By using `_fullName` as the actual stored property, and using `get fullName()` to return it, the outside world sees `jessica.fullName` like normal, but internally it's stored as `_fullName`. The getter and setter work together to create a "virtual" property.

```
jessica.fullName            → calls the GETTER → returns this._fullName
jessica.fullName = "New"    → calls the SETTER → validates, then sets this._fullName
```

---

## 9. Static Methods

> 📁 **See:** `script.js` lines 109–111

A static method belongs to the **class itself**, NOT to the objects/instances created from it.

```js
class PersonCL {
  // ...

  static hey() {
    console.log("hey there");
  }
}

PersonCL.hey(); // ✅ Works — calling on the class itself
jessica.hey(); // ❌ ERROR — instances don't have static methods
```

**Real-world example you already know:**

```js
Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']  ← static method on Array
[1, 2, 3].from(); // ❌ ERROR — .from() is on Array, not on array instances
```

**When to use static methods?** When the method is a helper/utility that's related to the class but doesn't need data from any specific instance.

---

## 10. Object.create()

> 📁 **See:** `script.js` lines 157–179

This is the **third way** to create objects with prototypal inheritance. It's the most straightforward conceptually but the least commonly used.

```js
const PersonProto = {
  calcAge() {
    console.log(2026 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

// Create a new object whose prototype is PersonProto
const shah = Object.create(PersonProto);
shah.name = "Amanullah";
shah.birthYear = 2001;
shah.calcAge(); // 25

// Or use the init method
const sara = Object.create(PersonProto);
sara.init("Sara", 1990);
sara.calcAge(); // 36
```

### How it looks:

```
PersonProto { calcAge(), init() }
       ▲
       │  __proto__
       │
     shah { name: 'Amanullah', birthYear: 2001 }
```

**No `new` keyword. No constructor function. No class.** Just: "Create an empty object and set its prototype to this other object."

### 3 Ways to Create Objects — Comparison

| Method                   | Syntax                 | How Prototype is Set                         |
| ------------------------ | ---------------------- | -------------------------------------------- |
| **Constructor Function** | `new Person(...)`      | Automatically linked to `Person.prototype`   |
| **ES6 Class**            | `new PersonCL(...)`    | Automatically linked to `PersonCL.prototype` |
| **Object.create()**      | `Object.create(proto)` | You manually pass the prototype object       |

---

## 11. Inheritance Between Classes

> 📁 **See:** `inheritanceBetweenClasses.js` and `codingChallenge/codingChallenge.js`

Inheritance means: **One class gets all the features of another class, then adds its own stuff on top.**

Example: A `Student` IS a `Person`. So `Student` should be able to use everything `Person` can do (like `calcAge()`), plus have its own stuff (like `course` and `introduce()`).

### Way 1: Using Constructor Functions

```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // Call the Person constructor with `this` = the new Student object
  Person.call(this, firstName, birthYear); // ← KEY LINE!
  this.course = course;
};

// Link Student.prototype to Person.prototype
Student.prototype = Object.create(Person.prototype);

// Add Student-specific methods AFTER linking
Student.prototype.introduce = function () {
  console.log(`My Name is: ${this.firstName} \n and I study: ${this.course}`);
};
```

Let's break down the two KEY lines:

#### `Person.call(this, firstName, birthYear)`

Why not just do `Person(firstName, birthYear)`? Because if you call `Person` as a regular function, `this` would be `undefined` (strict mode). We need `this` to be **the new Student object** being created.

`.call()` lets you manually set what `this` is. So `Person.call(this, ...)` says: "Run the Person function, but use the Student's `this`."

#### `Student.prototype = Object.create(Person.prototype)`

This creates the prototype chain:

```
mike → Student.prototype → Person.prototype → Object.prototype → null
```

So when you call `mike.calcAge()`:

1. JavaScript checks `mike` → no `calcAge`
2. Checks `Student.prototype` → no `calcAge`
3. Checks `Person.prototype` → **found it!** ✅

**⚠️ ORDER MATTERS:** You must link the prototypes BEFORE adding any methods to `Student.prototype`. Otherwise, `Object.create()` would overwrite them.

#### Fix the constructor pointer:

```js
Student.prototype.constructor = Student;
// Without this, Student.prototype.constructor points to Person (because of Object.create)
```

### Way 2: Using ES6 Classes (the clean way)

> 📁 **See:** `codingChallenge/codingChallenge.js` lines 74–97

```js
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.curSpeed = speed;
  }

  accelerate() {
    this.curSpeed += 10;
    console.log(`${this.make} is going at ${this.curSpeed} km/h`);
    return this;
  }

  brake() {
    this.curSpeed -= 5;
    console.log(`${this.make} is going at ${this.curSpeed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge; // private field (explained in next section)

  constructor(make, speed, charge) {
    super(make, speed); // ← replaces Parent.call(this, ...)
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  // Override the parent's accelerate (POLYMORPHISM!)
  accelerate() {
    this.curSpeed += 20; // EVs are faster 😎
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.curSpeed} km/h, with a charge of ${this.#charge}%`,
    );
    return this;
  }
}
```

| Constructor Function Way                              | ES6 Class Way                  |
| ----------------------------------------------------- | ------------------------------ |
| `Person.call(this, ...)`                              | `super(...)`                   |
| `Student.prototype = Object.create(Person.prototype)` | `extends` (done automatically) |
| Manual prototype linking                              | Automatic                      |

`super(make, speed)` calls the **parent class's constructor**. You MUST call `super()` before using `this` in the child constructor.

### Polymorphism in action:

`EVCl` has its own `accelerate()` which does something different from `CarCl`'s `accelerate()`. When you call `rivian.accelerate()`, JavaScript finds the one on `EVCl.prototype` first and uses that. This is polymorphism — same method name, different behavior.

---

## 12. Encapsulation & Private Fields

> 📁 **See:** `bankistAccount.js`

Encapsulation means: **some data should NOT be directly accessible from outside the class**. You interact with it only through methods the class provides.

**Why?** Imagine a bank account. You shouldn't be able to do `account.balance = 1000000`. You should have to go through `account.deposit(100)` so the class can validate, log, and control the action.

### The OLD way (convention only, NOT truly private):

```js
// The underscore _ is just a convention — a signal to other developers:
// "Hey, don't touch this directly"
this._movements = [];
this._pin = pin;
// But there's nothing stopping someone from doing: acc1._movements.push(99999);
```

### The NEW way (truly private with `#`):

```js
class Account {
  // Public field — every instance gets this
  locale = navigator.language;

  // Private fields — cannot be accessed outside the class
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public method — this is the "public interface" (API) of our class
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved of BDT ${val} TAKA`);
      return this;
    }
  }

  // Private method — only callable inside the class
  #approveLoan(val) {
    return true; // simplified logic
  }

  // Static method — belongs to Account, not instances
  static helper() {
    console.log("Helper is a static method");
  }
}
```

Now try this:

```js
const acc1 = new Account("Aman", "BDT", 1234);

acc1.deposit(250); // ✅ Works — public method
acc1.withdraw(140); // ✅ Works — public method
console.log(acc1.getMovements()); // ✅ [250, -140] — read-only access

acc1.#movements; // ❌ SyntaxError! Private field
acc1.#pin; // ❌ SyntaxError! Private field
acc1.#approveLoan(100); // ❌ SyntaxError! Private method
```

### The 4 Types of Fields & Methods

| Type               | Syntax                         | Access                |
| ------------------ | ------------------------------ | --------------------- |
| **Public field**   | `locale = navigator.language;` | Accessible everywhere |
| **Private field**  | `#movements = [];`             | Only inside the class |
| **Public method**  | `deposit(val) { ... }`         | Accessible everywhere |
| **Private method** | `#approveLoan(val) { ... }`    | Only inside the class |

(There are also **static** versions of all of these using the `static` keyword.)

---

## 13. Method Chaining

> 📁 **See:** `bankistAccount.js` last few lines and `codingChallenge/codingChallenge.js`

Method chaining is when you call multiple methods back-to-back in one line:

```js
acc1.deposit(340).deposit(450).withdraw(100).requestLoan(999).withdraw(500);
```

**How does this work?** Each method returns `this` (the object itself):

```js
deposit(val) {
  this.#movements.push(val);
  return this;  // ← This is the magic! Returns the object so you can call another method on it
}
```

Without `return this`, `acc1.deposit(340)` would return `undefined`, and you can't call `.deposit()` on `undefined`.

**Think of it like:**

```js
acc1
  .deposit(340) // returns acc1
  .deposit(450) // called on acc1, returns acc1
  .withdraw(100) // called on acc1, returns acc1
  .requestLoan(999) // called on acc1, returns acc1
  .withdraw(500); // called on acc1
```

---

## 14. Summary Cheat Sheet

### Creating Objects — 3 Ways

```js
// 1. Constructor Function
const Person = function (name) {
  this.name = name;
};
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};
const a = new Person("Aman");

// 2. ES6 Class (most common in modern JS)
class PersonCL {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
const b = new PersonCL("Noshin");

// 3. Object.create()
const PersonProto = {
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
const c = Object.create(PersonProto);
c.name = "Sara";
```

### Inheritance — 2 Ways

```js
// Constructor Function way
const Student = function (name, course) {
  Person.call(this, name);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

// ES6 Class way (preferred ✅)
class StudentCL extends PersonCL {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
}
```

### Quick Reference Table

| Concept              | What It Does                                         | Key Syntax                         |
| -------------------- | ---------------------------------------------------- | ---------------------------------- |
| Constructor Function | Creates objects                                      | `const X = function() { this... }` |
| `new`                | Creates empty obj, runs constructor, links prototype | `new Person(...)`                  |
| Prototype            | Shared methods for all instances                     | `Person.prototype.method = ...`    |
| ES6 Class            | Cleaner syntax for constructor + prototype           | `class X { constructor() {} }`     |
| Getter               | Access a method like a property                      | `get propName() {}`                |
| Setter               | Set a property with validation                       | `set propName(val) {}`             |
| Static method        | Method on the class, not instances                   | `static methodName() {}`           |
| `Object.create()`    | Create object with specific prototype                | `Object.create(proto)`             |
| `extends`            | Class inheritance                                    | `class Child extends Parent {}`    |
| `super()`            | Call parent's constructor                            | must be first in child constructor |
| `#field`             | Private — only inside the class                      | `#movements = []`                  |
| `return this`        | Enable method chaining                               | at the end of each method          |

---

### The Mental Model (How It All Connects)

```
                     Object.prototype
                    (toString, hasOwnProperty, etc.)
                           ▲
                           │  __proto__
                           │
                     Person.prototype
                    (calcAge, greet)
                           ▲
                           │  __proto__
                           │
                     Student.prototype
                    (introduce)
                           ▲
                           │  __proto__
                           │
                     mike { firstName, birthYear, course }
```

When `mike.toString()` is called:

1. Check `mike` → nope
2. Check `Student.prototype` → nope
3. Check `Person.prototype` → nope
4. Check `Object.prototype` → **found!** ✅

That's the **prototype chain** in action. It always goes UP until it either finds the method or hits `null`.

---

> **You're not dumb for finding OOP confusing.** It has layers of abstraction that take time to click. Re-read this guide, play with the code, `console.log` everything, and it WILL make sense. The fact that you're putting in the effort means you'll get there. 💪
