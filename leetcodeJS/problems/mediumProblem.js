"use-strict";

// // 167. Two Sum II - Input Array Is Sorted
// var twoSum = function (numbers, target) {
//   let left = 0;
//   let right = numbers.length - 1;

//   let sum = 0;
//   while (left < right) {
//     sum = numbers[left] + numbers[right];
//     if (sum === target) {
//       return [left + 1, right + 1];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// };

// const numbers = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(numbers, target)); // [1,2


// // 15. 3Sum  // incomplete // completed
// var threeSum = function(nums) {
//   const sortedNums =  nums.sort((a,b) => a -b);
//   const result = [];
//   let firstPointer = 0;

//   let sum = 0;
//   for( firstPointer = 0; firstPointer < sortedNums.length -2; firstPointer++) {
//     let leftPointer = firstPointer + 1;
//     let rightPointer = sortedNums.length -1;
//     while(leftPointer < rightPointer) {
//       sum = sortedNums[firstPointer] + sortedNums[leftPointer] + sortedNums[rightPointer];
//       if(sum === 0)
//         {
//           result.push([sortedNums[firstPointer], sortedNums[leftPointer], sortedNums[rightPointer]])
//           leftPointer++;
//           rightPointer--;
//         }
//         else if(sum < 0)
//         {
//           leftPointer++;
//         }
//         else
//         {
//           rightPointer--;
//         }
//     }
//   }
//   let uniqueResult = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
//   // console.log(uniqueResult);
//   return uniqueResult;
    
// };

// const nums = [0,0,0];
// console.log(threeSum(nums)); // [[-1,-1,2],[-1,0,1]]

// 55. Jump Game
console.log(`Jump Game\n`);
var canJump = function(numbers) {
  const length = numbers.length;
  console.log(`length is: ${length}`);
  let index1 = numbers[1];
  console.log(`index 1 is; ${index1}`);
  if(index1 === length -1) return true;
  else{
    return false;
  }
    
};
const nums = [2,3,1,1,4];;
console.log(canJump(nums)); // true