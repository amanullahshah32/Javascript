"use-strict";

// 167. Two Sum II - Input Array Is Sorted
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  let sum = 0;
  while (left < right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target)); // [1,2
