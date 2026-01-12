// "use strict";

// // console.log(`Two Sum - LeetCode Problem`);

// // const twoSum = function (nums, target) {
// //   let result = [];

// //   // Use map with all parameters: value, index, array
// //   nums.map((num, index, array) => {
// //     // Calculate what number we need to find
// //     const complement = target - num;

// //     // Search for complement in remaining part of array
// //     const complementIndex = array.indexOf(complement, index + 1);

// //     // If complement found and we haven't found result yet
// //     if (complementIndex !== -1 && result.length === 0) {
// //       result = [index, complementIndex];
// //     }

// //     return null; // map needs return value
// //   });

// //   return result;
// // };

// // // Test Cases
// // const nums = [2, 7, 11, 15];
// // const target = 9;
// // const result = twoSum(nums, target);
// // console.log(`Result: [${result}]`);
// // console.log(
// //   `✅ Test Passed: nums[${result[0]}] + nums[${result[1]}] = ${
// //     nums[result[0]]
// //   } + ${nums[result[1]]} = ${target}`
// // );

// // // 13. Roman to Integer
// // const romanToInt = function (string) {
// //   let total = 0;
// //   const romanChar = string.split(""); // Don't skip first character

// //   romanChar.forEach((char, indexOfChar) => {
// //     const currentValue = symbols[char];
// //     const nextValue = symbols[romanChar[indexOfChar + 1]];

// //     // Key logic: If current < next, subtract; otherwise add
// //     if (nextValue && currentValue < nextValue) {
// //       total -= currentValue; // Subtract (like I in IV)
// //     } else {
// //       total += currentValue; // Add normally
// //     }
// //   });

// //   return total;
// // };

// // const symbols = {
// //   I: 1,
// //   V: 5,
// //   X: 10,
// //   L: 50,
// //   C: 100,
// //   D: 500,
// //   M: 1000,
// // };
// // console.log(romanToInt("MCMXCIV")); // 58

// // // console.log(romanToInt("LVIII")); // 58
// // console.log(romanToInt("LVIII")); // 58

// // 14. Longest Common Prefix
// // const longestCommonPrefix = function(strs) {
// //   if (strs.length === 0) return "";

// //   let prefix = strs[0];  // Start with first string as prefix
// //   // console.log(strs[1].indexOf(prefix));
// //   for (let i = 1; i < strs.length; i++) {
// //     while (strs[i].indexOf(prefix) !== 0) {
// //       prefix = prefix.slice(0, -1);  // Remove last character
// //       if (prefix === "") return "";
// //     }
// //   }

// //   return prefix;
// // };

// // const strings = ["flower", "flow", "flight"];
// // console.log(longestCommonPrefix(strings)); // "fl"

// // 11. Container With Most Water
// console.log(`Container With Most Water - LeetCode Problem 11`);

// const maxArea = function(height) {

//   const length = height.length;
//   let maxArea = 0;
//   let left = 0;
//   let right = length - 1;

//   while (left < right){
//     let width = right - left;
//     const currentHeight = Math.min(height[left] , height[right]);
//     const area = width * currentHeight;
//     maxArea = Math.max(maxArea, area);

//     // move to the right
//     if(height[left] < height [right])
//       left ++;
//     else
//       right --;

//   }
//   return maxArea;

// };

// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49  // 0 to 8
// console.log(maxArea([1,1])); // 1  // 0 to 1
// console.log(maxArea([1,2,1])); // 1  // 0 to 1

// 20. Valid Parentheses
// console.log(`Valid Parentheses - LeetCode Problem 20`);

// var isValid = function(parentheses) {
//     const pairs = {
//       '(' : ')',
//       '{' : '}',
//       '[' : ']',
//     }

//     const stack = [];
//     // console.log(pairs[parentheses[0]]);
//     for ( let char of parentheses){
//       if (pairs[char]){
//         stack.push(pairs[char]);
//       }
//       else if ( stack.pop() !== char){
//           return false;
//         }

//     }
//     if (stack.length === 0 )
//       return true;
//     else  return false;

// };

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true

// 21. Merge Two Sorted Lists
console.log(`Merge Two Sorted Lists - LeetCode Problem 21`);

// Correct solution for linked lists:
const mergeTwoLists = function (list1, list2) {
  // Create a dummy node to simplify logic
  const dummy = { val: 0, next: null };
  let current = dummy;

  // Traverse both lists and merge
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes (if any)
  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
};

// Helper function to create linked list from array
function createList(arr) {
  if (arr.length === 0) return null;
  const head = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }
  return head;
}

// Helper function to print linked list
function printList(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const list1 = createList([1, 2, 4]);
const list2 = createList([1, 3, 4]);
const merged = mergeTwoLists(list1, list2);
console.log(printList(merged)); // [1,1,2,3,4,4]
