"use-strict";

// 125. Valid Palindrome
const isPalindrome = function (str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cleanedStr);
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] === cleanedStr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
const string = "race a car";
console.log(isPalindrome(string)); // true
