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


// 217. Contains Duplicate
console.log(`contains duplicate`);

const    containsDuplicate = function(nums) {
  let uniqueNums = new Set(nums);
  uniqueNums = Array.from(uniqueNums);
  return nums.length !== uniqueNums.length? true : false;

}

const array = [1, 2, 3, 4];
console.log(containsDuplicate(array)); // false