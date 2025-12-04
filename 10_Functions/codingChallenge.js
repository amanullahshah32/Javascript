console.log(`A closer look at Functions - Coding Challenge`);
console.log(`--coding challenge 1 ----`);
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  //   this.displayResults();
};

// 1. create registerNewAnswer method
poll.registerNewAnswer = function () {
  // prompt for selection option
  const displayPrompt = prompt(
    `${this.question} \n ${this.options.join("\n")} \n (Write option number)`
  );
  const answer = Number(displayPrompt);
  // check if answer is valid or not
  if (answer >= 0 && answer < this.answers.length) {
    console.log("Valid Answer");
    this.answers[answer]++; // incrementing the answer count
  } else {
    console.log(`wrong input`);
  }
  // Call displayResults after each answer
  this.displayResults();
  this.displayResults2("array");
  this.displayResults2("string");
};

// 3. create displayResults method to show options with their vote counts
poll.displayResults = function () {
  console.log(`--- Poll Results ---`);

  // Using for...of loop with .entries() - just like you did in script2.js!
  // Remember: for (const [index, element] of menus.entries())

  for (const [index, option] of this.options.entries()) {
    // option = "0: JavaScript" (full string)
    // index = 0, 1, 2, 3 (position in array)

    // Step 1: Extract language name using .split()
    // .split(': ') breaks the string at ': ' into an array
    // Example: "0: JavaScript".split(': ') gives ["0", "JavaScript"]
    const parts = option.split(": "); // parts = ["0", "JavaScript"]
    const languageName = parts[1]; // languageName = "JavaScript"

    // Step 2: Get vote count using index
    // this.answers = [0, 0, 0, 0] (vote counts)
    // this.answers[0] = votes for JavaScript
    // this.answers[1] = votes for Python, etc.
    const voteCount = this.answers[index];

    // Step 3: Display the result
    console.log(`${languageName}: ${voteCount}`);
  }
};

// 2. call registerNewAnswer method when user clicks the 'Answer Poll' button
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
// console.log(poll);

// 3. a method to display results in array and string format
poll.displayResults2 = function (type) {
  if (type === "array") {
    console.log(this.answers);
  } else if (type === "string") {
    console.log(` Poll Restults are: ${this.answers.join(",")}`);
  }
}; // 5. bonus: use displayResults method to display results of 2 arrays

// BONUS: Using .call() to set 'this' keyword manually
// Remember: .call() lets us control what 'this' refers to!

// Test Data (these are NOT inside poll object)
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Using .call() to make 'this.answers' point to our test arrays
// We pass an object { answers: testData1 } as 'this'

console.log(`--- Bonus: Test Data 1 ---`);
poll.displayResults2.call({ answers: testData1 }, "array"); // [5, 2, 3]
poll.displayResults2.call({ answers: testData1 }, "string"); // 5, 2, 3

console.log(`--- Bonus: Test Data 2 ---`);
poll.displayResults2.call({ answers: testData2 }, "array"); // [1, 5, 3, 9, 6, 1]
poll.displayResults2.call({ answers: testData2 }, "string"); // 1, 5, 3, 9, 6, 1

// coding challenge 2
console.log(`coding challenge 2 ----  --`);

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";  // header is born here 

  // CHALLENGE: Change h1 color to blue when BODY is clicked
  // WITHOUT selecting h1 again!
  
  // The 'header' variable is defined above, and the callback function
  // can still access it even after the IIFE finishes running!
  // This is called a CLOSURE!
  
  document.querySelector('body').addEventListener('click', function() {
    // this callback function was born inside the iife, so it can remeber the header forever
    header.style.color = 'blue';  // Using 'header' variable from outer scope!
  });

})();


// // 1. listener function to change header color to blue on click without selecting the h1 element again
// Closures = Functions remember their birthplace! 🎂
console.log(`Closures = Functions remember their birthplace! 🎂`);