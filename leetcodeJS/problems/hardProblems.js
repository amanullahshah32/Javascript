'use-strict';

// 4. Median of Two Sorted Arrays
console.log(`Problem 4: Median of Two Sorted Arrays`);

const findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a,b) => a-b);
    let len = merged.length;
    if ( len % 2 !==0)
    {
        return merged[Math.floor(len/2)];
    }
    else{
        const midElement = (merged[len/2] + merged[(len/2) - 1]) / 2;
        return midElement;
    }
    
};

const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // 2.5