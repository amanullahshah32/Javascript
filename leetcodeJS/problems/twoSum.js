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
// console.log(`Merge Two Sorted Lists - LeetCode Problem 21`);

/* 
════════════════════════════════════════════════════════════════════════════════
📚 UNDERSTANDING LINKED LISTS - Complete Guide
════════════════════════════════════════════════════════════════════════════════

1️⃣ WHAT IS A LINKED LIST?
━━━━━━━━━━━━━━━━━━━━━━━━━━
A Linked List is a data structure where each element (node) contains:
- A VALUE (the data)
- A POINTER to the NEXT node

Structure of a Node:
    {
      val: 1,           // The data stored
      next: {           // Pointer to next node
        val: 2,
        next: {
          val: 3,
          next: null    // Last node points to null
        }
      }
    }

Visual Representation:
    [1] → [2] → [3] → null
    
Each box is a node, arrows (→) represent the "next" pointer.


2️⃣ HOW IS IT DIFFERENT FROM AN ARRAY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Array:        [1, 2, 3]  → All elements stored together in memory
Linked List:  1 → 2 → 3 → null  → Each element can be anywhere in memory


3️⃣ WHY CAN'T WE USE ARRAY METHODS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- .concat() works on arrays, NOT on linked list nodes
- .sort() works on arrays, NOT on linked list nodes
- We must traverse node by node using .next pointer


4️⃣ THE MERGE PROBLEM
━━━━━━━━━━━━━━━━━━━━
Given two SORTED linked lists:
    list1: 1 → 2 → 4 → null
    list2: 1 → 3 → 4 → null

Goal: Merge them into ONE sorted list:
    result: 1 → 1 → 2 → 3 → 4 → 4 → null

════════════════════════════════════════════════════════════════════════════════
*/

// /**
//  * ✅ SOLUTION: Merge Two Sorted Lists
//  *
//  * @param {ListNode} list1 - First sorted linked list
//  * @param {ListNode} list2 - Second sorted linked list
//  * @return {ListNode} - Merged sorted linked list
//  */

// class ListNode {
//   constructor(val = 0, next = null){
//     this.val = val;      // Assign the value passed to constructor
//     this.next = next;    // Assign the next node (default is null)
//   }
// }
// var mergeTwoLists = function (list1, list2) {
//   console.log(`list1: ${list1}`);
//   const dummy = new ListNode();

//   let current = dummy;
//   console.log(current);

//   while (list1 !== null && list2 !== null) {
//     // Compare the current values of both lists
//     if (list1.val <= list2.val) {
//       // list1's value is smaller or equal, so pick it
//       current.next = list1; // Attach list1's current node
//       list1 = list1.next; // Move list1 pointer to next node
//     } else {
//       // list2's value is smaller, so pick it
//       current.next = list2; // Attach list2's current node
//       list2 = list2.next; // Move list2 pointer to next node
//     }

//     // Move our construction pointer forward
//     // (Go to the node we just attached)
//     current = current.next;
//   }

//   if (list1 !== null) {
//     current.next = list1;
//   }

//   // If list2 has remaining nodes, attach them all
//   if (list2 !== null) {
//     current.next = list2;
//   }

//   return console.log(dummy.next);
// };

// // Test Case 1
// const list1 = ([1, 2, 4]);
// const list2 = ([1, 3, 4]);
// const merged = mergeTwoLists(list1, list2);

// 41. First Missing Positive
console.log(`First Missing Positive - LeetCode Problem 41`);
var firstMissingPositive = function (nums) {
  console.log(`Given numbers are: ${nums}`);
  const sortedNums = new Set(nums.filter(num => num > 0));

  let expectedNumber = 1;
  while( sortedNums.has(expectedNumber)){  
    expectedNumber ++;
  }

  return expectedNumber;


};

const nums = [1,2,0];
console.log(firstMissingPositive(nums)); // 2
