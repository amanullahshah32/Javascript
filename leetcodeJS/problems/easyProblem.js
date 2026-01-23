"use-strict";

// // 125. Valid Palindrome
// const isPalindrome = function (str) {
//   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   console.log(cleanedStr);
//   let left = 0;
//   let right = cleanedStr.length - 1;

//   while (left < right) {
//     if (cleanedStr[left] === cleanedStr[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };
// const string = "race a car";
// console.log(isPalindrome(string)); // true


// // 58. Length of Last Word
// console.log(`length of last word`);
// const lengthOfLastWord = function (str) {
//   let arrayOfWords = str.split(' ');
//   console.log(arrayOfWords);
//   let lastIndex = arrayOfWords.length -1;

//   // remove the last empty strings in any
//   while(arrayOfWords[lastIndex].length === 0) {
//     arrayOfWords.pop();
//     lastIndex--;
//   } 
//   return arrayOfWords[lastIndex].length;
// }
// const string = "Hello World  ";
// console.log(lengthOfLastWord(string)); // 5


// 66. Plus One
console.log(`Plus One - LeetCode Problem 66`);

var plusOne = function(digits) {
  let numberString = '';
  while(digits.length !== 0)
  {
    numberString += digits.shift().toString();
  }
  // console.log(numberString);
  let number = (BigInt(numberString)+1n).toString();
  let newNumber = [];
  for(let i = 0; i< number.length; i++)
  {
    newNumber.push(Number(number[i]));
  }
  // console.log(newNumber);
  return newNumber;     
};

const digits = [1,2,3];
console.log(plusOne(digits)); // [1,2,4]