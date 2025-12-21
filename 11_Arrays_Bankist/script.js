"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Array method practice
// slice method
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice()); // it does not change the original array
console.log(arr.slice(2)); // start from index 2 to the end
console.log(arr.slice(-2)); // last two elements
console.log(arr.slice(+2)); // from index 2 to the end
console.log(arr.slice(1, 4)); // from index 1 to index 4 (not included), e not included

// splice method
// arr.splice(2); // it changes the original array
// arr.splice(-1); // it removes the last element
// arr.splice(1,2); // from index 1, remove 2 elements
console.log(arr); //

// reverse method
const arr2 = [...arr];
console.log(arr2.reverse()); // it changes the original array, reverse method mutates the original array

// concat method
const letters = arr.concat(arr2); // does mutate the original array
console.log(letters);

const letters2 = [...arr, ...arr2]; // does not mutate the original array
console.log(letters2);
// console.log(arr2);
// join method
console.log(letters2.join(" - "));

// at method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0)); // using at method

// getting the last element of an array
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]); // using slice method
console.log(arr3.at(-1)); // getting the last element using at method

// at method on string
console.log("aman".at(0));
console.log("aman"[1]);

// For each method
console.log(`----FOR EACH METHOD----`);
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// typical for of loop

for (const movement of movements2) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
}

// using forEach
console.log(`----USING FOREACH METHOD----`);
movements2.forEach(function (movement) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
});

// forEach method with index and array
console.log(`----USING FOREACH METHOD WITH index and array----`);
console.log(`----USING FOREACH METHOD----`);
movements2.forEach(function (movement, indx, arr) {
  movement > 0
    ? console.log(`Movement ${indx + 1} : You deposited ${movement}`)
    : console.log(`Movement ${indx + 1} :You withdrew ${Math.abs(movement)}`);
});

// forEach method with maps and sets

const currencies2 = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
console.log(`for each method with maps`);

currencies2.forEach(function (
  value,
  key,
  map // value: each element, key: key of each element, map: the entire map
) {
  console.log(`${key} : ${value}`);
});

// forEach method with sets
const currenciesUnique = new Set(["USD", "BDT", "EUR", "BDT", "USD"]);
console.log(`for each method with sets`);
console.log(currenciesUnique);
console.log(currenciesUnique.size);

currenciesUnique.forEach(function (
  value,
  _,
  set // _ is used to ignore the first parameter since in sets there is no key
) {
  console.log(`${value} : ${value}`); // in sets key and value are same, a set does not have keys
  // console.log(set); // the entire set
});

// Data transformation: map, filter, reduce
console.log(`----DATA TRANSFORMATION: MAP, FILTER, REDUCE----`);

const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

const usdMovements3 = movements3.map((moves) => {
  return `using arrow function ${moves * euroToUSD}`;
});

console.log(movements3);
console.log(usdMovements3);

// using for each method , similar to the map method
const forEachUSD = [];
movements3.forEach(function (move) {
  return forEachUSD.push(move * 1.2);
});
console.log(` using the for each method ${forEachUSD}`);

const movementDescription = movements3.map((move, index, array) => {
  const type = move > 0 ? "deposited" : "withdrew";
  return `\n Movement ${index + 1}: you ${type} ${Math.abs(move)}\n`;
});

console.log(movementDescription);

// computing usernames
console.log(`----COMPUTING USERNAMES----`);

// Computing usernames
const user = "Steven Thomas Williams"; // initials: stw in lowercase

const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    .map(function (name) {
      return name[0];
    })
    .join("");
  return username;
};
console.log(createUsernames(user));
// now i have to work with all the accounts, and make their usernames

const allUserNames = [];
accounts.forEach(function (accnt) {
  allUserNames.push(createUsernames(accnt.owner));
  accnt.username = createUsernames(accnt.owner);
});
console.log(allUserNames);
console.log(accounts);

// filter method
console.log(`----FILTER METHOD----`);

let movements4 = [...movements];
movements4 = movements4.filter(function (
  move // filter method mutates the original array
) {
  return move > 0;
});
console.log(movements);
console.log(movements4);

const withdrawals2 = movements.filter((moveNeg) => moveNeg < 0);
console.log(`WIthdrawals using array method and filter: ${withdrawals2}`);

// the reduce method
console.log(`----THE REDUCE METHOD----`);

console.log(movements);

// const balance = movements.reduce(function(accumulator, current, index, array)
// {
//   // accumulato -> snowball
//   console.log(`Iteration ${index}: accumulator = ${accumulator}, current = ${current}`);
//   return accumulator + current;
// }, 0); // 0 is the initial value of accumulator

// console.log(`Balance is : ${balance}`);

// using the arrow function
const balance3 = movements.reduce((acc, cur, i, arr) => {
  // accumulato -> snowball
  console.log(`Iteration ${i}: accumulator = ${acc}, current = ${cur}`);
  return acc + cur;
}, 0);
console.log(balance3);

// using for of loop
let balance2 = 0;
for (const bal of movements) balance2 += bal; // balance2 = balance2 + bal
console.log(`Balance using for of loop is : ${balance2}`);

//  maximum value in the array using reduce method
console.log(`maximum value in the array using reduce method`);

const maxValue = movements.reduce((accu, cur) => {
  let max = accu;
  cur > max ? (max = cur) : (max = accu);
  return max;
}, 0);

console.log(`Maximum value in the array is : ${maxValue}`);

// find method
console.log(`\n----FIND METHOD----`);
const findMethod = movements.find(function (move) {
  return move < 0;
});
console.log(findMethod); // returns the first element that satisfies the condition

const FindAccount = accounts.find((acc) => acc.owner === "Jessica Davis"); // returns the first account that satisfies the condition
console.log(FindAccount);

// using the for of loop
console.log(`\n----USING FOR OF LOOP----`);
for (const acc of accounts) {
  if (acc.owner === "Sarah Smith") {
    console.log(`Account found using for of loop:`);
    console.log(acc); // Use console.log() directly for objects
    break;
  }
}

// includes method
console.log(`\n----INCLUDES METHOD----`);
console.log(movements.includes(-130)); // its check the equality

// SOME: Condition type
console.log(`\n----SOME METHOD----`);
const anyDeposits = movements.some((move) => move > 0);
console.log(anyDeposits);

// EVERY: Condition type
console.log(`\n----EVERY METHOD----`);
const everyDeposit = account4.movements.every((mov) => mov > 0); // checks if all movements are deposits (positive)
console.log(everyDeposit);

// separate callback
const deposit = (move) => move > 0;
console.log(movements.some(deposit)); // at least one deposit
console.log(movements.filter(deposit)); // all deposits
console.log(movements.every(deposit)); // are all deposits

// FLAT AND FLATMAP METHODS
console.log(`----FLAT AND FLATMAP METHODS----`);
const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr1.flat()); // flattens the array by one level

const arr4 = [[1, [2, [3, 34]]], [4, 5, 6], 7, 8];
console.log(arr4.flat(3)); // flattens the array by two levels

const accountsMovements = accounts.map((acc) => acc.movements);
console.log(accountsMovements);
// flat the array
const allMovements = accountsMovements.flat();
console.log(allMovements);

// now calculate the overall balance of all the accounts
const totalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance);

// chaining the methods
const totalPositiveBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((move) => move > 0)
  .reduce((acc, move) => acc + move, 0);
console.log(
  `Total positive balance of all accounts is : ${totalPositiveBalance}`
);

// flatmap method
const totalPositiveBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .filter((move) => move > 0)
  .reduce((acc, move) => acc + move, 0);
console.log(
  `Total positive balance of all accounts is using flatMap : ${totalPositiveBalance2}`
);

// sorting arrays
console.log(`----SORTING ARRAYS----`);

// strings
const owners = accounts.map((acc) => acc.owner.split(" ")[0]);
console.log(owners.sort()); // mutates the original array

// arrays
console.log(movements);
// console.log(movements.sort()); // it converts the elements to strings and then sorts them

movements.sort((cur, next) => {
  if (cur > next) return 1;
  if (cur < next) return -1;
});
console.log(movements); // sorted in ascending order

const descendingOrder = movements.sort((cur, next) => {
  if (cur < next) return 1;
  if (cur > next) return -1;
});
console.log(descendingOrder); // sorted in descending order

// using just subtraction
movements.sort((a, b) => a - b); // ascending order
console.log(movements);
movements.sort((a, b) => b - a); // descending order
console.log(movements);

// More ways of creating and filling arrays
console.log(`----MORE WAYS OF CREATING AND FILLING ARRAYS----`);
console.log(new Array(1, 2, 3, 4, 5)); // array literal
const x = new Array(7); // creates an array of length 7 with empty slots
console.log(x);
console.log(x.map(() => 5)); // does not work as expected because the array has empty slots

// FILLING
x.fill(1); // fills all slots with 1
console.log(x);
x.fill(2, 3, 5); // fills from index 3 to index 5 with 2 // 5 wont be included
console.log(x);

//Array.from method
console.log(Array.from({ length: 10 }, (ele, index) => index * 1 + 1)); // creates an array of length 10 with values from 1 to 10

const z = Array.from({ length: 8 }, (cur, i) => i + 2);
console.log(z);

// generate 100 random dice rolls using Array.from
console.log(Math.floor(Math.random() * 6) + 1);
const diceRolls = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(diceRolls);
