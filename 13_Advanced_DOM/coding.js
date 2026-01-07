"use strict";

console.log(`Amanullah LeetCode`);

const twoSum = function (numbers, target) {
  let result = [];

  // Use map with all parameters: value, index, array
  numbers.map((num, index, array) => {
    // Calculate what number we need to find
    const complement = target - num;

    // Search for complement in remaining part of array
    const complementIndex = array.indexOf(complement, index + 1);

    // If complement found and we haven't found result yet
    if (complementIndex !== -1 && result.length === 0) {
      result = [index, complementIndex];
    }

    return null; // map needs return value
  });

  return result;
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Should output [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
