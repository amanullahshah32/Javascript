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

// // 55. Jump Game
// console.log(`Jump Game\n`);
// var canJump = function (numbers) {
//   let arrLength = numbers.length;
//   if (numbers[arrLength - 1] === 0 && arrLength > 1) {
//     numbers.pop();
//     arrLength--;
//     // arrLength === 0? true : false;
//   }
//   if (numbers.length === 1 && numbers[0] >= 0) return true;

//   let curValue = numbers[0];
//   let valueItCanJump = [];

//   for (let index = 1; index <= curValue; index++) {
//     if (index >= arrLength) break;

//     const jumpToIndex = index + numbers[index];
//     console.log(`jumpToIndex: ${jumpToIndex}`);

//     valueItCanJump.push(jumpToIndex);
//   }
//   const result = Math.max(...valueItCanJump) >= arrLength - 1 ? true : false;
//   return result;
// };
// // const nums = [3, 2, 1, 0, 4];
// // const nums = [1,2];
// // const nums = [2, 0];
// const nums = [0];
// // const nums = [1,1,1,0];
// console.log(canJump(nums)); // true

// 128. Longest Consecutive Sequence
console.log(`Longest Consecutive Sequence\n`);

var longestConsecutive = function (nums) {
  let sortedNums = new Set(nums.sort((a, b) => a - b));
  sortedNums = Array.from(sortedNums);
  console.log(`sortedNums: ${sortedNums}`);

  if (sortedNums.length === 0) return 0;
  if (sortedNums.length === 1) return 1;

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1] - 1) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = 1;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
  }

  console.log(`maxLength: ${maxLength}`);
  return maxLength;
};

// const numbers = [100,4,200,1,3,2];
const numbers = [1, 2, 6, 7, 8];
console.log(longestConsecutive(numbers)); // 4
