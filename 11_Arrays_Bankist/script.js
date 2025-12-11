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

// computing usernames
console.log(`----COMPUTING USERNAMES----`);

// now i have to work with all the accounts, and make their usernames

const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  return username;
};
accounts.forEach(function (accnt) {
  accnt.username = createUsernames(accnt.owner);
});
console.log(accounts);

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

let currentAccount; // holds the current logged in account

containerApp.style.opacity = 0; // making the app  invisible initially

// login functionality
btnLogin.addEventListener("click", function (event) {
  // prevent form from submitting
  event.preventDefault();
  console.log(`login button clicked`);

  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  // find the account
  currentAccount = accounts.find(
    (acc) => acc.username === username && acc.pin === pin
  );
  // console.log(" current account: ", currentAccount);

  if (currentAccount) {
    // display UI and welcome message
    document.querySelector(".welcome").textContent = `WELCOME BACK, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1; // making the app  invisible initially

    // display current balance
    calcDisplayBalance(currentAccount.movements);
    // display movements
    calcDisplaySummary(currentAccount.movements);
    // dispaly the summary
    displayMovements(currentAccount.movements);

    // invisible the login info
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur(); //
  } else {
    console.log(`invalid username or pin`);
    alert(`wrong credentials`);
  }
});

// prining the total balance [labelBalance]
const calcDisplayBalance = function (movements) {
  currentAccount.balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
  return (labelBalance.textContent = `$ ${currentAccount.balance} USD`);
};

// project bankist app
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ""; // clearing the container before adding new elements
  movements.forEach(function (mov, index) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      index + 1
    }: ${type}</div>
                    <div class="movements__value"> $ ${
                      mov < 0 ? Math.abs(mov) : mov
                    }</div>
                  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Display Labels of summary
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `$ ${incomes} USD`;

  // outgoings
  const outgoings = movements
    .filter((mov) => mov < 0)
    .reduce((accu, mov) => accu + mov, 0);
  labelSumOut.textContent = `$ ${Math.abs(outgoings)} USD`;

  // Interest
  const interest = (incomes * 1.2) / 100;
  labelSumInterest.textContent = `$ ${interest} USD`;
};

// transfer money functionality
btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`transfer button clicked`);
  const transferTo = accounts.find(
    (accUser) => accUser.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  // check the validity of transfer
  if (
    transferTo &&
    amount > 0 &&
    amount <= currentAccount.balance &&
    currentAccount.username !== inputTransferTo.value
  ) {
    currentAccount.balance -= amount; // deduct aamount from the sender account
    // add the movements to the rows
    currentAccount.movements.push(-amount); // adding the withdrawal movement to the sender account
    transferTo.movements.push(amount); // adding the deposit movement to the receiver account

    // update the UI
    // display current balance
    calcDisplayBalance(currentAccount.movements);
    // display movements
    calcDisplaySummary(currentAccount.movements);
    // dispaly the summary
    displayMovements(currentAccount.movements);

    // hide the input details
    inputTransferTo.value = inputTransferAmount.value = "";
    inputTransferAmount.blur();

    console.log(`transfer to account: `, transferTo.owner);
  }
});

// request loan functionality
btnLoan.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`loan button clicked`);
  const loanAmount = Number(inputLoanAmount.value);

  // loan verification: at least one deposit with 10% of the requested loan amount
  if (loanAmount > 0 && loanAmount <= currentAccount.balance * 10) {
    // add the loan amount to the current account movements
    currentAccount.movements.push(loanAmount);
    // update the total balance
    currentAccount.balance += loanAmount;
    calcDisplayBalance(currentAccount.movements);

    // show updated movements
    displayMovements(currentAccount.movements);
    // show updated summary
    calcDisplaySummary(currentAccount.movements);

    // hide the input details
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
    console.log("load amount approved:", loanAmount);
  } else {
    console.log("loan request denied");
  }
});
// Test after user logs in
// setTimeout(() => {
//   console.log(currentAccount); // Will show account after login
// }, 5000);

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
console.log(`Array methods practice:`);
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

// the magic of chaining methods
console.log(`----THE MAGIC OF CHAINING METHODS----`);
// PIPELINE:
const totalDepositsUSD = movements2
  .filter((money) => money > 0)
  .map((money) => money * 1.1)
  .reduce((acc, money) => acc + money, 0);
console.log(totalDepositsUSD);
