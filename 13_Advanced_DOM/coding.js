"use strict";

console.log(`Amanullah LeetCode`);

const twoSum = function (nums, target) {
  let result = [];
  
  // Using map method with all three parameters: value, index, array
  nums.map((value, index, array) => {
    // Use map again to check against remaining elements
    array.slice(index + 1).map((nextValue, nextIndex) => {
      if (value + nextValue === target && result.length === 0) {
        result = [index, nextIndex + index + 1];
      }
      return null; // map requires a return value
    });
    return null; // map requires a return value
  });
  
  return result;
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Should output [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
