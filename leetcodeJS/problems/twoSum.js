"use strict";

console.log(`Two Sum - LeetCode Problem`);

const twoSum = function (nums, target) {
  let result = [];

  // Use map with all parameters: value, index, array
  nums.map((num, index, array) => {
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

// Test Cases
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(`Result: [${result}]`);
console.log(
  `✅ Test Passed: nums[${result[0]}] + nums[${result[1]}] = ${
    nums[result[0]]
  } + ${nums[result[1]]} = ${target}`
);
